//Dependencies
import { useState, useEffect, useContext } from 'react';
import { AdminpageContext } from '../context/AdminpageContext';
//Components
import useModalLogin from "../components/Modals/useModalLogin";
import ModalLogin from '../components/Modals/modalLogin';
import CourseCard from '../components/Cards/CourseCard';
import CardCourse from '../components/Cards/CardCourse';

//CSS
import "../components/Modals/ModalLogin.css";


const Home = ({ }) => {
  const { courses, setCourses } = useContext(AdminpageContext);
  const { isShowing, toggle } = useModalLogin();
  return (
    <>
      <div className="homeBody">
      <div className="row">
        {
          courses.length === 0 ? 'No hay cursos disponibles' : (
            courses.map(courseCard => (
              <CourseCard key={courseCard.id} courseCard={courseCard} />
            ))
            )
          }
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center m-5">
          <CardCourse/>
        </div>
      </div>
    </div>
    </>

  );
};
export default Home;