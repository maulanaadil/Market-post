import React, { useState } from 'react';
import { SidebarCreatePost, MainLayout } from '@modules';

export default function HomePage() {
  const [showSidebarPost, setShowSidebarPost] = useState(false);
  return (
    <>
      <MainLayout>
        <SidebarCreatePost
          show={showSidebarPost}
          setShow={setShowSidebarPost}
        />
        {/* Table Goes Here! */}
      </MainLayout>
    </>
  );
}
