import React from 'react';
import WipBadge from './WipBadge';
import { Lock, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

export default function PolicySection() {
  const policies = [
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Policy & Standards
          </h2>

          {/* Universal Work in Progress Badge directly below main title */}
          <div className="flex justify-center pt-1">
            <WipBadge />
          </div>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {policies.map((p) => (
            <div
              key={p.id}
              className="glass-card glass-card-hover rounded-3xl p-7 border border-sky-150 flex flex-col justify-between"
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
    </section>
  );
}
