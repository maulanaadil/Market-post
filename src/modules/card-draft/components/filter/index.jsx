import { useState } from 'react';

import Icon, { iconTypes } from '@components/icon';
import filterData from '../../data/filter-data';

import './index.scss';

export default function DraftFilter() {
  const [filter, setFilter] = useState({
    value: 'lmn',
    label: 'Last Modified Newest',
  });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="draft-filter">
        <div className="label">
          <div>
            <Icon type={iconTypes.draft_filter} />
          </div>
          <div>Filter</div>
        </div>
        <div className="filter-container">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="filter-btn"
          >
            <div>{filter.label}</div>
            <div>{<Icon type={iconTypes.draft_filter_dropdown} />}</div>
          </button>
          {isOpen && (
            <div className="filter-list">
              {filterData.map((filter, index) => {
                return (
                  <FilterItem
                    key={index}
                    handleClick={() => {
                      setFilter(filter);
                      setIsOpen(false);
                    }}
                    label={filter.label}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export function FilterItem({ handleClick, label }) {
  return (
    <div onClick={handleClick} className="filter-item">
      {label}
    </div>
  );
}
