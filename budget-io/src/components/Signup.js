import React from 'react';
import { connect } from 'react-redux';
import { startUserCreate } from '../actions/auth';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      error: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  };

  onPasswordChange = (e) => {
      const password = e.target.value;
      this.setState(() => ({ password }));
  };

  onConfirmPasswordChange = (e) => {
      const confirmPassword = e.target.value;
      this.setState(() => ({ confirmPassword }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.password !== this.state.confirmPassword) {
      const error = 'Passwords did not match.'
      this.setState(() => ({ error }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit(this.state.email, this.state.password)
      this.props.history.push('/');
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {this.state.error && <p>{this.state.error}</p>}
          <input 
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.onEmailChange}/>
          <input 
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onPasswordChange}/>
          <input 
            type="password" 
            placeholder="Confirm password"
            value={this.state.confirmPassword}
            onChange={this.onConfirmPasswordChange}/>
          <button>Signup</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (dispatch) => ({
  onSubmit: (email, password) => dispatch(startUserCreate(email, password))
})

export default connect(undefined, mapStateToProps)(Signup);