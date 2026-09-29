import React from 'react';
import { ArrowUpRight, MapPin, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import logo from '../assets/upliv-logo.png';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenExpert: () => void;
  onOpenRequirement: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenExpert, onOpenRequirement }) => {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400">
      
      <div className="border-b border-slate-900 bg-gradient-to-b from-slate-900/30 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 bg-slate-900/70 border border-slate-800 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-2">
                Nationwide U.S. Capability · Corporate Base New York
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-display">
                Ready to accelerate your technology initiatives?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-2">
                Partner with UpLiv LLC for dedicated IT talent, technical recruiting, consulting, and end-to-end technology project delivery.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenExpert}
                className="px-6 py-3 rounded-xl bg-white hover:bg-gray-100 text-slate-950 font-semibold text-sm transition-all shadow-sm flex items-center gap-2 cursor-pointer font-display"
              >
                <span>Talk to an UpLiv Expert</span>
                <ArrowUpRight className="w-4 h-4 text-slate-900" />
              </button>

              <button
                onClick={onOpenRequirement}
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors border border-slate-700 cursor-pointer"
              >
                Submit Your Requirement
              </button>
            </div>

            
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 text-sm">
          
          <div>
            <h4 className="font-semibold text-white tracking-wide text-xs uppercase mb-4 font-display">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('team')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                  Our Team
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('process')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                  Our Process
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('careers')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                  Careers
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('us-presence')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                  U.S. Presence
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('partnerships')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                  Partnerships &amp; Certifications
                </button>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-semibold text-white tracking-wide text-xs uppercase mb-4 font-display">
              Services
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => handleNav('it-staffing')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                  IT Staff Augmentation
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('it-recruiting')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                  IT Recruiting
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('it-consulting')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                  IT Consulting
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('project-services')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                  Project-Based IT Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('data-ai')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                  Data &amp; AI Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('implementation')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                  Technology Implementation
                </button>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-semibold text-white tracking-wide text-xs uppercase mb-4 font-display">
              Industries
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => handleNav('industries')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                  Automotive &amp; Mobility
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('industries')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                  Manufacturing &amp; Industrial
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('industries')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                  Healthcare &amp; HealthTech
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('industries')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                  Pharmaceutical &amp; Life Sciences
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('industries')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                  Banking &amp; Financial Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('industries')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                  Insurance &amp; InsurTech
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('industries')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                  Government &amp; Public Sector
                </button>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-semibold text-white tracking-wide text-xs uppercase mb-4 font-display">
              Resources &amp; Capabilities
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => handleNav('technology')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                  Technology Matrix
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                  Contact UpLiv
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('careers')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                  Open Positions (Careers)
                </button>
              </li>
            </ul>
          </div>

          
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-semibold text-white tracking-wide text-xs uppercase mb-4 font-display">
              Corporate &amp; Legal
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">UpLiv LLC</span>
                  <span className="text-slate-400">Incorporated in New York, USA</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-slate-300">{COMPANY_INFO.email}</span>
              </div>
              <div className="pt-2 border-t border-slate-900 space-y-1.5">
                <button
                  onClick={() => handleNav('privacy')}
                  className="block hover:text-sky-400 transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => handleNav('terms')}
                  className="block hover:text-sky-400 transition-colors text-left cursor-pointer"
                >
                  Terms &amp; Conditions
                </button>
              </div>
            </div>
          </div>
        </div>

        
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <img src={logo} alt="UpLiv LLC" className="h-8 w-auto object-contain" />
            <span aria-hidden="true">·</span>
            <span>New York, USA</span>
            <span aria-hidden="true">·</span>
            <span>Nationwide U.S. IT Services</span>
          </div>

          <div>
            &copy; 2026 UpLiv LLC. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
