import React from 'react';

import { FormSignUp, GreetingsBanner } from '@modules';
import './index.scss';

export default function SignInPage() {
  return (
    <>
      <div className='signup-form-container'>
        <FormSignUp
          onHandleSubmit={() => {
            alert('signup...');
          }}
        />
      </div>
      <div className='signup-greetings-container'>
        <GreetingsBanner
          title={`Hello`}
          description={`Start Jouney with us\n in Social Media Analytics and Management\n Tool for effective marketing`}
          page={`signup`}
        />
      </div>
    </>
  );
}
