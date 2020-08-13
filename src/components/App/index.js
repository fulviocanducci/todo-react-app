import React from 'react';
import PrivateRouter from './../PrivateRouter';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';

import Login from '../Login';
import Home from '../Home';
import Todo from '../Home/components/Todo';
import Create from '../Home/components/Create';

import { useTokenValid } from '../../context';
import Nav from './Nav';

function App() {
  const valid = useTokenValid();
  return (
    <div className="container">
      <BrowserRouter>
        {valid && <Nav />}
        <main role="main" className="container">
          <Switch>
            <PrivateRouter exact path="/" component={Home} />
            <PrivateRouter exact path="/todo" component={Todo} />
            <PrivateRouter exact path="/todo-cadastro" component={Create} />
            <Route path="/login" component={Login} />
            <PrivateRouter>
              <Redirect to="/login" strict={true} />
            </PrivateRouter>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
