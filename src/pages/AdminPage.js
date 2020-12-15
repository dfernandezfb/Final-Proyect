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
        <h1 className="titlesform text-center"> Welcome Admin!</h1>
        <h3 className="titlesform"> 
The table below shows the courses present on our platform.
        You can modify or delete them. If you want, you can add more academic activities with the button <Button onClick={handleShow} className="createBtn"> <AiFillDiff /> Create </Button>
        </h3>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="text-center dataC">Course name</th>
            <th className="text-center dataC">Category</th>
            <th className="text-center dataC">Dictate by</th>
            <th className="text-center dataC">Published</th>
            <th className="text-center dataC">Price</th>
            <th className="text-center dataC">Actions</th>
          </tr>
        </thead>
        <tbody className="bodyEdit">
          {
            courses.length === 0 ? 'No courses available' : (
              courses.map(course => (
                <Course key={course.id} course={course} />
              ))
            )
          }
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome! You can create a new course from here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form  /* onSubmit={handleOnSubmit} */  > 
          <Form.Group> 
          <label>Name:</label>
          <input type="Text" /* value= {name} */ className="form-control" required ></input>
          </Form.Group>
         <Form.Group>
            <label>Category:</label>
            <select className="form-control" required>
            <option value=""> Select category </option>
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
            <label>Directed by:</label>
            <input className="form-control" type="text" /* value={directedBy} */ required></input>
          </Form.Group>
          <Form.Group>
            <label>Price:</label>
            <input className="form-control" type="number" /* value={price}  */required></input>
          </Form.Group>
          <Form.Group>
            <label> Featured: </label>
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