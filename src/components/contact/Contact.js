import React, { useState } from 'react';
import styles from './Contact.module.css'; // Sass 파일 경로
import Link from 'next/link';
const Contact = () => {



  return (
    <section className={styles.contact}>
      <div className={styles.contactBox}>
        <div className={styles.logo}></div>
        
      </div>
      <div className={styles.detailBigBox}>
        <div className={styles.contactUs}>
            <h2 className={styles.title}>Contact Us</h2>
            <h3 className={styles.companyName}>Victoria Wool Processors Pty Ltd</h3>
        </div>
        <div className={styles.detailBox}>
          <div className={styles.officeBox}>
            <h4>Office</h4>
            <h5>
            38 – 44 Dohertys Road,
            <br/>
            Laverton North,
            <br/>
            VIC, Australia 3026
            </h5>
          </div>
          <div className={styles.postBox}>
            <h4>Post</h4>
            <h5>
            P.O Box 430 Altona North,
            <br/>
            VIC, Australia 3025
            </h5>
          </div>
          <div className={styles.contactBox2}>
            <div className={styles.phoneBox}>
              <h4>Phone</h4>
              <h5>
              +61 3 9369 0499
              </h5>
            </div>
            <h4>Email</h4>
            <h5>
            <Link href="mailto:sales@vwp.com.au">
                sales@vwp.com.au
            </Link>
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
        </div>
      
      
    </section>
  );
};

export default Contact;

