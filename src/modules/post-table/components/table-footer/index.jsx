import React, { useEffect } from 'react';

import Icon, { iconTypes } from '@components/icon';

import './index.scss';

export default function TableFooter({ range, setPage, page, slice }) {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);

  const prevPageClickHandler = (page) => {
    const minPage = Math.min.apply(null, range);

    if (page === minPage) return;
    setPage(page - 1);
  };

  const nextPageClickHandler = (page) => {
    const maxPage = Math.max.apply(null, range);

    if (page === maxPage) return;
    setPage(page + 1);
  };

  return (
    <div className='table-footer-wrapper'>
      <div
        className='table-footer-pagination'
        onClick={() => prevPageClickHandler(page)}
      >
        <Icon type={iconTypes.nextTable} />
      </div>
      <div className='table-footer-body'>
        {range.map((el, index) => (
          <button
            key={index}
            className={`table-footer-content ${page === el ? 'active' : ''}`}
            onClick={() => setPage(el)}
          >
            {el}
          </button>
        ))}
      </div>
      <div
        className='table-footer-pagination'
        onClick={() => nextPageClickHandler(page)}
      >
        <Icon type={iconTypes.prevTable} />
      </div>
    </div>
  );
}
