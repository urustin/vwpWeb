import React from 'react';
import Header from '../components/Header';
import ProjectTab from '../components/project/ProjectTab';
import ProjectList from '../components/project/ProjectList'; // 프로젝트 목록 컴포넌트
import ProjectReview from '../components/project/ProjectReview'; // 프로젝트 리뷰 및 평가 컴포넌트
import Footer from '../components/Footer';

const ProjectPage = () => {
  return (
    <div>
      <Header />
      <ProjectTab />
      <ProjectList />
      <ProjectReview />
      <Footer />
    </div>
  );
};

export default ProjectPage;
