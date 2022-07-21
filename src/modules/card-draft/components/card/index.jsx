import Button from '../../../../components/button';
import { iconTypes } from '../../../../components/icon';
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
            <Button type='button' icon={iconTypes.draft_edit} className="edit"/>
            <Button type='button' icon={iconTypes.draft_delete} className="delete"/>
          </div>
        </div>
      </div>
    </div>
  );
}
