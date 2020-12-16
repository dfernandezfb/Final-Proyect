//Dependencies
import {useEffect, useState} from 'react';
import {Form} from 'react-bootstrap';
import clientAxios from '../../config/Axios';
import {useHistory} from 'react-router-dom';
//css
import '../Modals/Courses.css';

const EditCourse = ({match}) => {
const [course, setCourse]= useState({
  name: '',
  category: '',
  directedBy: '',
  image: 'sss',
  description: 'ss',
  displayed: false,
  subscription: '',
  featured: false,
  comments : [],
  })
  const {  name, directedBy, displayed, category, description, image,comments, subscription } = course;

const history = useHistory();



useEffect(()=> {
  const getCoursesById = async(_id)=> {
    try {
      const response = await clientAxios.get(`/courses/id/${_id}`);
      console.log(response);
      setCourse(response.data);
    } catch (error){
      console.log(error.response)
    }
  }
  getCoursesById(match.params.id);
},[]);

const handleOnChange = e => {
  setCourse({
    ...course,
    [e.target.name]: e.target.value
  })
}
//Send Method PUT


const handleOnSubmit = async (e) => {
  e.preventDefault();
  try{
  await clientAxios.put('/courses/:id', course);
  history.push('/adminpage');
} catch (error) {
console.log(error.response)
}
}



    return (
      <>
      <div className="row justify-content-center bodyEdit">
      <div className="col-md-8">
        <div className="card-transparent">
          <div className="card-body bodyForm">
            <h2 className="text-center mb-4 titlesform">
              Edit course
            </h2>
            <Form
              onSubmit={handleOnSubmit}>
              <div >
                <label className="titlesform">Course name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del curso"
                  name="name"
                  value={name}
                  onChange={handleOnChange}
                />
              </div>
              <div >
                <label className="titlesform">Category:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Categoria del curso"
                  name="category"
                  value={category}
                  onChange={handleOnChange}
                />
              </div>
              <div >
                <label className="titlesform" >Dictate by:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Director del curso"
                  name="directedBy"
                  value={directedBy}
                  onChange={handleOnChange}
                />
              </div>
              <div >
                <label className="titlesform" >Cost:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Free, Gold or Diamond"
                  name="subscription"
                  value={subscription}
                  onChange={handleOnChange}
                />
              </div> 
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100 btnForm">
              Save changes</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  
      </>
    );
  }

export default EditCourse;