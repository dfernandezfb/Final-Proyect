import {Carousel} from 'react-bootstrap'


const HeroSlider = ({carousel}) => {
    const {image, name, description} = carousel
    return (
        <>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image}
      alt={name}
    />
    <Carousel.Caption>
      <h3>{name}</h3>
      <p>{description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image}
      alt={name}
    />

    <Carousel.Caption>
      <h3>{name}</h3>
      <p>{description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt={name}
    />

    <Carousel.Caption>
      <h3>{name}</h3>
      <p>{description}</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</>
)
}

export default HeroSlider;