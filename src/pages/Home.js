import React from 'react'
import {Carousel, Button} from 'react-bootstrap';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
// import Form from './Form';
import Services from './services';



function Home() {
  return (
    <>
    <Carousel id='home'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Choco CupCakes</h3>
          <p>CupCakes dengan Choco Cream dan Marshmallow diatasnya</p>
          <Button href="Form" variant="primary">buy</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Oreo CupCakes</h3>
          <p>CupCakes Oreo Best Seller Kami</p>
          <Button href="Form" variant="primary">buy</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Rainbow CupCakes</h3>
          <p>
            CupCakes dengan Rainbow Sprinkle
          </p>
          <Button href="Form" variant="primary">buy</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   <Services />
    </>
  )
}

export default Home
