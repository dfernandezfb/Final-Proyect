import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import clienteAxios from '../config/Axios';
import courseCard from '../components/Cards/CourseCard'
import AuthContext from '../context/auth/authContext'
const Favourite = ({match}) => {
    const [favourite, setFavourite] = useState([]);
    const {user} = useContext(AuthContext)
    const {name, description, image, directedVy, subscription } = favourite;

    useEffect(() => {
        const getFavById = async () => {
            try{
                const favourite = await clienteAxios.get(`/users/${user._id}/favs`);
                console.log(favourite)
                setFavourite(favourite.data);
                console.log(favourite)
            } catch (error) {
                console.log(error.response)
            }
        }
        getFavById();
    }, []);
        return (

        ) => {
        
        }
    }



export default Favourite