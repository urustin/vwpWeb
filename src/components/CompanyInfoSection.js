import React from 'react';
import styles from './CompanyInfoSection.module.css'; // CSS 모듈을 사용하여 스타일 적용

const CompanyInfoSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.infoItem}>
        <h2>사업분야</h2>
        <p>회사의 주요 사업분야를 소개하는 내용이 들어갑니다.</p>
      </div>
      <div className={styles.infoItem}>
        <h2>회사연혁</h2>
        <p>회사의 주요 연혁을 소개하는 내용이 들어갑니다.</p>
      </div>
      <div className={styles.infoItem}>
        <h2>회사비전</h2>
        <p>회사의 비전을 소개하는 내용이 들어갑니다.</p>
      </div>
    </section>
  );
};

export default CompanyInfoSection;
