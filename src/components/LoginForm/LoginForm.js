import { useContext } from 'react';
import { Modal, Form, Button, Alert } from 'react-bootstrap';
import useForm from '../../hooks/useForm';
import { validationLogin } from '../../utils/validations';
import AuthContext from '../../context/auth/authContext';
import { useHistory } from 'react-router-dom';

const initialState = {
  email: '',
  password: ''
}

const LoginForm = ({ show, handleClose }) => {
  const history = useHistory();
  const { login, alert } = useContext(AuthContext);
  const { handleChange, handleSubmit, values, errors } = useForm(
    initialState,
    validationLogin,
    submitLogin
  );

  async function submitLogin() {
    await login(values);
  }
  return (
    <Modal show={show} onHide={() => handleClose(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Ingrese su email" 
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Contraseña..."
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </Form.Group>
          {
            alert && <Alert variant="danger">{alert}</Alert>
          }
          <Button type="submit" variant="primary" block>
            Ingresar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
 
export default LoginForm;