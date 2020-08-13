import React, { createContext, useEffect, useState } from 'react';
import { useContext } from 'react';

const TokenContext = createContext();

function TokenProvider({ children }) {
  const nameToken = '@token';
  const [token, setToken] = useState(() => {
    const _token = window.localStorage.getItem(nameToken);
    if (_token && _token.length > 0) {
      return _token;
    } else {
      return '';
    }
  });

  useEffect(() => {
    window.localStorage.setItem(nameToken, token);
  }, [token]);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
}

function useToken() {
  const context = useContext(TokenContext);
  const { token, setToken } = context;
  return [token, setToken];
}

function useTokenValid() {
  const context = useContext(TokenContext);
  const { token } = context;
  return token.length > 0;
}

function useSetToken() {
  const context = useContext(TokenContext);
  const { setToken } = context;
  return setToken;
}

export { useToken, useTokenValid, useSetToken };
export default TokenProvider;
