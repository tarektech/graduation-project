import React, { createContext, useState, useContext } from 'react';
// import { imageData } from '@/data/imageData';
export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === product.id);

      if (existingProduct) {
        // If the product already exists in the cart, update its quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // If the product doesn't exist in the cart, add it
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };

  // Function to update the total price of the cart
  const updateCartTotalPrice = (priceChange) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        price: item.price + priceChange,
      }))
    );
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Counter state and functions
  const [counter, setCounter] = useState(1);

  const decrement = () => {
    setCounter((prevCounter) =>
      prevCounter > 1 ? prevCounter - 1 : prevCounter
    );
  };

  const increment = () => {
    setCounter((prevCounter) => prevCounter < 10 ? prevCounter + 1 : prevCounter);
  };

  const resetCounter = ()=>{
    setCounter(1);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateCartTotalPrice,
        counter,
        decrement,
        increment,
        resetCounter
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
