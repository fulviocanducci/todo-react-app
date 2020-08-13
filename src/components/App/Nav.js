import React from 'react';
import { Link } from 'react-router-dom';
import { useSetToken } from '../../context';

function Nav() {
  const setToken = useSetToken();
  const handleEnd = () => setToken('');
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <Link to="/" className="navbar-brand">
        Home
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
  );
}

export default Nav;
