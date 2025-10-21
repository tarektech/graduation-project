import React, { useEffect, useState } from 'react';
import styles from './ProductPage.module.css';
import NavBar from '@/components/navigation/NavBarSignIn';
import Footer from '@/components/Footer/Footer';
import globalstyles from '@/global.module.css';
import Button from '@/components/UI/Button';
import star from '@/assets/icons/star.svg';
import { ReactSVG } from 'react-svg';
import { MdFavoriteBorder } from 'react-icons/md';
import { CiDeliveryTruck } from 'react-icons/ci';
import { TbTruckReturn } from 'react-icons/tb';
import { imageData } from '@/data/imageData';
import { useNavigate, useParams } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

function ProductPage() {
  const navigate = useNavigate();
  const { addToCart, increment, decrement, counter, resetCounter } = useCart();

  useEffect(() => {
    window.scrollTo(0, 150);
    resetCounter();
  }, []);

  const { id } = useParams();

  const product = imageData.find((item) => item.id === Number(id));

  const handleBuyNow = () => {
    navigate('/cart');
  };

  return (
    <>
      <NavBar />
      <div className={`${globalstyles.container} `}>
        {/* Breadcrumbs */}
        <div className={`${styles.breadcrumbs}`}>
          <span onClick={() => navigate('/')}>Home</span>
          <span onClick={() => navigate('/')}>Products</span>
          <span>{product.name}</span>
        </div>

        <div className={`${styles.productcontainer}`}>
          {/* Product Image */}
          <div className={`${styles.productimg}`}>
            <img src={product.imageurl} alt={product.name} />
          </div>

          {/* Product Details */}
          <div className={`${styles.productdetails}`}>
            {/* Stock Badge */}
            <div className={`${styles.productBadge}`}>
              <span className={`${styles.stockBadge}`}>In Stock</span>
            </div>

            {/* Product Title */}
            <h1>{product.name}</h1>

            {/* Reviews */}
            <div className={`${styles.starcontainer}`}>
              <ReactSVG className={`${styles.starsvg}`} src={star} alt="star" />
              <ReactSVG className={`${styles.starsvg}`} src={star} alt="star" />
              <ReactSVG className={`${styles.starsvg}`} src={star} alt="star" />
              <ReactSVG className={`${styles.starsvg}`} src={star} alt="star" />
              <ReactSVG className={`${styles.starsvg}`} src={star} alt="star" />
              <span className={`${styles.reviewCount}`}>(150 Reviews)</span>
            </div>

            {/* Price Section */}
            <div className={`${styles.priceSection}`}>
              <span className={`${styles.pricecontainer}`}>
                ${product.price}
              </span>
              <span className={`${styles.originalPrice}`}>
                ${Math.floor(product.price * 1.3)}
              </span>
              <span className={`${styles.discount}`}>-23%</span>
            </div>

            {/* Description */}
            <div className={`${styles.descriptioncontainer}`}>
              <p>{product.description}</p>
            </div>

            <span className={`${styles.divider}`}></span>

            {/* Purchase Section */}
            <div className={`${styles.purchase_items}`}>
              <label className={`${styles.quantityLabel}`}>Quantity</label>
              <div className={`${styles.btn_container}`}>
                <button className={`${styles.btn_minus}`} onClick={decrement}>
                  <span></span>
                </button>
                <span className={`${styles.counter}`}>{counter}</span>
                <button className={`${styles.btn_plus}`} onClick={increment}>
                  +
                </button>
              </div>

              <div className={`${styles.actionButtons}`}>
                <Button
                  className={`${styles.buynowbtn}`}
                  onClick={() => {
                    handleBuyNow();
                    addToCart(product, counter);
                  }}
                >
                  Buy Now
                </Button>
                <div className={`${styles.favoriteicon_wrapper}`}>
                  <MdFavoriteBorder className={`${styles.favorite_icon}`} />
                </div>
              </div>
            </div>

            {/* Services */}
            <div className={styles.servicescontainer}>
              <div className={`${styles.delvierwrapper}`}>
                <div className={`${styles.delivertruck}`}>
                  <CiDeliveryTruck className={`${styles.delivertruckicon}`} />
                </div>
                <div className={`${styles.services}`}>
                  <h5>Free Delivery</h5>
                  <p>Free shipping on orders over $50. Shop now and save!</p>
                </div>
              </div>
              <div className={`${styles.delvierwrapper}`}>
                <div className={`${styles.delivertruck}`}>
                  <TbTruckReturn className={`${styles.delivertruckicon}`} />
                </div>
                <div className={`${styles.services}`}>
                  <h5>Return Policy</h5>
                  <p>30 Days easy return. Change your mind? No problem!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
