import {createContext, useState, useEffect} from 'react';
import clientAxios from '../config/Axios';

export const AdminpageContext = createContext();

const AdminpageProvider = ({children}) => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const getCourses = async () => {
          try {
            const response = await clientAxios.get('/courses');
            setCourses(response.data);
          } catch (error) {
            console.log(error.response);
          }
        };
        getCourses();
      }, []); 
    return(
        <AdminpageContext.Provider value={{
            courses,
            setCourses
        }}>
            {children}
        </AdminpageContext.Provider>
    )
}
export default AdminpageProvider;