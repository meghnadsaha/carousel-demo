import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Carousel, Container } from 'react-bootstrap';



function NItemsPerSlideCarousel({ itemsPerSlide = 4, colContent,testimonials}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
    console.log(`Selected slide: ${selectedIndex}`);
  };

  // Function to group testimonials dynamically
  const groupTestimonials = (testimonials, itemsPerSlide) => {
    const groups = [];
    for (let i = 0; i < testimonials.length; i += itemsPerSlide) {
      const group = testimonials.slice(i, i + itemsPerSlide);
      groups.push(group);
    }
    return groups;
  };

  // Dynamically grouped testimonials
  const groupedTestimonials = groupTestimonials(testimonials, itemsPerSlide);

  // Calculate the grid size dynamically based on the number of items per slide
  const getColSize = (itemsPerSlide) => {
    if (itemsPerSlide <= 0 || itemsPerSlide > 6) {
      console.error("Error: itemsPerSlide must be greater than 0 and less than or equal to 6.");
      return null;
    }

    const colSize = 12 / itemsPerSlide;
    return colSize;
  };

  return (
 <Container className='py-2 '>
     <Carousel
    activeIndex={activeIndex} // Binding the activeIndex state to the Carousel
    onSelect={handleSelect} // Handling the selection of a new slide
    interval={1000} // Time interval in milliseconds for automatic slide transition
    controls={true} // Enabling the previous and next controls
    indicators={true} // Enabling the indicators (dots) below the carousel
    pause="hover" // Pausing the carousel when the user hovers over it
    wrap={true} // Enabling wrap around (i.e., looping back to the first slide after the last one)
    touch={true} // Enabling touch gestures on mobile devices
    fade={false} // Disabling fade effect between slides (it will slide instead)
    slide={true} // Enabling sliding transition between slides
    prevIcon={<span><FontAwesomeIcon icon={faArrowLeft} /></span>} // Customizing the previous slide icon (left arrow)
    nextIcon={<span><FontAwesomeIcon icon={faArrowRight} /></span>} // Customizing the next slide icon (right arrow)
    prevLabel="Go Back" // Label for the previous slide button
    nextLabel="Next Slide" // Label for the next slide button
    data-bs-theme="dark" // Setting the carousel theme to dark (Bootstrap 5 theme support)
    as="section" // Rendering the carousel as a <section> element (can be changed to any other element)
    className="testimonial-carousel" // Adding a custom class for styling

    >
      {groupedTestimonials.map((group, index) => (
        <Carousel.Item key={index}>
          <Row >
            {group.map((testimonial) => (
              <Col md={getColSize(itemsPerSlide)} key={testimonial.id}>
                {
                colContent && typeof colContent === 'function' && colContent(testimonial)
                ? colContent(testimonial) 
                : <p>No Column Content available</p>
                }


              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
 </Container>
  );
}

export default NItemsPerSlideCarousel;
