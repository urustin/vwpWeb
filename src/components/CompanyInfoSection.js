import React from 'react';
import styles from './CompanyInfoSection.module.css'; // CSS 모듈을 사용하여 스타일 적용
import data from "./textData";
import CompanyInfoVision from './CompanyInfoVision';
import CompanyInfoIntro from './CompanyInfoIntro';
import CompanyInfoCulture from './CompanyInfoCulture';

const CompanyInfoSection = () => {
  return (
    <section className={styles.container}>
      <CompanyInfoIntro />
      <CompanyInfoVision />
      <CompanyInfoCulture />
      
    </section>
  );
};

export default CompanyInfoSection;
