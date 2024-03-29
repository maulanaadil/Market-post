import Button from '@components/button';
import { iconTypes } from '@components/icon';
import './index.scss';

import InstagramIcon from '@assets/logo/instagram.png';
import FacebookIcon from '@assets/logo/facebook.png';

export default function Card({
  id,
  imgUrl,
  sosmed,
  name,
  username,
  captionValue,
  author,
}) {
  const handleButtonEdit = () => {
    alert(`Edit post ${id}`);
  };

  const handleButtonDelete = () => {
    alert(`Delete post ${id}`);
  };

  return (
    <div className="draft-card">
      <div className="header">
        <div className="avatar">
          <img src={imgUrl} alt={username} />
        </div>
        <div className="title">
          <div className="user">
            <img src={sosmedIconUrl(sosmed)} className="sosmed-icon" />
            <span>{name}</span> <span className='username'>{username}</span>
          </div>
          <div className="draft-title">Draft Post</div>
        </div>
      </div>
      <div className="body">
        <div className="caption">
          <div className="label">{'[Caption]'}</div>
          <div className="value">{captionValue}</div>
        </div>
        <div className="footer">
          <div className="author">By {author}</div>
          <div className="draft-controll">
            <Button
              type="button"
              onClick={handleButtonEdit}
              icon={iconTypes.draft_edit}
              className="edit"
            />
            <Button
              type="button"
              onClick={handleButtonDelete}
              icon={iconTypes.draft_delete}
              className="delete"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function sosmedIconUrl(sosmed) {
  let iconType = sosmed.toLowerCase();
  switch (iconType) {
    case 'instagram':
      return InstagramIcon;
    case 'facebook':
      return FacebookIcon;
  }
}
