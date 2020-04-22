import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import addIcon from "../../assets/add.svg"
import "./ItemForm.css"

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item:'',
      expires:'',
      itemId:''  
    };
  }

  onChange = (event) => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value,
      itemId: this.props.itemId,
    });
  }

  render() {

    return (
      <div>
        <form className="items" onSubmit={(e) => {
          e.preventDefault()
          this.props.func(this.state)
          this.setState({
            item:'',
            expires:'',
          })
        }}>
          <TextField label={this.props.label} onChange={this.onChange} value={this.state.item} name="item" />
          <TextField label={this.props.label} onChange={this.onChange} value={this.state.expires} name="expires" className="expires"/>
          <button type="submit" className="ModifyButton">
            <img className="image" src={addIcon}/>
          </button>
        </form>
      </div>
    )
  }
}

export default Item;
