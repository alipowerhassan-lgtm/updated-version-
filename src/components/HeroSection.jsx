import React, { useState, useEffect } from 'react';
import EyebrowTag from './EyebrowTag';
import WipBadge from './WipBadge';
import { ArrowRight, ShieldCheck, Cpu, Activity, Server, Zap, CheckCircle2, Terminal } from 'lucide-react';

export default function HeroSection({ onBookConsultation }) {
  const [latency, setLatency] = useState(14.8);
  const [activeTab, setActiveTab] = useState('metrics');

  // Simulated live latency ticker for high-tech aesthetic
  useEffect(() => {
    const interval = setInterval(() => {
      const delta = (Math.random() * 0.6 - 0.3);
      setLatency(prev => +(Math.max(12.1, Math.min(17.5, prev + delta))).toFixed(1));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Background Subtle Tech Gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-sky-200/30 via-sky-100/40 to-cyan-100/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Universal WIP Badge right under section top context */}
        <div className="flex justify-center mb-6">
          <WipBadge text="Home Module — Live Production Preview v2.6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Eyebrow Tag Pill */}
            <div className="inline-flex">
              <EyebrowTag text="BUILDING RESILIENT DIGITAL ARCHITECTURES" />
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Transforming Ideas Into <br className="hidden sm:inline" />
              <span className="tech-gradient-text">Powerful Full-Stack Solutions</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              We build modern Web, Mobile, Cloud, and AI systems tailored to enterprise standards. Engineered to Build, Grow, and Secure.
            </p>

            {/* Brand Philosophy Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-sky-100/80 text-sky-900 border border-sky-200/80 flex items-center gap-1.5">
                <span className="font-mono text-sky-600 font-bold">&lt;/&gt;</span> Build
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-100/80 text-emerald-900 border border-emerald-200/80 flex items-center gap-1.5">
                <span>📈</span> Grow
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-100/80 text-indigo-900 border border-indigo-200/80 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" /> Secure
              </span>
            </div>

            {/* Action Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => onBookConsultation('Full-Stack Enterprise Architecture')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-slate-900 via-sky-900 to-sky-600 hover:from-slate-950 hover:to-sky-500 shadow-lg shadow-sky-600/25 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4 text-sky-300 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-slate-800 bg-white/90 border border-sky-200/80 hover:bg-sky-50 hover:border-sky-300 shadow-sm hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Services</span>
              </a>
            </div>

            {/* Trust Indicator Pill */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Zero Technical Debt</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-500" />
                <span>24/7 Enterprise Monitoring</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Mockup Card (Metrics Widget) */}
          <div className="lg:col-span-5 relative">
            {/* Glow Aura */}
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-cyan-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-100 transition duration-1000"></div>

            {/* Main Glass Card */}
            <div className="relative rounded-3xl bg-slate-900 text-white p-6 shadow-2xl border border-sky-400/20 glass-card-hover">
              {/* Card Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                      System telemetry console
                    </h3>
                    <div className="text-[10px] text-slate-400 font-mono">volen-node-pk-01</div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold">ONLINE</span>
                </div>
              </div>

              {/* Required High-Impact Floating Metric Row */}
              <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-950/80 border border-slate-800/80 mb-5">
                <div className="text-center p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Active Services</div>
                  <div className="text-sm sm:text-base font-extrabold text-sky-400 font-mono mt-0.5">9 Modules</div>
                </div>

                <div className="text-center p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Edge Latency</div>
                  <div className="text-sm sm:text-base font-extrabold text-emerald-400 font-mono mt-0.5 flex items-center justify-center gap-1">
                    <span>{latency}</span>
                    <span className="text-[10px] text-slate-400">ms</span>
                  </div>
                </div>

                <div className="text-center p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">System Uptime</div>
                  <div className="text-sm sm:text-base font-extrabold text-cyan-300 font-mono mt-0.5">99.99%</div>
                </div>
              </div>

              {/* Interactive Telemetry Tabs */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-300 font-medium">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Server className="w-3.5 h-3.5 text-sky-400" />
                    Infrastructure Health
                  </span>
                  <span className="text-[11px] font-mono text-sky-400">Zero-Trust Hardened</span>
                </div>

                {/* Progress bar simulation */}
                <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden p-0.5 border border-slate-800">
                  <div className="bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 h-full rounded-full w-[98.4%] animate-pulse"></div>
                </div>

                {/* Code Snippet Box */}
                <div className="mt-4 p-3 rounded-xl bg-slate-950 font-mono text-[11px] text-slate-300 border border-slate-800 leading-relaxed">
                  <div className="flex items-center justify-between text-slate-500 mb-1 border-b border-slate-800 pb-1">
                    <span className="flex items-center gap-1 text-[10px] uppercase">
                      <Terminal className="w-3 h-3 text-sky-400" /> security-policy.json
                    </span>
                    <span className="text-[9px] text-emerald-400">PASSED Audit</span>
                  </div>
                  <div className="text-sky-300"><span className="text-slate-500">&gt;</span> volen.deploy(<span className="text-amber-300">"Enterprise-Cloud"</span>)</div>
                  <div className="text-emerald-400"><span className="text-slate-500">&gt;</span> Status: 200 OK • Encryption: AES-256</div>
                </div>
              </div>

              {/* Floating Badge overlay */}
              <div className="absolute -bottom-4 -right-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-lg flex items-center gap-1.5 border border-white/20">
                <Zap className="w-3.5 h-3.5 fill-current text-yellow-300" />
                <span>Next-Gen Stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
