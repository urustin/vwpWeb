import React, { useState } from 'react';
import Header from '../components/Header';
import Contact from '../components/contact/Contact';
import Location from '../components/location/Location';
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
      <Contact />
      <Location />
      <Footer />
    </div>
  );
};

export default ContactPage;