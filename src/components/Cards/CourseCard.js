import { useHistory } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { AiFillBulb, AiOutlineHeart } from 'react-icons/ai';
//CSS
import courseCard from '../Cards/courseCard.css'
import logoclaro from '../../images/logorecortadoclaro.png'
import logooscuro from '../../images/logorecortado.png'

const CourseCard = ({ courseCard, dayHour}) => {
    const { id, category, directedBy, name, description, image, price } = courseCard;

    const history = useHistory();
    const redirectToIndividualSuscriptions = () => {
        history.push(`/courses/detail/${id}`)
    }
    if(dayHour>=7 && dayHour<19)
    {
        var logo= logooscuro;
    } else
    {
        var logo= logoclaro;
    }
    return (
        <div >
            <Card className="courseCard" style={{ width: '18rem', height: '36rem' }}>
                <Card.Img className="courseImage" src={logo} />
                <Card.Body >
                    <Card.Title className="infoCard" >{name}</Card.Title>
                    <Card.Text className="infoCard">
                        {description}
                        <p> <b>Categoria :</b>{category}</p>
                        <p> <b>Dictado por :</b> {directedBy}</p>
                        <p className="priceCourse"> <b>Precio :</b>${price}</p>
                    </Card.Text>
                </Card.Body>
                <div>

                <Button className="infoBtn" onClick={() => redirectToIndividualSuscriptions()}> <AiFillBulb /> Mas información </Button>
                <Button className="favBtn"> <AiOutlineHeart />  </Button>
                </div>
            </Card>
        </div>
    )
}

export default CourseCard