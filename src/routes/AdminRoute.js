import React, { useEffect, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';

const AdminRoute = ({ component: Component, ...props }) => {
  const { loading, isAuth, authUser, user } = useContext(AuthContext);
  useEffect(() => {
    authUser
  }, []) 
  if(loading) return 'Cargando...';
  return(
    <Route {...props} 
      render={props => isAuth && !loading && user.isAdmin
      ? <Component {...props} />
      : <Redirect to="/" />
      }
    />
  )
}

export default AdminRoute;