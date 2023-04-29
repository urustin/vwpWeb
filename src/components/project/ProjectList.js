import React from 'react';
import styles from './ProjectList.module.css';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    category: '건축물 분야',
    description: 'Project 1 description',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    title: 'Project 2',
    category: '교통',
    description: 'Project 2 description',
    image: 'https://via.placeholder.com/300',
  },
  // ... 추가적인 프로젝트 데이터
];

const ProjectList = () => {
  return (
    <section className={styles.projectList}>
      <h2 className={styles.title}>Project List</h2>
      <div className={styles.list}>
        {projects.map(project => (
          <div key={project.id} className={styles.project}>
            <img src={project.image} alt={project.title} className={styles.image} />
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.category}>{project.category}</p>
            <p className={styles.description}>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
