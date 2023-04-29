import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import CompanyIntro from '../components/about/CompanyIntro';
import CompanyVision from '../components/about/CompanyVision';
import CompanyCulture from '../components/about/CompanyCulture';
import OrganizationChart from '../components/about/OrganizationChart';
import AwardsCertificates from '../components/about/AwardsCertificates';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Head>
        <title>About | Your Company Name</title>
      </Head>
      <Header />
      <CompanyIntro />
      <CompanyVision />
      <CompanyCulture />
      <OrganizationChart />
      <AwardsCertificates />
      <Footer />
    </>
  );
};

export default About;
