import React, { useState } from 'react';

import CardDraft from '@modules/card-draft';
import MainLayout from '@modules/layouts/main-layout';
import { SidebarCreatePost } from '@modules';

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
