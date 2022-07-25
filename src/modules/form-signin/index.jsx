import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Logo from '@assets/images/logo.png';
import { Input, Button } from '@components';
import Checkbox from './components/checkbox';

import { useDataStore } from '@service/zustands';

import './index.scss';
import { defaultFormSignInFields } from './utils';

export default function FormSignIn() {
  const [formFields, setFormFields] = useState(defaultFormSignInFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const onHandleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();

    if (email === 'admin@market.com' && password === 'password') {
      alert('success');
      useDataStore.getState().setAuthUser('authenticated');
      navigate('/', { replace: true });
    } else {
      alert('Invalid account!');
    }
  };

  return (
    <div className='container-form-signin'>
      <img src={Logo} alt='Market Project Logo' className='logo-form' />
      <form className='wrapper-form' onSubmit={onHandleSubmit}>
        <h2 className='title-form'>Login Account</h2>
        <Input
          type='email'
          element='input'
          placeholder='Input your email'
          label='Email'
          name='email'
          value={email}
          handleChange={onHandleChange}
          required
        />
        <Input
          type='password'
          element='input'
          placeholder='Input your password'
          label='Password'
          name='password'
          value={password}
          handleChange={onHandleChange}
          required
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
