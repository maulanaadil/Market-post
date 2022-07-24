import './index.scss';
import Icon, { iconTypes } from '../../../../components/icon';

export default function SearchButton({ placeholder }) {
    return (
        <div className='search-container'>
            <div className='icon-container'>
                <Icon type={iconTypes.search}/>
            </div>
            <input className='input-search' type="search" placeholder={placeholder} />    
        </div>
    );
}