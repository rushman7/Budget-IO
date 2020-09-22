import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout }) => (
  <header>
    <div className="header_container">
      <div className="content-container">
        <div className="header_content">
          <Link to="/home" className="header_title">
            <h1>Budget IO</h1>
          </Link>
          <button className="in_app_button" onClick={startLogout}>Logout</button>
        </div>
      </div>
    </div>
  </header>
)

const MapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, MapDispatchToProps)(Header);