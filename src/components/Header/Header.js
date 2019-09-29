import React, { Component } from 'react';
import logo from '../../logo.svg';

class Header extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Ariaaaa</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}
export default Header;
