import React, { useState } from 'react';
import { SidebarCreatePost, MainLayout, PostTable } from '@modules';
import { Button } from '@components';

import './index.scss';

export default function HomePage() {
  const [showCreatePost, setShowCreatePost] = useState(false);

  const onHandlerCreatePostSide = () => {
    setShowCreatePost(true);
  };
  return (
    <>
      <MainLayout>
        <SidebarCreatePost show={showCreatePost} setShow={setShowCreatePost} />
        <div className='title-wrapper'>
          <div>
            <h1>Post</h1>
            <p>You can set post information here.</p>
          </div>

          <div>
            <Button
              type={`button`}
              isSecondary
              isLarge
              onClick={onHandlerCreatePostSide}
              isHasShadow
            >
              Create a post
            </Button>
          </div>
        </div>
        <PostTable />
      </MainLayout>
    </>
  );
}
