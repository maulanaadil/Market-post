import React from "react";
import "./index.scss";

import FacebookIcon from "@assets/icons/facebook.svg";

export const iconTypes = {
  facebook: "FACEBOOK_ICON",
};

const iconSrc = {
  FACEBOOK_ICON: FacebookIcon,
};

export default function Icon({ type }) {
  return (
    <div className='icon'>
      <img src={iconSrc[type]} />
    </div>
  );
}
