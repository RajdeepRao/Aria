import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import "./AuthForm.scss";

class AuthForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  render() {
    return (
      <form className="form" noValidate onSubmit={(e) => {
        e.preventDefault()
        this.props.authenticate(this.state)
      }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(e) => {
              this.setState({
                username:e.target.value
              })
            }}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(e) => {
              this.setState({
                password:e.target.value
              })
            }}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
          >
            {this.props.formType === 'SignUp'? 'Sign Up': 'Log In'}
          </Button>
        </form>
    )
  }
}
export default AuthForm;
