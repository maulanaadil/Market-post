import React from "react";
import "./index.scss";

import FacebookIcon from "@assets/icons/facebook.svg";
import ConfigIcon from "@assets/icons/config.svg";
import HomeIcon from "@assets/icons/home.svg";
import EngagementIcon from "@assets/icons/engagement.svg";
import DraftIcon from "@assets/icons/draft.svg";
import DraftFilterDropdown from "@assets/icons/draft-filter-dropdown.svg";
import DraftFilter from "@assets/icons/draft-filter.svg";
import DraftCreate from "@assets/icons/draft-create.svg";
import DraftEdit from   "@assets/icons/draft-edit.svg";
import DraftDelete from "@assets/icons/draft-delete.svg";

export const iconTypes = {
  facebook: "FACEBOOK_ICON",
  config: "CONFIG_ICON",
  home: "HOME_ICON",
  engagement: "ENGAGEMENT_ICON",
  draft: "DRAFT_ICON",
  draft_filter_dropdown: "DRAFT_FILTER_DROPDOWN",
  draft_filter: "DRAFT_FILTER",
  draft_create: "DRAFT_CREATE",
  draft_edit: "DRAFT_EDIT",
  draft_delete: "DRAFT_DELETE",
};

const iconSrc = {
  FACEBOOK_ICON: FacebookIcon,
  CONFIG_ICON: ConfigIcon,
  HOME_ICON: HomeIcon,
  ENGAGEMENT_ICON: EngagementIcon,
  DRAFT_ICON: DraftIcon,
  DRAFT_FILTER_DROPDOWN: DraftFilterDropdown,
  DRAFT_FILTER: DraftFilter,
  DRAFT_CREATE: DraftCreate,
  DRAFT_EDIT: DraftEdit,
  DRAFT_DELETE: DraftDelete
};

export default function Icon({ type }) {
  return (
    <div className='icon'>
      <img src={iconSrc[type]} />
    </div>
  );
}
