import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Settings } from 'lucide-react';
import { CORE_SERVICES } from '../data/companyData';
import logo from '../assets/upliv-logo.png';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenRequirement: (defaultService?: string) => void;
  onOpenExpert: () => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenRequirement,
  onOpenExpert,
  onOpenAdmin
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full h-16 border-b transition-colors ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md border-slate-800 shadow-sm'
          : 'bg-slate-900/90 backdrop-blur-sm border-slate-800/60'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between gap-6">
          
          <div className="flex items-center shrink-0">
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center cursor-pointer focus:outline-none"
              aria-label="UpLiv LLC Home"
            >
              <img
                src={logo}
                alt="UpLiv LLC"
                className="h-9 sm:h-10 w-auto object-contain object-left"
              />
            </button>
          </div>

          
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            <button
              onClick={() => handleLinkClick('home')}
              className={`hover:text-white transition-colors cursor-pointer py-1 relative ${
                currentPage === 'home' ? 'text-sky-400 font-semibold' : ''
              }`}
            >
              Home
              {currentPage === 'home' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-400 rounded-full" />
              )}
            </button>

            <button
              onClick={() => handleLinkClick('about')}
              className={`hover:text-white transition-colors cursor-pointer py-1 relative ${
                currentPage === 'about' ? 'text-sky-400 font-semibold' : ''
              }`}
            >
              About
              {currentPage === 'about' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-400 rounded-full" />
              )}
            </button>

            
            <div
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button
                onClick={() => handleLinkClick('services')}
                className={`flex items-center gap-1 hover:text-white transition-colors cursor-pointer py-1 ${
                  currentPage.startsWith('service') ? 'text-sky-400 font-semibold' : ''
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-slate-900/95 border border-slate-800 rounded-xl shadow-2xl p-2.5 backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 py-1.5 border-b border-slate-800/80 mb-1">
                    IT &amp; Technology Practices
                  </div>
                  {CORE_SERVICES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => handleLinkClick(s.id)}
                      className="w-full text-left px-3 py-2 text-xs rounded-lg hover:bg-slate-800/80 hover:text-sky-400 transition-colors flex flex-col group cursor-pointer"
                    >
                      <span className="font-medium text-slate-200 group-hover:text-sky-400">{s.title}</span>
                      <span className="text-[11px] text-slate-500 line-clamp-1">{s.shortDesc}</span>
                    </button>
                  ))}
                  <div className="border-t border-slate-800/80 mt-1 pt-1">
                    <button
                      onClick={() => handleLinkClick('services')}
                      className="w-full text-left px-3 py-1.5 text-xs text-sky-400 font-medium hover:underline cursor-pointer"
                    >
                      View All Services &rarr;
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleLinkClick('technology')}
              className={`hover:text-white transition-colors cursor-pointer py-1 relative ${
                currentPage === 'technology' ? 'text-sky-400 font-semibold' : ''
              }`}
            >
              Technology
              {currentPage === 'technology' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-400 rounded-full" />
              )}
            </button>

            <button
              onClick={() => handleLinkClick('industries')}
              className={`hover:text-white transition-colors cursor-pointer py-1 relative ${
                currentPage === 'industries' ? 'text-sky-400 font-semibold' : ''
              }`}
            >
              Industries
              {currentPage === 'industries' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-400 rounded-full" />
              )}
            </button>

            <button
              onClick={() => handleLinkClick('careers')}
              className={`hover:text-white transition-colors cursor-pointer py-1 relative ${
                currentPage === 'careers' ? 'text-sky-400 font-semibold' : ''
              }`}
            >
              Careers
              {currentPage === 'careers' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-400 rounded-full" />
              )}
            </button>

            <button
              onClick={() => handleLinkClick('contact')}
              className={`hover:text-white transition-colors cursor-pointer py-1 relative ${
                currentPage === 'contact' ? 'text-sky-400 font-semibold' : ''
              }`}
            >
              Contact
              {currentPage === 'contact' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-400 rounded-full" />
              )}
            </button>
          </nav>

          
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenExpert}
              className="hidden sm:inline-flex items-center justify-center px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              Talk to an Expert
            </button>

            <button
              onClick={() => onOpenRequirement()}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg shadow-sm hover:shadow-sky-500/20 transition-all whitespace-nowrap cursor-pointer font-display"
            >
              Submit Requirement
            </button>

            
            <button
              onClick={onOpenAdmin}
              className="hidden md:inline-flex p-2 text-slate-500 hover:text-slate-300 rounded-lg hover:bg-slate-900 transition-colors"
              title="Open Admin CRM Drawer"
              aria-label="Admin Portal"
            >
              <Settings className="w-4 h-4" />
            </button>

            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bg-slate-950/98 border-b border-slate-800 p-6 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => handleLinkClick('home')}
              className="text-left text-base font-medium text-slate-200 hover:text-sky-400"
            >
              Home
            </button>
            <button
              onClick={() => handleLinkClick('about')}
              className="text-left text-base font-medium text-slate-200 hover:text-sky-400"
            >
              About UpLiv
            </button>
            <button
              onClick={() => handleLinkClick('services')}
              className="text-left text-base font-medium text-slate-200 hover:text-sky-400"
            >
              All Services
            </button>
            <div className="pl-4 space-y-2 border-l border-slate-800">
              {CORE_SERVICES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleLinkClick(s.id)}
                  className="block text-left text-sm text-slate-400 hover:text-sky-300"
                >
                  {s.title}
                </button>
              ))}
            </div>
            <button
              onClick={() => handleLinkClick('technology')}
              className="text-left text-base font-medium text-slate-200 hover:text-sky-400"
            >
              Technology Capabilities
            </button>
            <button
              onClick={() => handleLinkClick('industries')}
              className="text-left text-base font-medium text-slate-200 hover:text-sky-400"
            >
              Industries
            </button>
            <button
              onClick={() => handleLinkClick('careers')}
              className="text-left text-base font-medium text-slate-200 hover:text-sky-400"
            >
              Careers
            </button>
            <button
              onClick={() => handleLinkClick('contact')}
              className="text-left text-base font-medium text-slate-200 hover:text-sky-400"
            >
              Contact Us
            </button>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenExpert();
                }}
                className="w-full py-2.5 border border-slate-700 text-slate-200 font-medium rounded-lg text-sm"
              >
                Talk to an Expert
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenRequirement();
                }}
                className="w-full py-2.5 bg-sky-400 text-slate-950 font-semibold rounded-lg text-sm"
              >
                Submit Your Requirement
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
