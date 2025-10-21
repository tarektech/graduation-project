import React, { useCallback, useState } from 'react';
import './App.css';
import SignInPage from '@/components/auth/SignInPage';
import SignUpPage from '@/components/auth/SignUpPage';
import {
  Route,
  Routes,
  useNavigate,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import NotFoundPage from '@/components/NotFoundPage';
import ProductPage from '@/components/pages/ProductPage/ProductPage';
import MainSignInPage from './components/pages/mainPage';
import CartPage from '@/components/pages/Cart/CartPage';
import CheckOut from './components/pages/CheckOut/CheckOut';

import { CartProvider } from './context/CartContext';
import { MantineProvider } from '@mantine/core';

// import axios from 'axios';

import '@mantine/core/styles.css';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './components/hooks/useAuth';

const RouterProvider = () => {
  // const navigate = useNavigate();

  const { token, login, logout, userId } = useAuth();

  let routes;

  if (token) {
    routes = (
      <Routes>
        <Route path="/" element={<MainSignInPage />} exact />
        <Route path="/signed-in" element={<MainSignInPage />} />
        <Route path="*" exact element={<Navigate to="/" />} />
        <Route path="/product-item/:id" element={<ProductPage />} />

        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<MainSignInPage />} exact />
        <Route
          path="/sign-up"
          element={<SignUpPage routing="path" path="/sign-up" />}
          errorElement={<NotFoundPage />}
        />
        <Route
          path="/signin"
          element={<SignInPage routing="path" path="/signin" />}
          errorElement={<NotFoundPage />}
        />
        <Route path="/product-item/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      {routes}
    </AuthContext.Provider>
  );
};

function App() {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <BrowserRouter>
          <CartProvider>
            <MantineProvider>
              <RouterProvider />
            </MantineProvider>
          </CartProvider>
        </BrowserRouter>
      </ChakraProvider>
    </React.StrictMode>
  );
}

export default App;
