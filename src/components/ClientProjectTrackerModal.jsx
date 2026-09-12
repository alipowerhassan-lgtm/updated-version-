import React, { useState } from 'react';
import { 
  X, Search, ShieldCheck, CheckCircle2, Clock, 
  ArrowRight, Calendar, User, Code2, 
  Layers, Lock, MessageCircle
} from 'lucide-react';

const DEMO_PROJECTS = {
  'VOLEN-DEMO-2026': {
    id: 'VOLEN-DEMO-2026',
    client: 'Apex Global Logistics',
    projectTitle: 'Enterprise Freight Tracking & Customer Portal',
    type: 'Custom Web App (SaaS / MVP)',
    status: 'In Progress - Phase 2 QA & Review',
    overallProgress: 68,
    startDate: 'Feb 15, 2026',
    estDelivery: 'March 30, 2026',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'TailwindCSS', 'Docker'],
    pmLead: 'Hamza (Senior Systems Architect)',
    milestones: [
      {
        phase: '01',
        title: 'Kickoff & Discovery',
        percentage: '100%',
        status: 'completed',
        date: 'Feb 15, 2026',
        desc: 'Scope discovery, PRD sign-off, system architecture diagrams finalized.',
        paymentStatus: '50% Advance Verified'
      },
      {
        phase: '02',
        title: 'Core Engine & RBAC Authentication',
        percentage: '100%',
        status: 'completed',
        date: 'Feb 26, 2026',
        desc: 'Database schema provisioned, JWT auth, role-based dashboards engineered.',
        paymentStatus: 'Cleared'
      },
      {
        phase: '03',
        title: 'Interactive UI & API Integrations',
        percentage: '75%',
        status: 'current',
        date: 'Target: March 18, 2026',
        desc: 'Live tracking map, freight dispatch webhook connectors, and customer table filters.',
        paymentStatus: '30% Review Milestone Pending'
      },
      {
        phase: '04',
        title: 'Staging Review & Client Walkthrough',
        percentage: '0%',
        status: 'upcoming',
        date: 'Target: March 24, 2026',
        desc: 'Private staging URL deployment, client end-to-end review, QA & punch-list fixes.',
        paymentStatus: 'Scheduled'
      },
      {
        phase: '05',
        title: 'Production Deployment & Handoff',
        percentage: '0%',
        status: 'upcoming',
        date: 'Target: March 30, 2026',
        desc: 'Production DNS, SSL A+ audit, repository transfer & customer charter final handoff.',
        paymentStatus: '20% Final Milestone on Deployment'
      }
    ]
  },
  'VOLEN-ECOMM-99': {
    id: 'VOLEN-ECOMM-99',
    client: 'Luxe Attire International',
    projectTitle: 'High-Conversion Headless E-Commerce Platform',
    type: 'E-Commerce Store',
    status: 'Phase 1 - Architecture & Design Complete',
    overallProgress: 45,
    startDate: 'March 01, 2026',
    estDelivery: 'April 10, 2026',
    techStack: ['React', 'Next.js', 'Stripe', 'TailwindCSS', 'Redis'],
    pmLead: 'Ali Hassan (Full-Stack Engineer)',
    milestones: [
      {
        phase: '01',
        title: 'UI/UX Design & Brand Tokens',
        percentage: '100%',
        status: 'completed',
        date: 'March 04, 2026',
        desc: 'High-fidelity Figma wireframes, brand typography, and design system approved.',
        paymentStatus: '50% Advance Verified'
      },
      {
        phase: '02',
        title: 'Storefront & Cart Engine',
        percentage: '80%',
        status: 'current',
        date: 'Target: March 20, 2026',
        desc: 'Responsive product catalog, variant selector, instant cart drawer and checkout flow.',
        paymentStatus: 'In Progress'
      },
      {
        phase: '03',
        title: 'Staging QA & Payment Gateways',
        percentage: '0%',
        status: 'upcoming',
        date: 'Target: April 02, 2026',
        desc: 'Stripe, Paymob, COD testing, order dispatch email triggers.',
        paymentStatus: '30% Milestone'
      },
      {
        phase: '04',
        title: 'Final Live Release',
        percentage: '0%',
        status: 'upcoming',
        date: 'Target: April 10, 2026',
        desc: 'Domain pointing, speed CDN caching, 100% repository handover.',
        paymentStatus: '20% Final Release'
      }
    ]
  }
};

