import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import CompanyInfoSection from '../components/about/CompanyInfoSection';
import CompanyIntro from '../components/about/CompanyIntro';
import CompanyVision from '../components/about/CompanyVision';

import OrganizationChart from '../components/about/OrganizationChart';
import AwardsCertificates from '../components/about/AwardsCertificates';
import Footer from '../components/Footer';
import AboutWhat from '@/components/about/AboutWhat';
import AboutPara from '@/components/about/AboutPara';


const About = () => {
  return (
    <>
      <Head>
        <title>About | Victoria Wool Processors</title>
      </Head>
      <Header />
      <AboutWhat />
      <AboutPara />
      {/* <CompanyIntro /> */}
      {/* <CompanyInfoSection />
      <CompanyVision />

      <OrganizationChart />
      <AwardsCertificates /> */}
      <Footer />
    </>
  );
};

export default About;
