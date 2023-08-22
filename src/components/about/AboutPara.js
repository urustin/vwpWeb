import React from 'react';
import styles from './AboutPara.module.css';
import data from '../textData';




const Paragraph = ()=>{

    const textParts = data.about.p.split('\n').map((part, index) => {
        if(index !== data.about.p.length - 1){
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


const AboutPara = () =>{
    return(
        <>

            <Paragraph/>

        </>
    )
}

export default AboutPara;