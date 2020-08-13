import React from 'react';
import { useTokenValid } from '../../context';

import Login from '../Login';
import Home from '../Home';

function App() {
  const tokenValid = useTokenValid();
  return <div className="container">{tokenValid ? <Home /> : <Login />}</div>;
}

export default App;
