import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout,  }) => (
  <header>
    <div className="header_container">
      <h1 className="header_title">Budget IO</h1>
      <Link to="/home" activeclassName="is_active" className="header_btn">Home</Link>
      <Link to="/create" activeclassName="is_active" className="header_btn">Create</Link>
      <Link to="/" className="header_btn" onClick={startLogout}>Logout</Link>
    </div>
  </header>
)

const MapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, MapDispatchToProps)(Header);