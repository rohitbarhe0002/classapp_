import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component}) => {
    const show = true;
  
  return (
    <Route
    render={() => (show ? <Component /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;

