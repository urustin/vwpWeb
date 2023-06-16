import React from 'react';
import styles from './ProjectGreasy.module.css';
import data from '../textData';

const ProjectGreasy = ()=>{
    return (
        <>
            <div className={styles.box}>
                <div className={styles.imgBox}>
                    <img src={data.projects.projectGreasy.imgSrc}></img>
                    {/* <img src="/images/slide1.jpg"></img> */}
                </div>
                <div className={styles.textBox}>
                    <h2 className={styles.title}>{data.projects.projectWhat.title}</h2>
                    <p className={styles.p}>{data.projects.projectWhat.text}</p>
                </div>
                
            </div>
        </>
    
    )
}

export default ProjectGreasy;
