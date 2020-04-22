import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Header.css';

class Header extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="App-header HeaderMargin">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Ariaaaa</h2>
        </div>
      </div>
    )
  }
}
export default Header;
