import React, { useState } from 'react';

import './index.scss';

import { iconTypes } from '../../components/icon';
import Button from '../../components/button';
import InputPostFor from './components/input/post-for';
import InputPostCaption from './components/input/post-caption';
import AttachImage from './components/input/attach-image';
import PublishOption from './components/publish-option';

import { handleLocation, optionValues, renderButtonForm } from './utils';

export default function SidebarCreatePost() {
  const [location, setLocation] = useState('Select your location');
  const [activePublish, setActivePublish] = useState();

  function handleClose() {
    console.log('handleClose');
  }

  function handleSubmit(e) {
    e.preventDefault();
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
                  handleLocation={() => handleLocation(setLocation)}
                  placeholder={location}
                />
              </div>

              <div className='attach-images'>
                <AttachImage />
              </div>

              <div className='publish-option'>
                <PublishOption
                  optionValues={optionValues}
                  activePublish={activePublish}
                  setActivePublish={setActivePublish}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='publish-box'>{renderButtonForm(activePublish)}</div>
      </form>
    </div>
  );
}
