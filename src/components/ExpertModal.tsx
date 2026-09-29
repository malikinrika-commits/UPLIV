import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { StoredLead } from './SubmitRequirementModal';

interface ExpertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExpertModal: React.FC<ExpertModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    topic: 'IT Staff Augmentation & Scaling',
    datePreference: 'Tomorrow Morning (EST)',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      setError('Please fill in required fields (Name, Email, Company)');
      return;
    }

    setError('');
    setIsSubmitting(true);

    setTimeout(() => {
      const newLead: StoredLead = {
        id: 'EXP-' + Math.random().toString(36).substring(2, 9).toUpperCase(),
        type: 'expert_consultation',
        firstName: formData.name.split(' ')[0] || formData.name,
        lastName: formData.name.split(' ').slice(1).join(' ') || '',
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        serviceNeeded: formData.topic,
        message: `Consultation requested for ${formData.datePreference}. Notes: ${formData.notes}`,
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
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-100">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">Consultation Scheduled</h3>
            <p className="text-slate-300 text-sm">
              We have received your request. A senior UpLiv technical advisor will connect with you at your chosen preference ({formData.datePreference}).
            </p>
            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="mt-4 px-6 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-lg text-sm transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-1">
                Technical Strategy &amp; Advisory
              </div>
              <h2 className="text-2xl font-bold text-white font-display">Talk to an UpLiv Expert</h2>
              <p className="text-xs text-slate-400 mt-1">
                30-minute direct consultation with a senior U.S. technology practice leader. No sales pressure.
              </p>
            </div>

            {error && <div className="mb-4 p-2.5 bg-rose-950/60 border border-rose-800/80 text-rose-300 text-xs rounded-lg">{error}</div>}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Alex Morgan"
                  className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-lg px-3 py-2 text-sm text-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Business Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@enterprise.com"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-lg px-3 py-2 text-sm text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Company *</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company name"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-lg px-3 py-2 text-sm text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Consultation Topic</label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-lg px-3 py-2 text-sm text-white focus:outline-none"
                >
                  <option value="IT Staff Augmentation & Scaling">IT Staff Augmentation &amp; Scaling</option>
                  <option value="Technical Recruiting & Direct Hire">Technical Recruiting &amp; Direct Hire</option>
                  <option value="Cloud & Legacy Modernization">Cloud &amp; Legacy Modernization</option>
                  <option value="Data Engineering & AI Pipelines">Data Engineering &amp; AI Pipelines</option>
                  <option value="Project-Based Software Delivery">Project-Based Software Delivery</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Preferred Time Window</label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {['Today Afternoon (EST)', 'Tomorrow Morning (EST)', 'Tomorrow Afternoon (EST)', 'This Week Flexible'].map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setFormData({ ...formData, datePreference: time })}
                      className={`py-2 px-3 rounded-lg border text-left transition-colors ${
                        formData.datePreference === time
                          ? 'border-sky-500 bg-sky-950/40 text-sky-200'
                          : 'border-slate-800 bg-slate-950 hover:border-slate-700 text-slate-400'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Key Questions or Goals (Optional)</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="E.g., Seeking 3 senior React engineers or planning a cloud migration..."
                  className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-lg px-3 py-2 text-sm text-white focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Confirming...' : 'Confirm Call Request'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
