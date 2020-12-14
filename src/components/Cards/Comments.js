import { Card, Form, Button } from 'react-bootstrap';
import '../Cards/courseCard.css'


const Comments = ({ commentsForm }) => {
    const { id, name, email, body } = commentsForm;

    return (
        <>
            <div className="opinionContainer">
                    <div className="row align-items-center">
                        <div className="col-3 col-md-2 ml-0">
                            <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/120px-User_icon_2.svg.png" className="card-img rounded-circle " alt="" />
                        </div>
                        <div className=" infoComments col-10 ">
                            <Card.Body>
                                <Card.Title> {id}</Card.Title>
                                <Card.Title> {name}</Card.Title>
                                <p className="card-text">{body}</p>
                                <p className="card-text"> {email} </p>
                            </Card.Body>
                        </div>
                    </div>
            </div>

        </>
    )
}
export default Comments;