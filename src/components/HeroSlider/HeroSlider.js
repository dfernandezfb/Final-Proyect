import { Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";
import clientAxios from "../../config/Axios";
import '../HeroSlider/HeroSlider.css';

const HeroSlider = () => {
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
      <Carousel
        className="carouselMinSize"
        nextIcon={null}
        prevIcon={null}
        interval={3000}
      >
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img 
              className="d-block w-80 heroImage"
              src={image.image}
              alt={image.name}
            />
            <Carousel.Caption className="text-dark">
              <h3>{image.name}</h3>
              <span>{image.description}</span>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default HeroSlider;
