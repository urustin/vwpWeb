import React from 'react';
import styles from './CompanyInfoCulture.module.css';
import data from '../textData';

const CompanyInfoCulture = () => {
  return (
    <section className={styles.companyIntro}>
      <div className={styles.infoItem}>
        <h2>Cultures</h2>
        <p>{data.company_about[2].content}</p>
        <img src="/images/companyInfo/image03.jpg"></img>
      </div>
    </section>
  );
};

export default CompanyInfoCulture;
