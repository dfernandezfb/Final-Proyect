
import { useState, useEffect, useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { AdminpageContext } from '../context/AdminpageContext';
import "../components/Modals/ModalLogin.css";
import useModalLogin from "../components/Modals/useModalLogin";
import ModalLogin from '../components/Modals/modalLogin';
import CourseCard from '../components/Cards/CourseCard';


const Home = ({ }) => {
    const { courses, setCourses } = useContext(AdminpageContext);
    const { isShowing, toggle } = useModalLogin();
    return (
        <>
            <div className="modalLoginApp">
                <button className="buttonLogin button-default" onClick={toggle}> Log In </button>
                <ModalLogin
                    isShowing={isShowing}
                    hide={toggle}
                />
            </div>
            <Card>
            {
            courses.length === 0 ? 'No hay cursos disponibles' : (
              courses.map(courseCard => (
                <CourseCard key={courseCard.id} courseCard={courseCard} />
              ))
            )
          } 
            </Card>
        </>

    );
};
export default Home;