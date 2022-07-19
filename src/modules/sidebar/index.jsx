import React from "react"

import Logo from "@assets/images/logo.png"

import Icon from "../../components/icon"
import { iconTypes } from "../../components/icon"

import "./index.scss"

export default function Sidebar() {
  return (
    <div className="container-sidebar">
      <div className="wrapper-sidebar">
        <img src={Logo} alt="Market Project Logo" className="logo-sidebar" />
        <div className="divider-sidebar"></div>
        <div className="menu-sidebar">
          <a href="#" className="menu-item-sidebar active">
            <Icon type={iconTypes.home} />
            <span>
              Home
            </span>
          </a>
          <a href="#" className="menu-item-sidebar">
            <Icon type={iconTypes.engagement} />
            <span>Engagement</span>
          </a>
          <a href="#" className="menu-item-sidebar">
            <Icon type={iconTypes.draft} />
            <span>Draft</span>
          </a>
        </div>
      </div>
    </div>
  )
}