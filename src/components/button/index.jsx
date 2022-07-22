import React from 'react';
import './index.scss';
import propTypes from 'prop-types';

import Icon from '../icon';

export default function Button(props) {
  const className = [props.className];

  if (props.isPrimary) className.push('btn-primary');
  if (props.isSecondary) className.push('btn-secondary');
  if (props.isOutline) className.push('btn-outline');
  if (props.isLarge) className.push('btn-lg');
  if (props.isSmall) className.push('btn-sm');
  if (props.isBlock) className.push('btn-block');
  if (props.isDisabled) className.push('btn-disabled');

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.type === 'link') {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={`btn ${className.join(' ')}`}
          style={props.style}
          target={props.target === '_blank' ? '_blank' : undefined}
          rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}
        >
          {props.icon && <Icon type={props.icon} />}
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={`btn ${className.join(' ')}`}
          style={props.style}
          onClick={onClick}
        >
          {props.icon && <Icon type={props.icon} />}
          {props.children}
        </Link>
      );
    }
  }

  return (
    <button
      type={props.type}
      className={`btn ${className.join(' ')}`}
      onClick={onClick}
    >
      {props.icon && <Icon type={props.icon} />}
      {props.children}
    </button>
  );
}

Button.propTypes = {
  type: propTypes.oneOf(['button', 'link', 'submit']).isRequired,
  onClick: propTypes.func,
  target: propTypes.string,
  className: propTypes.string,
  isPrimary: propTypes.bool,
  isSecondary: propTypes.bool,
  isOutline: propTypes.bool,
  isLarge: propTypes.bool,
  isSmall: propTypes.bool,
  isBlock: propTypes.bool,
  isDisabled: propTypes.bool,
  icon: propTypes.string,
};
