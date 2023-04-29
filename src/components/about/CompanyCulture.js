import React from 'react';
import styles from './CompanyCulture.module.css';

const CompanyCulture = () => {
  return (
    <section className={styles.companyCulture}>
      <h2 className={styles.title}>Company Culture</h2>
      <p className={styles.content}>
        Your company culture content goes here...
      </p>
    </section>
  );
};

export default CompanyCulture;
