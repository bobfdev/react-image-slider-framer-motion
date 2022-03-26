import {
  Carousel,
  InnerCarousel,
  ImageCarousel,
} from './AppElements';
import { useRef, useEffect, useState } from 'react';
import images from './images-data';

function App() {
  const [width, setWidth] = useState(0);
  const carousel = useRef()

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <Carousel ref={carousel}>
      <InnerCarousel 
        drag='x'
        dragConstraints={{ right: 0, left: -width }}
      >
        {images.map((image) => {
          return(
            <ImageCarousel key={image}>
              <img src={image} alt='' />
            </ImageCarousel>
          );
        })}
      </InnerCarousel>
    </Carousel>
  );
}

export default App;
