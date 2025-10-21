import cartStyles from './CartPage.module.css';
import NavBar from '@/components/navigation/NavBarSignIn';
import Footer from '@/components/Footer/Footer';
import globalstyles from '@/global.module.css';
import { Table, Thead, Tr, Th, TableContainer } from '@chakra-ui/react';
import AddItemToCart from './AddItemToCart';
import Button from '@/components/UI/Button';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useNavigate } from 'react-router-dom';

/**
 * Render the CartPage component, including handling quantity changes, clicks, and removal of items from the cart.
 *
 * @param {string} productId - The ID of the product to update quantity
 * @param {number} quantity - The new quantity of the product
 * @return {JSX.Element} The rendered CartPage component
 */

function CartPage() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateCartTotalPrice } = useCart();

  const cartTotalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const [updatePrice, setUpdatePrice] = useState(0);
  const updateCartTotal = () => {
    setUpdatePrice(cartTotalPrice);
  };

  const handleRemove = (productId) => {
    removeFromCart(productId);
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
          <TableContainer className={`${cartStyles.tablecontainer}`}>
            <Table
              variant="simple"
              size={{
                md: 'md',
                sm: 'sm',
                lg: 'lg',
              }}
              className={`${cartStyles.table}`}
            >
              <Thead className={cartStyles.thead}>
                <Tr>
                  <Th>Product</Th>
                  <Th>price</Th>
                  <Th>Quantity</Th>
                  <Th>Subtotal</Th>
                </Tr>
                {cartItems.map((product) => (
                  <AddItemToCart
                    key={product.id}
                    id={product.id}
                    productname={product.name}
                    imgsrc={product.imageurl}
                    price={product.price}
                    quantity={product.quantity}
                    handleQuantityChange={updateCartTotalPrice}
                    handleRemove={handleRemove}
                  />
                ))}
              </Thead>
            </Table>
          </TableContainer>
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

export default CartPage;
