import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from "./Slider.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';



const Slider = () => {
  const imageStyle = {
    maxHeight: "600px",
    objectFit: "cover",
    objectPosition: "center"
  };
  const titleAnimation = ()=>{
    document.querySelector("#titleAni").classList.add("none");
    
    if(window.scrollY>50){
      document.querySelector("#titleAni").classList.remove("none");
      // console.log("aaaa");
    }else{
      document.querySelector("#titleAni").classList.add("none");
      // console.log(window.scrollY);
    }

  }
  useEffect(() => {
    titleAnimation();
    window.addEventListener('scroll', titleAnimation);
    return () => window.removeEventListener('scroll', titleAnimation);
  }, []);

  return (
    <>
    <div className={styles.textBox} id='titleAni'>
        <h1 className={styles.h1}>VWP</h1>
        <h4 className={styles.h4}>Victoria Wool Processors</h4>
    </div>
    <Carousel 
    className={styles.carousel} 
    interval={3000} 
    nextIcon={null} 
    prevIcon={null}
    nextLabel={""}
    prevLabel={""}
    indicators={""}
    fade={true}
    touch={true}
    wrap={true}
    >
      
      
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
    </>
  );
};

export default Slider;