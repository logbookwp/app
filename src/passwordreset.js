import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './signin.css';

import theme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { RaisedButton, TextField, FlatButton, Snackbar } from 'material-ui';

import firebase from 'firebase';

import Signin from './signin';

class PasswordReset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClick = (message) => {
    this.setState({
      open: true,
      message: message,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  style = {
    color: "#ffffff",
    textTransform: "none"
  };

  hint_style = {
    color: "rgba( 255, 255, 255, 0.4 )",
  };

  snackbar_style = {
    backgroundColor: "#ff0000"
  }

  sendemail = ( event ) => {
    const self = this;
    const email = document.getElementById( 'email' ).value;
    firebase.auth().sendPasswordResetEmail(email).catch(function(error) {
      self.handleClick(error.message)
    });
  }

  signin = ( event ) => {
    ReactDOM.render(<Signin />, document.getElementById('root'));
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div className="login">
          <div className="login-form">
            <h1><img src="./img/logo-white.png" alt="Speeeed" className="logo" /></h1>
            <form>
              <TextField id="email" type="email" hintText="Email" fullWidth={true} inputStyle={ this.style } hintStyle={ this.hint_style } />
              <RaisedButton className="signin" label="Send password reset email" primary={true} fullWidth={true} onClick={ this.sendemail } />
            </form>
            <p className="small center"><FlatButton label="Sign in" labelStyle={ this.style } onClick={ this.signin } /></p>
          </div>
          <Snackbar
            open={ this.state.open }
            message={ this.state.message }
            autoHideDuration={ 4000 }
            onRequestClose={ this.handleRequestClose }
            bodyStyle={ this.snackbar_style }
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default PasswordReset;
