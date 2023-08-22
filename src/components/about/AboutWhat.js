import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './AboutWhat.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import data from '../textData';

const AboutWhat = ()=>{
    const imageStyle = {
        maxHeight: "600px",
        objectFit: "cover",
        objectPosition: "center"
      };
    


    return (
        <>
            <div className={styles.whatBox}>
                <div className={styles.imgBox}>
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
                        src="/images/companyInfo/image01.jpg"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        style={imageStyle}
                        className="d-block w-100"
                        src="/images/companyInfo/image02.jpg"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        style={imageStyle}
                        className="d-block w-100"
                        src="/images/companyInfo/image03.jpg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    </Carousel>

                    {/* <img src={data.projects.projectWhat.imgSrc}></img> */}
                    {/* <img src="/images/slide1.jpg"></img> */}
                </div>
                <div className={styles.textBox}>
                    <h2 className={styles.title}>{data.about.title}</h2>
                    <h4 className={styles.h4}>{data.about.subtitle}</h4>
                    <p className={styles.p}>{data.about.text}</p>
                </div>
                
            </div>
        </>
    
    )
}

export default AboutWhat;

