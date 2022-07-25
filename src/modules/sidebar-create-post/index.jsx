import React, { useState } from 'react';

import './index.scss';

import { iconTypes } from '@components/icon';
import Button from '@components/button';
import InputPostFor from './components/input/post-for';
import InputPostCaption from './components/input/post-caption';
import AttachImage from './components/input/attach-image';
import PublishOption from './components/publish-option';

import { handleLocation, optionValues } from './utils';
import ButtonCreatePost from './components/button-create-post';
import { CreatePostConsumer, CreatePostProvider } from './context';

export default function SidebarCreatePost({ show, setShow }) {
  const [activePublish, setActivePublish] = useState('publish');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    show && (
      <CreatePostProvider>
        <div className="container-create-post">
          <div
            className="close-layer-create-post"
            onClick={() => setShow(false)}
          ></div>
          <form onSubmit={handleSubmit} className="create-post">
            <div className="box">
              <div className="wrapper">
                <div className="header">
                  <div className="title-group">
                    <h1 className="title">Create Post</h1>
                    <p className="desc">
                      You can post for Instagram and Facebook
                    </p>
                  </div>
                  <div>
                    <Button
                      type={'button'}
                      icon={iconTypes.close}
                      isBlock
                      className={'close-btn'}
                      onClick={() => setShow(false)}
                    />
                  </div>
                </div>

                <div className="form-post">
                  <CreatePostConsumer>
                    {({ postFor, setPostFor }) => {
                      return <InputPostFor postFor={postFor} setPostFor={setPostFor} />;
                    }}
                  </CreatePostConsumer>

                  <div className="post-caption">
                    <CreatePostConsumer>
                      {({ setPostCaption, location, setLocation }) => {
                        return (
                          <InputPostCaption
                            handleChange={(e) => {
                              setPostCaption(e.target.value);
                            }}
                            handleLocation={() => handleLocation(setLocation)}
                            placeholder={
                              location === ''
                                ? 'Select your location'
                                : location
                            }
                          />
                        );
                      }}
                    </CreatePostConsumer>
                  </div>

                  <div className="attach-images">
                    <CreatePostConsumer>
                      {({ images, setImages }) => {
                        return (
                          <AttachImage file={images} setFile={setImages} />
                        );
                      }}
                    </CreatePostConsumer>
                  </div>

                  <div className="publish-option">
                    <PublishOption
                      optionValues={optionValues}
                      activePublish={activePublish}
                      setActivePublish={setActivePublish}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="publish-box">
              <ButtonCreatePost buttonType={activePublish} />
            </div>
          </form>
        </div>
      </CreatePostProvider>
    )
  );
}
