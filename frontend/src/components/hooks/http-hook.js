import { useState, useCallback, useRef, useEffect } from 'react';

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // keep track of the active requests
  const activeHttpRequest = useRef([]);

  // send a request to the server
  const sendRequest = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      setIsLoading(true);
      // abort the request if the user navigates away from the page
      // AbortController is a browser API that allows you to abort a request
      const httpAbortController = new AbortController();
      activeHttpRequest.current.push(httpAbortController);
      try {
        // fetch the data from the server
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortController.signal,
        });

        // parse the response data
        const responseData = await response.json();

        // remove the request from the active requests
        activeHttpRequest.current = activeHttpRequest.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortController
        );

        // if the response is not ok, throw an error
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        // set the loading state to false
        setIsLoading(false);

        // return the response data
        return responseData;
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        throw err;
      }
    },
    // empty dependency array means the function will only run once when the component mounts
    []
  );

  // clear the error
  const clearError = () => {
    setError(null);
  };

  // abort all active requests when the component unmounts
  useEffect(() => {
    return () => {
      activeHttpRequest.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  // return the loading state, error, and the sendRequest function
  return { isLoading, error, sendRequest, clearError };
};
