import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Icon from '@components/icon';

export default function MenuItem({ link, icon, label, ...otherProps }) {
  return (
    <NavLink
      to={link}
      className={`menu-item-sidebar ${({ isActive }) =>
        isActive ? 'active' : 'unactived'}`}
      {...otherProps}
    >
      <Icon type={icon} />
      <span>{label}</span>
    </NavLink>
  );
}

MenuItem.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
