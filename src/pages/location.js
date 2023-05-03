import React from 'react';
import Header from '../components/Header';
import Location from '../components/location/Location';
import ContactForm from '../components/location/ContactForm'; // 문의하기 폼 컴포넌트
import Footer from '../components/Footer';

const LocationPage = () => {
  return (
    <div>
      <Header />
      <Location />
      {/* <ContactForm /> */}
      <Footer />
    </div>
  );
};

export default LocationPage;
