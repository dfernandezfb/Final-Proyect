import { 
  SUCCESS_REGISTER,
  ERROR_REGISTER,
  ERROR_TOKEN,
  AUTH_TOKEN
} from '../../types'

export default (state, action) => {
  console.log(action)
  switch(action.type) {
    case AUTH_TOKEN:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
        loading: false
      }
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
    case ERROR_TOKEN: {
      return {
        ...state,
        isAuth: false,
        loading: false
      }
    }
    default:
      return state
  }
}