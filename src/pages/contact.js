import React, { useState } from 'react';
import Header from '../components/Header';
import ContactForm from '../components/contact/ContactForm';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // 폼 제출 로직 작성
    setSubmitted(true);
  };

  return (
    <div>
      <Header />
      <ContactForm onSubmit={handleSubmit} submitted={submitted} />
      <Footer />
    </div>
  );
};

export default ContactPage;