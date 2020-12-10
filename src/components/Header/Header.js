import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import './Header.css'
import '../../styles/colors-palette.css'
import {Container,Col, Row } from 'react-bootstrap'
import logoclaro from "./../../images/logorecortadoclaro.png"
import logooscuro from "./../../images/logorecortado.png"
import SearchBar from '../SearchBar/SearchBar'
import UserMenu from '../UserMenu/UserMenu'
const Header = ({dayHour, userLogged }) => {

let dayClassContainer='';
let dayClassLink='';
let logo='';

if(dayHour>=7 && dayHour<19)
{
    dayClassContainer= 'bg-color1 navbar-container';
    dayClassLink= 'navbar-link-claro color4';
    logo= logooscuro;
}else
{
    dayClassContainer= 'bg-color4 navbar-container';
    dayClassLink= 'navbar-link-oscuro color2';
    logo= logoclaro;
}

// if(window.location.pathname==="/" || window.location.pathname==="") preguntar como obtener path del dom virtual
if(!userLogged)
{
    console.log("estoy en el landing")
    return(
    <>    
        <Container fluid className={dayClassContainer}>
            <Row>
                <Col md={6}>
                    <Navbar sticky="top" className="py-0">
                        <Navbar.Brand href="/" className="py-0" >
                            <img
                            alt="Logo"
                            src={logo}
                            height="60"
                            className="d-inline-block align-top"
                            />
                        </Navbar.Brand>
                    </Navbar>
                </Col>
                <Col md={6} className="container-login-button">
                    <button className="login-button color4 bg-color2"> Login </button>
                </Col>
            </Row>
        </Container>
    </>
    )
}
else
{
    return(
        <>  
            <Container fluid className={dayClassContainer}>
                <Row>
                    <Col md={4}>
                        <Navbar sticky="top" className="py-0">
                            <Navbar.Brand href="/" className="py-0" >
                                <img
                                alt="Logo"
                                src={logo}
                                height="60"
                                className="d-inline-block align-top"
                                />
                            </Navbar.Brand>
                        </Navbar>
                    </Col>
                    <Col md={4} className="py-0">
                        <SearchBar dayHour={dayHour}/>
                    </Col>
                    <Col md={4}>
                        <UserMenu dayHour={dayHour}/>
                    </Col>
                </Row>
                <Row className="justify-content-center"> {/*usar new Date().getHours() para tema oscuro*/}
                    <Link className={dayClassLink} to="/home">Home</Link>
                    <Link className={dayClassLink} to="/">Destacado</Link>
                    <Link className={dayClassLink} to="/">Categorías</Link>
                    <Link className={dayClassLink} to="/">Contacto</Link>
                    <Link className={dayClassLink} to="/">Ayuda</Link>
                </Row>
            </Container>
        </>
    );
}
}
export default Header