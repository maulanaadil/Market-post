import React from 'react';

import './index.scss';

export default function PublishOption({
  optionValues,
  activePublish,
  setActivePublish,
}) {
  return (
    <>
      <div className='label-publish'>Publish option</div>
      <div className='tabs'>
        <ul className='nav'>
          {optionValues.map((item) => (
            <li
              id={item.id}
              className={activePublish === item.id ? 'active' : ''}
              onClick={() => setActivePublish(item.id)}
              key={item.id}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
