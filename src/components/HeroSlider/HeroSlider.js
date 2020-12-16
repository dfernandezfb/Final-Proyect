import { Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";
import clientAxios from "../../config/Axios";
import '../HeroSlider/HeroSlider.css';
import Banner from '../Banner/Banner'

const HeroSlider = ({ carousel }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getFavsImages = async () => {
      const response = await clientAxios.get("/courses/featured?featured=true");
      setImages(response.data);
    };
    getFavsImages();
  }, []);

  return (
    <>
      <Carousel interval={3000}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <span aria-hidden="true" className="carousel-control-next-icon" />	
            <img 
              className="d-block w-80"
              src={image.image}
              alt={image.name}
            />
            <Carousel.Caption className="text-dark">
              <h3>{image.name}</h3>
              <span>{image.description}</span>
            </Carousel.Caption>
            <span aria-hidden="true" className="carousel-control-prev-icon" />
          </Carousel.Item>
        ))}
      </Carousel>
      <Banner />
    </>
  );
};

export default HeroSlider;