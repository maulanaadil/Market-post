import React from 'react';
import Button from '../../components/button';

import Icon, { iconTypes } from '../../components/icon';
import Input from '../../components/input';

import './index.scss';
import InputPostFor from './components/input/post-for';

export default function SidebarCreatePost() {

  function handleClose() {
    console.log('handleClose');
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="container-create-post">
      <div className="close-layer-create-post" onClick={handleClose}></div>
      <form onSubmit={handleSubmit} className="create-post">
        <div className="box">
          <div className="wrapper">
            <div className="header">
              <div className="title-group">
                <h1 className="title">Create Post</h1>
                <p className="desc">You can post for Instagram and Facebook</p>
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

            <div className="form-post">
              <InputPostFor />

              <div className="post-caption"></div>

              <div className="attach-images"></div>

              <div className="publish-option"></div>
            </div>
          </div>
        </div>
        <div className="publish-box">
          <Button type={'submit'} isPrimary className={'btn-publish'}>
            Publish Post
          </Button>
        </div>
      </form>
    </div>
  );
}
