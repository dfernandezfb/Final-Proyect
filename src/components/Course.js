import {useState} from 'react';
import clientAxios from '../config/Axios'
import {useHistory} from 'react-router-dom';
import { Button, Modal} from 'react-bootstrap';
//CSS
import Courses from '../components/Modals/Courses.css';
import {AiTwotoneEdit, AiFillDelete} from 'react-icons/ai';


const Course = ({course}) => {

 const {id, category, directedBy, name, description, displayed,price} = course;
 const history= useHistory();
 /* console.log(history); */
const redirectToEditCourse= () => {
history.push(`/courses/editar/${id}`)} 


const deleteCourse = async () => {
    if (window.confirm('esta seguro que desea eliminar este curso?')) {
        await clientAxios.delete(`/courses/${id}`);
        history.push('/');
    }  else {
        console.log('no se pudo eliminar el curso')
    }
}

    return (
        <>
        <tr>
            <td className="text-center">{name}</td>
            <td className="text-center">{category}</td>
            <td className="text-center">{directedBy}</td>
            <td className="text-center">{displayed}</td>
            <td className="text-center">{price}</td>
            <td>
            <Button type="button" className="actionBtn mr-2" onClick={()=>redirectToEditCourse()}> <AiTwotoneEdit  /> Editar </Button>
            <Button type="button" className="actionBtn" onClick={()=>deleteCourse()}>  <AiFillDelete /> Borrar  </Button>
            </td>
        </tr>
    </>
    )
}

export default Course;