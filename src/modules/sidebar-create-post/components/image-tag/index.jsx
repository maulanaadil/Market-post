import React from 'react';

import Icon, { iconTypes } from '@components/icon';

import './index.scss';

export default function ImageTag({
  id,
  img,
  handleDelete,
  handleChange,
  handleZoom,
}) {
  return (
    <div className='image'>
      <img src={img} />
      <div className='option-container'>
        <p>{id}</p>
        <Icon type={iconTypes.eye} handleClick={handleZoom} />
        <label htmlFor='change-image'>
          <Icon type={iconTypes.pen} />
        </label>
        <input
          type={`file`}
          name='image'
          id='change-image'
          hidden
          accept='image/*'
          onChange={handleChange}
        />
        <Icon type={iconTypes.trash} handleClick={handleDelete} />
      </div>
    </div>
  );
}
