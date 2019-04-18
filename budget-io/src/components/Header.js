import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout,  }) => (
  <header>
    <h1>Budget IO</h1>
    <NavLink exact to="/home" activeClassName="is-active">Home</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create</NavLink>
    <button onClick={startLogout}>Logout</button>
  </header>
)

const MapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, MapDispatchToProps)(Header);