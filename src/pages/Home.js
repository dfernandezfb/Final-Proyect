
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
    <div className="homeBody">
      <div className="modalLoginApp">
        <button className="buttonLogin button-default" onClick={toggle}> Log In </button>
        <ModalLogin
          isShowing={isShowing}
          hide={toggle}
          />
      </div>
      <div className="row">
        {
          courses.length === 0 ? 'No hay cursos disponibles' : (
            courses.map(courseCard => (
              <CourseCard key={courseCard.id} courseCard={courseCard} />
            ))
            )
          }
      </div>
    </div>
    </>

  );
};
export default Home;