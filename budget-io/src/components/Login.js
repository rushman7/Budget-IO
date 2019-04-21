import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  startGoogleLogin, 
  startFacebookLogin, 
  startGithubLogin, 
  startUserLogin 
} from '../actions/auth';

const Login = ({ 
  startGoogleLogin, 
  startFacebookLogin, 
  startGithubLogin, 
  startUserLogin
}) => (
  <div className="login_shell">
    <div className="login_container">
      <img className="img-logo" src="https://i.imgur.com/94GQoWA.png" alt="logo"/>
      <form className="login_form" onSubmit={startUserLogin}>
        <input className="login_input" type="email" placeholder="Email" value={startUserLogin.email}/>
        <input className="login_input" type="password" placeholder="Password" value={startUserLogin.pass}/>
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
);

const mapDispatchToProps = (dispatch) => ({
  startGoogleLogin: () => dispatch(startGoogleLogin()),
  startFacebookLogin: () => dispatch(startFacebookLogin()),
  startGithubLogin: () => dispatch(startGithubLogin()),
  startUserLogin: (email, pass) => dispatch(startUserLogin(email, pass))
});

export default connect(undefined, mapDispatchToProps)(Login);