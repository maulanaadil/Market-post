import React, { useState } from 'react';
import { SidebarCreatePost, MainLayout } from '@modules';
import CalendarTime from '../../modules/sidebar-create-post/components/calendar-time';

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
        <CalendarTime />
      </MainLayout>
    </>
  );
}
