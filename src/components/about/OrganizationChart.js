import React from 'react';
import styles from './OrganizationChart.module.css';
// import orgChartImage from ''; // 조직도 이미지 파일 import

const OrganizationChart = () => {
  return (
    <section className={styles.organizationChart}>
      <h2 className={styles.title}>Organization Chart</h2>
      <div className={styles.imageContainer}>
        <img src="/images/org-chart.jpg" alt="Organization Chart" className={styles.orgChartImage} />
      </div>
    </section>
  );
};

export default OrganizationChart;
