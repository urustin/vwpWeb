import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css'; // CSS 모듈을 사용하여 스타일 적용

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* 로고 이미지 또는 텍스트 */}
        <Link href="/">

            <img src="/images/logo.png" alt="회사 로고" />

        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link href="/">
                <span>home</span>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/about">
                <span>about</span>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/projects">
            <span>projects</span>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/location">
            <span>location</span>

            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/contact">
            <span>contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
