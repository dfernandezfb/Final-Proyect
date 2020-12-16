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

//NewCourse
  const [newCourse, setnewCourse] = useState({
    name: '',
    category: '',
    directedBy: '',
    image: '',
    description: '',
    displayed: false,
    subscription: '',
    featured: false,
    comments : [],
  })
  const { name, directedBy, displayed, category, description, image,comments, subscription } = newCourse;
  
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
  const handleOnChange = (e) => {
    setnewCourse({
      ...newCourse,
      [e.target.name]: e.target.value
      
    });
  }
  
  //Create Course
  const addCourse = async (course) => {
    const result = await clientAxios.post('/courses', course);
    console.log(result);
    getCourses();
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addCourse(newCourse);
    handleClose();
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
            <th className="text-center dataC">Destacado</th>
            <th className="text-center dataC">Acciones</th>
          </tr>
        </thead>
        <tbody className="bodyEdit">
          {
            courses.length === 0 ? 'No hay cursos disponibles' : (
              courses.map((course, index) => (
                <Course key={index} course={course} />
              ))
            )
          }
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
          <Form className=" createForm" onSubmit={handleOnSubmit}  >
        <Modal.Header closeButton>
          <Modal.Title>Bienvenido. Puede crear un nuevo curso desde este modal. Complete los campos a continuación:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group>
              <label>Nombre:</label>
              <input type="Text"
                name = "name"
                value={name}
                onChange={handleOnChange}
                className="form-control" required ></input>
            </Form.Group>
            <Form.Group>
            <label>Categoria</label>
              <input className="form-control" type="text"
               name="category" 
               value={category}
                onChange={handleOnChange}
                required></input>
            </Form.Group>
            <Form.Group>
              <label>Dirigido por:</label>
              <input className="form-control"
               type="text" 
               name="directedBy" 
               value={directedBy}
                onChange={handleOnChange}
                required></input>
            </Form.Group>
            <Form.Group>
              <label> Imagen del curso: </label>
              <input className="form-control" 
              name="image" value={image}
                onChange={handleOnChange}
                type="text"></input>
            </Form.Group>
            <Form.Group>
              <label> Descprición del curso </label>
              <input className="form-control" name="description" value={description}
                onChange={handleOnChange}
                type="textarea"></input>
            </Form.Group>
            <Form.Group>
            <label>Tipo de Suscripción</label>
              <input className="form-control" type="text" placeholder="Free, Gold o Diamond"name="subscription" value={subscription}
                onChange={handleOnChange}
                required></input>
            </Form.Group>
            <Form.Group>
              <label> Opiniones recientes sobre el curso: </label>
              <input className="form-control" name="comments" value={comments}
                onChange={handleOnChange}
                type="textarea"></input>
            </Form.Group>
            <Form.Group>
              <label> Destacada: </label>
              <input className="form-control" name="displayed" value={displayed}
                onChange={handleOnChange}
                type="checkbox"></input>
            </Form.Group>
        </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>
            <Button type="submit" variant="primary">
              Save Changes
          </Button>
          </Modal.Footer>
          </Form>
      </Modal>
    </div>
  );
}

export default AdminPage