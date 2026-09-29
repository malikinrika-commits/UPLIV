import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SubmitRequirementModal } from './components/SubmitRequirementModal';
import { ExpertModal } from './components/ExpertModal';
import { AdminDrawer } from './components/AdminDrawer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { StaffingPage } from './pages/StaffingPage';
import { RecruitingPage } from './pages/RecruitingPage';
import { ConsultingPage } from './pages/ConsultingPage';
import { ProjectServicesPage } from './pages/ProjectServicesPage';
import { DataAiPage } from './pages/DataAiPage';
import { ImplementationPage } from './pages/ImplementationPage';
import { CapabilitiesPage } from './pages/CapabilitiesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { ProcessPage } from './pages/ProcessPage';
import { TeamPage } from './pages/TeamPage';
import { USPresencePage } from './pages/USPresencePage';
import { PartnershipsPage } from './pages/PartnershipsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isRequirementOpen, setIsRequirementOpen] = useState(false);
  const [requirementDefaultService, setRequirementDefaultService] = useState<string | undefined>(undefined);
  const [isExpertOpen, setIsExpertOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRequirement = (serviceName?: string) => {
    setRequirementDefaultService(serviceName);
    setIsRequirementOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={navigateTo}
            onOpenRequirement={handleOpenRequirement}
            onOpenExpert={() => setIsExpertOpen(true)}
          />
        );
      case 'about':
        return (
          <AboutPage
            onNavigate={navigateTo}
            onOpenExpert={() => setIsExpertOpen(true)}
          />
        );
      case 'services':
        return (
          <ServicesPage
            onNavigate={navigateTo}
            onOpenRequirement={handleOpenRequirement}
          />
        );
      case 'it-staffing':
      case 'service-staffing':
        return (
          <StaffingPage
            onOpenRequirement={handleOpenRequirement}
            onOpenExpert={() => setIsExpertOpen(true)}
          />
        );
      case 'it-recruiting':
      case 'service-recruiting':
        return (
          <RecruitingPage
            onOpenRequirement={handleOpenRequirement}
            onOpenExpert={() => setIsExpertOpen(true)}
          />
        );
      case 'it-consulting':
      case 'service-consulting':
        return (
          <ConsultingPage
            onOpenRequirement={handleOpenRequirement}
            onOpenExpert={() => setIsExpertOpen(true)}
          />
        );
      case 'project-services':
      case 'service-project':
        return (
          <ProjectServicesPage
            onOpenRequirement={handleOpenRequirement}
            onOpenExpert={() => setIsExpertOpen(true)}
          />
        );
      case 'data-ai':
      case 'service-data-ai':
        return (
          <DataAiPage
            onOpenRequirement={handleOpenRequirement}
            onOpenExpert={() => setIsExpertOpen(true)}
          />
        );
      case 'implementation':
      case 'service-implementation':
        return (
          <ImplementationPage
            onOpenRequirement={handleOpenRequirement}
            onOpenExpert={() => setIsExpertOpen(true)}
          />
        );
      case 'technology':
        return (
          <CapabilitiesPage
            onOpenRequirement={handleOpenRequirement}
          />
        );
      case 'industries':
        return (
          <IndustriesPage
            onOpenRequirement={handleOpenRequirement}
          />
        );
      case 'careers':
        return <CareersPage />;
      case 'contact':
        return <ContactPage />;
      case 'process':
        return (
          <ProcessPage
            onOpenRequirement={() => handleOpenRequirement()}
            onOpenExpert={() => setIsExpertOpen(true)}
          />
        );
      case 'team':
        return <TeamPage />;
      case 'us-presence':
        return <USPresencePage />;
      case 'partnerships':
        return (
          <PartnershipsPage
            onOpenRequirement={() => handleOpenRequirement()}
          />
        );
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'terms':
        return <TermsPage />;
      default:
        return (
          <HomePage
            onNavigate={navigateTo}
            onOpenRequirement={handleOpenRequirement}
            onOpenExpert={() => setIsExpertOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EAF5FC] text-slate-100 font-sans selection:bg-sky-500 selection:text-slate-950">
      
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenRequirement={handleOpenRequirement}
        onOpenExpert={() => setIsExpertOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      
      <main className="flex-1">
        {renderPage()}
      </main>

      
      <Footer
        onNavigate={navigateTo}
        onOpenExpert={() => setIsExpertOpen(true)}
        onOpenRequirement={() => handleOpenRequirement()}
      />

      
      <SubmitRequirementModal
        isOpen={isRequirementOpen}
        onClose={() => setIsRequirementOpen(false)}
        defaultService={requirementDefaultService}
      />

      
      <ExpertModal
        isOpen={isExpertOpen}
        onClose={() => setIsExpertOpen(false)}
      />

      
      <AdminDrawer
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />
    </div>
  );
}

export default App;
