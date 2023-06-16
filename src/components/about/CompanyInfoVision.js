import React from 'react';
import styles from './CompanyInfoVision.module.css';
import data from "../textData";
const CompanyInfoVision = () => {
  return (
    <section className={styles.companyVision}>
        <div className={styles.infoItem}> 
            <img src='/images/companyInfo/image02.jpg'></img>
            <div className={styles.infoBox}>
                <h2>Company Vision</h2> 
                <p>{data.company_about[1].content}  </p>
            </div>
            
        </div>
    </section>
  );
};

export default CompanyInfoVision;
