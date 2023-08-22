import React, { useState } from 'react';
import styles from './Contact.module.css'; // Sass 파일 경로

const Contact = () => {



  return (
    <section className={styles.contact}>
      <div className={styles.contactBox}>
        <div className={styles.logo}></div>
        <h2 className={styles.title}>Contact Us</h2>
        <h3 className={styles.companyName}>Victoria Wool Processors Pty Ltd</h3>
      </div>
      <div className={styles.detailBox}>
        <div className={styles.officeBox}>
          <h4>Office</h4>
          <h5>
          38 – 44 Dohertys Road,
          <br/>
          Laverton North, VIC. 3026
          </h5>
        </div>
        <div className={styles.postBox}>
          <h4>Post</h4>
          <h5>
          P.O Box 430 Altona North
          <br/>
          VIC, Australia 3025
          </h5>
        </div>
        <div className={styles.contactBox}>
          <h4>Phone</h4>
          <h5>
          +61 3 9369 0499
          </h5>
          <h4>Email</h4>
          <h5>
          sales@vwp.com.au
          </h5>
        </div>
        {/* <div className={styles.headBox}>
          <h4>
          Mr David Ritchie
          <br/>
          Email
          </h4>
          <h5>
          davidr@vwp.com.au
          </h5>
        </div> */}
      </div>
      
      
    </section>
  );
};

export default Contact;

