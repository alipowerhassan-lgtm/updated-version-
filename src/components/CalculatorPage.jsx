import React, { useState } from 'react';
import WipBadge from './WipBadge';
import {
  Calculator,
  CheckCircle2,
  Clock,
  DollarSign,
  ShieldCheck,
  ArrowRight,
  Layers,
  Sparkles,
  Zap,
  Check
} from 'lucide-react';

export default function CalculatorPage({ onRequestProposal }) {
  const [selectedCapabilities, setSelectedCapabilities] = useState(['Web Development']);
  const [scale, setScale] = useState('Growth Engine');
  const [timeline, setTimeline] = useState('Standard (1-2 Months)');
  const [securityAddons, setSecurityAddons] = useState(['Zero-Trust WAF Shield']);

  const capabilities = [
    { title: 'Web Development', basePrice: 2500, weeks: 3 },
    { title: 'Mobile App Development', basePrice: 3500, weeks: 4 },
    { title: 'AI Solutions & Agents', basePrice: 4000, weeks: 4 },
    { title: 'Dashboard Systems', basePrice: 3000, weeks: 3 },
    { title: 'UI/UX Design', basePrice: 1500, weeks: 2 },
    { title: 'Graphic Designing', basePrice: 1200, weeks: 2 },
    { title: 'Marketing Strategies', basePrice: 1800, weeks: 2 },
    { title: 'Web Security', basePrice: 2200, weeks: 2 },
    { title: 'Maintenance & Support', basePrice: 1000, weeks: 1 }
  ];

  const scales = [
    { title: 'Startup MVP', multiplier: 0.8, label: 'Core essentials for rapid market entry' },
    { title: 'Growth Engine', multiplier: 1.2, label: 'Feature-complete system built for scaling' },
    { title: 'Enterprise Scale', multiplier: 1.8, label: 'High-availability multi-region architecture with 99.99% uptime' }
  ];

  const timelines = [
    { title: 'Urgent (< 2 Weeks)', speedMultiplier: 1.25 },
    { title: 'Standard (1-2 Months)', speedMultiplier: 1.0 },
    { title: 'Strategic (3+ Months)', speedMultiplier: 0.95 }
  ];

  const addons = [
    { title: 'Zero-Trust WAF Shield', price: 800 },
    { title: 'OWASP Penetration Audit', price: 1200 },
    { title: '24/7 SLA Priority Support', price: 600 },
    { title: '100% Repository IP Transfer', price: 0 }
  ];

  const toggleCapability = (title) => {
    if (selectedCapabilities.includes(title)) {
      if (selectedCapabilities.length > 1) {
        setSelectedCapabilities(selectedCapabilities.filter(c => c !== title));
      }
    } else {
      setSelectedCapabilities([...selectedCapabilities, title]);
    }
  };

  const toggleAddon = (title) => {
    if (securityAddons.includes(title)) {
      setSecurityAddons(securityAddons.filter(a => a !== title));
    } else {
      setSecurityAddons([...securityAddons, title]);
    }
  };

  // Calculate totals
  const baseCapsTotal = selectedCapabilities.reduce((acc, capTitle) => {
    const found = capabilities.find(c => c.title === capTitle);
    return acc + (found ? found.basePrice : 0);
  }, 0);

  const baseWeeksTotal = selectedCapabilities.reduce((acc, capTitle) => {
    const found = capabilities.find(c => c.title === capTitle);
    return acc + (found ? found.weeks : 0);
  }, 0);

  const selectedScaleObj = scales.find(s => s.title === scale) || scales[1];
  const selectedTimelineObj = timelines.find(t => t.title === timeline) || timelines[1];

  const addonsTotal = securityAddons.reduce((acc, addonTitle) => {
    const found = addons.find(a => a.title === addonTitle);
    return acc + (found ? found.price : 0);
  }, 0);

  const subtotal = (baseCapsTotal * selectedScaleObj.multiplier) + addonsTotal;
  const finalPriceLow = Math.round(subtotal * 0.9);
  const finalPriceHigh = Math.round(subtotal * 1.15);
  const estimatedWeeks = Math.max(2, Math.round(baseWeeksTotal * (scale === 'Enterprise Scale' ? 1.4 : 1.0)));

  return (
    <section id="calculator" className="py-12 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-100/80 px-3.5 py-1 rounded-full border border-sky-200 inline-flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5 text-sky-600" />
            <span>Interactive Estimator Tool</span>
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
            Project Cost & Architecture Estimator
          </h2>

          {/* Universal Work in Progress Badge directly below main title */}
          <div className="flex justify-center pt-1">
            <WipBadge />
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2 font-normal">
            Configure your technical requirements below to calculate real-time estimated budget ranges and delivery timelines.
          </p>
        </div>

        {/* 2-Column Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Core Capabilities */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-sky-150 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-extrabold text-[#0F172A] uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4 text-sky-600" />
                  <span>1. Select Core Capabilities</span>
                </h3>
                <span className="text-xs text-sky-600 font-bold font-mono">
                  {selectedCapabilities.length} Selected
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {capabilities.map((cap) => {
                  const isSelected = selectedCapabilities.includes(cap.title);
                  return (
                    <button
                      key={cap.title}
                      type="button"
                      onClick={() => toggleCapability(cap.title)}
                      className={`p-3 rounded-2xl border text-xs font-bold text-left transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-sky-50 border-sky-500 text-sky-900 shadow-xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="truncate pr-2">{cap.title}</span>
                      {isSelected ? (
                        <div className="w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full border border-slate-300 shrink-0"></div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Architecture Scale Scope */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-sky-150 shadow-sm space-y-4">
              <h3 className="text-sm font-extrabold text-[#0F172A] uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>2. Define Architecture Scale</span>
              </h3>

              <div className="grid grid-cols-1 gap-2.5">
                {scales.map((s) => {
                  const isSelected = scale === s.title;
                  return (
                    <button
                      key={s.title}
                      type="button"
                      onClick={() => setScale(s.title)}
                      className={`p-3.5 rounded-2xl border text-left transition-all flex items-start justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-sky-50 border-sky-500 text-sky-900 shadow-xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-slate-900">{s.title}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5 font-normal">{s.label}</div>
                      </div>
                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Security & Compliance Add-ons */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-sky-150 shadow-sm space-y-4">
              <h3 className="text-sm font-extrabold text-[#0F172A] uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                <span>3. Security & SLA Add-ons</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {addons.map((a) => {
                  const isSelected = securityAddons.includes(a.title);
                  return (
                    <button
                      key={a.title}
                      type="button"
                      onClick={() => toggleAddon(a.title)}
                      className={`p-3 rounded-2xl border text-xs font-bold text-left transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-50/80 border-indigo-400 text-indigo-950 shadow-xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="truncate pr-2">{a.title}</span>
                      {isSelected ? (
                        <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full border border-slate-300 shrink-0"></div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Timeline Urgency */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-sky-150 shadow-sm space-y-4">
              <h3 className="text-sm font-extrabold text-[#0F172A] uppercase tracking-wider flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>4. Target Timeline</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {timelines.map((t) => {
                  const isSelected = timeline === t.title;
                  return (
                    <button
                      key={t.title}
                      type="button"
                      onClick={() => setTimeline(t.title)}
                      className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-slate-900 text-white border-slate-900 shadow-xs font-bold'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {t.title}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Calculation Summary (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-sky-200 shadow-xl space-y-6 bg-gradient-to-b from-white via-sky-50/40 to-white">
              <div className="border-b border-sky-100 pb-4">
                <span className="text-[11px] font-mono font-bold text-sky-600 uppercase tracking-widest bg-sky-100 px-2.5 py-0.5 rounded-full">
                  Live Estimate Output
                </span>
                <h3 className="text-xl font-extrabold text-[#0F172A] mt-2">
                  Architecture Budget Breakdown
                </h3>
              </div>

              {/* Price Display Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white shadow-lg space-y-2">
                <div className="text-xs text-sky-300 uppercase tracking-wider font-mono">
                  Estimated Investment Range
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono flex items-center gap-1">
                  <DollarSign className="w-6 h-6 text-emerald-400" />
                  <span>${finalPriceLow.toLocaleString()}</span>
                  <span className="text-slate-400 text-lg font-normal">—</span>
                  <span>${finalPriceHigh.toLocaleString()}</span>
                </div>
                <div className="text-[11px] text-sky-200/80 font-medium">
                  USD • Enterprise Scope Calculation
                </div>
              </div>

              {/* Duration Display Box */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-white border border-sky-200 text-slate-900">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Estimated Duration</div>
                  <div className="text-lg font-extrabold font-mono text-sky-600 mt-0.5">
                    {estimatedWeeks} Weeks
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-sky-200 text-slate-900">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Availability Guarantee</div>
                  <div className="text-lg font-extrabold font-mono text-emerald-600 mt-0.5">
                    99.99% SLA
                  </div>
                </div>
              </div>

              {/* Selected Specs Breakdown */}
              <div className="space-y-2 text-xs text-slate-700 pt-2 border-t border-sky-100">
                <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-2">
                  Selected Specification Items ({selectedCapabilities.length}):
                </div>
                <div className="max-h-36 overflow-y-auto space-y-1.5 pr-1">
                  {selectedCapabilities.map((cap, i) => (
                    <div key={i} className="flex items-center justify-between text-[11px] p-1.5 rounded-lg bg-sky-50/60">
                      <span className="font-semibold text-slate-800">• {cap}</span>
                      <span className="text-sky-600 font-mono font-bold">Included</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onRequestProposal(selectedCapabilities.join(', '))}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 hover:from-sky-500 hover:to-cyan-400 text-white font-bold text-xs shadow-lg shadow-sky-600/25 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Transfer Estimate to Proposal Request</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-medium pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero-Trust NDA Confidentiality Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
