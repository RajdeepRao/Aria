import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import "../SignUp.css";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import FirebaseApp from '../../libraries/firebase'
import Item from '../../components/Item/Item'
import Header from '../../components/Header/Header'

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
          <Grid container>
            <Item/>
          </Grid>
        </Container>
      </div>
    )
  }
}
export default Dashboard;
