import React ,{useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component:Component, ...props}) => {
return(
    <Route {...props} 
    render={props => true ? (<Redirect to="/"/>):(<Component {...props}/>) } />
)
}
  export default PrivateRoute;