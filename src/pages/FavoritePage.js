import { Dropdown } from 'react-bootstrap'
import icon from '../images/iconFavorite.png'
import '../styled/favorite.css';
import Footer from "../components/Footer/Footer"

const Favorite = () => {
    return(
        <>
            <div className="body-favoritePage">
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        <img className="icoFav" src={icon} alt="favorite"/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <div className="container">
                    <div className="row border border-danger">
                        <h1>LISTA DE FAVORITOS</h1>
                    
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Favorite