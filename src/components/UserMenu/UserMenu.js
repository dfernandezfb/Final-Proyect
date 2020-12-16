import {FaBell,FaHeart} from 'react-icons/fa'
import './UserMenu.css'
import {Link} from 'react-router-dom'
import Dropdown from './../Dropdown/Dropdown'
import { useState, useContext } from 'react'
import authContext from '../../context/auth/authContext'

const UserMenu = ({user, dayHour}) =>
{
    const {logout} =useContext(authContext)
    let color="";
    let tema="";
    // const [color,setColor]=useState('');
    // const [tema,setTema]=useState('');
    if(dayHour>=7 && dayHour<19)
    {  
        color='color1';
        tema='claro';
        // setColor('color1');
        // setTema('claro');
    }else
    {
        color='color4';
        tema='oscuro';
        // setColor('color4');
        // setTema('oscuro');
    }
    const userName =  user.name
    const arrayName=userName.split(" ");
    const firstInitial= arrayName[0].substr(0,1).toUpperCase();
    const secInitialPos=arrayName.length -1
    const secondInitial = arrayName[secInitialPos].substr(0,1).toUpperCase();
    return(
        <div className="usermenu-container"> {/*ARMAR EL COMPONENTE DROPDOWN CON ESTO*/}
            <div className="initials-container">
                <div className={`usermenu-initials-${tema} ${color}`}>
                {firstInitial}{secondInitial}
                </div>
                <div className={`initials-content-${tema}`}>
                    <Link to="" className={`initials-link-${tema} ${color}`}>Perfil</Link>
                    <Link to="" className={`initials-link-${tema} ${color}`}>Suscripción</Link>
                    <p onClick={logout} className={`initials-link-${tema} ${color}`}>Cerrar sesión</p>
                </div>
            </div>
            <div className="initials-container">
                <div>
                    <FaBell className={`usermenu-link-${tema} ${color}`} size={25}/>
                </div>
                <div className={`initials-content-${tema} big-container`}>
                    No hay notificaciones
                </div>
            </div>
            <div className="initials-container">
                <div>
                    <FaHeart className={`usermenu-link-${tema} ${color}`} size={25}/>
                </div>
                <div className={`initials-content-${tema} big-container`}>
                    No hay favoritos
                </div>
            </div>
        </div>
    )
}
export default UserMenu