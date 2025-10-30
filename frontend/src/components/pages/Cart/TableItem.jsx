import React from 'react'
import { Table } from '@chakra-ui/react';
import cartStyles from './CartPage.module.css';
import AddItemToCart from './AddItemToCart';
import { useCart } from '@/context/CartContext';
export default function TableItem() {
  const { cartItems, removeFromCart, updateCartTotalPrice } = useCart();    
  const handleRemove = (productId) => {
    removeFromCart(productId);
  };
  return (
    <Table.Root
    className={`${cartStyles.tablecontainer}`}
    variant="simple"
    size={{
      md: 'md',
      sm: 'sm',
      lg: 'lg',
    }}
  >
    <Table.Header className={cartStyles.thead}>
      <Table.Row>
        <Table.ColumnHeader>Product</Table.ColumnHeader>
        <Table.ColumnHeader>price</Table.ColumnHeader>
        <Table.ColumnHeader>Quantity</Table.ColumnHeader>
        <Table.ColumnHeader>Subtotal</Table.ColumnHeader>
      </Table.Row>
    </Table.Header>
    <Table.Body className={`${cartStyles.table}`}>
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
    </Table.Body>
  </Table.Root>
  )
}
