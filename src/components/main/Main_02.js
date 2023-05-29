import React from 'react';
import styles from './Main_02.module.css';
import data from '../textData';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal, faCalendarDays, faHome } from '@fortawesome/free-solid-svg-icons'

const iconList = {
    faMedal: faMedal,
    faCalendarDays: faCalendarDays,
    faWorker: faHome,
  };



const IconBox = ({title,text,url}) => {
    // console.log(url);
    let icon = iconList[url];
  return (
    <div className={styles.iconBox}>
      <div className={styles.iconRound}>
      <FontAwesomeIcon icon={icon} size="2xl" style={{color:"white"}}/>
      </div>
      <h4 className={styles.h4}>{title}</h4>
      <div className={styles.horizontalLine2}></div>
      <p className={styles.p}>
        {text}
      </p>
    </div>
  );
};
const TitleBox = function({title,text}){
    // console.log(props);
    return (
        <>
        <div className={styles.titleBox}>
            <h2 className={styles.h2}>{title}</h2>
            <div className={styles.horizontalLine1}></div>
            <h4 className={styles.h4}>
               {text}
            </h4>
        </div>
        </>
    );
}
const AboutUs = ()=>{
  return(
    <>
      <Link href="/about" style={{ textDecoration: 'none' }}>
          <div className={styles.aboutUs}>About Us</div>
      </Link>
    </>
  )
}


const Main_02 = () => {
  return (
    <>
    <div className={styles.mainBox}>
        <TitleBox title={data.titleBox.title} text={data.titleBox.text}/>
        <div className={styles.iconShell}>
            {
                data.iconBoxes.map((item,index) => {
                    return <IconBox title={item.title} text={item.text} url={item.url} key={index} />;
                })
            }
        </div>
        <AboutUs/>
    </div>  
    </>
  );
};

export default Main_02;
