//Dependencies
import { useContext } from "react";
import { AdminpageContext } from "../context/AdminpageContext";
//Components
import CourseCard from '../components/Cards/CourseCard';
import HeroSlider from '../components/HeroSlider/HeroSlider';
//CSS
import "../components/Modals/ModalLogin.css";

const Home = () => {
  const { courses, setCourses } = useContext(AdminpageContext);

    return (
      <>
        <div className="homeBody">
          <HeroSlider />
          <div className="row">
            {courses.length === 0
              ? "No hay cursos disponibles"
              : courses.map((courseCard) => (
                  <CourseCard key={courseCard._id} courseCard={courseCard} />
                ))}
          </div>
        </div>
      </>
    );
}
export default Home;
