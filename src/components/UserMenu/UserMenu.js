import {FaBell,FaHeart} from 'react-icons/fa'
import './UserMenu.css'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'

const UserMenu = ({userName, admin}) =>
{
    const initials = "diego fernandez"
    admin=false;
    const firstInitial= initials.substr(0,1).toUpperCase();
    // useEffect
    for(let i=1;i<initials.length;i++)
    {
        let initial= initials.substr((i-1),i);
        console.log(initial);
        if(initial==="")
        {
            var secondInitial = initials.substr(i,i+1);
        }
    }
    return(
        <div className="usermenu-container"> {/*ARMAR EL COMPONENTE DROPDOWN CON ESTO*/}
            <div className="initials-container">
                <div className="usermenu-initials color4">
                {firstInitial}{secondInitial}
                </div>
                <div className="initials-content">
                    <Link to="" className="initials-link color4">Perfil</Link>
                    <Link to="" className="initials-link color4">Suscripción</Link>
                    <Link to="" className="initials-link color4">Cerrar sesión</Link>
                </div>
            </div>
            <FaBell className="color4 usermenu-link" size={25}/>
            <FaHeart className="color4 usermenu-link" size={25}/>
        </div>
    )
}
export default UserMenu