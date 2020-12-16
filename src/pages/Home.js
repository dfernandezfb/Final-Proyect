//Dependencies
import { useContext } from "react";
import { AdminpageContext } from "../context/AdminpageContext";
//Components
import CourseCard from '../components/Cards/CourseCard';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import Banner from '../components/Banner/Banner';
//CSS
import "../components/Modals/ModalLogin.css";
import "../components/Banner/Banner.css"

const Home = () => {
  const { courses, setCourses } = useContext(AdminpageContext);
    return (
      <>
        <div className="homeBody">
          <HeroSlider />
          <div className="row cardCourse">
            {courses.length === 0
              ? "No hay cursos disponibles"
              : courses.map((courseCard, index) => (
                  <CourseCard key={index} courseCard={courseCard} />
                ))}
          </div>
        </div>
        <Banner />
      </>
    );
}
export default Home;
