import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Slider from '../components/Slider';
import IntroCard from '../components/IntroCard';
import CompanyInfoSection from '../components/CompanyInfoSection';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';

const MainPage = () => {
  return (
    <>
      <Head>
        <title>메인 페이지</title>
      </Head>
      <Header />
      
      
      <Slider />
      <IntroCard />
      <CompanyInfoSection />
      <SocialMedia />
      <Footer />
    </>
  );
};

export default MainPage;