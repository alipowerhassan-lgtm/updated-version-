import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Upload, ShieldCheck, CheckCircle2, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import { saveAdminProposal } from '../utils/adminStorage';

export default function ProposalModal({ isOpen, onClose, initialService = '' }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [assignedCode, setAssignedCode] = useState('');
  const [formData, setFormData] = useState({
    domain: 'Web Development',
    scale: 'Enterprise Scale',
    timeline: '1-2 Months',
    fullName: '',
    email: '',
    scopeDetails: '',
    uploadedFile: null
  });

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, domain: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const domains = [
    'Web Development',
    'Mobile App Development',
    'AI Solutions',
    'Dashboard Systems',
    'UI/UX Design',
    'Graphic Designing',
    'Marketing',
    'Web Security',
    'Maintenance'
  ];

  const scales = [
    { title: 'Startup MVP', desc: 'Core functionality for rapid launch' },
    { title: 'Growth Engine', desc: 'Feature-rich system ready for scaling' },
    { title: 'Enterprise Scale', desc: 'High-availability architecture with zero-trust security' }
  ];

  const timelines = ['< 2 Weeks (Urgent)', '1-2 Months', '3-6 Months', 'Ongoing Retainer'];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const record = saveAdminProposal({
      fullName: formData.fullName,
      email: formData.email,
      domain: formData.domain,
      scale: formData.scale,
      timeline: formData.timeline,
      details: formData.scopeDetails || (formData.uploadedFile ? `Attached: ${formData.uploadedFile.name}` : ''),
      source: 'Technical Proposal Form'
    });
    if (record) {
      setAssignedCode(record.trackingCode);
    }
    setSubmitted(true);
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-sky-200 overflow-hidden">
        {/* Modal Header Bar */}
        <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 p-6 text-white relative">
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-1.5 rounded-full bg-slate-800/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-sky-500/20 border border-sky-400/30 text-sky-300 text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
              Step {submitted ? '3' : step} of 3 • Technical Proposal
            </span>
          </div>

          <h3 className="text-xl font-bold tracking-tight text-white">
            Request Technical Proposal
          </h3>
          <p className="text-xs text-sky-200/80 mt-1">
            Volen Solution Architecture & Engineering Scope Definition
          </p>

          {/* Progress Tracker */}
          {!submitted && (
            <div className="flex items-center gap-2 mt-4">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                    s <= step ? 'bg-sky-400' : 'bg-slate-800'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900">Proposal Request Received!</h4>
              <p className="text-xs text-slate-600 mt-2 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-slate-900">{formData.fullName || 'Valued Client'}</span>! Our engineering team will review your specifications for <span className="font-semibold text-sky-600">{formData.domain}</span> ({formData.scale}) and deliver a detailed technical roadmap to <span className="font-mono text-slate-900">{formData.email}</span> within 2 business hours.
              </p>

              {assignedCode && (
                <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-center">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                    Your Official Project Tracking Code
                  </div>
                  <div className="text-lg font-mono font-black text-emerald-900 mt-0.5">
                    {assignedCode}
                  </div>
                  <div className="text-[10px] text-emerald-600 mt-0.5">
                    Save this code to monitor live progress & milestones via the "Track Project" portal.
                  </div>
                </div>
              )}

              <div className="mt-4 p-4 rounded-2xl bg-sky-50/80 border border-sky-200/60 text-left text-xs text-slate-700 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Domain Architecture:</span>
                  <span className="font-bold text-slate-900">{formData.domain}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Project Scale:</span>
                  <span className="font-bold text-slate-900">{formData.scale}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Target Timeline:</span>
                  <span className="font-bold text-slate-900">{formData.timeline}</span>
                </div>
                {formData.uploadedFile && (
                  <div className="flex items-center justify-between pt-1 border-t border-sky-200/60">
                    <span className="text-slate-500 font-medium">Scope Document:</span>
                    <span className="font-mono text-sky-700 text-[11px] truncate max-w-[180px]">
                      {formData.uploadedFile.name}
                    </span>
                  </div>
                )}
              </div>

              <button
                onClick={handleClose}
                className="mt-6 w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <div>
              {/* STEP 1: Architecture Domain Selector */}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Step 1: Select Architecture Domain
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {domains.map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setFormData({ ...formData, domain: d })}
                        className={`p-3 rounded-2xl border text-xs font-bold text-left transition-all flex items-center justify-between cursor-pointer ${
                          formData.domain === d
                            ? 'bg-sky-50 border-sky-500 text-sky-900 shadow-xs'
                            : 'bg-white border-slate-200/80 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <span>{d}</span>
                        {formData.domain === d && <Check className="w-4 h-4 text-sky-600" />}
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-slate-900 to-sky-600 hover:from-slate-950 hover:to-sky-500 text-white font-bold text-xs shadow-md flex items-center gap-2 cursor-pointer"
                    >
                      <span>Next: Scale & Timeline</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Scale & Timeline Selector */}
              {step === 2 && (
                <div className="space-y-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Step 2: Define Project Scale & Duration
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700">Project Scale Scope</label>
                    <div className="grid grid-cols-1 gap-2">
                      {scales.map((s) => (
                        <button
                          key={s.title}
                          type="button"
                          onClick={() => setFormData({ ...formData, scale: s.title })}
                          className={`p-3.5 rounded-2xl border text-left transition-all flex items-start justify-between cursor-pointer ${
                            formData.scale === s.title
                              ? 'bg-sky-50 border-sky-500 text-sky-900 shadow-xs'
                              : 'bg-white border-slate-200/80 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div>
                            <div className="text-xs font-bold text-slate-900">{s.title}</div>
                            <div className="text-[11px] text-slate-500 mt-0.5">{s.desc}</div>
                          </div>
                          {formData.scale === s.title && <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700">Target Delivery Timeline</label>
                    <div className="grid grid-cols-2 gap-2">
                      {timelines.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeline: t })}
                          className={`p-2.5 rounded-xl border text-xs font-semibold transition-all text-center cursor-pointer ${
                            formData.timeline === t
                              ? 'bg-sky-600 text-white border-sky-600'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 hover:bg-slate-50 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-slate-900 to-sky-600 hover:from-slate-950 hover:to-sky-500 text-white font-bold text-xs shadow-md flex items-center gap-2 cursor-pointer"
                    >
                      <span>Next: Contact & Upload</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Work Email & Scope Upload */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Step 3: Contact & Scope Upload
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-xs text-slate-900 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Business / Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-xs text-slate-900 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Project Scope Document (Optional)</label>
                    <label className="w-full border-2 border-dashed border-sky-200 rounded-2xl p-4 flex flex-col items-center justify-center gap-1.5 cursor-pointer bg-sky-50/40 hover:bg-sky-50 transition-colors">
                      <Upload className="w-5 h-5 text-sky-600" />
                      <span className="text-xs font-semibold text-slate-700">
                        {formData.uploadedFile ? formData.uploadedFile.name : 'Upload PDF, DOCX, or Architecture Diagram'}
                      </span>
                      <span className="text-[10px] text-slate-400">Max size 25MB • Confidential</span>
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setFormData({ ...formData, uploadedFile: e.target.files[0] });
                          }
                        }}
                      />
                    </label>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 hover:bg-slate-50 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 hover:from-sky-500 hover:to-cyan-400 text-white font-bold text-xs shadow-md shadow-sky-600/25 flex items-center gap-2 cursor-pointer"
                    >
                      <FileText className="w-4 h-4 text-white" />
                      <span>Submit Proposal Request</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
