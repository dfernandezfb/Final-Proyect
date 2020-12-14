//Dependencies
import { useState, useEffect, useContext } from "react";
import { AdminpageContext } from "../context/AdminpageContext";
//Components
import useModalLogin from "../components/Modals/useModalLogin";
import ModalLogin from "../components/Modals/modalLogin";
import CourseCard from "../components/Cards/CourseCard";
import HeroSlider from '../components/HeroSlider/HeroSlider'
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
    <div>
      {courses.map((carousel) => (
                <HeroSlider key={carousel.id} carousel={carousel} />
                      ))
 }
</div>
</>
    );
  }
}
export default Home;
