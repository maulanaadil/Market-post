import React, { useEffect, useState } from 'react';

import Icon, { iconTypes } from '@components/icon';
import AccountDropdown from '../../account-dropdown';

import { useDataStore } from '@service/zustands';

import './index.scss';
import AccountTag from '../../account-tag';

export default function InputPostFor({ postFor, setPostFor }) {
  const { accountData, showListAccount } = useDataStore();

  const handleSelectAccount = () => {
    useDataStore.getState().setShowListAccount(!showListAccount);
  };

  const defaultValue = 'Select your account page';

  useEffect(() => {
    // setPostFor for account data is checked
    const temp = accountData.filter((account) => account.isChecked);
    if (temp.length > 0) {
      setPostFor(temp);
    }
  }, [accountData]);

  return (
    <div className="post-for">
      <div className="label-input">Post for</div>
      <div className="input-select">
        <button onClick={handleSelectAccount} className="btn-select">
          <div className="input-wrapper">
            <div className="value">
              {postFor.length > 0 ? (
                postFor.map((account) => {
                  return (
                    <AccountTag
                      id={account.id}
                      username={account.username}
                      logo={account.socialMedia}
                      key={account.id}
                    />
                  );
                })
              ) : (
                <span>{defaultValue}</span>
              )}
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
