
// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React,{useContext} from 'react';
import { Navigate, Outlet, useLocation } from "react-router-dom";
import {Context as AuthContext} from '../context/AuthContext';

const PrivateRoute=()=> {
  const {
    state: { token },
  } = useContext(AuthContext);
  let location = useLocation();

  if (!token) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
}

export default PrivateRoute;
