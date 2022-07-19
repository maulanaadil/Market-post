import React from 'react';

import Icon, { iconTypes } from '@components/icon';
import AccountDropdown from '../../account-dropdown';

import './index.scss';
import AccountTag from '../../account-tag';

export default function InputPostFor() {
  const [showListAccount, setShowListAccount] = React.useState(false);

  const [accounts, setAccounts] = React.useState([]);

  function handleSelectAccount(e) {
    setShowListAccount(!showListAccount);
  }

  const defaultValue = 'Select your account page';

  return (
    <div className="post-for">
      <div className="label-input">Post for</div>
      <div className="input-select">
        <button onClick={handleSelectAccount} className="btn-select">
          <div className="input-wrapper">
            <div className="value">
              {accounts.length > 0
                ? accounts.map((account) => (
                    <AccountTag username={account.username} />
                  ))
                : defaultValue}
            </div>
            <span
              className={`dropdown-icon ${showListAccount ? 'rotate' : ''}`}
            >
              <Icon type={iconTypes.dropdown} />
            </span>
          </div>
        </button>
        {showListAccount && <AccountDropdown />}
      </div>
    </div>
  );
}
