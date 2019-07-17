import React from 'react';
import PropTypes from 'prop-types';

function TopNav(props) {
  const logged_out_nav = (
    <ul>
      <li onClick={() => props.display_form('login')}>Login</li>
      <li onClick={() => props.display_form('signup')}>Signup?</li>
    </ul>
  );

  const logged_in_nav = (
    <ul>
      <li onClick={props.handle_logout}>logout</li>
    </ul>
  );
  return (
    <div>
      <div className="Top-nav" >
        <h1>Fridgenerate</h1> 
      </div> 
      <div>
      {props.logged_in ? logged_in_nav : logged_out_nav}
      </div>
    </div>
  )
}

export default TopNav;

TopNav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};