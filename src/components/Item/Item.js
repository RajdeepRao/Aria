import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import addIcon from "../../assets/add.svg"
import clearIcon from "../../assets/clear.svg"
import "./Item.css"

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({term: event.target.value});
    console.log({term: event.target.value})
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div>
        <form className="items" onSubmit={(e) => {
          e.preventDefault()
          this.formController()
        }}>
          <TextField/>
          <TextField className="expires"/>
          <button className="AddButton">
            <img src={addIcon}/>
          </button>
          <button className="AddButton">
            <img src={clearIcon}/>
          </button>
        </form>
      </div>
    )
  }
}

export default Item;
