import React from 'react';
import styles from './CompanyInfoIntro.module.css';
import data from '../textData';

const CompanyInfoIntro = () => {
  return (
    <section className={styles.companyIntro}>
      <div className={styles.infoItem}>
        <h2>사업분야</h2>
        <p>{data.company_about[0].content}</p>
        <img src='/images/companyInfo/image01.jpg'></img>
      </div>
    </section>
  );
};

export default CompanyInfoIntro;
