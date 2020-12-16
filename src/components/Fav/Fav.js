import useModalLogin from "../Modals/useModalLogin";
import ModalLogin from '../Modals/modalLogin';
import iconfav from '../../images/iconFavorite.png'

const Fav = ({id}) => {
    const { isShowing, toggle } = useModalLogin();

    return(
        <>
            <div className="position-button">
                <button className="fav-button" onClick={toggle}><img className="icoFav" src={iconfav} alt="favorite"/></button>
                <ModalLogin isShowing={isShowing} hide={toggle} />
            </div>
        </>
    )
}

export default Fav 