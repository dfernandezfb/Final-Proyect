import react from 'react'
import { Modal } from 'react-bootstrap'
import {ReactDOM} from 'react-router-dom'
const ModalCourse =(
{
    show, hide 
}
) => show ? ReactDOM.createPortal(
    <>
    <Modal> 
        <Modal.Body>
            <h1>jols </h1>
        </Modal.Body>
    </Modal>
    </>, document.body
): null;

export default ModalCourse;

