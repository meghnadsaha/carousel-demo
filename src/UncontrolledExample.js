import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel 
              
    interval={1000}                   
    controls={true}                   
    indicators={true}                 
    pause="hover"                    
    wrap={true}                       
    touch={true}                       
    fade={false}                      
    slide={true}                      
    prevIcon={<span>prevIcon</span>}  
    nextIcon={<span>next</span>}      
    prevLabel="Go Back"              
    nextLabel="Next Slide"           
    data-bs-theme="light"            
    defaultActiveIndex={0}   >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://github.com/meghnadsaha/social-network-template/blob/master/src/assets/photos/1.jpg?raw=true"
          alt="First slide 2"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://github.com/meghnadsaha/social-network-template/blob/master/src/assets/photos/2.jpg?raw=true"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://github.com/meghnadsaha/social-network-template/blob/master/src/assets/photos/3.jpg?raw=true"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;