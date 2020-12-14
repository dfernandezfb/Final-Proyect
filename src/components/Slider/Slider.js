import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import Dots from './Dots';
import clientAxios from '../../config/Axios';

const SliderCSS = css`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`

const Slider = () => {

  const getWidth = () => window.innerWidth;
  const [style, setStyle] = useState({
    translate: 0,
    transition: 0.45,
    activeIndex: 0
  });
  const [images, setImages] = useState([]);
  const { translate, transition, activeIndex } = style;

  const nextSlide = () => {
    if(activeIndex === images.length - 1) {
      return setStyle({
        ...style,
        translate: 0,
        activeIndex: 0
      })
    }
    setStyle({
      ...style,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth()
    })
  }

  const prevSlide = () => {
    if(activeIndex === 0) {
      return setStyle({
        ...style,
        translate: (images.length - 1) * getWidth(),
        activeIndex: images.length - 1
      })
    }
    setStyle({
      ...style,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth()
    })
  }

  useEffect(() => {
    const getFavsImages = async () => {
      const response = await clientAxios('/courses/featured?featured=true');
      console.log(response);
    }
    getFavsImages();
  }, [])

  return (
    <div css={SliderCSS}>
      <SliderContent 
        translate={translate}
        transition={transition}
        width={getWidth() * images.length}
      >
        {
          images.map((image, index) => (
            <Slide key={index} content={image} />
          ))
        }
      </SliderContent>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
      <Dots slides={images} activeIndex={activeIndex} />
    </div>
  );
}
 
export default Slider;