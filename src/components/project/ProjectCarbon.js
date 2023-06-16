import React from 'react';
import styles from './ProjectCarbon.module.css';
import data from '../textData';

const ProjectCarbon = ()=>{
    return (
        <>
            <div className={styles.box}>
                <div className={styles.imgCard}>
                    <div className={styles.imgBox}>
                        <img src={data.projects.projectCarbon.imgSrc}></img>
                        {/* <img src="/images/slide1.jpg"></img> */}
                    </div>
                    {/* <h2 className={styles.title}>{data.projects.projectWhat.title}</h2> */}
                </div>
                
                <div className={styles.textBox}>
                    <h2 className={styles.title}>{data.projects.projectWhat.title}</h2>
                    <p className={styles.p}>{data.projects.projectWhat.text}</p>
                </div>
                
            </div>
        </>
    
    )
}

export default ProjectCarbon;
