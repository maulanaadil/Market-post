import React from 'react';
import Proptypes from 'prop-types';

import { Input } from '@components';
import Icon, { iconTypes } from '@components/icon';

import './index.scss';

export default function InputPostCaption({
  handleChange,
  handleLocation,
  placeholder,
}) {
  return (
    <>
      <div className='label-input'>Post Caption</div>
      <Input
        element={`textArea`}
        placeholder={`Type something...`}
        handleChange={handleChange}
        className={`text-area`}
      />
      <div
        className='select-location'
        id='container-select-location'
        onClick={handleLocation}
      >
        <Icon type={iconTypes.location} />
        <p id='select-location'>{placeholder}</p>
      </div>
    </>
  );
}

InputPostCaption.propTypes = {
  handleChange: Proptypes.func.isRequired,
  handleLocation: Proptypes.func.isRequired,
};
