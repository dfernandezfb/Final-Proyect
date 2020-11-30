import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react'
import { Link } from 'react-router-dom'


function ModalRecoverPassword() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="col-s-11 my-3 bg-color4  p-2" onClick={handleShow}>
                Send instructions
            </Button>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Success!</Modal.Title>
                </Modal.Header>
                <Modal.Body>The instructions were sent successfully! Check your email and follow the instructions please.</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        <Link className="text-white" to="/home" >Back home</Link>
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalRecoverPassword