import {Card} from 'react-bootstrap';

const Comments = ({comments}) => {

    return (
        <div >
        <Card className="courseCard" style={{ width: '18rem', height: '5rem' }}>
            <Card.Body >
                <Card.Title className="infoCard" ></Card.Title>
                <Card.Text className="infoCard"> 
                    <p> <b>Categoria :</b></p>
                    <p> <b>Dictado por :</b> </p>
                    <p className="priceCourse"> <b>Precio:</b></p>
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
    )
}
export default Comments;