import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = () => {
  const imageStyle = {
    maxHeight: "600px",
    objectFit: "cover",
    objectPosition: "center"
  };
  const nextIcon = <span style={{ color: 'red', fontSize: '2em' }}></span>;
  const prevIcon = <span style={{ color: 'blue', fontSize: '2em' }}>P</span>;

  return (
    <Carousel nextIcon={<span />} prevIcon={<span />}>
      <Carousel.Item>
        <img
          style={imageStyle}
          className="d-block w-100"
          src="/images/slide1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={imageStyle}
          className="d-block w-100"
          src="/images/slide2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={imageStyle}
          className="d-block w-100"
          src="/images/slide3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;