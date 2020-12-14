//Dependecies
import { useState, useContext, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Button, Modal, Form } from 'react-bootstrap';
import { AiFillDiff } from 'react-icons/ai';
import clientAxios from '../config/Axios';
//Context
import { AdminpageContext } from '../context/AdminpageContext';
import { FunctionModalsContext } from '../context/FunctionModals';
//Components
import Course from '../components/Course';
//CSS- Icons 
import '../components/Modals/Courses.css';

const AdminPage = () => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { show, setShow } = useContext(FunctionModalsContext);
  const { courses, setCourses } = useContext(AdminpageContext);
  const [newCourse, setnewCourse] = useState({
        name:'',
        category: '',
        directedBy: '',
        image: '',
        description: '',
        displayed: false
  }) 
  

  //funcion  treaer todos
  const getCourses = async () => {
    try {
      const response = await clientAxios.get('/courses');
      setCourses(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(()=> {
    getCourses();
  },[]);
  
  const addCourse = async (course)=> {
    const result = await clientAxios.post('/courses', course);
    console.log(result);
    setnewCourse(result.data)
    getCourses();
  }

  const handleOnChange = (e) => {
    setnewCourse({
      ...newCourse,
      [e.target.name]: e.target.value
    });
  }
  const { name, directedBy, price, displayed } = courses;
//Crear Curso
  
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await clientAxios.post('/courses', course);
      getCourses();
    } catch (error) {
      console.log(error.submit)
    }
  } 

  
  return (
    <div className="bodyEdit">
      <div className="tableInfo">
        <h1 className="titlesform text-center"> Bienvenido Administrador.</h1>
        <h3 className="titlesform">En la tabla a continuación, se muestran los cursos presentes en nuestra plataforma.
        Puede modificarlos o borrarlos. Si desea, puede agregar más actividades académicas con el botón <Button onClick={handleShow} className="createBtn"> <AiFillDiff /> Crear </Button>
        </h3>
      </div>
      <Table striped bordered hover size="sm" className="tableContent">
        <thead>
          <tr>
            <th className="text-center dataC">Nombre del Curso</th>
            <th className="text-center dataC">Categoria</th>
            <th className="text-center dataC">Dictado por</th>
            <th className="text-center dataC">Publicado</th>
            <th className="text-center dataC">Precio</th>
            <th className="text-center dataC">Acciones</th>
          </tr>
        </thead>
        <tbody className="bodyEdit">
          {
            courses.length === 0 ? 'No hay cursos disponibles' : (
              courses.map(course => (
                <Course key={course.id} course={course} />
              ))
            )
          }
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bienvenido. Puede crear un nuevo curso desde este modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleOnSubmit}  >
            <Form.Group>
              <label>Nombre:</label>
              <input type="Text"
                value={name}
                 onChange= {handleOnChange} 
                className="form-control" required ></input>
            </Form.Group>
            <Form.Group>
              <label>Categoria:</label>
              <select className="form-control" required>
                <option value=""> Seleccionar Categoria </option>
                <option value="1">Desarollo e Ingeniería</option>
                <option value="2">Marketing</option>
                <option value="3">Negocios y Emprendiemientos</option>
                <option value="4">Crecimiento Profesional</option>
                <option value="5">Startups</option>
              </select>
            </Form.Group>
            <Form.Group>
              <label>Dirigido por:</label>
              <input className="form-control" type="text" value={directedBy}
                onChange={handleOnChange} 
                required></input>
            </Form.Group>
            <Form.Group>
              <label>Precio:</label>
              <input className="form-control" type="number" value={price}
                onChange={handleOnChange} 
                required></input>
            </Form.Group>
            <Form.Group>
              <label> Destacada: </label>
              <input className="form-control" value={displayed}
                onChange={handleOnChange} 
                type="checkbox"></input>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleClose}  >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AdminPage