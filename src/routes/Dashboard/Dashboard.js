import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import "../SignUp.css";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import FirebaseApp from '../../libraries/firebase'
import Header from '../../components/Header/Header'
import "./Dashboard.css"

class Dashboard extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Header/>
        <Container component="main" maxWidth="xs">
          <Grid container  justify="space-evenly">
            <TextField/>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="submit"
            >
              Add
            </Button>
          </Grid>
        </Container>
      </div>
    )
  }
}
export default Dashboard;
