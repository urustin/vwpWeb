import React from 'react';
import styles from './ProjectPara.module.css';
import data from '../textData';




const Paragraph = ()=>{

    const textParts = data.projects.p.split('\n').map((part, index) => {
        if(index !== data.projects.p.length - 1){
            return (
                <React.Fragment key={index}>
                    {part}
                    {<br />}
                </React.Fragment>
            );
        }
        
    });

    return (
        <div id='pBox' className={styles.pBox}>
            {textParts}
        </div>
    )
}


const ProjectPara = () =>{
    return(
        <>

            <Paragraph/>

        </>
    )
}

export default ProjectPara;