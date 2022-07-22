import React from 'react';
import Button from '@components/button';
import { iconTypes } from '@components/icon';
import Card from './components/card';
import DraftFilter from './components/filter';
import draftData from './data/draft-data';

import './index.scss';

export default function Draft() {
  return (
    <div className="draft">
      <div className="draft-container">
        <div className="draft-header">
          <h1>Drafts</h1>
          <p>To save posts before sending to Instagram and Facebook</p>
        </div>

        <DraftFilter />

        <div className="draft-body">
          <Button
            type="button"
            icon={iconTypes.draft_create}
            className={'btn-create-draft'}
            isBlock
            isLarge
            isOutline
          >
            Create Draft
          </Button>
          <div className="draft-list">
            {draftData.map((draft) => {
              return (
                <Card
                  key={draft.id}
                  id={draft.id}
                  imgUrl={draft.imgUrl}
                  sosmed={draft.sosmed}
                  name={draft.name}
                  username={draft.username}
                  captionValue={draft.caption}
                  author={draft.author}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
