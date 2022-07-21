import { useState } from 'react';

import Icon, { iconTypes } from '../../../../components/icon';

import './index.scss';

export default function DraftFilter() {
  const [filter, setFilter] = useState('Last Modified Newest');
  return (
    <div className="draft-filter">
      <div className='label'><div><Icon type={iconTypes.draft_filter}/></div><div>Filter</div></div>
      <button type="button" className="filter-btn">
        <div>{filter}</div>
        <div>{<Icon type={iconTypes.draft_filter_dropdown} />}</div>
      </button>
    </div>
  );
}
