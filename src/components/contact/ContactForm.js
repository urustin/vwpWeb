import React, { useState } from 'react';
import styles from './ContactForm.module.scss'; // Sass 파일 경로

const ContactForm = ({ onSubmit, submitted }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // 폼 제출 로직
    onSubmit();
  };

  return (
    <section className={styles.contactForm}>
      <h2 className={styles.title}>Contact Us</h2>
      {submitted ? (
        <p className={styles.submittedMessage}>Thank you for your inquiry. We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="contact">Contact</label>
            <input
              type="text"
              id="contact"
              value={contact}
              onChange={e => setContact(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="inquiryType">Inquiry Type</label>
            <select
              id="inquiryType"
              value={inquiryType}
              onChange={e => setInquiryType(e.target.value)}
              required
            >
              <option value="">-- Select --</option>
              <option value="General">General Inquiry</option>
              <option value="Support">Technical Support</option>
              <option value="Sales">Sales Inquiry</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
