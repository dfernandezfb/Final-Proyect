
import { Card, Button } from 'react-bootstrap';
import { AiFillBulb } from 'react-icons/ai';
//CSS
import courseCard from '../Cards/courseCard.css'
const CourseCard = ({ courseCard }) => {

    const { category, directedBy, name, description, image, price } = courseCard;
    return (
        <div className="courseCard">
            <div className=" ">
                <Card style={{ width: '18em'}}>
                    <Card.Img src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                            <p> <b>Categoria :</b>{category}</p>
                            <p> <b>Dictado por :</b> {directedBy}</p>
                            <p> <b>Precio :</b>{price}</p>
                        </Card.Text>
                        <Button variant="primary"> <AiFillBulb /> Mas información </Button>
                    </Card.Body>
                </Card>
            </div>
        </div>

    )
}

export default CourseCard