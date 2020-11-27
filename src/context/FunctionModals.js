import {createContext, useState, useEffect} from 'react';
import clientAxios from '../config/Axios';

export const FunctionModalsContext = createContext();

const FunctionModalsProvider = ({children}) => {
    const [show, setShow] = useState(false);
    return(
        
        <FunctionModalsContext.Provider value={{
            show,
            setShow,
        }}>
            {children}
        </FunctionModalsContext.Provider>
    )
}
export default FunctionModalsProvider;