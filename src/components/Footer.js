import React from 'react';
import styles from './Footer.module.css'; // CSS 모듈을 사용하여 스타일 적용

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footerMenu}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <p className={styles.copyright}>© {new Date().getFullYear()} VWP. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
