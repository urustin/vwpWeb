import React from 'react';
import styles from './ProjectPara.module.css';
import data from '../textData';
import Link from 'next/link';


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

            <span>Email </span>
            <Link href="mailto:sales@vwp.com.au">
                sales@vwp.com.au
            </Link>
            <br/>
            Phone +61 3 9369 0499
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