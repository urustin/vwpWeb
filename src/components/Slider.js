import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Slider.module.css'; // 반응형 스타일 적용

const Slider = () => {
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        interval={2000}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img className={styles.carouselImage} src="/images/slide1.jpeg" alt="슬라이드 이미지 1" />
          <p className={styles.legend}>슬라이드 제목 1</p>
        </div>
        <div>
          <img className={styles.carouselImage} src="/images/slide2.png" alt="슬라이드 이미지 2" />
          <p className={styles.legend}>슬라이드 제목 2</p>
        </div>
        <div>
          <img className={styles.carouselImage} src="/images/slide3.png" alt="슬라이드 이미지 3" />
          <p className={styles.legend}>슬라이드 제목 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
