import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // 폼 제출 로직 작성
  };

  return (
    <section className={styles.contactForm}>
      <h2 className={styles.title}>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className='formLabel' htmlFor="name">Name</label>
          <input
            className='form_Input'
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className="formLabel" htmlFor="email">Email</label>
          <input
            className='form_Input'
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className="formLabel" htmlFor="message">Message</label>
          <textarea
            className='form_TextArea'
            id="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
