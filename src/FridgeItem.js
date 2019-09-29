import React, { Component } from 'react';

class FridgeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({term: event.target.value});
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
        <div className="header">
          <form onSubmit={this.onSubmit}>
            <input placeholder="Item" value={this.state.term} onChange={this.onChange}/>
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    )
  }
}

export default FridgeItem;
