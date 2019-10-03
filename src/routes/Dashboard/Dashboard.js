import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import "../SignUp.css";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import FirebaseApp from '../../libraries/firebase'
import * as firebase from 'firebase'; // import only storage instead of everythig
import Header from '../../components/Header/Header'
import Item from '../../components/Item/Item'
import "./Dashboard.css"
import Button from '@material-ui/core/Button';

class Dashboard extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  itemAdd = () => {

  }

  itemClear = () => {

  }


  submitController = () => {
    let db = firebase.firestore(FirebaseApp)
    let currentUser = FirebaseApp.auth().currentUser
    var docData = {
    stringExample: "Hello world!",

    }
    // db.collection("data").doc("one").set(docData).then(function() {
    //     console.log("Document successfully written!");
    // });
  }

  render() {
    return (
      <div>
        <Header/>
        <Item addFunc={() => this.itemAdd()} clearFunc={() => this.itemClear()}/>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="submitButton submit"
          onClick={this.submitController}
        >
          Submit
        </Button>
      </div>
    )
  }
}
export default Dashboard;
