import React from "react"

import Logo from "@assets/images/logo.png"
import { iconTypes } from "@components/icon"
import MenuItem from "./components/menu-item"

import "./index.scss"

export default function Sidebar() {
  return (
    <div className="container-sidebar">
      <div className="wrapper-sidebar">
        <img src={Logo} alt="Market Project Logo" className="logo-sidebar" />
        <div className="divider-sidebar"></div>
        <div className="menu-sidebar">
          <MenuItem link={'#'} icon={iconTypes.home} label="Home" isActive={true} />
          <MenuItem link={'#'} icon={iconTypes.engagement} label="Engagement" />
          <MenuItem link={'#'} icon={iconTypes.draft} label="Draft" />
        </div>
      </div>
    </div>
  )
}