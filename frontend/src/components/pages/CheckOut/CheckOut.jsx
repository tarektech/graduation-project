import React, { useEffect, useState } from 'react';
import NavBar from '@/components/navigation/NavBarSignIn';
import Footer from '@/components/Footer/Footer';
import styles from './CheckOut.module.css';
import global from '@/global.module.css';
import Input from '@/components/UI/Input';
import CheckedItem from '@/components/UI/checkedItem';
import { useCart } from '@/context/CartContext';
import Button from '@/components/UI/Button';
import MasterCard from '@/assets/payment/Mastercard.png';
import Visa from '@/assets/payment/Visa.png';

function CheckOut() {
  const { cartItems, removeFromCart } = useCart();

  const updatePrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(() => {
    console.log('debugging', cartItems);
  }, [cartItems]);

  const [firstName, setFirstName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [apartment, setApartment] = useState('');
  const [townCity, setTownCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };
  
  return (
    <>
      <NavBar />
      <div className={`${global.container}`}>
        <h1 className={styles.heading}>Billing Details</h1>
        <div className={styles.container}>
          <div className={`${styles.formcontainer}`}>
            <Input
              label="first name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={styles.input}
            />
            <Input
              label="company name"
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className={styles.input}
            />
            <Input
              label="Street Address*"
              type="text"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              className={styles.input}
            />
            <Input
              label="Apartment, floor, etc. (optional)"
              type="text"
              value={apartment}
              onChange={(e) => setApartment(e.target.value)}
              className={styles.input}
            />
            <Input
              label="Town/City"
              type="text"
              value={townCity}
              onChange={(e) => setTownCity(e.target.value)}
              className={styles.input}
            />
            <Input
              label="Phone Number"
              type="number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={styles.input}
            />
            <Input
              label="Email Address"
              type="email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={`${styles.checkoutoutter}`}>
            <div className={`${styles.checkoutinner}`}>
              {cartItems.map((product) => {
                return (
                  <CheckedItem
                    key={product.id}
                    id={product.id}
                    src={product.imageurl}
                    itemname={product.name}
                    itemprice={product.price}
                    handleRemove={handleRemove}
                  />
                );
              })}
              
              <div className={`${styles.totalcontainer}`}>
                <p>Total</p>
                <p>{updatePrice}</p>
              </div>
              <div className={styles.payment}>
                <div className={styles.bankmethods}>
                  <div className={styles.bankpayment}>
                    <input type="radio" name="Bank Payment" />
                    <p id={styles.bankPayment}>Bank Payment</p>
                  </div>
                  {/* method payment images */}
                  <img src={MasterCard} alt="" />
                  <img src={Visa} alt="" />
                </div>
                <div className={styles.bankpayment}>
                  <input type="radio" />
                  <p>Cash on delivery</p>
                </div>
              </div>
              <Button className={`${styles.button}`}>Place Order</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CheckOut;
