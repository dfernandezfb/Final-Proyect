import {Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'


const FormLogin = () => {
    return(
        <>
            <Form>
                <h2 className="d-flex justify-content-center">Login</h2>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label><h4>Email address</h4></Form.Label>
                    <Form.Control size="lg" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label><h4>Password</h4></Form.Label>
                    <Form.Control size="lg" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember password" />
                </Form.Group>
                <Button className="col-12" variant="primary" type="submit">
                    Submit
                </Button>
                <a className="m-5" href="#"></a>
                <Link to="/recoverpassword">¿Have you forgotten the password?</Link>
            </Form>
        </>
    );
}

export default FormLogin