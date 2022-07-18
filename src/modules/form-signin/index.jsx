import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from '@assets/images/logo.png';
import { Input, Button } from '@components';
import Checkbox from './components/checkbox';

import './index.scss';

export default function FormSignIn(props) {
  return (
    <div className='container-form'>
      <img src={Logo} alt='Market Project Logo' className='logo-form' />
      <form className='wrapper-form' onSubmit={props.onHandleSubmit}>
        <h2 className='title-form'>Login Account</h2>
        <Input
          type='email'
          element='input'
          placeholder='Input your email'
          label='Email'
        />
        <Input
          type='password'
          element='input'
          placeholder='Input your password'
          label='Password'
        />
        <div className='wrapper-checkbox'>
          <Checkbox label={`Remember Me`} />
          <Link to='/forgot-password' className='txt-forgot-password'>
            Forgot password?
          </Link>
        </div>
        <Button type='submit' isPrimary isBlock>
          Login
        </Button>
      </form>
    </div>
  );
}

FormSignIn.proptypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};
