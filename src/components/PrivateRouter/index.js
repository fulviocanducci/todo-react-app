import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useTokenValid } from '../../context';

const PrivateRouter = ({ component: Component, ...rest }) => {
  const valid = useTokenValid();
  return (
    <Route
      {...rest}
      render={(props) =>
        valid ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRouter;
