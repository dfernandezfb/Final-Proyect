import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { Button, Modal} from 'react-bootstrap';
//CSS
import Courses from '../components/Modals/Courses.css';


const Course = ({course}) => {

 const {id, category, directedBy, name, description, displayed,price} = course;
 const history= useHistory();
 /* console.log(history); */
const redirectToEditCourse= () => {
history.push(`/courses/editar/${id}`)}  

    return (
        <>
        <tr>
            <td className="text-center">{name}</td>
            <td className="text-center">{category}</td>
            <td className="text-center">{directedBy}</td>
            <td className="text-center">{displayed}</td>
            <td className="text-center">{price}</td>
            <td>
            <Button type="button" className="actionBtn mr-2" onClick={()=>redirectToEditCourse()}> Editar </Button>
            <Button type="button" className="actionBtn">  Eliminar </Button>
            </td>
        </tr>
    </>
    )
}

export default Course;