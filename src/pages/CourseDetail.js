//Dependencies
import { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import clientAxios from '../config/Axios';
import axios from 'axios';
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
    const [comment, setComment] = useState(null);
    const idCourse = match.params.id;
    const { name, category, description, image, directedBy, price } = course;


    useEffect(() => {
        const getCoursesById = async () => {
            try {
                const course = await clientAxios.get(`/courses/${idCourse}`);
                setCourse(course.data);
            } catch (error) {
                console.log(error.course)
            }
        }
        getCoursesById();
    }, []);
    
    const URL1 = 'https://jsonplaceholder.typicode.com/comments?postId=1'
    const getComment = async () => {
        const comments = await axios.get(URL1);
        setComment(comments.data[0]);
    }
    useEffect( ()=> {
        getComment();
    },[])
   
  
    
    return (
        <div className="bg-color1">
            <div className="bodyDetail ">
                <div className="infoDetail">
                    <h1>{name}</h1>
                    <h3>{description}</h3>
                    <p>Dictado por: <b> {directedBy}</b></p>
                    <p> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiOutlineStar /> (3.773) calificaciones de 12.800 estudiantes</p>
                    <Button className="detailBtn">Compartir</Button> <Button className="detailBtn"> Ingresar suscrpicion </Button>
                </div>
                <div className="cardDetail">
                    <Card style={{ width: '18rem', height: 'auto' }}>
                        <Card.Img className="" src = {image} />
                        <Card.Body>
                            <h1>$ {price} <small> <s> $9500</s></small> </h1>
                            <p>80% de descuento</p>
                            <p> <GiStopwatch /> ¡Esta oferta termina en <b> 12 horas!</b></p>
                            <Button className="btnBuy" > Comprar ahora</Button>
                        </Card.Body>
                        <Card.Footer>
                            <p>Este curso Incluye:</p>
                            <ul style={{ listStyle: 'none' }}>
                                <li> <AiOutlineYoutube /> 28 horas de vídeo bajo demanda</li>
                                <li> <AiOutlineCloudDownload /> 24 recursos descargables</li>
                                <li> <CgInfinity /> Acceso de por vida</li>
                                <li> <FcSmartphoneTablet /> Acceso en dispositivos móviles y TV</li>
                                <li> <FcApproval /> Certificado de finalización</li>
                            </ul>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
            <div className="card-twoDetail">
                <Card>
                    <Card.Body>
                        <h1> Lo que aprenderas </h1>
                        <li>Crear aplicaciones web profesionales</li>
                        <li>Muchas herramientas, ténicas y trucos</li>
                        <li>Conseguir trabajo como desarrollador ReactJS</li>
                        <li>Deploy a Firebase</li>
                        <li>Conocer a fondo ES6, React y Redux</li>
                        <li>Todos los Hooks: useState a fondo, useRef, useEffect, useDebugValue, useMemo, useCallback, useReducer, useContext</li>
                        <li>Aplicar patrones de diseño y mejores prácticas: TDD, SOLID, DRY</li>
                    </Card.Body>
                </Card>
            </div>
            <div className="requiredDetail">
                <h1> Requisitos </h1>
                <ul>
                    <li> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quisquam, veniam, fuga perspiciatis quam a blanditiis, ratione ducimus nesciunt adipisci unde delectus quo recusandae. Iusto qui impedit est quisquam optio! </li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quisquam, veniam, fuga perspiciatis quam a blanditiis, ratione ducimus nesciunt adipisci unde delectus quo recusandae. Iusto qui impedit est quisquam optio!</li>
                </ul>
                <h1>¿Para quien es este curso?</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quisquam, veniam, fuga perspiciatis quam a blanditiis, ratione ducimus nesciunt adipisci unde delectus quo recusandae. Iusto qui impedit est quisquam optio!</p>
            </div>
            <Button onClick={getComment}> Ver Opinones sobre este curso</Button>
        </div>


    )
}
export default CourseDetail;