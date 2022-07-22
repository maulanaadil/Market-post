import React, { useState } from 'react';

import { SidebarCreatePost, CardDraft, MainLayout } from '@modules';

export default function DraftPage() {
  const [showCreatePost, setShowCreatePost] = useState(false);

  const onHandlerCreatePostSide = () => {
    setShowCreatePost(true);
  };

  return (
    <>
      <SidebarCreatePost show={showCreatePost} setShow={setShowCreatePost} />
      <MainLayout>
        <CardDraft createPostSideHandler={onHandlerCreatePostSide} />
      </MainLayout>
    </>
  );
}
