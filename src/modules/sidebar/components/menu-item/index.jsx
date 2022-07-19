import React from "react"

import Icon from "@components/icon"

export default function MenuItem({ link, icon, label, isActive }) {
  return (
  <a href={link} className={`menu-item-sidebar ${isActive && 'active'}`}>
    <Icon type={icon} />
    <span>
      {label}
    </span>
  </a>
  )
}