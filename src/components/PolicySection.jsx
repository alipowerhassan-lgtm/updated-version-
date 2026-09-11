import React, { useState } from 'react';
import WipBadge from './WipBadge';
import CustomerPolicyModal from './CustomerPolicyModal';
import { Lock, ShieldCheck, Award, CheckCircle2, FileText, Rocket, PhoneCall, PenTool, CreditCard, Sparkles, ExternalLink } from 'lucide-react';

export default function PolicySection() {
  const [showPolicyModal, setShowPolicyModal] = useState(false);

  const customerSteps = [
    { step: '01', title: 'Contact Us', desc: 'Share requirements or place an order.', tag: 'Kickoff' },
    { step: '02', title: 'Discuss Project', desc: 'Deep-dive into architecture, scope & deliverables.', tag: 'Discovery' },
    { step: '03', title: 'Pay 50% Advance', desc: 'Secure project kickoff & sprint reservation.', tag: '50% Milestone', highlight: true },
    { step: '04', title: 'Sign Agreement', desc: 'Mutual contractual sign-off & deliverables spec.', tag: 'Agreement' },
    { step: '05', title: 'Pay 30% Review', desc: 'Staging preview, client QA & feedback revisions.', tag: '30% Milestone', highlight: true },
    { step: '06', title: 'Pay 20% Deployment', desc: 'Final live release, SSL, DNS & IP transfer.', tag: '20% Final', highlight: true },
  ];

  const technicalPolicies = [
    {
      id: 1,
      title: 'Zero-Trust Security',
      description: 'OWASP compliance, SSL/TLS endpoint encryption, and role-based access control.',
      icon: <Lock className="w-6 h-6 text-sky-600" />,
      features: ['OWASP Compliance Audit', 'SSL/TLS Endpoint Encryption', 'Role-Based Access Control (RBAC)']
    },
    {
      id: 2,
      title: 'Codebase Ownership',
      description: '100% client proprietary rights with full repository handovers.',
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
      features: ['100% Client Proprietary Rights', 'Full Repository Handover', 'Complete Intellectual Property Transfer']
    },
    {
      id: 3,
      title: 'Reliability & SLAs',
      description: '99.99% system availability targets and 24/7 post-deployment monitoring.',
      icon: <Award className="w-6 h-6 text-emerald-600" />,
      features: ['99.99% System Availability Targets', '24/7 Post-Deployment Monitoring', 'Sub-15 Minute Critical Incident SLA']
    }
  ];

  return (
    <section id="policy" className="py-16 md:py-24 relative border-t border-sky-100/80 bg-sky-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            <span>Volen Solution Customer & Engineering Charter</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Customer Policy & Governance Standards
          </h2>

          <p className="text-slate-600 text-sm md:text-base font-medium">
            Your Satisfaction is Our Priority. We operate on complete contractual transparency, structured milestone disbursements, and ironclad technical safeguards.
          </p>

          <div className="flex justify-center pt-1">
            <WipBadge />
          </div>
        </div>

        {/* FEATURED: Customer Policy 6-Step Milestone Framework */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-sky-200/80 bg-gradient-to-br from-white via-sky-50/40 to-indigo-50/30 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-sky-100 pb-5">
            <div>
              <div className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider">
                Official Engagement Workflow
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5 mt-0.5">
                <span>Customer Milestone & Payment Policy</span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  50% / 30% / 20%
                </span>
              </h3>
            </div>

            <button
              type="button"
              onClick={() => setShowPolicyModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-sky-500/20 transition-all cursor-pointer self-start sm:self-auto"
            >
              <FileText className="w-4 h-4" />
              <span>View Full Customer Policy & Poster →</span>
            </button>
          </div>

          {/* 6 Step Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {customerSteps.map((s, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl border transition-all ${
                  s.highlight
                    ? 'bg-white border-sky-300 shadow-sm ring-1 ring-sky-300/40'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-extrabold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100">
                    Step {s.step}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    s.highlight ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {s.tag}
                  </span>
                </div>
                <h4 className="text-sm font-extrabold text-slate-900 mb-1">{s.title}</h4>
                <p className="text-xs text-slate-600 leading-snug">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* 4 Guarantees strip */}
          <div className="pt-4 border-t border-sky-100 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-2.5 rounded-xl bg-sky-50/60 border border-sky-100 text-xs font-bold text-slate-800">
              ✨ Transparent Process
            </div>
            <div className="p-2.5 rounded-xl bg-sky-50/60 border border-sky-100 text-xs font-bold text-slate-800">
              💬 Clear Communication
            </div>
            <div className="p-2.5 rounded-xl bg-sky-50/60 border border-sky-100 text-xs font-bold text-slate-800">
              ⏱️ On-Time Delivery
            </div>
            <div className="p-2.5 rounded-xl bg-sky-50/60 border border-sky-100 text-xs font-bold text-slate-800">
              🛡️ Dedicated Support
            </div>
          </div>
        </div>

        {/* Technical Governance Cards Grid */}
        <div className="space-y-4">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
            Technical Governance & Quality Guarantees
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technicalPolicies.map((p) => (
              <div
                key={p.id}
                className="glass-card glass-card-hover rounded-3xl p-7 border border-sky-150 flex flex-col justify-between bg-white"
              >
                <div>
                  <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 w-fit mb-5">
                    {p.icon}
                  </div>

                  <h3 className="text-xl font-extrabold text-[#0F172A] mb-3">
                    {p.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                    {p.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-sky-100">
                  {p.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reusable Customer Policy Modal */}
      <CustomerPolicyModal
        isOpen={showPolicyModal}
        onClose={() => setShowPolicyModal(false)}
      />
    </section>
  );
}

