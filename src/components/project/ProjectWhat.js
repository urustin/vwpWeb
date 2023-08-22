import React from 'react';
import styles from './ProjectWhat.module.css';
import data from '../textData';
import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectWhat = ()=>{
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
                    {/* <img src={data.projects.projectWhat.imgSrc}></img> */}
                    {/* <img src="/images/slide1.jpg"></img> */}
                </div>
                <div className={styles.textBox}>
                    <h2 className={styles.title}>{data.projects.projectWhat.title}</h2>
                    <h4 className={styles.h4}>{data.projects.projectWhat.subtitle}</h4>
                    <p className={styles.p}>{data.projects.projectWhat.text}</p>
                </div>
                
            </div>
        </>
    
    )
}

export default ProjectWhat;
