import React from 'react';
import './index.scss';

import FacebookIcon from '@assets/icons/facebook.svg';
import ConfigIcon from '@assets/icons/config.svg';
import HomeIcon from '@assets/icons/home.svg';
import EngagementIcon from '@assets/icons/engagement.svg';
import DraftIcon from '@assets/icons/draft.svg';
import CloseIcon from '@assets/icons/close.svg';
import DropdownIcon from '@assets/icons/dropdown.svg';

import DraftFilterDropdown from '@assets/icons/draft-filter-dropdown.svg';
import DraftFilter from '@assets/icons/draft-filter.svg';
import DraftCreate from '@assets/icons/draft-create.svg';
import DraftEdit from '@assets/icons/draft-edit.svg';
import DraftDelete from '@assets/icons/draft-delete.svg';
import NotifIcon from '@assets/icons/notif.svg';
import HeaderDropdownIcon from '@assets/icons/header_dropdown.svg';
import LocationIcon from '@assets/icons/location.svg';
import AddIcon from '@assets/icons/add.svg';
import TrashIcon from '@assets/icons/trash.svg';
import PenIcon from '@assets/icons/pen.svg';
import EyeIcon from '@assets/icons/eye.svg';
import SearchIcon from '@assets/icons/search.svg';
import MoreIcon from '@assets/icons/more.svg';

export const iconTypes = {
  facebook: 'FACEBOOK_ICON',
  config: 'CONFIG_ICON',
  home: 'HOME_ICON',
  engagement: 'ENGAGEMENT_ICON',
  draft: 'DRAFT_ICON',

  draft_filter_dropdown: 'DRAFT_FILTER_DROPDOWN',
  draft_filter: 'DRAFT_FILTER',
  draft_create: 'DRAFT_CREATE',
  draft_edit: 'DRAFT_EDIT',
  draft_delete: 'DRAFT_DELETE',
  notif: 'NOTIF_ICON',
  header_dropdown: 'HEADER_DROPDOWN_ICON',

  close: 'CLOSE_ICON',
  dropdown: 'DROPDOWN_ICON',
  close: 'CLOSE_ICON',
  dropdown: 'DROPDOWN_ICON',
  location: 'LOCATION_ICON',
  add: 'ADD_ICON',
  trash: 'TRASH_ICON',
  pen: 'PEN_ICON',
  eye: 'EYE_ICON',

  search: 'SEARCH_ICON',
  more: 'MORE_ICON',
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
  DRAFT_DELETE: DraftDelete,
  NOTIF_ICON: NotifIcon,
  HEADER_DROPDOWN_ICON: HeaderDropdownIcon,

  CLOSE_ICON: CloseIcon,
  DROPDOWN_ICON: DropdownIcon,
  LOCATION_ICON: LocationIcon,
  ADD_ICON: AddIcon,
  TRASH_ICON: TrashIcon,
  PEN_ICON: PenIcon,
  EYE_ICON: EyeIcon,
  MORE_ICON: MoreIcon,
  FILTERDROPDOWN_ICON: DraftFilterDropdown,
  SEARCH_ICON: SearchIcon,
};

export default function Icon({ type, handleClick, ...props }) {
  return (
    <div className='icon' onClick={handleClick}>
      <img src={iconSrc[type]} {...props} />
    </div>
  );
}
