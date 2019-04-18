import React from 'react';
import { connect } from 'react-redux';
import { startGoogleLogin, startFacebookLogin } from '../actions/auth';

const Login = ({ startGoogleLogin, startFacebookLogin }) => (
  <div>
    <input 
      type="text"
      placeholder="Username"
    />
    <input 
      type="text"
      placeholder="Password"
    />
    <br />
    <button onClick={startGoogleLogin}>Login Google</button>
    <button onClick={startFacebookLogin}>Login Facebook</button>
    <button>Register</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startGoogleLogin: () => dispatch(startGoogleLogin()),
  startFacebookLogin: () => dispatch(startFacebookLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);