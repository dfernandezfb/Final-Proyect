//Dependecies
import { useState, useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { Button, Modal, Form } from 'react-bootstrap';
import { AiFillDiff } from 'react-icons/ai';
//Context
import {AdminpageContext} from '../context/AdminpageContext';
import {FunctionModalsContext} from '../context/FunctionModals';
//Components
import Course from '../components/Course';
//CSS- Icons 
import Courses from '../components/Modals/Courses.css'

const AdminPage = () => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {show, setShow} = useContext (FunctionModalsContext);
  const {courses, setCourses} = useContext(AdminpageContext);
  
  
  /* const handleOnSubmit = async e => {
    e.preventDefault();
    try{
      const submit = await clientAxios.get('/courses');
      console.log(submit);
    } catch (error) {
    console.log(error.submit)
    }
    }
    const handleOnChange = e => {
      setCourses({
        ...courses,
        [e.target.name]: e.target.value
      })
    }  
 */
  return (
    <div className="bodyEdit">
      <div className="tableInfo">
        <h1 className="titlesform text-center"> Bienvenido Administrador.</h1>
        <h3 className="titlesform">En la tabla a continuación, se muestran los cursos presentes en nuestra plataforma.
        Puede modificarlos o borrarlos. Si desea, puede agregar más actividades académicas con el botón <Button onClick={handleShow} className="createBtn"> <AiFillDiff /> Crear </Button>
        </h3>
      </div>
      <Table striped bordered hover size="sm">
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
          <Form  /* onSubmit={handleOnSubmit} */  > 
          <Form.Group> 
          <label>Nombre:</label>
          <input type="Text" /* value= {name} */ className="form-control" required ></input>
          </Form.Group>
         <Form.Group>
            <label>Categoria:</label>
            <select className="form-control" required>
            <option value=""> Seleccionar Categoria </option>
              {
                courses.map((response, index) => (
                  <option
                  key={index}
                  value={response.category}>
                  {response.category}
                  </option>
                ))
              }   

            </select>
          </Form.Group>
          <Form.Group>
            <label>Dirigido por:</label>
            <input className="form-control" type="text" /* value={directedBy} */ required></input>
          </Form.Group>
          <Form.Group>
            <label>Precio:</label>
            <input className="form-control" type="number" /* value={price}  */required></input>
          </Form.Group>
          <Form.Group>
            <label> Destacada: </label>
            <input className="form-control" /* value= {displayed} */ type="checkbox"></input>
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} /* onChange={handleOnChange} */>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AdminPage