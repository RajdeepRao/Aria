import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './containers/Login'
import SignUp from './routes/SignUp/SignUp'
import SignIn from './routes/SignIn/SignIn'
import FirebaseApp from './libraries/firebase'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/" component={SignIn} />
        </Router>
      </div>
    );
  }
}

export default App;
