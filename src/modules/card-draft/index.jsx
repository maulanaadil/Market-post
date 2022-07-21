import React from 'react';
import Button from '../../components/button';
import { iconTypes } from '../../components/icon';
import Card from './components/card';
import DraftFilter from './components/filter';

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
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
