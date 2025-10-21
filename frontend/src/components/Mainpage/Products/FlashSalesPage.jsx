import flashSales from './FlashSales.module.css';
import global from '@/global.module.css';
import CountDown from './Timer/CountDown';
import ProductCard from '@/components/UI/ProductCard';
import { imageData } from '@/data/imageData';
import Button from '@/components/UI/Button';

function FlashSalesPage(props) {
  const ProductItems = imageData
    .map((product) => (
      <ProductCard
        key={product.id}
        id={product.id}
        url={product.imageurl}
        description={product.description}
        price={product.price}
        discounteprice={product.discountedprice}
        altimage={product.alt}
      />
    ))
    .slice(0, 4);

  return (
    <div className={`${global.container} ${flashSales.container}`}>
      {/* Today's */}
      <div className={` ${flashSales.innerContainer}  `}>
        <span className={flashSales.redredtangle}></span>
        <p className={` ${flashSales.text}`}>{props.bannername}</p>
      </div>
      {/* Flash Sales */}
      <div className={`${flashSales.CountDown} `}>
        <p className={flashSales.FlashSales}>{props.sectionname}</p>
        <CountDown />
      </div>
      {/* Products */}
      <div className={`${flashSales.cardContainer}`}>{ProductItems}</div>
      <Button >View all Products</Button>
      <span className={flashSales.linespan}></span>
    </div>
  );
}

export default FlashSalesPage;
