import PropTypes from 'prop-types';
import stylelist from './Hero.module.css';

function CatergoryItem(props) {
  return (
    <div className={props.className || ''}>
      <ul>
        <li className={stylelist.item_lists}>
          <button>Woman&apos;s Fashion</button>
        </li>
        <li className={stylelist.item_lists}>
          <button>Men&apos;s Fashion</button>
        </li>
        <li className={stylelist.item_lists}>
          <button>Electronics</button>
        </li>
        <li className={stylelist.item_lists}>
          <button>Home & LifeStyle</button>
        </li>
        <li className={stylelist.item_lists}>
          <button>Medicine</button>
        </li>
        <li className={stylelist.item_lists}>
          <button>Sports & Outdoor</button>
        </li>
        <li className={stylelist.item_lists}>
          <button>Baby&apos;s & Toys</button>
        </li>
        <li className={stylelist.item_lists}>
          <button>Groceries & pets</button>
        </li>
        <li className={stylelist.item_lists}>
          <button>Health & Beauty</button>
        </li>
      </ul>
    </div>
  );
}

CatergoryItem.propTypes = {
  className: PropTypes.string,
};

export default CatergoryItem;
