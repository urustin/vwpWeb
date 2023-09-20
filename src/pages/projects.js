import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import ProjectTab from '../components/project/ProjectTab';
import ProjectList from '../components/project/ProjectList'; // 프로젝트 목록 컴포넌트
import ProjectWhat from '../components/project/ProjectWhat';
import ProjectReview from '../components/project/ProjectReview';

import ProjectPara from '@/components/project/ProjectPara';
import Footer from '../components/Footer';

const ProjectPage = () => {
  return (
    <div>
      <Head>
        <title>What We Do | Victoria Wool Processors</title>
      </Head>
      <Header />
      <ProjectWhat />
      {/* <ProjectTab /> */}
      {/* <ProjectList /> */}
      {/* <ProjectReview /> */}
      <ProjectPara/>
      <Footer />
    </div>
  );
};

export default ProjectPage;
