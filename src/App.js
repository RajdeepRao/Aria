import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './routes/SignUp/SignUp'
import SignIn from './routes/SignIn/SignIn'
import Dashboard from './routes/Dashboard/Dashboard'
import FirebaseApp from './libraries/firebase'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/" component={SignIn} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Router>
      </div>
    );
  }
}

export default App;
