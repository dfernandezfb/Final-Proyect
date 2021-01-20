import { useState, useContext, useEffect } from 'react'
import {FaBell,FaHeart} from 'react-icons/fa'
import './UserMenu.css'
import {Link} from 'react-router-dom'
import Dropdown from './../Dropdown/Dropdown'
import authContext from '../../context/auth/authContext'
import clientAxios from '../../config/Axios'


const UserMenu = () =>{
    const [favorites, setFavorites] = useState([])
    
    const { logout, user } = useContext(authContext)
    const userName =  user.name
    const arrayName=userName.split(" ");
    const firstInitial= arrayName[0].substr(0,1).toUpperCase();
    const secInitialPos=arrayName.length -1
    const secondInitial = arrayName[secInitialPos].substr(0,1).toUpperCase();
    useEffect ( () => {
        const getFavs = async () => {
            const response = await clientAxios.get(`/users/${user._id}/favs`);
            setFavorites(response.data);
        }
        getFavs();
    }, [user.favs] )
    return(
        <div className="usermenu-container align-items-center">
            <div className="initials-container">
                <div className={`usermenu-initials-claro color1`}>
                {firstInitial}{secondInitial}
                </div>
                <div className={`initials-content-claro`}>
                    <Link to="" className={`initials-link-claro color1`}>Profile</Link>
                    <Link to="/Subscriptions" className={`initials-link-claro color1`}>Suscription</Link>
                    <p onClick={logout} className={`initials-link-claro color1`}>Log out</p>
                </div>
            </div>
            <div className="initials-container">
                <div>
                    <FaBell className={`usermenu-link-claro color1`} size={25}/>
                </div>
                <div className={`initials-content-claro big-container text-light`}>
                    No hay notificaciones
                </div>
            </div>
            <div className="initials-container">
                <div>
                    <FaHeart className={`usermenu-link-claro color1`} size={25}/>
                </div>
                <div className={`initials-content-claro big-container text-light`}>
                    {
                    favorites.length === 0 
                    ? (<p>There aren´t favourites courses</p>)
                : (favorites.map((favorite, index) => (
                    <Link to={`/courses/detail/${favorite._id}`} >
                    <div key={index}>
                        <img className="cardsFavs" src={favorite.image} alt={favorite.name}/>
                            <p className="nameFavs">{favorite.name}</p>
                    </div>
                    </Link>
                )))

                }
                </div>
            </div>
        </div>
    )
}
export default UserMenu