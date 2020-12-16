import { useState, useEffect, useContext } from 'react'
import authContext from '../../context/auth/authContext'
import { Link } from 'react-router-dom'
import './Header.css'
import '../../styles/colors-palette.css'
import { Container, Col, Row, Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'
import logoclaro from "./../../images/logorecortadoclaro.png"
import logooscuro from "./../../images/logorecortado.png"
import SearchBar from '../SearchBar/SearchBar'
import UserMenu from '../UserMenu/UserMenu'
import LoginForm from '../LoginForm/LoginForm';


const Header = ({ dayHour }) => {
    const {user}=useContext(authContext);
    const [show, setShow] = useState(false);
    let dayClassContainer = '';
    let dayClassLink = '';
    let logo = '';
    let tema = '';

    if (dayHour >= 7 && dayHour < 19) {
        dayClassContainer = 'bg-color1 navbar-container';
        dayClassLink = 'navbar-link-claro color4';
        tema='claro'
        logo = logooscuro;
    } else {
        dayClassContainer = 'bg-color4 navbar-container';
        dayClassLink = 'navbar-link-oscuro color2';
        tema='oscuro'
        logo = logoclaro;
    }

    return(
        <>
            <LoginForm show={show} setShow={setShow} />
            <Navbar className="flex-column" collapseOnSelect expand='sm' bg='light' variant='light'>
                <Container>
                    <Row className="w-100 justify-content-between">
                        <Navbar.Brand className='text-black align-text'>
                            <Link to={user ? '/home' : '/'}>
                                <img
                                    src={logo}
                                    height="60"
                                    alt="Logo"
                                    className="d-inline-block align-top"
                                />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end flex-wrap" id="basic-navbar-nav">
                            <Nav>
                            {
                            user
                                ? (
                                <>
                                    <Nav.Link>
                                        <Link to="/home">
                                            Home
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to="/favourites">
                                            Favourites
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to="/aboutUs">
                                            Contact
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to="/">
                                            Help
                                        </Link>
                                    </Nav.Link>
                                    <UserMenu dayHour={dayHour} user={user} />
                                </>
                                )
                                : (
                                <button className={`login-button-${tema}`} onClick={() => setShow(true)}> Log In </button>
                                )
                            }
                            </Nav>
                        </Navbar.Collapse>
                    </Row>
                </Container>
                {
                    user &&
                    (
                        <Row >
                            <Col className="d-flex justify-content-between">
                                <SearchBar dayHour={dayHour} />
                            </Col>
                        </Row>
                    )
                }
            </Navbar>
        </>
    )
}
export default Header;