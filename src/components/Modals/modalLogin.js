import React from 'react';
import ReactDOM from 'react-dom';
import {Form, Button} from 'react-bootstrap'
import "./ModalLogin.css";
import {FaFacebookF, FaGooglePlusG } from 'react-icons/fa'


const ModalLogin = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modalLogin-overlay" />
    <div className="modalLogin-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modalLogin">
        <div className="modalLogin-header">
          <button type="button" className="modalLogin-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
          Hi! Please Login to continue
        </p>
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="For example: email@email.com" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button className="buttonSubmitLogin" type="submit">
    Submit
  </Button>
</Form>
<div className="socialMediaLogIn">
  <p>Or Login with your social media</p>
  <Button className="FbLogin"><FaFacebookF className="fbIcon"/>Facebook Login</Button>
  <Button className="GoogleLogin"><FaGooglePlusG className="googleIcon"/> Google Login</Button>
  </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default ModalLogin;