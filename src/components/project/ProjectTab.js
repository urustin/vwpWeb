import React, { useState } from 'react';
import styles from './ProjectTab.module.css';

const ProjectTab = () => {
  const [activeTab, setActiveTab] = useState('architecture');

  const categories = [
    { id: 'architecture', name: '건축물 분야' },
    { id: 'transportation', name: '교통' },
    { id: 'environment', name: '환경' },
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
        {activeTab === 'architecture' && <p>Architecture projects content...</p>}
        {activeTab === 'transportation' && <p>Transportation projects content...</p>}
        {activeTab === 'environment' && <p>Environment projects content...</p>}
        {/* ... 추가적인 프로젝트 카테고리 내용 */}
      </div>
    </section>
  );
};

export default ProjectTab;
