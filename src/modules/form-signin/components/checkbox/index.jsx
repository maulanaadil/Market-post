import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export default function Checkbox(props) {
  return (
    <div className='container-checkbox'>
      <input
        type='checkbox'
        name='checkbox'
        className='checkbox-form'
        {...props}
      />
      <label htmlFor='checkbox'>{props.label}</label>
    </div>
  );
}

Checkbox.proptypes = {
  label: PropTypes.string.isRequired,
};
