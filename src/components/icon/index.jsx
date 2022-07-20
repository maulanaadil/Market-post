import React from "react";
import "./index.scss";

import FacebookIcon from "@assets/icons/facebook.svg";
import ConfigIcon from "@assets/icons/config.svg";
import HomeIcon from "@assets/icons/home.svg";
import EngagementIcon from "@assets/icons/engagement.svg";
import DraftIcon from "@assets/icons/draft.svg";
import NotifIcon from "@assets/icons/notif.svg";
import HeaderDropdownIcon from "@assets/icons/header_dropdown.svg";

export const iconTypes = {
  facebook: "FACEBOOK_ICON",
  config: "CONFIG_ICON",
  home: "HOME_ICON",
  engagement: "ENGAGEMENT_ICON",
  draft: "DRAFT_ICON",
  notif: "NOTIF_ICON",
  header_dropdown: "HEADER_DROPDOWN_ICON",
};

const iconSrc = {
  FACEBOOK_ICON: FacebookIcon,
  CONFIG_ICON: ConfigIcon,
  HOME_ICON: HomeIcon,
  ENGAGEMENT_ICON: EngagementIcon,
  DRAFT_ICON: DraftIcon,
  NOTIF_ICON: NotifIcon,
  HEADER_DROPDOWN_ICON: HeaderDropdownIcon,
};

export default function Icon({ type }) {
  return (
    <div className='icon'>
      <img src={iconSrc[type]} />
    </div>
  );
}
