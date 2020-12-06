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
const Header = ({dayHour}) => {

    if(dayHour>=7 && dayHour<19)
    {
        var dayClassContainer= 'bg-color1 navbar-container';
        var dayClassLink= 'navbar-link-claro color4';
        var logo= logooscuro;
    }else
    {
        var dayClassContainer= 'bg-color4 navbar-container';
        var dayClassLink= 'navbar-link-oscuro color2';
        var logo= logoclaro;
    }
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
                                />{' '}
                            </Navbar.Brand>
                        </Navbar>
                    </Col>
                    <Col md={4} className="py-0">
                        <SearchBar/>
                    </Col>
                    <Col md={4}>
                        <UserMenu/>
                    </Col>
                </Row>
                <Row> {/*usar new Date().getHours() para tema oscuro*/}
                    <Link className={dayClassLink} to="/">Home</Link>
                    <Link className={dayClassLink} to="/">Categorías</Link>
                    <Link className={dayClassLink} to="/">Ayuda</Link>
                    <Link className={dayClassLink} to="/">Algo mas</Link>
                </Row>
            </Container>
        </>
    );
}
export default Header