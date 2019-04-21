import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  startGoogleLogin, 
  startFacebookLogin, 
  startGithubLogin, 
  startUserLogin 
} from '../actions/auth';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      error: '',
      email: '',
      password: ''
    }
  }

  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  };

  onPasswordChange = (e) => {
      const password = e.target.value;
      this.setState(() => ({ password }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.password) {
      const error = 'Please enter a password.'
      this.setState(() => ({ error }));
    } if (!this.state.email) {
      const error = 'Please enter a valid email.'
      this.setState(() =>  ({ error }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit(this.state.email, this.state.password)
    }
  };

  render() {
    return (
      <div className="login_shell">
        <div className="login_container">
          <img className="img-logo" src="https://i.imgur.com/94GQoWA.png" alt="logo"/>
          <form className="login_form" onSubmit={this.onSubmit}>
            {this.state.error && <p className="login_error">{this.state.error}</p>}
            <input 
              className="login_input"
              type="email" placeholder="Email" 
              value={this.state.email}
              onChange={this.onEmailChange}/>
            <input 
              className="login_input" 
              type="password" 
              placeholder="Password" 
              value={this.state.pass}
              onChange={this.onPasswordChange}/>
            <button className="login_button">Login</button>
          </form>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <button className="login_button">Register</button>
          </Link>
          <i className="fab fa-facebook-square fa-3x" onClick={startFacebookLogin}></i>
          <i className="fab fa-google fa-3x" onClick={startGoogleLogin}></i>
          <i className="fab fa-github fa-3x" onClick={startGithubLogin}></i>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startGoogleLogin: () => dispatch(startGoogleLogin()),
  startFacebookLogin: () => dispatch(startFacebookLogin()),
  startGithubLogin: () => dispatch(startGithubLogin()),
  onSubmit: (email, pass) => dispatch(startUserLogin(email, pass))
});

export default connect(undefined, mapDispatchToProps)(Login);