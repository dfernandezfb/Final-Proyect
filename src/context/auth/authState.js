import { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import clientAxios from '../../config/Axios';
import authToken from '../../config/token';
import {
  SUCCESS_REGISTER,
  ERROR_REGISTER,
  ERROR_TOKEN,
  AUTH_TOKEN,
  LOGOUT
} from '../../types'

const AuthState = ({ children }) => {

  const initialState = {
    token: localStorage.getItem("token") || null,
    user: null,
    alert: '',
    isAuth: false,
    loading: true
  }
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const register = async user => {
    try {
      const response = await clientAxios.post('/users', user);
      dispatch({
        type: SUCCESS_REGISTER,
        payload: response.data
      })
    } catch (error) {
      dispatch({
        type: ERROR_REGISTER,
        payload: error.response.data.msg
      })
    }
  }

  const authUser = async () => {
    const token = localStorage.getItem('token');
    if(token) {
      authToken(token);
    }
    try {
      const response = await clientAxios.get('/auth');
      dispatch({
        type: AUTH_TOKEN,
        payload: response.data.user
      })
    } catch (error) {
      dispatch({
        type: ERROR_TOKEN,
        payload: false
      })
    }
  }
  const logout = () =>{
    dispatch({
      type:LOGOUT
    })
  }

  return (
    <AuthContext.Provider value={{
      token: state.token,
      user: state.user,
      isAuth: state.isAuth,
      alert: state.alert,
      loading: state.loading,
      register,
      authUser,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}
 
export default AuthState;
