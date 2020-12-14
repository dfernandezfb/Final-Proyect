import '../styles/landing.css';
import { Container, Row, Col } from 'react-bootstrap';
import FormRegister from '../components/FormRegister/FormRegister';

const LandingPage = () => {

    return(
        <Container fluid className="cover-background-landing">
            <Row>
                <Col sm={12} md={6}>
                    <Container>
                        <div>
                            <h3>COURSES A<span className="text-danger">K</span>ADEMY</h3>
                            <hr className="deep-purple accent-2 mb-3 mt-0 d-inline-block mx-auto"></hr>
                            <p className="mt-2">We invite you to try some of the many courses offered by this learning platform.</p>
                            <p>The programming courses we offer are the future, increase your income immediately after finishing one of our courses, don't miss it!</p>
                        </div>
                    </Container>
                </Col>
                <Col sm={12} md={6}>
                    <Container>
                        <FormRegister />
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default LandingPage