import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

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
        <TextField/>
      </div>
    )
  }
}

export default Item;
