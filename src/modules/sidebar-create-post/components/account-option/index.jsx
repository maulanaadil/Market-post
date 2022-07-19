import './index.scss';

export default function AccountOption({
  id,
  logo,
  name,
  username,
  ...otherProps
}) {
  return (
    <div className='account-option'>
      <input
        type='checkbox'
        className='checkbox'
        value={id}
        id={`account${id}`}
        {...otherProps}
      />
      <div className='divider'></div>
      <label htmlFor={`account${id}`} className='social-media-account'>
        <img src={logo} className='social-media-logo' alt='instagram' />
        <div>
          <p className='name'>{name}</p>
          <p className='username'>{username}</p>
        </div>
      </label>
    </div>
  );
}
