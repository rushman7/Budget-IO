import React from 'react';
import { connect } from 'react-redux';
import { startGoogleLogin, startFacebookLogin, startGithubLogin } from '../actions/auth';

const Login = ({ startGoogleLogin, startFacebookLogin, startGithubLogin }) => (
  <div>
    <button onClick={startGoogleLogin}>Login Google</button>
    <button onClick={startFacebookLogin}>Login Facebook</button>
    <button onClick={startGithubLogin}>Login Github</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startGoogleLogin: () => dispatch(startGoogleLogin()),
  startFacebookLogin: () => dispatch(startFacebookLogin()),
  startGithubLogin: () => dispatch(startGithubLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);