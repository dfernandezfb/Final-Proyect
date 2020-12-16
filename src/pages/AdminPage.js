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
    comments: [],
  })
  const { name, directedBy, displayed, category, description, image, comments, subscription, featured } = newCourse;

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
    getCourses();
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addCourse(newCourse);
    handleClose();
  }


  return (
    <div className="bodyEdit main-content">
      <div className="tableInfo">
        <h1 className="titlesform text-center"> Welcome Admin!</h1>
        <h3 className="titlesform">
          The table below shows the courses present on our platform.
        You can modify or delete them. If you want, you can add more academic activities with the button <Button onClick={handleShow} className="createBtn"> <AiFillDiff /> Create </Button>
        </h3>
      </div>
      <div className="contentTable" >
        <Table striped bordered hover size="sm" className="tableContent  " responsive>
          <thead>
            <tr>
              <th className="text-center dataC">Course name</th>
              <th className="text-center dataC">Category</th>
              <th className="text-center dataC">Dictate by</th>
              <th className="text-center dataC">Highligthed</th>
              <th className="text-center dataC">Subscription</th>
              <th className="text-center dataC">Actions</th>
            </tr>
          </thead>
          <tbody className="bodyEdit">
            {
              courses.length === 0 ? 'No courses available' : (
                courses.map((course, index) => (
                  <Course key={index} course={course} />
                ))
              )
            }
          </tbody>
        </Table >
      </div>
      <Modal show={show} onHide={handleClose}>
        <Form className=" createForm" onSubmit={handleOnSubmit}  >
          <Modal.Header closeButton>
            <Modal.Title>Bienvenido. Puede crear un nuevo curso desde este modal. Complete los campos a continuación:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <label>Name:</label>
              <input type="Text"
                name="name"
                value={name}
                onChange={handleOnChange}
                className="form-control" required ></input>
            </Form.Group>
            <Form.Group>
              <label>Category: </label>
              <input className="form-control" type="text"
                name="category"
                value={category}
                onChange={handleOnChange}
                required></input>
            </Form.Group>
            <Form.Group>
              <label> DirectedBy :</label>
              <input className="form-control"
                type="text"
                name="directedBy"
                value={directedBy}
                onChange={handleOnChange}
                required></input>
            </Form.Group>
            <Form.Group>
              <label> URL image: </label>
              <input className="form-control"
                name="image" value={image}
                onChange={handleOnChange}
                type="text"></input>
            </Form.Group>
            <Form.Group>
              <label> Description: </label>
              <input className="form-control" name="description" value={description}
                onChange={handleOnChange}
                type="textarea"></input>
            </Form.Group>
            <Form.Group>
              <label>Type of Subscription </label>
              <input className="form-control" type="text" placeholder="Free, Gold o Diamond" name="subscription" value={subscription}
                onChange={handleOnChange}
                required></input>
            </Form.Group>
            <Form.Group>
              <label> Recent opinions about the course: </label>
              <input className="form-control" name="comments" value={comments}
                onChange={handleOnChange}
                type="textarea"></input>
            </Form.Group>
            <Form.Check>
              <label> Highligthed: </label>
              <input className="form-control"
                label="featured"
                name="featured"
                checked={featured}
                onChange={(e) =>
                  setnewCourse({ ...newCourse, featured: e.target.checked })
                }
                type="checkbox"></input>
            </Form.Check>
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