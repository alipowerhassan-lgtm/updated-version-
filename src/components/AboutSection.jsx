import React, { useState } from 'react';
import WipBadge from './WipBadge';
import { ShieldCheck, Target, Compass, Lock, Award, Globe, Code2, Cpu, CheckCircle } from 'lucide-react';

export default function AboutSection() {
  const [activePolicyTab, setActivePolicyTab] = useState('zero-trust');

  const policyDetails = {
    'zero-trust': {
      title: 'Zero-Trust Data Protection Policies',
      desc: 'Every endpoint, database query, and API communication is cryptographically authenticated and encrypted with AES-256. We operate under strict least-privilege access rules.',
      icon: <Lock className="w-5 h-5 text-sky-600" />,
      highlights: ['AES-256 End-to-End Encryption', 'Role-Based Access Control (RBAC)', 'Continuous Vulnerability Scanning']
    },
    'confidentiality': {
      title: 'Strict Client Confidentiality & NDA',
      desc: 'We enforce stringent Non-Disclosure Agreements (NDAs) and intellectual property transfer protocols. Your source code, data schema, and business algorithms remain 100% proprietary.',
      icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
      highlights: ['Full IP Rights Transfer', 'Isolated Workspace Environments', 'Biometric & Encrypted Access Logs']
    },
    'engineering': {
      title: 'Quality Engineering & CI/CD Standards',
      desc: 'Our code passes rigorous automated linting, unit testing (>90% coverage target), and static analysis prior to production staging, eliminating tech debt from day one.',
      icon: <Award className="w-5 h-5 text-emerald-600" />,
      highlights: ['Strict Automated Test Suites', 'Modular Clean Architecture', 'Zero Technical Debt Policy']
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 relative bg-slate-50/70 border-y border-sky-100/80">
      {/* Subtle Background Accent */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
          <div className="inline-flex">
            <span className="bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-sky-200">
              Corporate Overview
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About <span className="tech-gradient-text">Volen Solution</span>
          </h2>

          {/* Work in Progress Pill right below header */}
          <div className="flex justify-center pt-1">
            <WipBadge text="About Module Under Development — Live Preview" />
          </div>

          <p className="text-slate-600 text-base leading-relaxed pt-2">
            Engineering resilient digital architectures for forward-thinking enterprises. Built on precision, performance, and uncompromising security.
          </p>
        </div>

        {/* 2-Column Grid: Our Story & Our Goal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Our Story Card */}
          <div className="glass-card rounded-3xl p-8 border border-sky-100 shadow-sm relative group hover:border-sky-300 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-200 flex items-center justify-center text-sky-600">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">Origin & Evolution</span>
                <h3 className="text-xl font-bold text-slate-900">Our Story</h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Bridging modern full-stack development with hardened enterprise security protocols, originating from Pakistan to serve global markets worldwide.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Founded by principal engineers dedicated to eliminating software fragility, Volen Solution combines deep technical domain expertise with agile deployment pipelines.
            </p>

            <div className="flex items-center gap-4 text-xs font-semibold text-slate-700 pt-4 border-t border-sky-100">
              <div className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-sky-600" />
                <span>Global HQ: Pakistan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-sky-600" />
                <span>Worldwide Delivery</span>
              </div>
            </div>
          </div>

          {/* Our Goal Card */}
          <div className="glass-card rounded-3xl p-8 border border-sky-100 shadow-sm relative group hover:border-sky-300 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Mission Statement</span>
                <h3 className="text-xl font-bold text-slate-900">Our Goal</h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Delivering high-performance, maintainable software architecture that removes technical debt and scales effortlessly as enterprise demands accelerate.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              We empower organizations to move fast without breaking systems—building software that stands resilient against high traffic spikes and cybersecurity threats.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700 pt-4 border-t border-sky-100">
              <div className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-emerald-600" />
                <span>Zero Technical Debt</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Enterprise Scalability</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-component: Policy & Standards Interactive Block */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-sky-150 shadow-md">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Governance & Compliance
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-2">Policy & Engineering Standards</h3>
            <p className="text-xs text-slate-500 mt-1">
              Select a pillar below to review our enterprise security and quality assurance benchmarks.
            </p>
          </div>

          {/* Tab Selection Row */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.keys(policyDetails).map((key) => {
              const item = policyDetails[key];
              const isActive = activePolicyTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActivePolicyTab(key)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-sky-50 hover:text-sky-600'
                  }`}
                >
                  {item.icon}
                  <span>{item.title.split(' ')[0]} {item.title.split(' ')[1]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Policy Content Card */}
          <div className="bg-white rounded-2xl p-6 border border-sky-100 shadow-sm transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-sky-50 border border-sky-200/60 shrink-0">
                {policyDetails[activePolicyTab].icon}
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-bold text-slate-900">{policyDetails[activePolicyTab].title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{policyDetails[activePolicyTab].desc}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {policyDetails[activePolicyTab].highlights.map((h, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-200/70">
                      <CheckCircle className="w-3.5 h-3.5 text-sky-600" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
