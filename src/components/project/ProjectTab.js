import React, { useState } from 'react';
import styles from './ProjectTab.module.css';
import data from '../textData';
import ProjectGreasy from './ProjectGreasy';
import ProjectCarbon from './ProjectCarbon';

const ProjectTab = () => {
  const [activeTab, setActiveTab] = useState('carbon');

  const categories = [
    { id: 'carbon', name: 'Carbonised Wool' },
    { id: 'greasy', name: 'Greasy Wool' },
    // { id: 'environment', name: '3' },
    // ... 추가적인 프로젝트 카테고리
  ];

  return (
    <section className={styles.projectTab}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.tabs}>
        {categories.map(category => (
          <button
            key={category.id}
            className={`${styles.tab} ${activeTab === category.id ? styles.active : ''}`}
            onClick={() => setActiveTab(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className={styles.content}>
        {activeTab === 'carbon' && <ProjectCarbon/>}
        {activeTab === 'greasy' && <ProjectGreasy/>}
        {activeTab === 'environment' && <p>Environment projects content...</p>}
        {/* ... 추가적인 프로젝트 카테고리 내용 */}
      </div>
    </section>
  );
};

export default ProjectTab;
