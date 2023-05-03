import React from 'react';
import styles from './IntroCard.module.css'; // CSS 모듈을 사용하여 스타일 적용

const IntroCard = ({ title, description, image }) => {
  return (
    <>
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src="/images/introCard01.jpg" alt={title}/>
      </div>
      <div className={styles.cardContent}>
        <h2>{title}title</h2>
        <p>{description}description</p>
      </div>
    </div>
    
    </>
    
  );
};

export default IntroCard;
