import React, { useState, useEffect } from 'react';
import { X, ShieldAlert, Download, Trash2, FileText } from 'lucide-react';
import { StoredLead } from './SubmitRequirementModal';
import { CAREER_OPENINGS, CORE_SERVICES } from '../data/companyData';

interface AdminDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminDrawer: React.FC<AdminDrawerProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'leads' | 'careers' | 'services'>('leads');
  const [leads, setLeads] = useState<StoredLead[]>([]);

  useEffect(() => {
    if (isOpen) {
      loadLeads();
    }
  }, [isOpen]);

  const loadLeads = () => {
    try {
      const stored = JSON.parse(localStorage.getItem('upliv_leads') || '[]');
      const actualLeads = stored.filter((lead: StoredLead) => lead.id !== 'REQ-DEMO99');
      if (actualLeads.length !== stored.length) {
        localStorage.setItem('upliv_leads', JSON.stringify(actualLeads));
      }
      setLeads(actualLeads);
    } catch {
      setLeads([]);
    }
  };

  const updateLeadStatus = (id: string, newStatus: StoredLead['status']) => {
    const updated = leads.map(l => l.id === id ? { ...l, status: newStatus } : l);
    setLeads(updated);
    localStorage.setItem('upliv_leads', JSON.stringify(updated));
  };

  const deleteLead = (id: string) => {
    const filtered = leads.filter(l => l.id !== id);
    setLeads(filtered);
    localStorage.setItem('upliv_leads', JSON.stringify(filtered));
  };

  const exportLeads = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(leads, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `upliv_inquiries_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-slate-900 border-l border-slate-800 h-full flex flex-col shadow-2xl text-slate-100">
        
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white font-display">UpLiv Lead &amp; Operations Portal</h2>
              <p className="text-xs text-slate-400">Corporate Administrator / Inbound CRM Dashboard</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        
        <div className="flex border-b border-slate-800 bg-slate-900 px-5 gap-4">
          <button
            onClick={() => setActiveTab('leads')}
            className={`py-3 text-xs font-semibold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'leads' ? 'border-sky-400 text-sky-400' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Inbound Leads &amp; RFQs ({leads.length})
          </button>
          <button
            onClick={() => setActiveTab('careers')}
            className={`py-3 text-xs font-semibold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'careers' ? 'border-sky-400 text-sky-400' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Active Job Openings ({CAREER_OPENINGS.length})
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`py-3 text-xs font-semibold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'services' ? 'border-sky-400 text-sky-400' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Service Registry ({CORE_SERVICES.length})
          </button>
        </div>

        
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {activeTab === 'leads' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-slate-400">
                  {leads.length} recorded requirement(s) from website forms
                </span>
                {leads.length > 0 && (
                  <button
                    onClick={exportLeads}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 rounded-lg transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Export JSON
                  </button>
                )}
              </div>

              {leads.length === 0 ? (
                <div className="text-center py-12 border border-dashed border-slate-800 rounded-xl">
                  <p className="text-sm text-slate-400">No leads recorded yet.</p>
                  <p className="text-xs text-slate-500 mt-1">Submit a test inquiry via the "Submit Your Requirement" modal.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {leads.map((lead) => (
                    <div
                      key={lead.id}
                      className="bg-slate-950 border border-slate-800 rounded-xl p-4 transition-all hover:border-slate-700"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-white text-sm">
                              {lead.firstName} {lead.lastName}
                            </span>
                            <span className="text-xs text-slate-400">· {lead.company}</span>
                          </div>
                          <p className="text-xs text-sky-400 font-medium mt-0.5">
                            {lead.serviceNeeded} {lead.industry && `· ${lead.industry}`}
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <select
                            value={lead.status}
                            onChange={(e) => updateLeadStatus(lead.id, e.target.value as any)}
                            className="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-slate-200 focus:outline-none"
                          >
                            <option value="New">New</option>
                            <option value="In Review">In Review</option>
                            <option value="Contacted">Contacted</option>
                          </select>
                          <button
                            onClick={() => deleteLead(lead.id)}
                            className="text-slate-500 hover:text-rose-400 p-1 transition-colors"
                            title="Delete Record"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded border border-slate-800/80 mb-3 whitespace-pre-wrap">
                        {lead.message}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 pt-2 border-t border-slate-900">
                        <div className="flex items-center gap-3">
                          <span>📧 {lead.email}</span>
                          {lead.phone && <span>📞 {lead.phone}</span>}
                          {lead.fileName && (
                            <span className="text-sky-300 flex items-center gap-1">
                              <FileText className="w-3 h-3" /> {lead.fileName}
                            </span>
                          )}
                        </div>
                        <span className="text-slate-500">{lead.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'careers' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-400">
                Active listings in the UpLiv Careers directory:
              </p>
              {CAREER_OPENINGS.map((job) => (
                <div key={job.id} className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-white text-sm">{job.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{job.department} · {job.location} · {job.type}</p>
                    </div>
                    <span className="text-[11px] bg-emerald-950/60 text-emerald-300 border border-emerald-800/50 px-2 py-0.5 rounded">
                      Active
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {job.keySkills.map((sk) => (
                      <span key={sk} className="text-[11px] text-slate-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'services' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-400">
                Core Service Catalog (Syncs directly with client-facing sections):
              </p>
              {CORE_SERVICES.map((s) => (
                <div key={s.id} className="bg-slate-950 border border-slate-800 rounded-xl p-3.5">
                  <h4 className="font-semibold text-white text-sm">{s.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{s.tagline}</p>
                  <div className="flex flex-wrap gap-2 text-[11px] text-sky-400 mt-2">
                    {s.engagementModels.map(m => (
                      <span key={m} className="bg-sky-950/40 border border-sky-900/60 px-2 py-0.5 rounded">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        
        <div className="p-4 border-t border-slate-800 bg-slate-950 text-xs text-slate-500 flex items-center justify-between">
          <span>UpLiv Operations Portal · Role: Administrator</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs transition-colors"
          >
            Close Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
