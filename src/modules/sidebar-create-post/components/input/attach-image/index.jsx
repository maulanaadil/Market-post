import React, { useState } from 'react';

import Icon, { iconTypes } from '@components/icon';

import ImageTag from '../../image-tag';

import './index.scss';

export default function AttachImage({file, setFile}) {
  const onImageChange = (e) => {
    let ImagesArray = Object.entries(e.target.files).map((e) =>
      URL.createObjectURL(e[1])
    );
    setFile([...file, ...ImagesArray]);
  };

  const onHandlerDeleteImage = (e) => {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
  };

  return (
    <>
      <div className='label-input'>Attach Image</div>
      <div className='container-input-image'>
        <div className='wrapper-image'>
          <label className='add-image' htmlFor='upload-image'>
            <Icon type={iconTypes.add} />
          </label>
          <input
            type={`file`}
            name='image'
            id='upload-image'
            hidden
            accept='image/*'
            onChange={onImageChange}
            multiple
          />
          {file.map((item, index) => (
            <ImageTag
              id={index + 1}
              img={item}
              key={item}
              handleZoom={() => {}}
              handleChange={(e) => {
                // TODO: Stuck anjir ini gimana cara change value dari gambar tersebut.
                console.log(e.target.files[0].name);
                console.log(item);
              }}
              handleDelete={() => {
                onHandlerDeleteImage(index);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
