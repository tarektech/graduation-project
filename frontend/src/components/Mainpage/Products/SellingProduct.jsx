import categoryStyles from './CategorySection.module.css';
import global from '@/global.module.css';
import sellingProduct from './FlashSales.module.css';
import ProductCard from '@/components/UI/ProductCard';
import { imageData } from '@/data/imageData';
import Button from '@/components/UI/Button';

function SellingProduct(props) {
  const ProductItems = imageData
    .map((item) => (
      <ProductCard
        key={item.id}
        id={item.id}
        url={item.imageurl}
        description={item.description}
        price={item.price}
        discounteprice={item.discountedprice}
        altimage={item.alt}
      />
    ))
    .slice(4, 8);

  return (
    <div className={`${global.container} ${categoryStyles.categorysection}`}>
      {/* Today's */}
      <div className={`${categoryStyles.innersection} `}>
        <div className={` ${categoryStyles.category}`}>
          <span className={`${sellingProduct.redredtangle}`}></span>
          <p>{props.bannername}</p>
        </div>
        <div className={`${categoryStyles.lastsection} `}>
          <p className={` ${categoryStyles.browse}`}>Best Selling Products</p>
          <Button>View All</Button>
        </div>
        <div className={` ${sellingProduct.cardContainer}`}>{ProductItems}</div>
      </div>
    </div>
  );
}

export default SellingProduct;