export default function ClientProjectTrackerModal({ isOpen, onClose }) {
  const [searchCode, setSearchCode] = useState('VOLEN-DEMO-2026');
  const [activeProject, setActiveProject] = useState(DEMO_PROJECTS['VOLEN-DEMO-2026']);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSearch = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const cleanCode = searchCode.trim().toUpperCase();
    if (DEMO_PROJECTS[cleanCode]) {
      setActiveProject(DEMO_PROJECTS[cleanCode]);
      setErrorMsg('');
    } else {
      setErrorMsg(`No project found with tracking code "${cleanCode}". Try demo code: VOLEN-DEMO-2026`);
    }
  };

  const loadSample = (code) => {
    setSearchCode(code);
    setActiveProject(DEMO_PROJECTS[code]);
    setErrorMsg('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-white border border-sky-200/80 rounded-3xl shadow-2xl shadow-sky-900/20 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 px-6 py-5 text-white flex items-center justify-between border-b border-sky-500/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 shadow-inner">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-sky-400">
                  Volen Client Portal
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  Live Demo Mode
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Project Milestone & Delivery Tracker
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close Project Tracker"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tracking Search Input & Demo Pills */}
        <div className="p-6 bg-slate-50 border-b border-slate-200">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 items-stretch">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchCode}
                onChange={(e) => setSearchCode(e.target.value)}
                placeholder="Enter your Project Tracking Code (e.g., VOLEN-DEMO-2026)"
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-sm font-mono font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 shadow-md shadow-sky-600/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Track Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Demo Previews */}
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-500 font-medium">Try Demo Tracking Codes:</span>
            <button
              type="button"
              onClick={() => loadSample('VOLEN-DEMO-2026')}
              className={`px-2.5 py-1 rounded-lg font-mono font-bold transition-all cursor-pointer ${
                searchCode === 'VOLEN-DEMO-2026'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-sky-400 hover:text-sky-600'
              }`}
            >
              VOLEN-DEMO-2026 (SaaS Portal)
            </button>
            <button
              type="button"
              onClick={() => loadSample('VOLEN-ECOMM-99')}
              className={`px-2.5 py-1 rounded-lg font-mono font-bold transition-all cursor-pointer ${
                searchCode === 'VOLEN-ECOMM-99'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-sky-400 hover:text-sky-600'
              }`}
            >
              VOLEN-ECOMM-99 (E-Commerce Store)
            </button>
          </div>

          {errorMsg && (
            <div className="mt-2.5 text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-200 px-3 py-2 rounded-lg">
              {errorMsg}
            </div>
          )}
        </div>

        {/* Project Details & Milestone Track */}
        {activeProject && (
          <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
            {/* Top Project Badge Card */}
            <div className="bg-gradient-to-br from-sky-50/70 via-white to-indigo-50/40 p-5 rounded-2xl border border-sky-200/80 shadow-sm flex flex-col md:flex-row justify-between gap-4">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-sky-100 text-sky-800 border border-sky-200">
                    ID: {activeProject.id}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-100 text-indigo-800 border border-indigo-200">
                    {activeProject.type}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {activeProject.projectTitle}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
                  <span className="flex items-center gap-1 font-semibold">
                    <User className="w-3.5 h-3.5 text-sky-600" />
                    Client: <strong className="text-slate-800">{activeProject.client}</strong>
                  </span>
                  <span className="flex items-center gap-1 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-sky-600" />
                    Target Handover: <strong className="text-slate-800">{activeProject.estDelivery}</strong>
                  </span>
                  <span className="flex items-center gap-1 font-semibold">
                    <Code2 className="w-3.5 h-3.5 text-sky-600" />
                    Engineering Lead: <strong className="text-slate-800">{activeProject.pmLead}</strong>
                  </span>
                </div>
              </div>

              {/* Progress Dial Block */}
              <div className="md:text-right flex flex-col md:items-end justify-center min-w-[160px] border-t md:border-t-0 md:border-l border-sky-100 pt-3 md:pt-0 md:pl-5">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Overall Progress</div>
                <div className="text-3xl font-black text-sky-600 flex items-center md:justify-end gap-1">
                  <span>{activeProject.overallProgress}%</span>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">On Track</span>
                </div>
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden mt-2">
                  <div 
                    className="bg-gradient-to-r from-sky-500 to-indigo-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${activeProject.overallProgress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Milestones Flow (50% / 30% / 20% Governance Charter) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4 text-sky-600" />
                  <span>Contractual Milestones & Progress Log</span>
                </h4>
                <span className="text-xs text-slate-500 font-medium">Volen 50/30/20 Governance</span>
              </div>

              <div className="space-y-3">
                {activeProject.milestones.map((m, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border transition-all ${
                      m.status === 'completed'
                        ? 'bg-emerald-50/40 border-emerald-200'
                        : m.status === 'current'
                        ? 'bg-sky-50/70 border-sky-300 ring-2 ring-sky-300/30 shadow-sm'
                        : 'bg-slate-50/60 border-slate-200 opacity-70'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5">
                          {m.status === 'completed' ? (
                            <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                              <CheckCircle2 className="w-4 h-4" />
                            </div>
                          ) : m.status === 'current' ? (
                            <div className="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center animate-pulse">
                              <Clock className="w-3.5 h-3.5" />
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs font-mono font-bold">
                              {m.phase}
                            </div>
                          )}
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-slate-400">PHASE {m.phase}</span>
                            <span className="font-bold text-sm text-slate-900">{m.title}</span>
                          </div>
                          <p className="text-xs text-slate-600 mt-0.5">{m.desc}</p>
                        </div>
                      </div>

                      <div className="sm:text-right shrink-0 pl-9 sm:pl-0">
                        <div className="flex items-center sm:justify-end gap-2">
                          <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                            m.status === 'completed'
                              ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
                              : m.status === 'current'
                              ? 'bg-sky-100 text-sky-800 border-sky-300'
                              : 'bg-slate-100 text-slate-600 border-slate-200'
                          }`}>
                            {m.paymentStatus}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400 mt-1 font-mono">{m.date}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Support & Direct WhatsApp Sync */}
            <div className="p-4 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <div className="font-bold text-sm text-white">Have a question regarding your milestone status?</div>
                <div className="text-xs text-slate-400 mt-0.5">Direct line to Volen Solution Engineering & PM lead.</div>
              </div>

              <a
                href={`https://wa.me/?text=Hello%20Volen%20Solution,%20checking%20status%20for%20project%20tracking%20ID:%20${activeProject.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact Project Lead on WhatsApp</span>
              </a>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-100/80 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-slate-400" />
            <span>Encrypted Tracking Gateway • Volen Solution Client Charter</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs cursor-pointer"
          >
            Close Tracker
          </button>
        </div>
      </div>
    </div>
  );
}