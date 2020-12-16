//Dependencies
import { useState } from 'react';
import clientAxios from '../config/Axios'
import { useHistory } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
//CSS
import Courses from '../components/Modals/Courses.css';
import { AiTwotoneEdit, AiFillDelete } from 'react-icons/ai';


const Course = ({ course }) => {

    const { id, category, directedBy, name, description, displayed, price } = course;

    const history = useHistory();
    /* console.log(history); */
    const redirectToEditCourse = () => {
        history.push(`/courses/editar/${id}`)
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteCourse = async () => {
        if (setShow !== true) {
            await clientAxios.delete(`/courses/${id}`);
            history.push('/adminpage');
            handleClose();
        } else {
            window.alert('No se pudo eliminar el curso')
        }
    }
    return (
        <>
            <tr>
                <td className="text-center dataC">{name}</td>
                <td className="text-center dataC">{category}</td>
                <td className="text-center dataC">{directedBy}</td>
                <td className="text-center dataC">{displayed}</td>
                <td className="text-center dataC">{price}</td>
                <td>
                    <Button type="button" className="actionBtn mr-2" onClick={() => redirectToEditCourse()}> <AiTwotoneEdit /> Edit </Button>
                    <Button type="button" className="actionBtn" onClick={handleShow}>  <AiFillDelete /> Delete  </Button>
                </td>
            </tr>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure you want to delete this course? </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p> You can unmark de option "published" and the course wont be showed in the main page</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}> Cancel </Button>
                    <Button className="btn-danger" onClick={() => deleteCourse()}> Delete course</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Course;