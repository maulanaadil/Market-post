import React, { useState } from 'react';
import { SidebarCreatePost, MainLayout } from '@modules';
import MainLayout from '@modules/layouts/main-layout';
import PostTable from '../../modules/post-table';

export default function HomePage() {
  const [showSidebarPost, setShowSidebarPost] = useState(false);
  return (
    <>
      <MainLayout>
        <SidebarCreatePost
          show={showSidebarPost}
          setShow={setShowSidebarPost}
        />
        <PostTable />
      </MainLayout>
    </>
  );
}
