import React from 'react';
import PrivateRouter from './../PrivateRouter';
import { BrowserRouter, Link, Redirect, Switch } from 'react-router-dom';
import Create from './components/Create';
import Todo from './components/Todo';

import './index.css';
import { useSetToken } from '../../context';

function Home() {
  const setToken = useSetToken();
  const handleEnd = () => {
    setToken('');
    return true;
  };
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link to="/todo" className="navbar-brand">
          Todo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/todo" className="nav-link">
                Todo
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/todo-cadastro" className="nav-link">
                Cadastro
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" onClick={handleEnd} className="nav-link">
                Sair
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main role="main" className="container">
        <Switch>
          <PrivateRouter path="/todo" component={Todo} />
          <PrivateRouter path="/todo-cadastro" component={Create} />
          <PrivateRouter>
            <Redirect to="/todo" strict={true} />
          </PrivateRouter>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default Home;
