//Dependencies
import { useState, useEffect, useContext } from 'react';
import { AdminpageContext } from '../context/AdminpageContext';
//Components
import CourseCard from '../components/Cards/CourseCard';
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
    </>

  );
};
export default Home;