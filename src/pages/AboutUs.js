import { Container, Row, Col } from "react-bootstrap";
import "../styles/colors-palette.css";
import "../styles/AboutUs.css";
import logo from "../images/logo.jpeg";

const AboutUs = () => {
  return (
    <>
      <Container className="bgAboutUs">
        <Row className="justify-content-md-center">
          <Col>
            <div className="bg-color4 containerAboutUs bgItemsAboutUs colSize">
              <h1 className="ml-2 mb-5 pt-1">Contact us</h1>
              <div className="ml-4 mb-5">
                >If you want to work in our institution just send your cv by
                clicking{" "}
                <a
                  className="linkAboutUs"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=rrhhakademy@gmail.com&su=Send us your CV&body=Tell us why you are insterested in working in this institution. We are waiting for you!"
                  target="_blank"
                >
                  here
                </a>
              </div>
              <div className="ml-4 mt-5 mb-5">
                >If you have any troubles with your account, the website or our
                courses tell us by clicking{" "}
                <a
                  className="linkAboutUs"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=supportakademy@gmail.com&su=Is something wrong?&body=We hope everything is ok, but tell us if we can help you in something"
                  target="_blank"
                >
                  here
                </a>
                <div className="mt-5">
                >For investment or being part of our society send your propose by clicking {" "}
                <a
                  className="linkAboutUs"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=akademyowners@gmail.com&su=Be a partner&"
                  target="_blank"
                >
                  here
                </a>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="bg-color4 bgItemsAboutUs  colSize">
              <h1 className="ml-2 mb-5 pt-1">About us</h1>
              <div className="ml-4 ">
                  <div className="textAboutUs mb-5">>We are a group of friends who wishes to improve peoples skill, preparing them for the future.
                  Is our objective to give you the tools you will need to enter the world of work.</div>
                  <div className="textAboutUs">>Because of this, we offer you the best prices, the best instructors and the most extensive catalog of courses in the world, so you can decide what you wanna be, when you wanna be, and be the best on it.
                  </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
