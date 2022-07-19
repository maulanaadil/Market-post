import React from 'react'
import Button from '../../../../components/button'

import { iconTypes } from '../../../../components/icon'
import instagramLogo from '@assets/logo/instagram.png'

import './index.scss';

const AccountTag = ({logo, username}) => {
  const handleClick = (e) => {
    e.stopPropagation();
  }

  const removeAccount = () => {
    console.log('remove')
  }

  return (
    <div className='user-tag' onClick={handleClick}>
      <img src={instagramLogo} alt="" className='social-media-logo'/>
      <p>{username}</p>
      <Button type='button' icon={iconTypes.close} onClick={removeAccount} className="btn-remove"/>
    </div>
  )
}

export default AccountTag