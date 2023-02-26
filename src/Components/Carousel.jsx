import { Carousel } from 'react-bootstrap';

import Carousel1 from '../img/Carousel1.jpg';
import Carousel2 from '../img/Carousel2.jpg';
import Carousel3 from '../img/Carousel3.jpg';

export default function LandingCarousel() {
  return (
    <div>
      <Carousel fade interval={2500}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ Carousel1 }
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ Carousel2 }
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ Carousel3 }
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
