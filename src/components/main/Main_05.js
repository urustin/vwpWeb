import React from 'react';
import styles from './Main_05.module.css';
import data from '../textData';
import { text } from '@fortawesome/fontawesome-svg-core';




const Paragraph = ()=>{

    const textParts = data.index.p.split('\n').map((part, index) => {
        if(index !== data.index.p.length - 1){
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


const Main_05 = () =>{
    return(
        <>

            <Paragraph/>

        </>
    )
}

export default Main_05;