import { Form } from 'react-bootstrap'
import "../styles/colors-palette.css"
import ModalRecoverPassword from '../components/Modals/ModalRecoverPassword'

const RecoverPasswordPage = () => {
    return(
        <>
            <div className="bg-color1">
                <div className="container vh-100">
                    <div className="row d-flex justify-content-center">
                        <div className="p-0 text-center">
                            <h1 className="col-12 my-4 pb-4 border-bottom border-primary">I forgot my password</h1>
                            <h4 className="col-12 mb-0">Enter your email to receive instructions on how to set a new password</h4>
                        </div>
                        <Form className="col-11 col-md-8 col-lg-5 my-5 bg-color3 border rounded border-dark p-4">
                            <Form.Label><h5 className="text-white">Email address</h5></Form.Label>
                            <Form.Control size="lg" type="email" placeholder="Enter email" />
                            <Form.Text className="text-white">
                                For example: akademy@akademy.com
                            </Form.Text>
                            <ModalRecoverPassword/>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RecoverPasswordPage