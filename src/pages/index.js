import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Slider from '../components/main/Slider';
import IntroCard from '../components/main/IntroCard';
import CompanyInfoSection from '../components/main/CompanyInfoSection';
import SocialMedia from '../components/main/SocialMedia';
import Footer from '../components/Footer';
import styles from "../styles/Home.module.css";
import Main_02 from '@/components/main/Main_02'; 
import Main_03 from '@/components/main/Main_03'; 

//bootstrap for slider
const MainPage = () => {
  return (
    <>
      <Head>
        <title>메인 페이지</title>
      </Head>
      <Header />
      
      
      <Slider />
      <Main_02/>
      <Main_03/>
      
      {/* <IntroCard /> */}
      <CompanyInfoSection />
      {/* <SocialMedia /> */}
      <Footer />
    </>
  );
};

export default MainPage;