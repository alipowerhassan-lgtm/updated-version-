import React, { useState, useEffect } from 'react';
import TopUtilityBar from './components/TopUtilityBar';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import ServicesSection from './components/ServicesSection';
import CalculatorPage from './components/CalculatorPage';
import TechnologiesSection from './components/TechnologiesSection';
import ProjectsSection from './components/ProjectsSection';
import PolicySection from './components/PolicySection';
import FeedbackSection from './components/FeedbackSection';
import ContactSection from './components/ContactSection';
import ServiceDetailModal from './components/ServiceDetailModal';
import ProjectDetailModal from './components/ProjectDetailModal';
import ProposalModal from './components/ProposalModal';
import BrandSplashScreen from './components/BrandSplashScreen';
import Footer from './components/Footer';

import { findProjectForService } from './data/projectsData';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activePage, setActivePage] = useState('home');
  const [proposalModalOpen, setProposalModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [serviceDetailOpen, setServiceDetailOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectDetailOpen, setProjectDetailOpen] = useState(false);
  const [proposalServiceDomain, setProposalServiceDomain] = useState('');

  // Synchronize active page with hash on initial load & hash changes
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.substring(1);
      if (['home', 'services', 'calculator', 'technologies', 'projects', 'policy', 'feedback', 'contact'].includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
  };

  const handleOpenProposal = (domain = '') => {
    setProposalServiceDomain(domain || '');
    setProposalModalOpen(true);
  };

  const handleSelectService = (service) => {
    setSelectedService(service);
    setServiceDetailOpen(true);
  };

  const handleServiceClickFromHome = () => {
    setActivePage('services');
    window.history.pushState(null, '', '#services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setProjectDetailOpen(true);
  };

  const handleViewCaseStudy = (serviceOrProjectKey) => {
    setServiceDetailOpen(false);
    const project = findProjectForService(serviceOrProjectKey);
    setActivePage('projects');
    window.history.pushState(null, '', '#projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (project) {
      setSelectedProject(project);
      setProjectDetailOpen(true);
    }
  };

  const handleRequestProposalForService = (serviceTitle) => {
    setServiceDetailOpen(false);
    handleOpenProposal(serviceTitle);
  };

  const handleRequestProposalForProject = (projectTitle) => {
    setProjectDetailOpen(false);
    handleOpenProposal(projectTitle);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-50/50 via-white to-sky-50/30 text-slate-900 selection:bg-sky-500 selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Brand Intro Splash Screen on Opening */}
      {showSplash && (
        <BrandSplashScreen onComplete={() => setShowSplash(false)} />
      )}

      {/* 1. Dual-Tier Navigation Bar (Persistent Header) */}
      <TopUtilityBar />
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onRequestProposalClick={() => handleOpenProposal()}
      />

      {/* 2. Page Content Switching */}
      <main className="flex-1 w-full">
        {activePage === 'home' && (
          <HomeSection
            onNavigate={handleNavigate}
            onSelectService={handleServiceClickFromHome}
            onRequestProposal={() => handleOpenProposal()}
          />
        )}

        {activePage === 'services' && (
          <ServicesSection
            onSelectService={handleSelectService}
            onBookConsultation={(service) => handleOpenProposal(service)}
            onViewCaseStudy={handleViewCaseStudy}
          />
        )}

        {activePage === 'calculator' && (
          <CalculatorPage
            onRequestProposal={(domain) => handleOpenProposal(domain)}
          />
        )}

        {activePage === 'technologies' && (
          <TechnologiesSection />
        )}

        {activePage === 'projects' && (
          <ProjectsSection
            onSelectProject={handleSelectProject}
          />
        )}

        {activePage === 'policy' && (
          <PolicySection />
        )}

        {activePage === 'feedback' && (
          <FeedbackSection />
        )}

        {activePage === 'contact' && (
          <ContactSection />
        )}
      </main>

      {/* 3. Persistent Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onRequestProposal={() => handleOpenProposal()}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        isOpen={serviceDetailOpen}
        onClose={() => setServiceDetailOpen(false)}
        onRequestProposalForService={handleRequestProposalForService}
        onViewCaseStudy={handleViewCaseStudy}
      />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={projectDetailOpen}
        onClose={() => setProjectDetailOpen(false)}
        onRequestProposalForProject={handleRequestProposalForProject}
      />

      {/* Multi-Step Technical Proposal Modal */}
      <ProposalModal
        isOpen={proposalModalOpen}
        onClose={() => setProposalModalOpen(false)}
        initialService={proposalServiceDomain}
      />
    </div>
  );
}
