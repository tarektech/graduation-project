import React, { useEffect, useState } from 'react';
import NavBar from '@/components/navigation/NavBarSignIn';
import Footer from '@/components/Footer/Footer';
import styles from './CheckOut.module.css';
import global from '@/global.module.css';
import CheckedItem from '@/components/UI/checkedItem';
import { useCart } from '@/context/CartContext';
import Button from '@/components/UI/Button';
import MasterCard from '@/assets/payment/Mastercard.png';
import Visa from '@/assets/payment/Visa.png';
import BillingForm from './BillingForm';
import { RadioGroup, RadioGroupItem } from '@/components/shadcn/ui/radio-group';

function CheckOut() {
  const { cartItems, removeFromCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('bank');

  const updatePrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(() => {
    console.log('debugging', cartItems);
  }, [cartItems]);

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handlePlaceOrder = () => {
    // Handle order placement logic here
    console.log('Placing order with payment method:', paymentMethod);
  };
  
  return (
    <>
      <NavBar />
      <div className={`${global.container}`}>
        <h1 className={styles.heading}>Billing Details</h1>
        <div className={styles.container}>
          <div className={`${styles.formcontainer}`}>
             <BillingForm />
          </div>
          <div className={`${styles.checkoutoutter}`}>
            <div className={`${styles.checkoutinner}`}>
              {cartItems.length > 0 ? (
                <>
                  <div className={styles.cartItems}>
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
                  </div>
                  
                  <div className={`${styles.totalcontainer}`}>
                    <p>Total</p>
                    <p>${updatePrice.toFixed(2)}</p>
                  </div>
                  <div className={styles.payment}>
                    <p className={styles.paymentTitle}>Payment Method</p>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className={styles.bankmethods}>
                        <div className={styles.bankpayment}>
                          <RadioGroupItem value="bank" id="bank" />
                          <label htmlFor="bank">Bank Payment</label>
                        </div>
                        <div className={styles.paymentLogos}>
                          <img src={MasterCard} alt="Mastercard" />
                          <img src={Visa} alt="Visa" />
                        </div>
                      </div>
                      <div className={styles.bankpayment}>
                        <RadioGroupItem value="cash" id="cash" />
                        <label htmlFor="cash">Cash on Delivery</label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className={styles.buttonWrapper}>
                    <Button className={`${styles.button}`} onClick={handlePlaceOrder}>
                      Place Order
                    </Button>
                  </div>
                </>
              ) : (
                <div className={styles.emptyCart}>
                  <p>Your cart is empty</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CheckOut;
