
import styles from './ProductCard.module.css';
import star from '../../assets/icons/star.svg';
import { ReactSVG } from 'react-svg';
import { NavLink } from 'react-router-dom';

function ProductCard(props) {
  return (
    <div className={`${styles.ProductCard} `} key={props.id}>
      <div className={`${styles.img}`}>
        <NavLink to={{
          pathname: `/product-item/${props.id}`,
          state: { product: props },
        }}>
          <img src={props.url} alt={props.altimage} />
          <button className={`${styles.addtocart}`}>Add To Cart</button>
        </NavLink>
      </div>
      <div className={`${styles.productInfo}`}>
        <p className={styles.productDescription}>{props.description}</p>
        <div className={styles.productprice}>
          <span className={styles.price}>${props.price}</span>
        </div>
        <div className={styles.rateproduct}>
          <ReactSVG className={`${styles.starsvg}`} src={star} alt="star svg" />
          <ReactSVG className={`${styles.starsvg}`} src={star} alt="star svg" />
          <ReactSVG className={`${styles.starsvg}`} src={star} alt="star svg" />
          <ReactSVG className={`${styles.starsvg}`} src={star} alt="star svg" />
          <ReactSVG className={`${styles.starsvg}`} src={star} alt="star svg" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
