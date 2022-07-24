import React, { useState } from 'react';
import FilterButton from './components/filter-button';
import SearchButton from './components/search-button';
import TableRow from './components/table-row';
import TableFooter from './components/table-footer';

import useTable from './utils';

import './index.scss';

export default function PostTable({ data, rowsPerPage }) {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

  return (
    <div className='post-table'>
      <div className='table-container'>
        <div className='filter-container'>
          <div className='filter-status'>
            <FilterButton filterType={'All'} label={'Post status: '} />
          </div>

          <div className='filter-time'>
            <FilterButton filterType={'Latest'} label={'Post time: '} />
          </div>

          <div className='filter-search'>
            <SearchButton placeholder={'Search feeds'} />
          </div>
        </div>

        <table className='table'>
          <thead className='table-head'>
            <tr>
              <th>Caption</th>
              <th>Date</th>
              <th>Status</th>
              <th>Likes</th>
              <th>Comments</th>
              <th>Shares</th>
              <th></th>
            </tr>
          </thead>
          <tbody className='table-body'>
            {slice.map((post, id) => {
              return (
                <TableRow
                  key={id}
                  caption={post.caption}
                  date={post.date}
                  status={post.status}
                  likes={post.likes}
                  comments={post.comments}
                  share={post.share}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </div>
  );
}
