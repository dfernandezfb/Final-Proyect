//Dependencies
import {useEffect, useState} from 'react';
import {Form} from 'react-bootstrap';
import clientAxios from '../../config/Axios';
import {useHistory} from 'react-router-dom';
//css
import '../Modals/Courses.css';

const EditCourse = ({match}) => {
const [course, setCourse]= useState({
    name:'',
    category:'',
    directedBy:'',
    displayed:true,
    price:''
  })
const {category, directedBy, name, displayed,price} = course;
const idCourse= match.params.idCourse;
const history = useHistory();

useEffect(()=> {
  const getCoursesById = async()=> {
    try {
      const response = await clientAxios.get(`/courses/${idCourse}`);
      setCourse(response.data);
    } catch (error){
      console.log(error.response)
    }
  }
  getCoursesById();
},[]);

const handleOnChange = e => {
  setCourse({
    ...course,
    [e.target.name]: e.target.value
  })
}

const handleOnSubmit = async e => {
e.preventDefault();
try{
  await clientAxios.put(`/courses/${idCourse}`, course);
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
              Editar Curso
            </h2>
            <Form
              onSubmit={handleOnSubmit}>
              <div >
                <label className="titlesform">Nombre del curso:</label>
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
                <label className="titlesform">Categoria:</label>
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
                <label className="titlesform" >Dirigido por:</label>
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
                <label className="titlesform" >Costo del curso:</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio del curso USD"
                  name="price"
                  value={price}
                  onChange={handleOnChange}
                />
              </div> 
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100 btnForm">
              Guardar cambios</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  
      </>
    );
  }

export default EditCourse;