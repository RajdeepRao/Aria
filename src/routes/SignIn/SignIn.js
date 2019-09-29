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

class SignIn extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
    this.SignIn = this.SignIn.bind(this);
  }

  SignIn = (formState) => {
    console.log(formState)
    console.log(FirebaseApp.name)
    let auth = FirebaseApp.auth()
    auth.signInWithEmailAndPassword(
      formState.username,
      formState.password
    ).then(function(user) {
      var user = auth.currentUser;
      window.location.href="/dashboard";
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <Header/>
        <Container component="main" maxWidth="xs">
          <Grid container>
            <AuthForm authenticate={this.SignIn} formType='SignIn'/>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    )
  }
}
export default SignIn;
