import React, { useState } from 'react';
import { U_S_PRESENCE_HUBS } from '../data/companyData';
import { MapPin, CheckCircle2 } from 'lucide-react';

export const USMapInteractive: React.FC = () => {
  const [selectedHub, setSelectedHub] = useState<string>('New York, NY');

  // Map lng/lat into an 800x480 viewBox (US: -125..-66.9, 24.5..49.38)
  const getCoordinates = (lng: number, lat: number) => {
    const minLng = -125;
    const maxLng = -66.9;
    const minLat = 24.5;
    const maxLat = 49.38;

    const x = ((lng - minLng) / (maxLng - minLng)) * 740 + 30;
    const y = ((maxLat - lat) / (maxLat - minLat)) * 400 + 40;
    return { x, y };
  };

  const nyHub = U_S_PRESENCE_HUBS.find(h => h.isHQ)!;
  const nyPos = getCoordinates(nyHub.lng, nyHub.lat);

  const activeHubData = U_S_PRESENCE_HUBS.find(h => h.city === selectedHub) || nyHub;

  return (
    <div className="w-full bg-slate-900/60 border border-slate-800 rounded-2xl p-6 lg:p-10 backdrop-blur-sm">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-slate-800/80 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            Nationwide U.S. Reach · Corporate Base: New York, USA
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight font-display">
            Supporting Organizations Across the United States
          </h3>
          <p className="text-slate-400 text-sm lg:text-base mt-2 max-w-2xl">
            UpLiv LLC is positioned to support organizations across the United States through flexible IT staffing, recruiting, consulting, and project-based technology services.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 bg-slate-950/80 border border-slate-800 px-4 py-3 rounded-xl text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse border-2 border-slate-950" />
            <span className="text-slate-300 font-medium">New York Corporate HQ</span>
          </div>
          <div className="w-px h-4 bg-slate-800" />
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-sky-400 border border-slate-950" />
            <span className="text-slate-400">Regional Enterprise Delivery Hubs</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <div className="lg:col-span-8 relative bg-slate-950/70 border border-slate-800/80 rounded-xl p-4 overflow-hidden min-h-[360px] flex items-center justify-center">
          <svg
            viewBox="0 0 800 480"
            className="w-full h-auto max-h-[460px] select-none"
            style={{ filter: 'drop-shadow(0 0 20px rgba(8, 127, 193, 0.05))' }}
          >
            <defs>
              <linearGradient id="mapGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EAF5FC" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#087FC1" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="rayGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#08A9E8" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#08A9E8" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            
            <path
              d="M 68 110 
                 L 115 110 L 140 125 L 205 125 L 285 120 L 375 125 L 430 115 L 490 120 L 530 90 L 580 95 L 610 65 L 640 60 L 685 75 L 720 100 L 730 130 L 710 145 L 705 185 L 690 195 L 705 210 L 675 255 L 650 270 L 660 300 L 675 350 L 655 420 L 635 435 L 615 390 L 600 370 L 580 375 L 530 365 L 470 375 L 440 370 L 400 440 L 360 410 L 340 375 L 280 370 L 225 385 L 175 375 L 140 350 L 110 330 L 80 280 L 70 200 Z"
              fill="url(#mapGlow)"
              stroke="#087FC1"
              strokeWidth="1.5"
              className="transition-colors duration-500"
            />

            
            <g stroke="#B9D9ED" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.5">
              <line x1="40" y1="140" x2="760" y2="140" />
              <line x1="40" y1="260" x2="760" y2="260" />
              <line x1="40" y1="380" x2="760" y2="380" />
              <line x1="200" y1="40" x2="200" y2="440" />
              <line x1="400" y1="40" x2="400" y2="440" />
              <line x1="600" y1="40" x2="600" y2="440" />
            </g>

            
            {U_S_PRESENCE_HUBS.map((hub) => {
              if (hub.isHQ) return null;
              const pos = getCoordinates(hub.lng, hub.lat);
              const isSelected = selectedHub === hub.city;
              return (
                <g key={`ray-${hub.city}`}>
                  <line
                    x1={nyPos.x}
                    y1={nyPos.y}
                    x2={pos.x}
                    y2={pos.y}
                    stroke={isSelected ? '#08A9E8' : '#0B2145'}
                    strokeWidth={isSelected ? '2' : '1'}
                    strokeDasharray={isSelected ? 'none' : '4 4'}
                    opacity={isSelected ? 0.9 : 0.4}
                  />
                  {isSelected && (
                    <circle
                      cx={(nyPos.x + pos.x) / 2}
                      cy={(nyPos.y + pos.y) / 2}
                      r="2"
                      fill="#08A9E8"
                      className="animate-ping"
                    />
                  )}
                </g>
              );
            })}

            
            {U_S_PRESENCE_HUBS.map((hub) => {
              const pos = getCoordinates(hub.lng, hub.lat);
              const isHQ = hub.isHQ;
              const isSelected = selectedHub === hub.city;

              return (
                <g
                  key={hub.city}
                  className="cursor-pointer group"
                  onClick={() => setSelectedHub(hub.city)}
                >
                  
                  {(isHQ || isSelected) && (
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isHQ ? 16 : 12}
                      fill={isHQ ? '#087FC1' : '#08A9E8'}
                      opacity="0.25"
                      className="animate-pulse"
                    />
                  )}

                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={isHQ ? 7 : 5}
                    fill={isHQ ? '#087FC1' : isSelected ? '#08A9E8' : '#079FE8'}
                    stroke="#0B2145"
                    strokeWidth="2"
                    className="transition-transform group-hover:scale-125"
                  />

                  
                  <text
                    x={pos.x}
                    y={pos.y - 10}
                    textAnchor="middle"
                    fill={isHQ ? '#087FC1' : isSelected ? '#0B3156' : '#42617F'}
                    fontSize={isHQ ? '11' : '9.5'}
                    fontWeight={isHQ || isSelected ? '700' : '500'}
                    className="select-none pointer-events-none transition-colors"
                  >
                    {hub.city.split(',')[0]} {isHQ && '★'}
                  </text>
                </g>
              );
            })}
          </svg>

          <div className="absolute bottom-3 left-3 text-[11px] text-slate-500 bg-slate-900/90 border border-slate-800 px-2.5 py-1 rounded">
            Click any city node to inspect regional capabilities
          </div>
        </div>

        
        <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4">
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4">
              <div className="flex items-center gap-2">
                <MapPin className={`w-4 h-4 ${activeHubData.isHQ ? 'text-amber-400' : 'text-sky-400'}`} />
                <span className="font-semibold text-white text-base font-display">{activeHubData.city}</span>
              </div>
              {activeHubData.isHQ ? (
                <span className="text-[11px] font-semibold text-amber-300 bg-amber-950/70 border border-amber-800/60 px-2 py-0.5 rounded">
                  Corporate HQ
                </span>
              ) : (
                <span className="text-[11px] text-sky-400 bg-sky-950/60 border border-sky-800/50 px-2 py-0.5 rounded">
                  Delivery Hub
                </span>
              )}
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <span className="text-xs text-slate-500 block uppercase font-medium">Practice Focus</span>
                <p className="text-slate-200 font-medium mt-0.5">{activeHubData.role}</p>
              </div>

              <div>
                <span className="text-xs text-slate-500 block uppercase font-medium">Coverage Area</span>
                <p className="text-slate-400 text-xs mt-0.5">
                  {activeHubData.isHQ
                    ? 'Nationwide executive governance, corporate compliance, and East Coast enterprise client accounts.'
                    : `Regional enterprise accounts and on-demand technical talent across the ${activeHubData.state} corridor and surrounding states.`}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/60">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Time-zone aligned U.S. collaboration</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Standard U.S. master service agreement (MSA)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-950/70 border border-slate-800/80 p-3.5 rounded-xl">
              <span className="text-xs text-slate-400">Market</span>
              <p className="text-lg font-bold text-white mt-0.5 font-display">All 50 States</p>
              <p className="text-[11px] text-slate-500">Coast-to-coast delivery</p>
            </div>
            <div className="bg-slate-950/70 border border-slate-800/80 p-3.5 rounded-xl">
              <span className="text-xs text-slate-400">Legal Entity</span>
              <p className="text-lg font-bold text-white mt-0.5 font-display">New York</p>
              <p className="text-[11px] text-slate-500">Incorporated in USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
