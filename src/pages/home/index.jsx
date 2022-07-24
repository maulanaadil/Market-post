import React, { useState } from 'react';
import { SidebarCreatePost, MainLayout, PostTable } from '@modules';
import { Button, Spinner } from '@components';

import tableData from '@utils/data/table-data';

import './index.scss';

export default function HomePage() {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [postData] = useState([...tableData]);

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
        <PostTable data={postData} rowsPerPage={6} />
      </MainLayout>
    </>
  );
}
