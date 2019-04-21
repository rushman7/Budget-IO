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
  <div>
    <button onClick={startGoogleLogin}>Login Google</button>
    <button onClick={startFacebookLogin}>Login Facebook</button>
    <button onClick={startGithubLogin}>Login Github</button>
    <form onSubmit={startUserLogin}>
      <input type="text" placeholder="Email" value={startUserLogin.email}/>
      <input type="text" placeholder="Password" value={startUserLogin.pass}/>
      <button>Login</button>
    </form>
    <Link to="/signup">
      <button>Register</button>
    </Link>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startGoogleLogin: () => dispatch(startGoogleLogin()),
  startFacebookLogin: () => dispatch(startFacebookLogin()),
  startGithubLogin: () => dispatch(startGithubLogin()),
  startUserLogin: (email, pass) => dispatch(startUserLogin(email, pass))
});

export default connect(undefined, mapDispatchToProps)(Login);