import React from 'react';
import styles from './AwardsCertificates.module.css';
import awardImage1 from '../../../public/images/award1.jpg'; // 수상내역 및 인증서 이미지 파일 import
import awardImage2 from '../../../public/images/award2.jpg'; // 수상내역 및 인증서 이미지 파일 import

const AwardsCertificates = () => {
  const awards = [
    { id: 1, image: awardImage1, name: 'Award 1' },
    { id: 2, image: awardImage2, name: 'Award 2' },
    // ... 추가적인 수상내역 및 인증서 정보
  ];

  return (
    <section className={styles.awardsCertificates}>
      <h2 className={styles.title}>Awards & Certificates</h2>
      <div className={styles.awardsGrid}>
        {awards.map(award => (
          <div key={award.id} className={styles.award}>
            <img src={award.image} alt={award.name} className={styles.awardImage} />
            <h3 className={styles.awardName}>{award.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsCertificates;
