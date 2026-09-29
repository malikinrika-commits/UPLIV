import React, { useState } from 'react';
import { CAREER_OPENINGS, CareerOpening } from '../data/companyData';
import {
  MapPin,
  Clock,
  Upload,
  CheckCircle2,
  X,
  Search
} from 'lucide-react';
import { apiUrl } from '../lib/api';

export const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<CareerOpening | null>(null);
  const [filterDept, setFilterDept] = useState<string>('All');
  const [filterType, setFilterType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [applyData, setApplyData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    note: '',
    fileName: ''
  });
  const [applySubmitted, setApplySubmitted] = useState(false);
  const [applyError, setApplyError] = useState('');
  const [isApplySubmitting, setIsApplySubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const departments = ['All', ...new Set(CAREER_OPENINGS.map((j) => j.department))];
  const types = ['All', 'Full-Time (W2)', 'Contract (W2 / C2C)'];

  const filteredJobs = CAREER_OPENINGS.filter((job) => {
    if (filterDept !== 'All' && job.department !== filterDept) return false;
    if (filterType !== 'All' && job.type !== filterType) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = job.title.toLowerCase().includes(q);
      const matchSkill = job.keySkills.some((s) => s.toLowerCase().includes(q));
      if (!matchTitle && !matchSkill) return false;
    }
    return true;
  });

  const handleOpenApply = (job: CareerOpening) => {
    setSelectedJob(job);
    setIsApplyModalOpen(true);
    setApplySubmitted(false);
    setApplyError('');
  };

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!applyData.firstName.trim() || !applyData.lastName.trim() || !applyData.email.trim()) {
      setApplyError('Please fill in required fields (Name and Email)');
      return;
    }
    if (!resumeFile) {
      setApplyError('Please attach your resume (PDF, DOC, or DOCX).');
      return;
    }

    setApplyError('');
    setIsApplySubmitting(true);
    const submission = new FormData();
    submission.append('firstName', applyData.firstName);
    submission.append('lastName', applyData.lastName);
    submission.append('email', applyData.email);
    submission.append('phone', applyData.phone);
    submission.append('linkedin', applyData.linkedin);
    submission.append('github', applyData.github);
    submission.append('note', applyData.note);
    submission.append('jobTitle', selectedJob?.title || 'General Talent Pool');
    submission.append('resume', resumeFile);

    try {
      const response = await fetch(apiUrl('/api/applications'), {
        method: 'POST',
        body: submission,
      });
      const result = await response.json().catch(() => ({})) as { error?: string };
      if (!response.ok) {
        throw new Error(result.error || 'Unable to submit your application. Please try again.');
      }
      setApplySubmitted(true);
    } catch (error) {
      setApplyError(error instanceof Error ? error.message : 'Unable to submit your application. Please try again.');
    } finally {
      setIsApplySubmitting(false);
    }
  };

  return (
    <div className="space-y-20 lg:space-y-28 py-6">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-14">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Technology Careers · Nationwide U.S.</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Build Your Technology Career With UpLiv
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Join a dynamic technology consulting and services community. Work on high-impact cloud, data, AI, and software engineering initiatives for leading enterprise clients across the United States.
            </p>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-white font-display mb-2">High-Impact Client Projects</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Work with established enterprises on mission-critical platform modernizations, machine learning rollouts, and cloud-native systems.
            </p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-white font-display mb-2">Flexible Remote &amp; Hybrid</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We offer remote and hybrid opportunities throughout the United States, synchronized with U.S. time zones and modern agile workflows.
            </p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-white font-display mb-2">Competitive Compensation &amp; Growth</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Market-leading compensation packages (W2 or C2C), ongoing certification sponsorship, and clear pathways to lead architecture roles.
            </p>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-900/80 border border-slate-800 p-4 rounded-2xl mb-8">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search roles or skills (e.g. React, Python, Cloud)..."
              className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <select
              value={filterDept}
              onChange={(e) => setFilterDept(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-xs text-slate-200 rounded-xl px-3 py-2 focus:outline-none"
            >
              {departments.map((d) => (
                <option key={d} value={d}>Department: {d}</option>
              ))}
            </select>

            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-xs text-slate-200 rounded-xl px-3 py-2 focus:outline-none"
            >
              {types.map((t) => (
                <option key={t} value={t}>Type: {t}</option>
              ))}
            </select>
          </div>
        </div>

        
        <div className="space-y-4">
          {filteredJobs.length === 0 ? (
            <div className="text-center py-12 bg-slate-900/40 border border-slate-800 rounded-2xl">
              <p className="text-sm text-slate-400">No current openings match your filter criteria.</p>
              <button
                onClick={() => {
                  setFilterDept('All');
                  setFilterType('All');
                  setSearchQuery('');
                }}
                className="mt-3 text-xs text-sky-400 hover:underline"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-semibold text-sky-400 bg-sky-950/60 border border-sky-800/60 px-2.5 py-0.5 rounded">
                      {job.department}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" /> {job.location}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-500" /> {job.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-display">
                    {job.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {job.keySkills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] text-slate-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-800/80 font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-2">
                  <button
                    onClick={() => handleOpenApply(job)}
                    className="px-6 py-2.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold rounded-xl text-xs transition-colors cursor-pointer text-center font-display"
                  >
                    Apply for Position
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/40 border border-dashed border-slate-700 rounded-3xl p-8 sm:p-12 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-white font-display">
              Don't See Your Exact Role?
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We continually evaluate senior software engineers, cloud architects, and data practitioners for upcoming U.S. enterprise client initiatives. Join our private talent community.
            </p>
            <button
              onClick={() => handleOpenApply({
                id: 'GEN-TALENT',
                title: 'General Technology Talent Network',
                department: 'All Practices',
                location: 'Remote (USA)',
                type: 'Full-time',
                experience: '3+ Years',
                postedDate: 'Ongoing',
                description: 'Open consideration for future staffing and consulting placements.',
                keySkills: ['Cloud', 'Software Engineering', 'Data', 'AI', 'DevOps']
              })}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-xs transition-colors cursor-pointer border border-slate-600"
            >
              Submit Your Resume / Profile
            </button>
          </div>
        </div>
      </section>

      
      {isApplyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-slate-100">
            <button
              onClick={() => setIsApplyModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {applySubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">Application Received!</h3>
                <p className="text-slate-300 text-xs sm:text-sm">
                  Thank you, {applyData.firstName}. Your profile for <strong>{selectedJob?.title}</strong> has been received by our technical recruiting team in New York.
                </p>
                <button
                  onClick={() => setIsApplyModalOpen(false)}
                  className="mt-4 px-6 py-2 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold rounded-lg text-xs transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 block mb-1">
                    UpLiv Careers · Direct Application
                  </span>
                  <h3 className="text-xl font-bold text-white font-display">
                    {selectedJob?.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {selectedJob?.department} · {selectedJob?.location}
                  </p>
                </div>

                {applyError && (
                  <div className="mb-4 p-2.5 bg-rose-950/60 border border-rose-800 text-rose-300 text-xs rounded-lg">
                    {applyError}
                  </div>
                )}

                <form onSubmit={handleApplySubmit} className="space-y-3.5">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">First Name *</label>
                      <input
                        type="text"
                        value={applyData.firstName}
                        onChange={(e) => setApplyData({ ...applyData, firstName: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-sky-500"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Last Name *</label>
                      <input
                        type="text"
                        value={applyData.lastName}
                        onChange={(e) => setApplyData({ ...applyData, lastName: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-sky-500"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Email *</label>
                      <input
                        type="email"
                        value={applyData.email}
                        onChange={(e) => setApplyData({ ...applyData, email: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-sky-500"
                        placeholder="john.smith@gmail.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Phone</label>
                      <input
                        type="tel"
                        value={applyData.phone}
                        onChange={(e) => setApplyData({ ...applyData, phone: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-sky-500"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">LinkedIn Profile</label>
                      <input
                        type="url"
                        value={applyData.linkedin}
                        onChange={(e) => setApplyData({ ...applyData, linkedin: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-sky-500"
                        placeholder="https://linkedin.com/in/..."
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">GitHub / Portfolio</label>
                      <input
                        type="url"
                        value={applyData.github}
                        onChange={(e) => setApplyData({ ...applyData, github: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-sky-500"
                        placeholder="https://github.com/..."
                      />
                    </div>
                  </div>

                  
                  <div className="border border-dashed border-slate-800 bg-slate-950/60 rounded-xl p-3 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Upload className="w-4 h-4 text-sky-400" />
                      <span className="text-slate-300">
                        {applyData.fileName ? applyData.fileName : 'Attach Resume (PDF or DOCX)'}
                      </span>
                    </div>
                    <label className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded cursor-pointer transition-colors font-medium">
                      Select File
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setResumeFile(e.target.files[0]);
                            setApplyData({ ...applyData, fileName: e.target.files[0].name });
                          } else {
                            setResumeFile(null);
                            setApplyData({ ...applyData, fileName: '' });
                          }
                        }}
                      />
                    </label>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Brief Note / Availability</label>
                    <textarea
                      rows={2}
                      value={applyData.note}
                      onChange={(e) => setApplyData({ ...applyData, note: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-sky-500 resize-none"
                      placeholder="Share your notice period, preferred compensation, or core tech stack..."
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isApplySubmitting}
                      className="w-full py-2.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold rounded-lg text-xs transition-colors cursor-pointer font-display disabled:opacity-60 disabled:cursor-wait"
                    >
                      {isApplySubmitting ? 'Sending Application...' : 'Submit Application'}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
