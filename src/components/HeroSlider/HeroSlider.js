import { Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";
import clientAxios from "../../config/Axios";

const HeroSlider = ({ carousel }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getFavsImages = async () => {
      const response = await clientAxios.get("/courses/featured?featured=true");
      setImages(response.data);
    };
    getFavsImages();
  }, []);

  console.log(images);
  return (
    <>
      <Carousel>
        {images.map((image) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
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
