import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import './Header.css'
import {Container,Col, Row } from 'react-bootstrap'

const Header = () => {

    return(
        <>  
            <Container className="navbar-container">
                <Row>
                    <Col l={2}>LOGO</Col>
                </Row>
                <Row>
                    <Link className="navbar-link" to="/">Home</Link>
                    <Link className="navbar-link" to="/">Favoritos</Link>
                    <Link className="navbar-link" to="/">ALGO</Link>
                    <Link className="navbar-link" to="/">ALGO MAS</Link>
                </Row>
            </Container>
        </>
    );
}
export default Header