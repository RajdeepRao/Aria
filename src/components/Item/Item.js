import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import clearIcon from "../../assets/clear.svg"
import "./Item.css"

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <form className="items" onSubmit={(e) => {
          e.preventDefault()
          this.props.remove(this.props.itemId)
        }}>
          <TextField label={this.props.label} value={this.props.itemValue} name="item" />
          <TextField label={this.props.label} value={this.props.expiresValue} name="expires" className="expires"/>
          <button type="submit" className="ModifyButton">
            <img className="image" src={clearIcon}/>
          </button>
        </form>
      </div>
    )
  }
}

export default Item;
