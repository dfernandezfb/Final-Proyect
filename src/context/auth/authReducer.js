import { 
  SUCCESS_REGISTER,
  ERROR_REGISTER,
  ERROR_TOKEN,
  AUTH_TOKEN,
  LOGOUT,
  LOGIN,
  ERROR_LOGIN,
  CLEAR_MSG
} from '../../types'

export default (state, action) => {
  switch(action.type) 
  {
  
    case AUTH_TOKEN:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
        loading: false
      }
    case LOGIN:
    case SUCCESS_REGISTER:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuth: true,
        loading: false
      }
    case ERROR_REGISTER:
      return {
        ...state,
        alert: action.payload
      }
    case ERROR_TOKEN: 
      return {
        ...state,
        isAuth: false,
        loading: false
      }
    case ERROR_LOGIN:
      return {
        ...state,
        isAuth: false,
        loading: false,
        alert: action.payload
      }
    case CLEAR_MSG:
      return {
        ...state,
        alert: null
      }
    case LOGOUT:
    localStorage.removeItem('token');  
    return{
        ...state,
        isAuth:false,
        loading:false,
        user:null
      }
    default:
      return state
  }
}