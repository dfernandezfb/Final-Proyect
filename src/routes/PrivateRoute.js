import React ,{ useEffect, useContext } from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthContext from '../context/auth/authContext';


const PrivateRoute = ({component:Component, ...props}) => {
  const { loading, isAuth, authUser } = useContext(AuthContext);
  useEffect(() => {
    authUser();
  },[]);
  console.log(isAuth, loading);
  if(loading) return 'Cargando...';
return(
    <Route {...props} 
    render={props => !isAuth && !loading ? (<Redirect to="/"/>):(<Component {...props}/>) } />
)
}
  export default PrivateRoute;