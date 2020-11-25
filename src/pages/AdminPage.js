import {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import clientAxios from '../config/Axios';
import Course from '../components/Course';
import Courses from '../components/Modals/Courses.css'

const AdminPage = () => {

  const [courses, setCourses] = useState([]);

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
        <div className="bodyEdit"> 
        <div className="tableInfo">
        <h1 className="titlesform text-center"> Bienvenido Administrador.</h1>
        <h3 className="titlesform">En la tabla a continuación, se muestran los cursos presentes en nuestra plataforma.
        Puede modificarlos o borrarlos. Si desea, puede agregar más actividades académicas con el boton "Crear"
        </h3>
        </div>
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th className="text-center">Nombre del Curso</th>
      <th className="text-center">Categoria</th>
      <th className="text-center">Dirigido por</th>
      <th className="text-center">Publicado</th>
      <th className="text-center">Precio</th>
      <th className="text-center">Acciones</th>
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
       </div>
    );
  }

export default AdminPage