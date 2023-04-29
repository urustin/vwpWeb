import React from 'react';
import styles from './SocialMedia.module.css'; // CSS 모듈을 사용하여 스타일 적용

const SocialMedia = () => {
  return (
    <div className={styles.socialMedia}>
      <a href="https://www.facebook.com/your_company" target="_blank" rel="noreferrer" className={styles.socialIcon}>
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.instagram.com/your_company" target="_blank" rel="noreferrer" className={styles.socialIcon}>
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.twitter.com/your_company" target="_blank" rel="noreferrer" className={styles.socialIcon}>
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://www.linkedin.com/company/your_company" target="_blank" rel="noreferrer" className={styles.socialIcon}>
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  );
};

export default SocialMedia;
