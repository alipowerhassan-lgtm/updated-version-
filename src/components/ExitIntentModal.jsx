import React, { useState, useEffect } from 'react';
import { 
  X, ShieldCheck, Zap, Sparkles, Clock, ArrowRight, 
  MessageSquare, CheckCircle2, Gift
} from 'lucide-react';
import { saveAdminProposal } from '../utils/adminStorage';

export default function ExitIntentModal({ onBookConsultation, onOpenScopeBuilder }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check session storage so it doesn't harass users repeatedly
    const seen = sessionStorage.getItem('volen_exit_intent_dismissed');
    if (seen) return;

    const handleMouseLeave = (e) => {
      // Trigger when mouse moves towards browser tab bar / close button (y <= 10)
      if (e.clientY <= 15 && !hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
        sessionStorage.setItem('volen_exit_intent_dismissed', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered]);

  if (!isOpen) return null;

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    saveAdminProposal({
      fullName: 'Exit-Intent Lead',
      email: email.trim(),
      domain: '15-Min Free Architecture & Security Review',
      details: 'Client requested instant 15-minute consultation review before leaving site.',
      source: 'Exit Intent Popup'
    });

    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in zoom-in-95 duration-200">
      <div 
        className="relative w-full max-w-lg bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-2 border-sky-400/50 rounded-3xl p-6 sm:p-8 text-white shadow-2xl shadow-sky-500/20 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow behind modal */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-black text-white">Review Reserved!</h4>
            <p className="text-xs text-slate-300 max-w-xs mx-auto">
              Our Senior Solutions Architect will email your private consultation link to <span className="text-sky-300 font-mono font-bold">{email}</span> within 60 minutes.
            </p>
          </div>
        ) : (
          <div className="space-y-5 relative z-10">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Before You Leave Volen Solution</span>
            </div>

            {/* Headline */}
            <div className="space-y-1.5">
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                Planning a Custom Web Project?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Claim your complimentary <strong className="text-cyan-300 font-bold">15-Minute Architectural & Security Review</strong> (Valued at $250). Zero pressure, actionable technical roadmap.
              </p>
            </div>

            {/* Quick Feature Perks */}
            <div className="space-y-2 bg-white/5 p-3.5 rounded-2xl border border-white/10 text-xs">
              <div className="flex items-center gap-2 text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero-Trust security audit checklist for your tech stack</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Accurate sprint cost & timeline benchmark (No surprise bills)</span>
              </div>
            </div>

            {/* Email Capture Form */}
            <form onSubmit={handleQuickSubmit} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for the consultation link..."
                  required
                  className="flex-1 px-4 py-3 bg-slate-800/90 border border-slate-700 rounded-xl text-xs font-semibold text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-400 hover:to-cyan-300 text-slate-950 font-black text-xs shadow-md shadow-sky-500/25 flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>Claim Free Review</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* Secondary Alternative: Scope Builder */}
            <div className="pt-1 flex items-center justify-center gap-2 text-[11px] text-slate-400">
              <span>Or prefer instant numbers?</span>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onOpenScopeBuilder?.();
                }}
                className="text-cyan-400 font-bold hover:underline cursor-pointer"
              >
                Launch 3-Click Scope Builder →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}