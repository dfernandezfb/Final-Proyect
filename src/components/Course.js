//Dependencies
import { useState } from 'react';
import clientAxios from '../config/Axios'
import { useHistory } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
//CSS
import  '../components/Modals/Courses.css';
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
                    <Button type="button" className="actionBtn mr-2" onClick={() => redirectToEditCourse()}> <AiTwotoneEdit /> Editar </Button>
                    <Button type="button" className="actionBtn" onClick={handleShow}>  <AiFillDelete /> Borrar  </Button>
                </td>
            </tr>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>¿Estas Seguro que deseas eliminar de forma permanente este curso? </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p> Puede destiladar la opción "Publicado" y el curso no se mostrara en su pagina principal</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}> Cancelar </Button>
                    <Button className="btn-danger" onClick={() => deleteCourse()}> Borrar curso</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Course;