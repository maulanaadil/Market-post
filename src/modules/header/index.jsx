import React from "react";
import Foto from "@assets/images/foto.png";
import { iconTypes } from "@components/icon";
import "./index.scss";
import Icon from "../../components/icon";
import Avatar from "./components/avatar";

export default function Header(props) {
  return (
    <header className="header">
      <section className="container">
        <nav>
          <div className="header-link">
            <div className="menu">
              <Avatar imgUrl={Foto} />
              <Icon type={iconTypes.notif} />
            </div>
            <div className="menu-dropdown">
              <Icon type={iconTypes.header_dropdown} />
            </div>
          </div>
        </nav>
      </section>
    </header>
  );
}
