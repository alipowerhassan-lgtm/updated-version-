import React, { useState } from 'react';
import ThreeDTiltCard from './ThreeDTiltCard';
import {
  Globe2,
  MapPin,
  Activity,
  ShieldCheck,
  Zap,
  Server,
  Radio,
  CheckCircle2,
  Building2,
  Sparkles,
  ArrowUpRight,
  Wifi,
  Cpu,
  Layers
} from 'lucide-react';

export default function GlobalFootprintSection({ onRequestProposal }) {
  const [hoveredNode, setHoveredNode] = useState(null);

  const hubs = [
    {
      id: 'pk',
      country: 'Pakistan',
      code: 'PK',
      flag: '🇵🇰',
      badge: 'Global HQ & Primary R&D',
      badgeStyle: 'from-sky-600 to-indigo-600 text-white shadow-sky-500/20',
      role: 'Global Headquarters & Central Engineering Studio',
      desc: 'Central architecture studio, core AI & full-stack R&D labs, and zero-trust engineering operations commanding global client deployments.',
      capabilities: ['Primary HQ Studio', '100+ Core Engineers', 'Zero-Trust SecOps', '24/7 Global NOC'],
      latency: '12ms Latency',
      coordinates: { x: '68%', y: '45%' }, // Map relative position
      status: 'Primary Hub • Operational 24/7'
    },
    {
      id: 'us',
      country: 'USA (United States)',
      code: 'US',
      flag: '🇺🇸',
      badge: 'North America Gateway',
      badgeStyle: 'from-blue-600 to-sky-600 text-white shadow-blue-500/20',
      role: 'Enterprise North America Client Operations',
      desc: 'Serving enterprise SaaS platforms, AI reasoning systems, and cloud infrastructure clients across East & West Coast technology hubs.',
      capabilities: ['Enterprise SaaS', 'AI Reasoning Nodes', 'AWS/Azure Cloud', 'US Client Support'],
      latency: '34ms Latency',
      coordinates: { x: '24%', y: '38%' },
      status: 'Active Node • High Throughput'
    },
    {
      id: 'uk',
      country: 'UK (United Kingdom)',
      code: 'GB',
      flag: '🇬🇧',
      badge: 'European Financial Hub',
      badgeStyle: 'from-indigo-600 to-blue-600 text-white shadow-indigo-500/20',
      role: 'European Financial & Logistics Network',
      desc: 'Architecting high-speed edge gateways, fintech security compliance layers, real-time analytics, and supply-chain dashboards.',
      capabilities: ['Fintech Protocols', 'High-Speed Edge APIs', 'ISO/GDPR Compliant', 'Logistics Engines'],
      latency: '26ms Latency',
      coordinates: { x: '47%', y: '30%' },
      status: 'Active Node • Low Latency'
    },
    {
      id: 'sa',
      country: 'Saudi Arabia (KSA)',
      code: 'SA',
      flag: '🇸🇦',
      badge: 'MENA Vision 2030 Node',
      badgeStyle: 'from-emerald-600 to-teal-600 text-white shadow-emerald-500/20',
      role: 'MENA Digital Transformation & Smart Ecosystems',
      desc: 'Delivering production-grade software architectures, government-grade security, and enterprise AI transformation for Middle East leaders.',
      capabilities: ['Vision 2030 Tech', 'Enterprise ERP/AI', 'Government Security', 'Riyadh Client Hub'],
      latency: '18ms Latency',
      coordinates: { x: '58%', y: '50%' },
      status: 'Active Node • Regional HQ'
    }
  ];

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-10 border border-sky-150 shadow-xl bg-gradient-to-b from-white/95 via-sky-50/20 to-white/90 relative overflow-hidden space-y-8">
      {/* Background Subtle Tech Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none"></div>

      {/* --- HEADER BLOCK --- */}
      <div className="text-center max-w-3xl mx-auto space-y-3 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-200 text-sky-700 shadow-xs">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
          </span>
          <Globe2 className="w-4 h-4 text-sky-600" />
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-800">
            Global Operational Footprint
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
          Serving Enterprise Clients Across <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">Key International Hubs</span>
        </h2>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
          Volen Solution operates a resilient global engineering network, delivering mission-critical software, automated AI pipelines, and zero-trust security across 4 core international territories.
        </p>
      </div>

      {/* --- REAL-TIME TELEMETRY RIBBON --- */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-slate-900/90 text-white rounded-2xl p-4 border border-slate-800 shadow-md backdrop-blur-md relative z-10">
        <div className="flex items-center gap-3 px-2 border-r border-slate-800/80">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
            <Activity className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider font-mono text-slate-400">Global Network Status</div>
            <div className="text-xs font-extrabold text-emerald-400 flex items-center gap-1">
              <span>All 4 Hubs Online</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 px-2 md:border-r border-slate-800/80">
          <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 border border-sky-500/30">
            <Wifi className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider font-mono text-slate-400">Avg Mesh Latency</div>
            <div className="text-xs font-extrabold text-sky-300 font-mono">18ms Ultra-Fast</div>
          </div>
        </div>

        <div className="flex items-center gap-3 px-2 border-r border-slate-800/80">
          <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/30">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider font-mono text-slate-400">Security SLA</div>
            <div className="text-xs font-extrabold text-indigo-300">99.99% Zero-Trust</div>
          </div>
        </div>

        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider font-mono text-slate-400">Engineering Capacity</div>
            <div className="text-xs font-extrabold text-amber-300">100+ Senior Devs</div>
          </div>
        </div>
      </div>

      {/* --- INTERACTIVE VECTOR WORLD MAP VISUALIZATION CANVAS --- */}
      <div className="relative w-full rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 p-6 sm:p-8 border border-sky-500/20 shadow-2xl overflow-hidden min-h-[260px] flex flex-col justify-between">
        {/* Subtle Map Mesh Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"></div>

        {/* SVG Network Beams Connecting Pakistan HQ to US, UK, SA */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#818cf8" stopOpacity="1" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Connection Lines from PK (68%, 45%) */}
          {/* PK to US */}
          <path
            d="M 68% 45% Q 46% 15% 24% 38%"
            fill="none"
            stroke="url(#beamGradient)"
            strokeWidth="2"
            strokeDasharray="6 4"
            className="animate-[pulse_3s_infinite]"
            filter="url(#glow)"
          />
          {/* PK to UK */}
          <path
            d="M 68% 45% Q 57.5% 25% 47% 30%"
            fill="none"
            stroke="url(#beamGradient)"
            strokeWidth="2"
            strokeDasharray="6 4"
            className="animate-[pulse_2.5s_infinite]"
            filter="url(#glow)"
          />
          {/* PK to SA */}
          <path
            d="M 68% 45% Q 63% 47.5% 58% 50%"
            fill="none"
            stroke="url(#beamGradient)"
            strokeWidth="2"
            strokeDasharray="6 4"
            className="animate-[pulse_2s_infinite]"
            filter="url(#glow)"
          />
        </svg>

        {/* Map Header Overlay */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-sky-400 animate-pulse" />
            <span className="text-xs font-mono font-bold text-sky-300 tracking-wider uppercase">
              Live Global Mesh Topology • Active Routing
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700 hidden sm:inline-block">
            Central Node: Islamabad/Lahore HQ (PK)
          </span>
        </div>

        {/* Map Nodes (Pulsing Pin Points) */}
        <div className="relative z-10 my-8 min-h-[140px]">
          {hubs.map((hub) => {
            const isHovered = hoveredNode === hub.id;
            return (
              <div
                key={hub.id}
                style={{ left: hub.coordinates.x, top: hub.coordinates.y }}
                onMouseEnter={() => setHoveredNode(hub.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              >
                {/* Radar Ripple */}
                <div className={`absolute -inset-3 rounded-full opacity-75 animate-ping transition-all ${
                  hub.id === 'pk' ? 'bg-amber-400' : 'bg-sky-400'
                }`}></div>

                {/* Node Core Pin */}
                <div className={`relative w-7 h-7 rounded-full border-2 flex items-center justify-center shadow-lg transition-all duration-300 ${
                  hub.id === 'pk'
                    ? 'bg-amber-500 border-amber-300 shadow-amber-500/50 scale-110'
                    : 'bg-sky-500 border-sky-200 shadow-sky-500/50 hover:scale-125'
                }`}>
                  <span className="text-xs">{hub.flag}</span>
                </div>

                {/* Node Label Tooltip */}
                <div className={`absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-lg text-[11px] font-extrabold font-mono transition-all duration-200 shadow-xl border ${
                  hub.id === 'pk'
                    ? 'bg-amber-950 text-amber-200 border-amber-500/40'
                    : 'bg-slate-900 text-sky-300 border-sky-500/40'
                } ${isHovered ? 'scale-110 opacity-100' : 'opacity-90'}`}>
                  {hub.country.split(' ')[0]} {hub.id === 'pk' && '★ (HQ)'}
                </div>
              </div>
            );
          })}
        </div>

        {/* Map Footer Note */}
        <div className="relative z-10 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 border-t border-slate-800/80 pt-3 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <span className="text-amber-300 font-bold">Gold Node: Central Architecture Studio (PK)</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <span>🇺🇸 US Hub</span>
            <span>•</span>
            <span>🇬🇧 UK Hub</span>
            <span>•</span>
            <span>🇸🇦 KSA Hub</span>
          </div>
        </div>
      </div>

      {/* --- 4 HUB CARDS GRID WITH 3D TILT --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
        {hubs.map((loc) => {
          const isHovered = hoveredNode === loc.id;
          return (
            <ThreeDTiltCard key={loc.id} maxTilt={10} className="h-full">
              <div
                onMouseEnter={() => setHoveredNode(loc.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className={`p-6 rounded-3xl bg-white/95 backdrop-blur-md border transition-all duration-300 space-y-4 flex flex-col justify-between h-full relative group shadow-md hover:shadow-2xl ${
                  loc.id === 'pk'
                    ? 'border-sky-300 ring-2 ring-sky-400/20 hover:border-sky-500'
                    : 'border-sky-150 hover:border-sky-400 hover:shadow-sky-500/10'
                }`}
              >
                {/* Glow highlight effect */}
                <div className={`absolute -inset-px rounded-3xl bg-gradient-to-r ${loc.badgeStyle} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`}></div>

                <div>
                  {/* Top Bar: Flag Emoji + Country ISO Badge + Hub Pill */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl drop-shadow-xs">{loc.flag}</span>
                      <span className="text-xs font-mono font-black px-2 py-0.5 rounded-md bg-slate-100 text-slate-800 border border-slate-200">
                        {loc.code}
                      </span>
                    </div>

                    <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-gradient-to-r ${loc.badgeStyle} tracking-tight shadow-xs`}>
                      {loc.badge}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-sky-600 transition-colors flex items-center gap-1.5">
                    <span>{loc.country}</span>
                    {loc.id === 'pk' && <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />}
                  </h3>

                  <div className="text-xs font-bold text-sky-600 mt-1 leading-snug">
                    {loc.role}
                  </div>

                  <p className="text-slate-600 text-xs mt-2.5 leading-relaxed font-normal">
                    {loc.desc}
                  </p>

                  {/* Micro-Capabilities Tag Grid */}
                  <div className="pt-3 flex flex-wrap gap-1.5">
                    {loc.capabilities.map((cap, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-sky-50/80 text-sky-800 border border-sky-200/60"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer Telemetry */}
                <div className="pt-3 border-t border-sky-100 flex items-center justify-between gap-2 text-[11px] font-semibold text-emerald-600 mt-2">
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[11px] font-mono font-bold text-emerald-700">{loc.status}</span>
                  </div>

                  <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                    {loc.latency}
                  </span>
                </div>
              </div>
            </ThreeDTiltCard>
          );
        })}
      </div>
    </div>
  );
}
