import React, { useState } from 'react';
import { Table } from '@chakra-ui/react';
import { TiDelete } from 'react-icons/ti';
import { useCart } from '@/context/CartContext';

import cartStyles from './CartPage.module.css';
function AddItemToCart(props) {
  const { updateQuantity } = useCart();
  const [counter, setCounter] = useState(props.quantity);

  const decrement = () => {
    if (counter > 1) {
      updateQuantity(props.id, counter - 1);
      setCounter(counter - 1);
    }
  };

  const increment = () => {
    if (counter < 10) {
      updateQuantity(props.id, counter + 1);
      setCounter(counter + 1);
    }
  };

  const totalItemPrice = counter * props.price;

  return (
    <>
      <Table.Row>
        <Table.Cell className={`${cartStyles.column1}`}>
          <div className={`${cartStyles.imgcontainer}`}>
            <img className={cartStyles.productimg} src={props.imgsrc} alt="" />
            <TiDelete
              className={`${cartStyles.deleteitem}`}
              onClick={() => props.handleRemove(props.id)}
            />
          </div>
          <h1>{props.productname}</h1>
        </Table.Cell>
        <Table.Cell>{props.price}</Table.Cell>
        <Table.Cell>
          <div className={`${cartStyles.btn_container}`}>
            <button className={`${cartStyles.btn_minus}`} onClick={decrement}>
              <span></span>
            </button>
            <span onInput={updateQuantity}>{counter}</span>
            <button className={`${cartStyles.btn_plus}`} onClick={increment}>
              +
            </button>
          </div>
        </Table.Cell>
        <Table.Cell>{totalItemPrice}</Table.Cell>
      </Table.Row>
    </>
  );
}

export default AddItemToCart;
