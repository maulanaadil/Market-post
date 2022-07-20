import './index.scss';

export default function Card(props) {
  return (
    <div className="draft-card">
      <div className="header">
        <div className="avatar">Avatar</div>
        <div className="title">
          <div className="user">
            <span>{'{Social Media Icon}'}</span> <span>{'{Name}'}</span>{' '}
            <span>{'{Username}'}</span>
          </div>
          <div className="draft-title">Draft Post</div>
        </div>
      </div>
      <div className="body">
        <div className="caption">
          <div className="label">{'[Caption]'}</div>
          <div className='value'>Hey ho let’s drink cofee with me ---....</div>
        </div>
        <div className="footer">
          <div className="author">By Reymunda Alfathur</div>
          <div className="draft-controll">
            <div>Edit</div>
            <div>Delete</div>
          </div>
        </div>
      </div>
    </div>
  );
}
