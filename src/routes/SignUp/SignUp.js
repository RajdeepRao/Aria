import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import "../SignUp.css";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import FirebaseApp from '../../libraries/firebase'
import AuthForm from '../../components/AuthForm/AuthForm'
import Header from '../../components/Header/Header'

class SignUp extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
    this.SignUp = this.SignUp.bind(this);
  }

  SignUp = (formState) => {
    console.log(formState)
    console.log(FirebaseApp.name)
    let auth = FirebaseApp.auth()
    auth.createUserWithEmailAndPassword(
      formState.username,
      formState.password
    ).then(function(user) {
      var user = auth.currentUser;
      console.log(user)
    }).catch(function(error) {
      console.log(error)
    });
  }

  render() {
    return (
      <div>
        <Header/>
        <Container component="main" maxWidth="xs">
          <Grid container>
            <AuthForm authenticate={this.SignUp} formType='SignUp'/>
          </Grid>
        </Container>
      </div>
    )
  }
}
export default SignUp;
