import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap';

import carousel1 from './assets/photos/1.jpg'//0
import carousel2 from './assets/photos/2.jpg'//1
import carousel3 from './assets/photos/3.jpg'//2
import carousel4 from './assets/photos/4.jpg'//3
import carousel5 from './assets/photos/5.jpg'//4
import carousel6 from './assets/photos/6.jpg'//5

function CustomCarousel() {
  return (
    <Carousel interval={2000}
    activeIndex={2}> {/* Automatic slide change every 2 seconds */}
      <CarouselItem>
        <img className="d-block w-100" src={carousel1}  alt="Slide 1" />
        <CarouselCaption>
          <h3>First Slide</h3>
          <p>Some description for the first slide.</p>
        </CarouselCaption>
      </CarouselItem>
      
      <CarouselItem>
      <img className="d-block w-100" src={carousel2}  alt="Slide 2" />
      <CarouselCaption>
          <h3>Second Slide</h3>
          <p>Some description for the second slide.</p>
        </CarouselCaption>
      </CarouselItem>

      <CarouselItem>
      <img className="d-block w-100" src={carousel3}  alt="Slide 3" />
        <CarouselCaption>
          <h3>Third Slide</h3>
          <p>Some description for the third slide.</p>
        </CarouselCaption>

        <CarouselItem>
      <img className="d-block w-100" src={carousel4}  alt="Slide 3" />
        <CarouselCaption>
          <h3>4 Slide</h3>
          <p>Some description for the 4 slide.</p>
        </CarouselCaption>
      </CarouselItem>
      </CarouselItem>
    </Carousel>
  );
}

export default CustomCarousel;