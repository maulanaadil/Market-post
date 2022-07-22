import { useState } from 'react';
import ListAccounts from '../../data/ListAccounts';
import AccountOption from '../account-option';

import { useDataStore } from '@service/zustands';

import Button from '@components/button';

export default function AccountDropdown() {
  const { showListAccount } = useDataStore();
  const [dataAccount, setDataAccount] = useState(ListAccounts);

  const changeCheck = (id) => {
    let temp = [...dataAccount];
    const index = temp.findIndex((x) => x.id === id);
    if (index === -1) return;
    temp[index].isChecked = !temp[index].isChecked;
    setDataAccount(temp);
  };

  const handleApply = () => {
    useDataStore.getState().setAccountData(dataAccount);
    useDataStore.getState().setShowListAccount(!showListAccount);
  };

  return (
    <div className='option' role={'option'}>
      <div className='option-list'>
        {ListAccounts.map((account) => (
          <AccountOption
            logo={account.socialMedia}
            id={account.id}
            name={account.name}
            username={account.username}
            checked={account.isChecked}
            key={account.id}
            onChange={() => {
              changeCheck(account.id);
            }}
          />
        ))}
      </div>
      <div className='apply-box'>
        <Button
          type='button'
          isSmall
          isPrimary
          className={'apply-btn'}
          onClick={handleApply}
        >
          Apply
        </Button>
      </div>
    </div>
  );
}
