import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  Mail,
  FileText,
  CreditCard,
  Rocket,
  PhoneCall,
  MessageSquare,
  PenTool,
  Clock,
  Users,
  Eye,
  Download,
  ArrowRight
} from 'lucide-react';
import policyPosterImg from '../assets/customer-policy.jpg';

export default function CustomerPolicyModal({ isOpen, onClose }) {
  const [viewMode, setViewMode] = useState('roadmap'); // 'roadmap' or 'poster'

  if (!isOpen) return null;

  const steps = [
    {
      step: '01',
      title: 'CONTACT US',
      desc: 'The customer contacts us to place an order or share their requirements.',
      icon: <PhoneCall className="w-6 h-6 text-sky-600" />,
      badge: 'Step 1 • Initial Inquiry',
      highlightColor: 'sky'
    },
    {
      step: '02',
      title: 'DISCUSS PROJECT',
      desc: 'We discuss the details about the project the customer wants.',
      icon: <MessageSquare className="w-6 h-6 text-indigo-600" />,
      badge: 'Step 2 • Scope Discovery',
      highlightColor: 'indigo'
    },
    {
      step: '03',
      title: 'PAY 50% ADVANCE',
      desc: 'The customer pays 50% advance before we show the project.',
      icon: <CreditCard className="w-6 h-6 text-blue-600" />,
      badge: '50% Milestone • Project Kickoff',
      highlightColor: 'blue',
      milestoneTag: '50% Advance'
    },
    {
      step: '04',
      title: 'SIGN AGREEMENT',
      desc: 'The agreement is signed by both parties.',
      icon: <PenTool className="w-6 h-6 text-teal-600" />,
      badge: 'Step 4 • Contract Sign-Off',
      highlightColor: 'teal'
    },
    {
      step: '05',
      title: 'PAY 30% FOR REVIEW',
      desc: 'For the review process, the client pays 30% of the payment.',
      icon: <FileText className="w-6 h-6 text-amber-600" />,
      badge: '30% Milestone • Staging Review',
      highlightColor: 'amber',
      milestoneTag: '30% Review'
    },
    {
      step: '06',
      title: 'PAY 20% FOR DEPLOYMENT',
      desc: 'For the final deployment, the client pays the last 20% of the payment.',
      icon: <Rocket className="w-6 h-6 text-emerald-600" />,
      badge: '20% Milestone • Live Deployment',
      highlightColor: 'emerald',
      milestoneTag: '20% Final'
    }
  ];

  const commitments = [
    {
      title: 'Transparent Process',
      desc: 'No hidden clauses or surprise costs at any project phase.',
      icon: <ShieldCheck className="w-5 h-5 text-sky-600" />
    },
    {
      title: 'Clear Communication',
      desc: 'Regular milestone updates and direct developer sync.',
      icon: <MessageSquare className="w-5 h-5 text-sky-600" />
    },
    {
      title: 'On-Time Delivery',
      desc: 'Agile sprints with strict adherence to agreed deadlines.',
      icon: <Clock className="w-5 h-5 text-sky-600" />
    },
    {
      title: 'Dedicated Support',
      desc: 'Post-launch support, monitoring, and responsive assistance.',
      icon: <Users className="w-5 h-5 text-sky-600" />
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] border border-sky-200 shadow-2xl flex flex-col overflow-hidden relative">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg font-black tracking-tight text-white">
                VOLEN <span className="text-sky-400">SOLUTION</span>
              </span>
              <span className="text-xs font-mono text-slate-400">
                &lt;/&gt; Build • 📈 Grow • 🛡️ Secure
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-sky-300 tracking-tight">
              CUSTOMER POLICY
            </h3>
            <p className="text-xs text-slate-300 font-medium">
              Your Satisfaction is Our Priority • Transparent 6-Step Milestone Framework
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Toggle view mode */}
            <div className="bg-slate-800 p-1 rounded-xl flex items-center border border-slate-700 text-xs">
              <button
                onClick={() => setViewMode('roadmap')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  viewMode === 'roadmap' ? 'bg-sky-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                Interactive Workflow
              </button>
              <button
                onClick={() => setViewMode('poster')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1 ${
                  viewMode === 'poster' ? 'bg-sky-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Official Poster</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-8">
          {viewMode === 'poster' ? (
            /* Poster View */
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="max-w-md w-full rounded-2xl overflow-hidden shadow-2xl border border-sky-200">
                <img
                  src={policyPosterImg}
                  alt="Volen Solution Customer Policy Official Poster"
                  className="w-full h-auto object-cover"
                />
              </div>
              <a
                href={policyPosterImg}
                download="Volen-Solution-Customer-Policy.jpg"
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-sky-600 text-white text-xs font-bold transition-all inline-flex items-center gap-2 shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Customer Policy Poster</span>
              </a>
            </div>
          ) : (
            /* Roadmap View */
            <>
              {/* Payment Split Summary Pill */}
              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div className="space-y-0.5">
                  <div className="text-xs font-extrabold text-[#0F172A] uppercase tracking-wider">
                    Transparent Milestone Payment Model: 50% / 30% / 20%
                  </div>
                  <div className="text-[11px] text-slate-600">
                    Milestone-driven payments ensure you only pay as deliverable checkpoints are completed and verified.
                  </div>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs font-black shrink-0">
                  <span className="px-2.5 py-1 rounded-lg bg-blue-100 text-blue-800 border border-blue-200">50% Advance</span>
                  <span>→</span>
                  <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-800 border border-amber-200">30% Review</span>
                  <span>→</span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-200">20% Live</span>
                </div>
              </div>

              {/* 6 Steps Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {steps.map((item) => (
                  <div
                    key={item.step}
                    className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between space-y-3 relative overflow-hidden group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black font-mono px-2.5 py-0.5 rounded-md bg-slate-900 text-white">
                        {item.step}
                      </span>
                      {item.milestoneTag && (
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-800 border border-sky-200">
                          {item.milestoneTag}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-100 group-hover:scale-105 transition-transform">
                          {item.icon}
                        </div>
                        <h4 className="text-sm font-black text-slate-900 tracking-tight">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 text-[10px] font-mono text-slate-400">
                      {item.badge}
                    </div>
                  </div>
                ))}
              </div>

              {/* Our Commitment to You */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="text-center space-y-1">
                  <span className="text-[11px] font-mono font-extrabold uppercase text-sky-600 tracking-wider">
                    Integrity & Trust
                  </span>
                  <h4 className="text-base font-black text-slate-900">
                    Our Commitment to You
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                  {commitments.map((c, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200 text-center space-y-1">
                      <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mx-auto mb-1.5 border border-sky-100">
                        {c.icon}
                      </div>
                      <div className="text-xs font-extrabold text-slate-900">{c.title}</div>
                      <div className="text-[11px] text-slate-500 leading-snug">{c.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Official Contact & Stamp Footer */}
              <div className="p-4 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-400/30">
                    <Mail className="w-4 h-4 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Direct Official Contact:</div>
                    <a
                      href="mailto:volen.solution.official@gmail.com"
                      className="text-xs font-bold text-sky-300 hover:text-white underline font-mono"
                    >
                      volen.solution.official@gmail.com
                    </a>
                  </div>
                </div>

                <div className="text-[11px] font-medium text-slate-300 italic">
                  "Let's Build Something Great Together" — VOLEN SOLUTION
                </div>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-[11px] text-slate-500">
            Official Policy applies to all active and onboarding Volen Solution engagements.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs transition-colors cursor-pointer"
          >
            Close Policy
          </button>
        </div>
      </div>
    </div>
  );
}
