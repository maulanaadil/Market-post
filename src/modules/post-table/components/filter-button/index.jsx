import './index.scss';
import Icon, { iconTypes } from '../../../../components/icon';

export default function FilterButton({ label, filterType, onClick }) {
  return (
    <button className='filter-button' onClick={onClick}>
      <div>
        {label} <span className='filter-type'>{filterType}</span>
      </div>
      <Icon type={iconTypes.draft_filter_dropdown} />
    </button>
  );
}
