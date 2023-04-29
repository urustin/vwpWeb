import React from 'react';
import styles from './ProjectReview.module.css';

const reviews = [
  {
    id: 1,
    name: 'User1',
    rating: 4,
    comment: 'Great project!',
  },
  {
    id: 2,
    name: 'User2',
    rating: 5,
    comment: 'Amazing work!',
  },
  // ... 추가적인 리뷰 데이터
];

const ProjectReview = () => {
  return (
    <section className={styles.projectReview}>
      <h2 className={styles.title}>Project Reviews</h2>
      <ul className={styles.list}>
        {reviews.map(review => (
          <li key={review.id} className={styles.review}>
            <span className={styles.name}>{review.name}</span>
            <span className={styles.rating}>{review.rating} / 5</span>
            <p className={styles.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectReview;
