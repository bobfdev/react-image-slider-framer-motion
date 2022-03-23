import {
  Carousel,
  InnerCarousel,
  ImageCarousel,
} from './AppElements';
import { useRef, useEffect, useState } from 'react';
import images from './images-data';

function App() {
  return (
    <Carousel>
      <InnerCarousel drag='x'>
        {images.map((image) => {
          return(
            <ImageCarousel>
              <img src={image} alt='' />
            </ImageCarousel>
          );
        })}
      </InnerCarousel>
    </Carousel>
  );
}

export default App;
