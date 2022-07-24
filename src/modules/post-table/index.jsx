import React from 'react';
import FilterButton from './components/filter-button';
import SearchButton from './components/search-button';
import TableRow from './components/table-row';
import listPost from './data/data.js';

import './index.scss';

export default function PostTable(props) {
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
          <thead>
            <tr>
              <th>Caption</th>
              <th>Date</th>
              <th>Status</th>
              <th>Likes</th>
              <th>Comments</th>
              <th>Share</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listPost.map((post, id) => {
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
    </div>
  );
}
