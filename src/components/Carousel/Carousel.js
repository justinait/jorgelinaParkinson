import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

function CarouselFade() {
  return (
    <Carousel fade className='carousel'>
      <Carousel.Item className='carouselItem'>
        <img
          className="d-block w-100"
          src='./carousel/landscape(24).jpg'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img
          className="d-block w-100"
          src='./carousel/humanFigure (31).jpg'
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img
          className="d-block w-100"
          src='./carousel/humanFigure (47).jpg'
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
  );
}

export default CarouselFade;