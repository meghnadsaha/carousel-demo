
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UncontrolledExample from "./UncontrolledExample";
import CustomCarousel from "./CustomCarousel";
import NItemsPerSlideCarousel from "./NItemsPerSlideCarousel";
import { Button, Card, Carousel } from "react-bootstrap";

import carousel1 from './assets/photos/1.jpg';
import carousel2 from './assets/photos/2.jpg';
import carousel3 from './assets/photos/3.jpg';
import carousel4 from './assets/photos/4.jpg';
import carousel5 from './assets/photos/5.jpg';
import carousel6 from './assets/photos/6.jpg';

function App() {

  const colContent = (testimonial) => (
    <div>
      <img
        className="d-block w-100 carousel-img"
        src={testimonial.imageUrl}
        alt={`Testimonial ${testimonial.id}`}
      />
      <Carousel.Caption>
        <h3>{`Testimonial ${testimonial.id}`}</h3>
        <p>{testimonial.text}</p>
      </Carousel.Caption>
    </div>
  );

  const colContent2 = (testimonial) => (
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  src={testimonial.imageUrl}   alt={`Testimonial ${testimonial.id}`}/>
      <Card.Body>
        <Card.Title>{`Testimonial ${testimonial.id}`}</Card.Title>
        <Card.Text>
        {testimonial.text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );

  const testimonials = [
    { id: 1, imageUrl: carousel1, text: "This is the first testimonial text." },
    { id: 2, imageUrl: carousel2, text: "This is the second testimonial text." },
    { id: 3, imageUrl: carousel3, text: "This is the third testimonial text." },
    { id: 4, imageUrl: carousel4, text: "This is the fourth testimonial text." },
    { id: 5, imageUrl: carousel5, text: "This is the fifth testimonial text." },
    { id: 6, imageUrl: carousel6, text: "This is the sixth testimonial text." },
    { id: 7, imageUrl: carousel3, text: "This is the seventh testimonial text." },
    { id: 8, imageUrl: carousel3, text: "This is the eighth testimonial text." },
  ];

  return (
    <div className="App">
      <NItemsPerSlideCarousel itemsPerSlide={4} colContent={colContent} testimonials={testimonials}/>
    </div>
  );
}

export default App;
