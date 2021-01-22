import { Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";
import clientAxios from "../../config/Axios";
import '../HeroSlider/HeroSlider.css';
import '../../styles/colors-palette.css'


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
        className="carouselMinSize bg-color4"
        controls={false}
        pause={false}
        interval={3000}
      >
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img 
              className="d-block w-80 imageCarousel"
              src={image.image}
              alt={image.name}
            />
            <Carousel.Caption className="text-withe text-carousel">
              <h2>{image.name}</h2>
              <span className="spanCarousel">{image.description}</span>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default HeroSlider;