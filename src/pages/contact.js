import React, { useState } from 'react';
import Head from 'next/head';
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
      <Head>
        <title>Contact | Victoria Wool Processors</title>
      </Head>
      <Header />
      <Contact />
      <Location />
      <Footer />
    </div>
  );
};

export default ContactPage;