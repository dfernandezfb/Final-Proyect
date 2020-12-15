//Dependencies
import { useState, useEffect, useContext } from "react";
import { AdminpageContext } from "../context/AdminpageContext";
//Components
import CourseCard from '../components/Cards/CourseCard';
<<<<<<< HEAD
import HeroSlider from '../components/HeroSlider/HeroSlider';
//CSS
import "../components/Modals/ModalLogin.css";

const Home = ({ userLogged }) => {
  const { courses, setCourses } = useContext(AdminpageContext);
  const { isShowing, toggle } = useModalLogin();
  if (userLogged) {
    return (
      <>
        <div className="homeBody">
          <div className="modalLoginApp">
            <button className="buttonLogin button-default" onClick={toggle}>
              {" "}
              Log In{" "} 
            </button>
            <ModalLogin isShowing={isShowing} hide={toggle} />
          </div>
          <div className="row">
            {courses.length === 0
              ? "No hay cursos disponibles"
              : courses.map((courseCard) => (
                  <CourseCard key={courseCard.id} courseCard={courseCard} />
                ))}
          </div>
        </div>
      </>
    );
  } else {
    return(
    <>
      <HeroSlider />
=======
import Slider from '../components/Slider/Slider';

const Home = ({ }) => {
  const { courses, setCourses } = useContext(AdminpageContext);
  return (
    <>
      <Slider />
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
    </div>
>>>>>>> e8d003f8923c6f1a36e371a51500b60e2ea1b9da
    </>

  );
};
}
export default Home;
