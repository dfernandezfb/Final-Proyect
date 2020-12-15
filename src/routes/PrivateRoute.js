import React ,{ useEffect, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';


const PrivateRoute = ({component:Component, ...props}) => {
  const { loading, isAuth, authUser } = useContext(AuthContext);

  useEffect(() => {
    authUser();
<<<<<<< HEAD
  },[])
 console.log(isAuth, loading)
=======
  }, [])

  console.log(isAuth, loading);
>>>>>>> e8d003f8923c6f1a36e371a51500b60e2ea1b9da
  if(loading) return 'Cargando...';

  return(
      <Route {...props} 
      render={props => !isAuth && !loading ? (<Redirect to="/"/>):(<Component {...props}/>) } />
  )
}
  export default PrivateRoute;