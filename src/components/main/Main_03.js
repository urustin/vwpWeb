import React from 'react';
import styles from './Main_03.module.css';
import data from '../textData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal, faCalendarDays, faHome } from '@fortawesome/free-solid-svg-icons'


const ImageBox = ()=>{
    return(
        <>
        <div className={styles.imageBox}>image</div>
        </>
    )

    
}

const TextBox = () =>{
    return(
        <>
        <div className={styles.textBox}>
            <h2>{data.main03.h2}</h2>
            <div className={styles.horizontalLine}></div>
            <p>{data.main03.p}</p>
            {
                data.main03.bullets.map(item=>{
                    return(
                        <div className={styles.bulletBox}>
                            <div className={styles.bulletIcon}></div>
                            <div className={styles.bulletText}>{item.text}</div>
                        </div>
                        
                    );

                    })
            }
        </div>
        
        </>
    )

}


const BigBox = () => {
    return(
        <>
        <div className={styles.bigBox}>
            <ImageBox/>
            <TextBox/>

    
        </div>
        </>

    )


}

const Main_03 = () =>{
    return(
        <>
        
            <BigBox/>
        
        
        </>
    )
}

export default Main_03;