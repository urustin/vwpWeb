import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import styles from './Header.module.css'; // CSS 모듈을 사용하여 스타일 적용



const Header = () => {
  const MOBILE_SCREEN_WIDTH = 768; // 원하는 모바일 화면의 최대 너비를 설정합니다.
  // const [isMobile, setIsMobile] = useState(false);
  // isHidden 상태를 선언하고 초기값을 false로 설정합니다.
  const [isHidden, setIsHidden] = useState(true); 
  const [isHiddenAni, setIsHiddenAni] = useState(false);
  useEffect(()=>{
    if(window.innerWidth <= MOBILE_SCREEN_WIDTH){
      console.log("isMobile");
      setIsHidden(true);
    }else{
      console.log(window.innerWidth);
      setIsHidden(false);
    }
  },[])

  
  


  const toggleVisibility = () => { // 버튼 클릭 시 isHidden 상태를 반전시키는 함수를 선언합니다.
    // console.log(isHidden);
    setIsHiddenAni(!isHiddenAni);
    if(!isHidden){
      setTimeout(()=>{
      },1000)
    }else{
      setIsHidden(!isHidden);
    }
  }


  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* 로고 이미지 또는 텍스트 */}
        <Link href="/">
            <img src="/images/logo.png" alt="회사 로고" />
        </Link>
      </div>
      <div className={styles.headerMenuBtn} onClick={toggleVisibility}>
        btn
      </div>
      <nav className={`${styles.nav} ${isHiddenAni ? styles.removeAnimation: ""} ${isHidden ? styles.none: ""}`}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link href="/">
                <span>Home</span>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/about">
                <span>About Us</span>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/projects">
            <span>What We Do</span>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/contact">
            <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
      
    </header>
  );
};

export default Header;
