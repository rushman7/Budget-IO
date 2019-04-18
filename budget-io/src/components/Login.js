import React from 'react';
import { connect } from 'react-redux';
import { startGoogleLogin, startFacebookLogin } from '../actions/auth';

const Login = ({ startGoogleLogin, startFacebookLogin }) => (
  <div>
    <button onClick={startGoogleLogin}>Login Google</button>
    <button onClick={startFacebookLogin}>Login Facebook</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startGoogleLogin: () => dispatch(startGoogleLogin()),
  startFacebookLogin: () => dispatch(startFacebookLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);