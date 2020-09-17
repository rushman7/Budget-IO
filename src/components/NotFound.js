import React from 'react';
import { Link } from 'react-router-dom'

const NotFound = () => (
  <div className="notfound_page">
    <h2 className="notfound_txt">How did you get here?</h2>
    <Link to="/home" className="login_btn">Go Back</Link>
  </div>
)

export default NotFound;