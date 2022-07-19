import ListAccounts from '../../data/ListAccounts';
import AccountOption from '../account-option';

import instagramLogo from '@assets/logo/instagram.png';
import facebookLogo from '@assets/logo/facebook.png';

import Button from '@components/button';

export default function AccountDropdown() {
  return (
    <div className="option" role={'option'}>
      <div className="option-list">
        {ListAccounts.map((account) => (
          <AccountOption
            logo={
              account.socialMedia === 'Instagram' ? instagramLogo : facebookLogo
            }
            id={account.id}
            name={account.name}
            username={account.username}
            key={account.id}
          />
        ))}
      </div>
      <div className="apply-box">
        <Button type="button" isSmall isPrimary className={'apply-btn'}>
          Apply
        </Button>
      </div>
    </div>
  );
}
