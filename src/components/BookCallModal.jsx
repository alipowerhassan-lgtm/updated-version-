import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookCallModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Web Development',
    preferredDate: '',
    preferredTime: '10:00 AM PKT (UTC+5)',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-sky-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-full bg-slate-800/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-sky-500/20 border border-sky-400/30 text-sky-300 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
              Free 30-Min Strategy Call
            </span>
          </div>
          <h3 className="text-xl font-bold tracking-tight text-white">Book a Call with Volen Solution</h3>
          <p className="text-xs text-sky-200/80 mt-1">
            Discuss your enterprise architecture, timeline, and security requirements with our lead engineers.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4 shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900">Consultation Scheduled!</h4>
              <p className="text-sm text-slate-600 mt-2 max-w-xs mx-auto">
                Thank you, <span className="font-semibold text-slate-900">{formData.name || 'Valued Client'}</span>! Our engineering team will reach out via email ({formData.email}) with meeting invite details.
              </p>
              
              <div className="mt-6 p-4 rounded-2xl bg-sky-50/80 border border-sky-200/60 text-left text-xs text-slate-700 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-sky-900">
                  <Calendar className="w-4 h-4 text-sky-600" />
                  <span>Topic: {formData.service} Architecture Review</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span>Time Slot: {formData.preferredTime}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Zero-Trust Client Confidentiality Guaranteed</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="mt-6 w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alexander Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-sm text-slate-900 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@enterprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-sm text-slate-900 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-sm text-slate-900 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-sm text-slate-900 outline-none transition-all bg-white"
                  >
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>AI Solutions & Agents</option>
                    <option>Dashboard & Real-Time Analytics</option>
                    <option>UI/UX Design & Prototype</option>
                    <option>Graphic & Brand Identity</option>
                    <option>Marketing Strategy & Growth</option>
                    <option>Web & API Shielding Security</option>
                    <option>Maintenance & 24/7 Monitoring</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-sm text-slate-900 outline-none transition-all bg-white"
                  >
                    <option>10:00 AM PKT (UTC+5)</option>
                    <option>02:00 PM PKT (UTC+5)</option>
                    <option>06:00 PM PKT (UTC+5)</option>
                    <option>09:00 PM PKT (UTC+5)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Project Outline / Notes
                </label>
                <textarea
                  rows="3"
                  placeholder="Briefly describe your objectives, budget scope, or tech requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-sm text-slate-900 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-slate-900 via-sky-900 to-sky-600 hover:from-slate-950 hover:to-sky-500 text-white font-bold text-sm shadow-md shadow-sky-600/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-sky-300" />
                  <span>Confirm Consultation Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
