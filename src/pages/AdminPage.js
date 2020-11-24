import {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import clientAxios from '../config/Axios';
import Course from '../components/Course';

const AdminPage = () => {

  const [courses, setCourses] = useState([]);
  const [show, setShow] = useState({open:false});
  const handleShow= () => setShow(true);
  const handleClose = () => setShow(false)

  useEffect(() => {

    const getCourses = async () => {
      try {
        const response = await clientAxios.get('/courses');
        setCourses(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    getCourses();
  }, []);
  
    return(
        <>
        <h1> Bienvenido Administrador.</h1>
        <h3>En la tabla a continuación, se muestran los cursos presentes en nuestra plataforma.
        Puede modificarlos o borrarlos. Si desea, puede agregar más actividades académicas con el boton "Crear"
        </h3>
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Nombre del Curso</th>
      <th>Categoria</th>
      <th>Dirigido por:</th>
      <th>Publicado</th>
      <th>Precio</th>
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>
    {
      courses.length === 0 ? 'No hay cursos disponibles' : ( 
        courses.map( course => (
          <Course key={course.id} course= {course} />
        ))
        )
    }
  </tbody>
       </Table>
        </>
    );
}

export default AdminPage