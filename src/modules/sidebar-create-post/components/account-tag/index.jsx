import React from 'react';
import { Button } from '@components';

import { iconTypes } from '@components/icon';

import './index.scss';

const AccountTag = ({ id, logo, username, ...otherProps }) => {
  const handleClick = (e) => {
    e.stopPropagation();
  };

  const removeAccount = () => {
    console.log(`remove ${id}`);
  };

  return (
    <div className='user-tag' onClick={handleClick}>
      <img src={logo} alt={`logo ${username}`} className='social-media-logo' />
      <p>{username}</p>
      <Button
        type='button'
        icon={iconTypes.close}
        onClick={removeAccount}
        className='btn-remove'
        {...otherProps}
      />
    </div>
  );
};

export default AccountTag;
