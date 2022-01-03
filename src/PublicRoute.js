import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PublicRoute = ({ component: Component }) => {
const show = true;
  return (
    <Route
      render={() => (show ? <Redirect to="/Login" /> : <Component />)}
    />
  );
};

export default PublicRoute;