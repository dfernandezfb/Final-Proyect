import {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { AiFillBulb, AiOutlineHeart } from 'react-icons/ai';
import clientAxios from "../../config/Axios"
import AuthContext from '../../context/auth/authContext'

//CSS
import  '../Cards/courseCard.css';



const CourseCard = ({ courseCard, dayHour}) => {
    const { id, category, directedBy, name, description, image, subscription } = courseCard;
    const {user} = useContext(AuthContext)
    const history = useHistory();
    const redirectToIndividualSuscriptions = () => {
        history.push(`/courses/detail/${id}`)
    }
   const CourseFav = async () => {
       try {
           const response = await clientAxios.put(`/users/${user._id}/favs`, {favs:  id})
           console.log(response);
        } catch(error) {
            console.log (error.response)
        }
              


   }
    return (
        <div >
            <Card className="courseCard" style={{ width: '16rem', height: '34rem' }}>
                <Card.Img className="courseImage" src={image} />
                <Card.Body >
                    <Card.Title className="infoCard" >{name}</Card.Title>
                    <Card.Text className="infoCard">
                        <p> <b>Category:</b>{category}</p>
                        <p> <b>Dictate by:</b> {directedBy}</p>
                        <p className="priceCourse"> <b>Subscription:</b>{subscription}</p>
                    </Card.Text>
                </Card.Body>
                <div>

                <Button className="infoBtn" onClick={() => redirectToIndividualSuscriptions()}> <AiFillBulb /> Read more </Button>
                <Button className="favBtn" onClick={CourseFav}> <AiOutlineHeart />  </Button>
                </div>
            </Card>
        </div>
    )
}

export default CourseCard