import React from 'react';

import { FormSignIn, GreetingsBanner } from '@modules';
import './index.scss';

export default function SignInPage() {
  return (
    <>
      <div className='signin-form-container'>
        <FormSignIn />
      </div>
      <div className='signin-greetings-container'>
        <GreetingsBanner
          title={`Welcome Back \nto\n Market Project`}
          description={`Login to keep connected with us`}
        />
      </div>
    </>
  );
}
