import cartStyles from './CartPage.module.css';
import NavBar from '@/components/navigation/NavBarSignIn';
import Footer from '@/components/Footer/Footer';
import globalstyles from '@/global.module.css';
import Button from '@/components/UI/Button';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useNavigate } from 'react-router-dom';
import TableItem from './TableItem';
/**
 * Render the CartPage component, including handling quantity changes, clicks, and removal of items from the cart.
 *
 * @param {string} productId - The ID of the product to update quantity
 * @param {number} quantity - The new quantity of the product
 * @return {JSX.Element} The rendered CartPage component
 */

export default function CartPage() {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const cartTotalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const [updatePrice, setUpdatePrice] = useState(0);
  const updateCartTotal = () => {
    setUpdatePrice(cartTotalPrice);
  };

  const navitgateToCheckOut = () => {
    navigate('/checkout');
  };

  return (
    <>
      <NavBar />
      <div className={`${globalstyles.container} ${cartStyles.container}`}>
        <div className={`${cartStyles.path}`}>
          <p>Home /</p>
          <p>Cart</p>
        </div>
        <div className={`${cartStyles.cartcontainer}`}>
          <TableItem />
        </div>
        <div className={`${cartStyles.btncontainer} `}>
          <Button
            onClick={() => {
              navigate('/');
            }}
          >
            Return to Shop
          </Button>
          <Button onClick={updateCartTotal}>Update Cart</Button>
        </div>
        <div className={`${cartStyles.carttotalcontainer}`}>
          <h1>cart total</h1>
          <div className={`${cartStyles.carttotal}`}>
            <p>Total:</p>
            <p>{updatePrice}$</p>
          </div>
          <Button
            onClick={() => {
              navitgateToCheckOut();
            }}
          >
            Procees to checkout
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
