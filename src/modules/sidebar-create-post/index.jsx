import React, { useEffect, useState } from 'react';
import Button from '../../components/button';

import { iconTypes } from '../../components/icon';

import './index.scss';
import InputPostFor from './components/input/post-for';
import InputPostCaption from './components/input/post-caption';
import AttachImage from './components/input/attach-image';

export default function SidebarCreatePost() {
  const [location, setLocation] = useState('Select your location');

  function handleClose() {
    console.log('handleClose');
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleLocation() {
    let key = Math.floor(Math.random() * 10);
    switch (key) {
      case 0:
        return setLocation('Jatinangnor');
      case 1:
        return setLocation('Bandung');
      case 2:
        return setLocation('Bogor');
      case 3:
        return setLocation('Jakarta');
      case 4:
        return setLocation('Dipatiukur');
      case 5:
        return setLocation('Dago');
      case 6:
        return setLocation('Surabaya');
      case 7:
        return setLocation('Yogyakarta');
      case 8:
        return setLocation('Bogor');
      case 9:
        return setLocation('Depok');
      default:
        return setLocation(
          'Mount Tangkuban Parahu Lembang, Bandung, West Java'
        );
    }
  }

  return (
    <div className='container-create-post'>
      <div className='close-layer-create-post' onClick={handleClose}></div>
      <form onSubmit={handleSubmit} className='create-post'>
        <div className='box'>
          <div className='wrapper'>
            <div className='header'>
              <div className='title-group'>
                <h1 className='title'>Create Post</h1>
                <p className='desc'>You can post for Instagram and Facebook</p>
              </div>
              <div>
                <Button
                  type={'button'}
                  icon={iconTypes.close}
                  isBlock
                  className={'close-btn'}
                  onClick={handleClose}
                />
              </div>
            </div>

            <div className='form-post'>
              <InputPostFor />

              <div className='post-caption'>
                <InputPostCaption
                  handleChange={() => {}}
                  handleLocation={handleLocation}
                  placeholder={location}
                />
              </div>

              <div className='attach-images'>
                <AttachImage />
              </div>

              <div className='publish-option'></div>
            </div>
          </div>
        </div>
        <div className='publish-box'>
          <Button type={'submit'} isPrimary className={'btn-publish'}>
            Publish Post
          </Button>
        </div>
      </form>
    </div>
  );
}
