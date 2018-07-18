import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import '../styles/home.css';

import LoginForm from './login-form';

export function LandingPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home" role='main'>
      <div className="members">
        <hgroup>
          <h2>Welcome... Swedish Learners</h2>
          <h3>Log In Below To Continue Learning</h3>
        </hgroup>
        <LoginForm />
      </div>
      <div className="new-members">
        <h3>Not a member? Sign up below.</h3>
        <Link to="/register" className='register-link'>Register</Link>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
