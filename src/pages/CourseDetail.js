//Dependencies
import { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import clientAxios from '../config/Axios';
import Comments from '../components/Cards/Comments';
//Icons
import { AiOutlineYoutube, AiOutlineCloudDownload, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { FcApproval, FcSmartphoneTablet } from 'react-icons/fc'
import { CgInfinity } from 'react-icons/cg'
import {GiStopwatch} from 'react-icons/gi'
//Css
import  '../styles/courseDetail.css';
import  '../styles/colorspallete.css';


const CourseDetail = ({ match }) => {
    const [course, setCourse] = useState([]);
    const [comment, setComment] = useState([]);
    const idCourse = match.params.id;

    const { name, category, description, image, directedBy, subscription } = course;

    useEffect(() => {
        const getCoursesById = async (id) => {
            try {
                const course = await clientAxios.get(`/courses/id/${id}`);
                setCourse(course.data);
            } catch (error) {
                console.log(error.course)
            }
        }
        getCoursesById(idCourse);
    });

    useEffect(()=> {
       const getComment = async () => { 
           try {
               const comments = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
               setComment(comments.data);
           } catch(error) {
               console.log(error)
           }
        }
            getComment(); 
    },[]);
    
    
    return (
        <div className="bg-color1 containerDetail">
            <div className="bodyDetail ">
                <div className="infoDetail">
                    <h1>{name}</h1>
                    <h3>{description}</h3>
                    <p>Dictated by: <b> {directedBy}</b></p>
                    <p> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiOutlineStar /> (3.773) qualifications from 12.800 students</p>
                    <Button className="detailBtn">Share</Button> <Button className="detailBtn"> Suscribe </Button>
                </div>
                <div className="cardDetail row">
                    <Card style={{ width: '18rem', height: 'auto' }}>
                        <Card.Img className="" src = {image} />
                        <Card.Body>
                            <h1> {subscription} <small> <s> $9500</s></small> </h1>
                            <p>80% de descuento</p>
                            <p> <GiStopwatch /> ¡Esta oferta termina en <b> 12 horas!</b></p>
                            <Button className="btnBuy" > Comprar ahora</Button>
                        </Card.Body>
                        <Card.Footer className="benefitsCourse ">
                            <p>Este curso Incluye:</p>
                            <ul style={{ listStyle: 'none' }}>
                                <li> <AiOutlineYoutube /> 28 hours off on demand video</li>
                                <li> <AiOutlineCloudDownload /> 24 downloadable resources</li>
                                <li> <CgInfinity /> Lifetime access</li>
                                <li> <FcSmartphoneTablet /> You can access from mobile devices</li>
                                <li> <FcApproval /> Certificate of completion</li>
                            </ul>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
            <div className="card-twoDetail">
                <Card>
                    <Card.Body>
                        <h1> You will learn </h1>
                        <li>To create profesional web application</li>
                        <li>A lot of tools, techniques and tricks</li>
                        <li>Get a job as a ReactJS developer</li>
                        <li>Deploy a Firebase</li>
                        <li>Get to know ES6, React and Redux thoroughly</li>
                        <li>All the Hooks: useState, useRef, useEffect, useDebugValue, useMemo, useCallback, useReducer, useContext</li>
                        <li>Apply design patterns and best practices: TDD, SOLID, DRY</li>
                    </Card.Body>
                </Card>
            </div>
            <div className="requiredDetail">
                <h1> Requirements</h1>
                <ul>
                    <li> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quisquam, veniam, fuga perspiciatis quam a blanditiis, ratione ducimus nesciunt adipisci unde delectus quo recusandae. Iusto qui impedit est quisquam optio! </li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quisquam, veniam, fuga perspiciatis quam a blanditiis, ratione ducimus nesciunt adipisci unde delectus quo recusandae. Iusto qui impedit est quisquam optio!</li>
                </ul>
                <h1>Who is this course for?</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quisquam, veniam, fuga perspiciatis quam a blanditiis, ratione ducimus nesciunt adipisci unde delectus quo recusandae. Iusto qui impedit est quisquam optio!</p>
            </div>
            <div className="opinionCards">
                <h1>Opiniones sobre este curso</h1>
                {
          comment.length === 0 ? 'No hay cursos disponibles' : (
            comment.map((commentsForm, index) => (
              <Comments key={index} commentsForm={commentsForm} />
            ))
            )
          }
            </div>
          <div className='commentsForm'>
              <h2 style = {{textAlign: 'center'}}>Añadir un comentario</h2>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Dirección Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted" required>
                          Introduzca Su nombre de usuario o email
    </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Comentario</Form.Label>
                        <Form.Control type="text-area" placeholder="Text" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Anadir Comentario
  </Button>
                </Form>
            </div>
        </div>


    )
}
export default CourseDetail;