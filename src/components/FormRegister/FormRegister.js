import { Form, Button , Row , Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import validationRegister from './validationRegister';
import useFormRegister from './useFormRegister';

const FormRegister = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useFormRegister(
        submitForm,
        validationRegister
    );

    return(
        <>
            <Form onSubmit={handleSubmit} noValidate>
                <h2 className="mb-2">Create an account!</h2>
                <hr className="deep-purple accent-2 mb-3 mt-0 d-inline-block mx-auto"></hr>
                <Row>
                    <Col>
                        <Form.Control
                            size="lg"
                            placeholder="First name"
                            name="firstName"
                            value={values.firstName}
                            onChange={handleChange}
                        />
                        {errors.firstName && <h6 className="mt-1 text-danger">{errors.firstName}</h6>}
                    </Col>
                    <Col>
                        <Form.Control
                            size="lg"
                            placeholder="Last name"
                            name="lastName"
                            value={values.lastName}
                            onChange={handleChange}
                        />
                        {errors.lastName && <h6 className="mt-1 text-danger">{errors.lastName}</h6>}
                    </Col>
                </Row>
                <Form.Control
                    className="mt-3"
                    size="lg"
                    type="text"
                    placeholder="Enter username"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    />
                {errors.username && <h6 className="mt-1 text-danger">{errors.username}</h6>}
                <Form.Group controlId="formBasicEmail">
                    <Form.Control
                        className="mt-3"
                        size="lg"
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <h6 className="mt-1 text-danger">{errors.email}</h6>}
                    <Form.Text className="text-muted my-2">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        size="lg"
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <h6 className="mt-1 text-danger">{errors.password}</h6>}
                    <Form.Control
                        className="mt-3"
                        size="lg"
                        type="password"
                        placeholder="Repeat Password"
                        name="password2"
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <h6 className="mt-1 text-danger">{errors.password2}</h6>}
                </Form.Group>
                <Form.Group>
                    <Form.Check type="checkbox" label="Remember me"/>
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

export default FormRegister