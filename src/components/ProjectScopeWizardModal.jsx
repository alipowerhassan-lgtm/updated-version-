import React, { useState } from 'react';
import { 
  X, Sparkles, Check, ArrowRight, ArrowLeft, MessageSquare, 
  Download, Layers, Clock, Cpu, ShieldCheck, Zap, Globe, FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { saveAdminProposal } from '../utils/adminStorage';

const PROJECT_TYPES = [
  { id: 'custom-saas', title: 'Custom SaaS / Web App', icon: '💻', estPkr: '400,000 – 1,200,000 PKR', estUsd: '$3,500 – $12,000', desc: 'Full-stack cloud application with RBAC, subscriptions, and database.' },
  { id: 'ecommerce', title: 'E-Commerce Store', icon: '🛒', estPkr: '120,000 – 350,000 PKR', estUsd: '$1,500 – $4,500', desc: 'Product catalog, checkout, Stripe/Paymob, inventory, and orders.' },
  { id: 'corporate', title: 'Corporate / Business Site', icon: '🏢', estPkr: '50,000 – 140,000 PKR', estUsd: '$700 – $2,200', desc: '5–10 pages, SEO tuned, CMS, service inquiry flows.' },
  { id: 'landing-page', title: 'High-Conversion Landing Page', icon: '⚡', estPkr: '15,000 – 40,000 PKR', estUsd: '$200 – $600', desc: 'Single action conversion funnel, sub-second load speed, lead capture.' },
  { id: 'ai-automation', title: 'AI Solutions & Reasoning Engine', icon: '🤖', estPkr: '300,000 – 900,000 PKR', estUsd: '$2,500 – $8,000', desc: 'RAG vectors, custom LLM agents, and business automation pipelines.' },
  { id: 'cybersecurity', title: 'Cybersecurity & Code Audit', icon: '🛡️', estPkr: '150,000 – 450,000 PKR', estUsd: '$1,200 – $4,000', desc: 'OWASP penetration testing, vulnerability remediation, SSL & SOC-2 hardening.' }
];

const TIMELINES = [
  { id: 'urgent', title: 'Express Sprint (1–2 Weeks)', badge: 'Fast Track (+20%)', factor: 1.2, desc: 'Dedicated sprint pod working exclusively on your launch.' },
  { id: 'standard', title: 'Standard Delivery (3–5 Weeks)', badge: 'Recommended', factor: 1.0, desc: 'Balanced agile sprints, continuous client review and QA.' },
  { id: 'flexible', title: 'Enterprise Milestone (6–10 Weeks)', badge: 'Phased Release', factor: 1.0, desc: 'Multi-stage rollout with staged beta cohorts.' }
];

const TECH_PREFERENCES = [
  { id: 'modern-web', title: 'Modern Full-Stack (React 19 + Node.js/NestJS)', icon: '⚡' },
  { id: 'nextjs', title: 'Next.js 15 Server-Side Rendering (Max SEO)', icon: '🚀' },
  { id: 'python-ai', title: 'Python Backend + AI Agent Integration', icon: '🧠' },
  { id: 'enterprise-cloud', title: 'Dockerized Cloud (AWS / Cloudflare)', icon: '☁️' }
];

export default function ProjectScopeWizardModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState(PROJECT_TYPES[0]);
  const [selectedTimeline, setSelectedTimeline] = useState(TIMELINES[1]);
  const [selectedTech, setSelectedTech] = useState([TECH_PREFERENCES[0].id, TECH_PREFERENCES[1].id]);
  const [clientInfo, setClientInfo] = useState({ name: '', email: '', phone: '', currency: 'PKR' });
  const [generatedCode, setGeneratedCode] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const toggleTech = (id) => {
    if (selectedTech.includes(id)) {
      if (selectedTech.length > 1) {
        setSelectedTech(selectedTech.filter(t => t !== id));
      }
    } else {
      setSelectedTech([...selectedTech, id]);
    }
  };

  const handleFinishWizard = () => {
    const record = saveAdminProposal({
      fullName: clientInfo.name || 'Scope Wizard Client',
      email: clientInfo.email || 'Via Proposal Generator',
      phone: clientInfo.phone || 'Via WhatsApp',
      domain: selectedType.title,
      scale: `${selectedTimeline.title} • Tech: ${selectedTech.join(', ')}`,
      timeline: selectedTimeline.title,
      budgetEstimate: clientInfo.currency === 'PKR' ? selectedType.estPkr : selectedType.estUsd,
      details: `Generated via Interactive Scope Builder. Selected Type: ${selectedType.title}. Timeline: ${selectedTimeline.title}. Tech selections: ${selectedTech.join(', ')}.`,
      source: 'Interactive Scope Builder'
    });

    if (record) {
      setGeneratedCode(record.trackingCode);
    }
    setStep(4);
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
  };

  const getProposalSummaryText = () => {
    const cost = clientInfo.currency === 'PKR' ? selectedType.estPkr : selectedType.estUsd;
    return `*VOLEN SOLUTION — TAILORED TECHNICAL PROPOSAL SUMMARY*\n\n` +
      `📌 *Project Type:* ${selectedType.title}\n` +
      `⏱️ *Target Timeline:* ${selectedTimeline.title}\n` +
      `⚙️ *Tech Stack Scope:* ${selectedTech.map(t => TECH_PREFERENCES.find(x => x.id === t)?.title).join(' | ')}\n` +
      `💰 *Estimated Budget:* ${cost}\n` +
      `🛡️ *Customer Policy:* 50% Advance • 30% Review QA • 20% Production Handover\n` +
      `🆔 *Tracking Code:* ${generatedCode || 'PENDING'}\n` +
      `👤 *Client:* ${clientInfo.name || 'Valued Client'} (${clientInfo.email || 'Email'})\n\n` +
      `Hello Volen Solution team, I configured this scope on your builder and would like to proceed with an architectural review.`;
  };

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(getProposalSummaryText())}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-white border border-sky-300 rounded-3xl shadow-2xl shadow-sky-950/30 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-950 via-sky-950 to-slate-950 px-6 py-5 text-white flex items-center justify-between border-b border-sky-500/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-cyan-500 text-slate-950 flex items-center justify-center font-bold shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-sky-400">
                  Instant Scope Builder
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-500/20 text-sky-300 border border-sky-400/30">
                  Step {step} of 4
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Interactive Project Scope & Proposal Generator
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close Scope Builder"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-1.5 flex">
          <div 
            className="bg-gradient-to-r from-sky-500 to-cyan-400 h-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          ></div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 max-h-[72vh] overflow-y-auto">
          {/* STEP 1: Select Project Type */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-lg font-extrabold text-slate-900">Step 1: What type of digital solution are you building?</h3>
                <p className="text-xs text-slate-500">Select your core architecture archetype for instant pricing & timeline calculation.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {PROJECT_TYPES.map((type) => {
                  const isSelected = selectedType.id === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedType(type)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-sky-50/80 border-sky-500 ring-2 ring-sky-500/20 shadow-sm'
                          : 'bg-white border-slate-200 hover:border-sky-300 hover:bg-slate-50/50'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <span className="text-2xl">{type.icon}</span>
                          <span className="font-extrabold text-sm text-slate-900">{type.title}</span>
                        </div>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">{type.desc}</p>
                      <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-400">Est. Budget:</span>
                        <span className="font-bold text-sky-700">{type.estPkr}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-sky-600/20 flex items-center gap-2 cursor-pointer"
                >
                  <span>Continue to Timeline & Stacks</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Timeline & Tech Stacks */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-lg font-extrabold text-slate-900">Step 2: Choose your desired delivery timeline & tech stack</h3>
                <p className="text-xs text-slate-500">We match dedicated full-stack engineering pods to your timeline requirements.</p>
              </div>

              {/* Timelines */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Sprint Delivery Schedule</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {TIMELINES.map((t) => {
                    const isSelected = selectedTimeline.id === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setSelectedTimeline(t)}
                        className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-sky-50/80 border-sky-500 ring-2 ring-sky-500/20 shadow-sm'
                            : 'bg-white border-slate-200 hover:border-sky-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900">{t.title}</span>
                          {isSelected && <Check className="w-4 h-4 text-sky-600" />}
                        </div>
                        <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-800">
                          {t.badge}
                        </span>
                        <p className="text-[11px] text-slate-500 mt-1.5">{t.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tech Stack selections */}
              <div className="space-y-2 pt-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Preferred Technology Focus (Multi-select)</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {TECH_PREFERENCES.map((tech) => {
                    const isChecked = selectedTech.includes(tech.id);
                    return (
                      <button
                        key={tech.id}
                        type="button"
                        onClick={() => toggleTech(tech.id)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                          isChecked
                            ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                            : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span>{tech.icon}</span>
                          <span className="text-xs font-bold">{tech.title}</span>
                        </div>
                        <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                          isChecked ? 'bg-sky-500 border-sky-400 text-slate-950' : 'border-slate-300'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-sky-600/20 flex items-center gap-2 cursor-pointer"
                >
                  <span>Next: Client Details & Currency</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Client Details & Currency */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-lg font-extrabold text-slate-900">Step 3: Who should receive this instant proposal?</h3>
                <p className="text-xs text-slate-500">Provide your contact info to lock in this estimate and generate your proposal sheet.</p>
              </div>

              <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name / Company</label>
                    <input
                      type="text"
                      value={clientInfo.name}
                      onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                      placeholder="e.g. Tariq Mehmood"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Email Address</label>
                    <input
                      type="email"
                      value={clientInfo.email}
                      onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                      placeholder="e.g. tariq@company.com"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">WhatsApp / Phone Number</label>
                    <input
                      type="text"
                      value={clientInfo.phone}
                      onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                      placeholder="e.g. +92 300 1234567"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Preferred Currency</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setClientInfo({ ...clientInfo, currency: 'PKR' })}
                        className={`py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          clientInfo.currency === 'PKR'
                            ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                            : 'bg-white text-slate-700 border-slate-300'
                        }`}
                      >
                        🇵🇰 PKR (Local)
                      </button>
                      <button
                        type="button"
                        onClick={() => setClientInfo({ ...clientInfo, currency: 'USD' })}
                        className={`py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          clientInfo.currency === 'USD'
                            ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                            : 'bg-white text-slate-700 border-slate-300'
                        }`}
                      >
                        🌐 USD (Global)
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={handleFinishWizard}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Official Proposal Summary →</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Live Proposal Review & 1-Click WhatsApp Export */}
          {step === 4 && (
            <div className="space-y-6 text-center">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-black text-slate-900">Your Technical Proposal Is Ready!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Configured according to Volen Solution's <strong className="text-sky-700">50% Advance / 30% Review / 20% Handover</strong> charter.
                </p>
              </div>

              {/* Proposal Card Preview */}
              <div className="bg-slate-900 text-white p-6 rounded-2xl border border-sky-400/40 text-left space-y-4 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-3 gap-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-sky-400 font-bold">Official Technical Quotation</span>
                    <h4 className="text-lg font-black text-white">{selectedType.title}</h4>
                  </div>
                  <div className="sm:text-right">
                    <span className="text-[10px] text-slate-400 font-mono">Assigned Tracking Code:</span>
                    <div className="font-mono text-xs font-black text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2 py-0.5 rounded">
                      {generatedCode || 'VOLEN-DEMO-2026'}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Sprint Timeline:</span>
                    <span className="font-bold text-slate-200">{selectedTimeline.title}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Estimated Investment:</span>
                    <span className="font-bold text-emerald-300 text-sm">
                      {clientInfo.currency === 'PKR' ? selectedType.estPkr : selectedType.estUsd}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Payment Governance:</span>
                    <span className="font-bold text-sky-300">50% / 30% / 20% Milestones</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-300">
                  <span className="text-slate-400">Included Deliverables: </span>
                  Sub-second Core Web Vitals optimization, full source code repository handover, SSL A+ audit, and responsive mobile architecture.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Proposal Direct to Engineering WhatsApp →</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(getProposalSummaryText());
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all cursor-pointer"
                >
                  {copied ? '✓ Proposal Copied!' : 'Copy Proposal Text'}
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}