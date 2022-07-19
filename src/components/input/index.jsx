import React from 'react';
import propTypes from 'prop-types';

import './index.scss';

export default function Input(props) {
  const className = [props.className];

  const checkElementRender = (element) => {
    if (element === 'input') {
      return (
        <input
          placeholder={props.placeholder}
          name={props.name}
          className={`input ${className.join(' ')}`}
          style={props.style}
          onChange={props.handleChange}
          {...props}
        />
      );
    } else if (element === 'textArea') {
      return (
        <textarea
          placeholder={props.placeholder}
          name={props.name}
          className={`input ${className.join(' ')}`}
          style={props.style}
          onChange={props.handleChange}
          {...props}
        />
      );
    }
  };

  return (
    <div className='input-container'>
      {props.label && (
        <label htmlFor={props.label} className='input-label'>
          {props.label}
        </label>
      )}
      {checkElementRender(props.element)}
      {props.children}
    </div>
  );
}

Input.propTypes = {
  element: propTypes.oneOf(['input', 'textArea']).isRequired,
  placeholder: propTypes.string.isRequired,
  className: propTypes.string,
  style: propTypes.string,
  label: propTypes.string.isRequired,
  children: propTypes.node,
  handleChange: propTypes.func.isRequired,
};
