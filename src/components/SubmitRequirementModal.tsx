import React, { useState } from 'react';
import { X, Upload, CheckCircle2 } from 'lucide-react';
import { CORE_SERVICES, INDUSTRIES } from '../data/companyData';

interface SubmitRequirementModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export interface StoredLead {
  id: string;
  type: 'requirement' | 'expert_consultation' | 'resume';
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  jobTitle?: string;
  serviceNeeded: string;
  industry?: string;
  projectType?: string;
  startDate?: string;
  message: string;
  fileName?: string;
  timestamp: string;
  status: 'New' | 'In Review' | 'Contacted';
}

export const SubmitRequirementModal: React.FC<SubmitRequirementModalProps> = ({
  isOpen,
  onClose,
  defaultService
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    jobTitle: '',
    serviceNeeded: defaultService || 'IT Staff Augmentation',
    industry: 'Technology',
    projectType: 'Immediate Staff Augmentation',
    startDate: 'Within 2 Weeks',
    message: '',
    fileName: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
    if (!formData.company.trim()) errs.company = 'Company name is required';
    if (!formData.email.trim()) {
      errs.email = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.message.trim()) errs.message = 'Please provide brief details on your requirement';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      const newLead: StoredLead = {
        id: 'REQ-' + Math.random().toString(36).substring(2, 9).toUpperCase(),
        type: 'requirement',
        ...formData,
        timestamp: new Date().toLocaleString(),
        status: 'New'
      };

      try {
        const existing = JSON.parse(localStorage.getItem('upliv_leads') || '[]');
        localStorage.setItem('upliv_leads', JSON.stringify([newLead, ...existing]));
      } catch {
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-slate-100">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white font-display">Requirement Received</h3>
            <p className="text-slate-300 max-w-md mx-auto text-sm">
              Thank you, {formData.firstName}. An UpLiv technical solutions director will review your requirements and follow up within 1 business day.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-lg text-sm transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-1">
                UpLiv LLC · Enterprise Client Inquiries
              </div>
              <h2 className="text-2xl font-bold text-white font-display">Submit Your Technology Requirement</h2>
              <p className="text-sm text-slate-400 mt-1">
                Tell us about your IT staffing, project, or consulting needs. Serving clients nationwide from New York, USA.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">First Name *</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none"
                    placeholder="Jane"
                  />
                  {errors.firstName && <p className="text-rose-400 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Last Name *</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none"
                    placeholder="Doe"
                  />
                  {errors.lastName && <p className="text-rose-400 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Company / Organization *</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none"
                    placeholder="Acme Corporation"
                  />
                  {errors.company && <p className="text-rose-400 text-xs mt-1">{errors.company}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Business Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none"
                    placeholder="jane.doe@company.com"
                  />
                  {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Your Job Title</label>
                  <input
                    type="text"
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none"
                    placeholder="VP of Engineering / Director of IT"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Primary Service Needed</label>
                  <select
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-lg px-3 py-2 text-sm text-white focus:outline-none"
                  >
                    {CORE_SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Project Management">Project Management</option>
                    <option value="Other">Other Requirement</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Industry</label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-lg px-3 py-2 text-sm text-white focus:outline-none"
                  >
                    {INDUSTRIES.map((ind) => (
                      <option key={ind.id} value={ind.name}>{ind.name}</option>
                    ))}
                    <option value="General Enterprise">Other Enterprise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Estimated Start Date</label>
                  <select
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-lg px-3 py-2 text-sm text-white focus:outline-none"
                  >
                    <option value="Immediately (Within 1-2 weeks)">Immediately (Within 1-2 weeks)</option>
                    <option value="Within 1 Month">Within 1 Month</option>
                    <option value="Next Quarter (1-3 Months)">Next Quarter (1-3 Months)</option>
                    <option value="Exploratory / Planning">Exploratory / Planning</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Requirement Details *</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none resize-none"
                  placeholder="Describe your tech stack, number of professionals, delivery timeline, or project goals..."
                />
                {errors.message && <p className="text-rose-400 text-xs mt-1">{errors.message}</p>}
              </div>

              
              <div className="border border-dashed border-slate-800 hover:border-slate-700 bg-slate-950/60 rounded-xl p-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <Upload className="w-4 h-4 text-sky-400" />
                  <span className="text-slate-300">
                    {formData.fileName ? formData.fileName : 'Attach Job Spec, Statement of Work (SOW), or PDF (Optional)'}
                  </span>
                </div>
                <label className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded cursor-pointer transition-colors font-medium">
                  Browse
                  <input type="file" className="hidden" onChange={handleFileChange} />
                </label>
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <div className="text-[11px] text-slate-500">
                  Strict confidentiality · NDA protected
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-lg text-sm transition-colors flex items-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
