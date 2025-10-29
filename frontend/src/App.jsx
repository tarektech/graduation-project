import React, { Suspense, lazy } from 'react';
import './App.css';
import {
  Route,
  Routes,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import { CartProvider } from './context/CartContext';
import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './components/hooks/useAuth';
import LoadingSpinner from './components/UI/LoadingSpinner';

// Dynamic imports for code splitting
const SignInPage = lazy(() => import('@/components/auth/SignInPage'));
const SignUpPage = lazy(() => import('@/components/auth/SignUpPage'));
const NotFoundPage = lazy(() => import('@/components/NotFoundPage'));
const ProductPage = lazy(() =>
  import('@/components/pages/ProductPage/ProductPage')
);
const MainSignInPage = lazy(() => import('./components/pages/mainPage'));
const CartPage = lazy(() => import('@/components/pages/Cart/CartPage'));
const CheckOut = lazy(() => import('./components/pages/CheckOut/CheckOut'));

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
      <Suspense fallback={<LoadingSpinner />}>{routes}</Suspense>
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
