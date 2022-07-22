import React from 'react';

import Logo from '@assets/images/logo.png';
import MenuItem from './components/menu-item';

import { navLinks } from './navlinks';
import './index.scss';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="wrapper-sidebar">
        <img src={Logo} alt="Market Project Logo" className="logo-sidebar" />
        <div className="divider-sidebar"></div>
        <div className="menu-sidebar">
          {navLinks.map((item) => (
            <MenuItem link={item.path} icon={item.icon} label={item.label} />
          ))}
        </div>
      </div>
    </div>
  );
}
