import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Slider from '../components/main/Slider';
import IntroCard from '../components/main/IntroCard';

import SocialMedia from '../components/main/SocialMedia';
import Footer from '../components/Footer';
import styles from "../styles/Home.module.css";
import Main_02 from '@/components/main/Main_02'; 
import Main_03 from '@/components/main/Main_03'; 
import Main_04 from '@/components/main/Main_04'; 
import Contact from '@/components/contact/Contact';

import Main_05 from '@/components/main/Main_05';

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
      {/* <Main_03/> */}
      {/* <Main_04/> */}
      {/* <IntroCard /> */}
      
      {/* <SocialMedia /> */}
      {/* <Contact/> */}
      <Main_05/>
      <Footer />
    </>
  );
};

export default MainPage;