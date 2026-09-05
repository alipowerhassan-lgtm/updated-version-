import React, { useState } from 'react';
import WipBadge from './WipBadge';
import { Send, Phone, Mail, MapPin, CheckCircle2, ShieldCheck, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.7 }
    });
  };

  const socialLinks = [
    { name: 'Twitter (X)', href: 'https://twitter.com', icon: '𝕏', handle: '/volen.solution' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: '💼', handle: '/volen.solution' },
    { name: 'Instagram', href: 'https://instagram.com', icon: '📸', handle: '/volen.solution' },
    { name: 'YouTube', href: 'https://youtube.com', icon: '▶️', handle: '/volen.solution' },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 relative border-t border-sky-100/80 bg-sky-50/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Contact Us
          </h2>

          {/* Universal Work in Progress Badge directly below main title */}
          <div className="flex justify-center pt-1">
            <WipBadge />
          </div>
        </div>

        {/* 2-Column Layout: Form & Info Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-sky-150 shadow-md">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-5 h-5 text-sky-600" />
              <h3 className="text-xl font-extrabold text-[#0F172A]">Send Direct Message</h3>
            </div>

            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-extrabold text-[#0F172A]">Inquiry Submitted!</h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-medium">
                  Thank you, <span className="font-bold text-[#0F172A]">{formState.fullName}</span>! Our technical team will review your message regarding "<span className="font-semibold text-sky-600">{formState.subject || 'General Inquiry'}</span>" and contact you at <span className="font-mono text-slate-900">{formState.email}</span> shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ fullName: '', email: '', subject: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-sm text-slate-900 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@enterprise.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-sm text-slate-900 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Subject of your inquiry"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-sm text-slate-900 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Enter your project details or message..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-sm text-slate-900 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 hover:from-sky-500 hover:to-cyan-400 text-white font-bold text-sm shadow-md shadow-sky-600/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Corporate Details & Social Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-sky-150 shadow-md space-y-6">
              <h3 className="text-xl font-extrabold text-[#0F172A] border-b border-sky-100 pb-3">
                Direct Corporate Details
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-sky-50 text-sky-600 border border-sky-100 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Corporate Email</div>
                    <a href="mailto:contact@volensolution.com" className="text-sm font-bold text-sky-600 hover:underline mt-0.5 block">
                      contact@volensolution.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-sky-50 text-sky-600 border border-sky-100 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Global Headquarters</div>
                    <div className="text-sm font-bold text-[#0F172A] mt-0.5">🇵🇰 Pakistan</div>
                    <div className="text-xs text-slate-500 font-medium">(Managing Global Operations)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp Direct</div>
                    <a
                      href="https://wa.me/?text=Hello%20Volen%20Solution"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-emerald-600 hover:underline mt-0.5 block"
                    >
                      /volen.solution
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="glass-card rounded-3xl p-6 border border-sky-150 shadow-md">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
                Social Media Links (/volen.solution)
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {socialLinks.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 text-slate-700 hover:text-sky-600 text-xs font-semibold flex items-center gap-2 transition-all"
                  >
                    <span className="text-base">{s.icon}</span>
                    <div className="truncate">
                      <div className="text-[11px] leading-tight font-bold">{s.name}</div>
                      <div className="text-[9px] text-slate-400 font-mono">{s.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="text-center pt-8 border-t border-sky-200/60 text-xs font-medium text-slate-600 space-y-1">
          <p>© 2026 Volen Solution. All rights reserved. &lt;/&gt; Build | 📈 Grow | 🛡️ Secure</p>
        </div>
      </div>
    </section>
  );
}
