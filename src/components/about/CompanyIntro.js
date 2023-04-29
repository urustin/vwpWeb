import React from 'react';
import styles from './CompanyIntro.module.css';

const CompanyIntro = () => {
  return (
    <section className={styles.companyIntro}>
      <h2 className={styles.title}>Company Introduction</h2>
      <p className={styles.content}>
        Your company introduction content goes here...
      </p>
    </section>
  );
};

export default CompanyIntro;
