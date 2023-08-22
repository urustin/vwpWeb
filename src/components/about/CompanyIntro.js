import React from 'react';
import styles from './CompanyIntro.module.css';
import data from '../textData';

const CompanyIntro = () => {
  return (
    <>
    <img className={styles.introImg} src='/images/companyInfo/image01.jpg'></img>
    <div className={styles.introBox}>

      
      {/* <h1 className={styles.h1}><span>ABOUT</span> US</h1> */}
      <p className={styles.p}>Established in 1990 by Mr Jim Kim, VWP has continued to evolve and modernise both its overall business of trading wool internationally but more importantly the way we process wool.</p>
      <p className={styles.p}>As the Australian wool industry has lost all but a few remaining ‘boutique’ wool processing plants, VWP has continued to expand and improve its productivity. Installing the latest technology combined with our ‘own’ internal engineering initiatives owe pride ourselves on both our productivity rates and our optimisation of both power and water which enables us to remain competitive in the textile industry which has largely been relocated overseas in search of cheaper ‘production’ costs.</p>
    </div>
    </>
  );
};

export default CompanyIntro;
