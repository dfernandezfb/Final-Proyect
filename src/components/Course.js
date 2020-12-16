//Dependencies
import { useState, useEffect, useContext} from 'react';
import clientAxios from '../config/Axios'
import { useHistory } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
//Context
import { AdminpageContext } from '../context/AdminpageContext';
//CSS and Icons
import '../components/Modals/Courses.css';
import { AiTwotoneEdit, AiFillDelete } from 'react-icons/ai';
import Subscriptions from '../pages/Subscriptions';


const Course = ({ course }) => {
    const { _id, category, directedBy, name, description, displayed, subscription } = course;
    
    const { courses, setCourses } = useContext(AdminpageContext);
    
    //Get All Courses
    const getCourses = async () => {
        try {
            const response = await clientAxios.get('/courses');
            setCourses(response.data);
        } catch (error) {
            console.log(error.response);
        }
    };
    useEffect(() => {
        getCourses();
    }, []);


    //Redirect to edit course
    const history = useHistory();
    const redirectToEditCourse = () => {
        history.push(`/courses/editar/${_id}`)
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Delete Course 
    const deleteCourse = async (_id) => {
        if (setShow !== true) {
            const response = await clientAxios.delete(`/courses/${_id}`);
            handleClose();
            getCourses();
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
                <td className="text-center dataC">{displayed === true ? 'True': 'False'}</td>
                 <td className="text-center dataC">{subscription}</td>
                <td>

                    <Button type="button" className="actionBtn mr-2" onClick= {()=>redirectToEditCourse()} > <AiTwotoneEdit /> Edit </Button>
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
                    <Button onClick={handleClose}> Cancelar </Button>
                    <Button className="btn-danger" onClick={() => deleteCourse(_id)}> Borrar curso</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Course;