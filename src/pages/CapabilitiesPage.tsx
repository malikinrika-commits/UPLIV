import React, { useState } from 'react';
import { TECHNOLOGY_CAPABILITIES } from '../data/companyData';
import { Search } from 'lucide-react';

interface CapabilitiesPageProps {
  onOpenRequirement: (serviceName?: string) => void;
}

export const CapabilitiesPage: React.FC<CapabilitiesPageProps> = ({
  onOpenRequirement
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = TECHNOLOGY_CAPABILITIES.filter((cat) => {
    if (selectedCategory !== 'all' && cat.id !== selectedCategory) return false;
    if (!searchQuery.trim()) return true;

    const q = searchQuery.toLowerCase();
    const matchesName = cat.name.toLowerCase().includes(q);
    const matchesDesc = cat.description.toLowerCase().includes(q);
    const matchesSkill = cat.skills.some(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.tags.some((t) => t.toLowerCase().includes(q))
    );
    return matchesName || matchesDesc || matchesSkill;
  });

  return (
    <div className="space-y-20 lg:space-y-28 py-6">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-14">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Enterprise Technology Matrix</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Technology Capabilities
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Explore our core technology stack specializations spanning cloud architecture, modern full-stack development, big data platforms, enterprise AI, cybersecurity, and DevOps automation.
            </p>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search technologies (e.g. React, Snowflake, AWS, Kubernetes)..."
              className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none"
            />
          </div>

          
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-sky-400 text-slate-950 font-bold'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Categories
            </button>
            {TECHNOLOGY_CAPABILITIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-sky-400 text-slate-950 font-bold'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <h3 className="text-xl font-bold text-white font-display mb-1.5">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-slate-950/80 border border-slate-800/80 p-3 rounded-xl"
                    >
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-slate-200">{skill.name}</span>
                        <span className="text-[10px] text-sky-400 font-mono bg-sky-950/40 px-2 py-0.5 rounded border border-sky-900/50">
                          {skill.level}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {skill.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <button
                  onClick={() => onOpenRequirement(`Technology Request: ${cat.name}`)}
                  className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-sky-300 hover:text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Request Talent in {cat.name.split(' ')[0]} &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
