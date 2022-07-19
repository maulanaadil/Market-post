import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './index.scss';

export default function GreetingsBanner(props) {
  return (
    <div className='container-greetings'>
      <h1 className='greeting-title'>{props.title}</h1>
      <div className='greeting-bar'></div>
      <h4 className='greeting-description'>{props.description}</h4>
      <div className='wrapper-greeting-not-have-account'>
        <p>Don't have an account?</p>
        {props.page === 'signin' ? (
          <Link to='/signup' className='greeting-create-account'>
            Create account
          </Link>
        ) : (
          <Link to='/signin' className='greeting-create-account'>
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

GreetingsBanner.proptypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
