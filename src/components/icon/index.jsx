import React from "react";
import "./index.scss";

import FacebookIcon from "@assets/icons/facebook.svg";
import ConfigIcon from "@assets/icons/config.svg";
import HomeIcon from "@assets/icons/home.svg";

export const iconTypes = {
  facebook: "FACEBOOK_ICON",
  config: "CONFIG_ICON",
  home: "HOME_ICON",
};

const iconSrc = {
  FACEBOOK_ICON: FacebookIcon,
  CONFIG_ICON: ConfigIcon,
  HOME_ICON: HomeIcon,
};

export default function Icon({ type }) {
  return (
    <div className='icon'>
      <img src={iconSrc[type]} />
    </div>
  );
}
