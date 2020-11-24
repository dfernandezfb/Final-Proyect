import {Link} from 'react-router-dom';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

const Course = ({course}) => {

 const {id, category, directedBy, name, description, displayed,price} = course;
 const history= useHistory();
 /* console.log(history); */
const redirectToEditCourse= () => {
history.push(`/courses/editar/${id}`)}  

    return (
        <>
        <tr>
            <td>{name}</td>
            <td>{category}</td>
            <td>{directedBy}</td>
            <td>{displayed}</td>
            <td>{price}</td>
            <td>
            <Button type="button" className=" mr-2" onClick={()=>redirectToEditCourse()}> Editar </Button>
            <Link to="/courses/editar/:id">
            <Button> Borrar </Button>
             </Link>
            </td>
        </tr>
    </>
    )
}

export default Course;