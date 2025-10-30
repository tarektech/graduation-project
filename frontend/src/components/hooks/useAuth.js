import { useCallback, useEffect, useState } from 'react';

let logoutTimer;
export const useAuth = () => {
  // Initialize state from localStorage using lazy initialization
  const [token, setToken] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      return storedData.token;
    }
    return false;
  });

  const [tokenExpirationDate, setTokenExpirationDate] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      return new Date(storedData.expiration);
    }
    return null;
  });

  const [userId, setUserId] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      return storedData.userId;
    }
    return false;
  });

  const login = useCallback((uId, token, expirationDate) => {
    setToken(token);
    setUserId(uId);
    const tokenExpirationData =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationData);

    localStorage.setItem(
      'userData',
      JSON.stringify({
        userId: uId,
        token: token,
        expiration: tokenExpirationData.toISOString(),
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    localStorage.removeItem('userData');
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [logout, token, tokenExpirationDate]);

  return { token, login, logout, userId };
};
