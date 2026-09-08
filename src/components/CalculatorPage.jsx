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
  Check,
  Globe2,
  FileText,
  Building2,
  Cpu,
  BadgeDollarSign
} from 'lucide-react';

export default function CalculatorPage({ onRequestProposal }) {
  // Region / Market Platform data directly from Google Sheet
  const marketRegions = [
    {
      id: 'pk',
      name: 'Pakistan',
      flag: '🇵🇰',
      currency: 'PKR',
      symbol: 'PKR ',
      usdRate: 278, // 1 USD ~ 278 PKR
      tiers: {
        basic: { name: 'Basic / Starter (1-5 Pages)', low: 20000, high: 50000, usdText: '$70 – $180' },
        standard: { name: 'Standard Business (5-10 Pages)', low: 40000, high: 200000, usdText: '$145 – $720' },
        custom: { name: 'Custom / Enterprise (10+ Pages)', low: 250000, high: 1500000, usdText: '$900 – $5,400+' }
      },
      perPageLow: 3000,
      perPageHigh: 10000,
      perPageUsdText: '$10 – $35',
      notes: 'Project-based flat fee; content/copywriting PKR 4,000 - 6,000/page.'
    },
    {
      id: 'uae',
      name: 'UAE (United Arab Emirates)',
      flag: '🇦🇪',
      currency: 'AED',
      symbol: 'AED ',
      usdRate: 3.67,
      tiers: {
        basic: { name: 'Basic / Starter (1-5 Pages)', low: 1000, high: 4500, usdText: '$270 – $1,225' },
        standard: { name: 'Standard Business (5-10 Pages)', low: 3500, high: 8000, usdText: '$950 – $2,180' },
        custom: { name: 'Custom / Enterprise (10+ Pages)', low: 15000, high: 60000, usdText: '$4,080 – $16,300+' }
      },
      perPageLow: 350,
      perPageHigh: 1200,
      perPageUsdText: '$95 – $325',
      notes: 'Standard agency/freelancer packages; extra for bilingual (Arabic/English) localization.'
    },
    {
      id: 'usa',
      name: 'USA (United States)',
      flag: '🇺🇸',
      currency: 'USD',
      symbol: '$',
      usdRate: 1,
      tiers: {
        basic: { name: 'Basic / Starter (1-5 Pages)', low: 1000, high: 3000, usdText: '$1,000 – $3,000' },
        standard: { name: 'Standard Business (5-10 Pages)', low: 3000, high: 8000, usdText: '$3,000 – $8,000' },
        custom: { name: 'Custom / Enterprise (10+ Pages)', low: 10000, high: 30000, usdText: '$10,000 – $30,000+' }
      },
      perPageLow: 50,
      perPageHigh: 300,
      perPageUsdText: '$50 – $300',
      notes: 'Value/hourly/project based; hourly developer rates $50 – $150+/hr.'
    },
    {
      id: 'ksa',
      name: 'Saudi Arabia (KSA)',
      flag: '🇸🇦',
      currency: 'SAR',
      symbol: 'SAR ',
      usdRate: 3.75,
      tiers: {
        basic: { name: 'Basic / Starter (1-5 Pages)', low: 500, high: 3500, usdText: '$135 – $935' },
        standard: { name: 'Standard Business (5-10 Pages)', low: 2500, high: 8000, usdText: '$665 – $2,130' },
        custom: { name: 'Custom / Enterprise (10+ Pages)', low: 8000, high: 25000, usdText: '$2,130 – $6,660+' }
      },
      perPageLow: 300,
      perPageHigh: 1000,
      perPageUsdText: '$80 – $265',
      notes: 'Fixed project bids; additional fees for Arabic RTL localization & Vision 2030 compliance.'
    },
    {
      id: 'fiverr',
      name: 'Fiverr Platform Rate',
      flag: '🟢',
      currency: 'USD',
      symbol: '$',
      usdRate: 1,
      tiers: {
        basic: { name: 'Basic Tier (1 Page Starter)', low: 20, high: 100, usdText: '$20 – $100' },
        standard: { name: 'Standard Tier (3-5 Pages)', low: 80, high: 250, usdText: '$80 – $250' },
        custom: { name: 'Premium Tier (6-10 Pages / Store)', low: 250, high: 800, usdText: '$250 – $800+' }
      },
      perPageLow: 10,
      perPageHigh: 50,
      perPageUsdText: '$10 – $50',
      notes: 'Tiered gigs (Basic/Standard/Premium); custom gig extras for additional pages.'
    },
    {
      id: 'upwork',
      name: 'Upwork Platform Rate',
      flag: '🟢',
      currency: 'USD',
      symbol: '$',
      usdRate: 1,
      tiers: {
        basic: { name: 'Fixed Small Project', low: 200, high: 600, usdText: '$200 – $600' },
        standard: { name: 'Fixed Mid-Scale Scope', low: 600, high: 2500, usdText: '$600 – $2,500' },
        custom: { name: 'Custom App / Enterprise', low: 2500, high: 5000, usdText: '$2,500 – $5,000+' }
      },
      perPageLow: 30,
      perPageHigh: 120,
      perPageUsdText: '$30 – $120',
      notes: 'Hourly ($15 – $50/hr general; $50 – $100+/hr senior) or Milestone-based fixed price.'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn Direct B2B',
      flag: '💼',
      currency: 'USD',
      symbol: '$',
      usdRate: 1,
      tiers: {
        basic: { name: 'Basic Corporate Site', low: 1500, high: 3000, usdText: '$1,500 – $3,000' },
        standard: { name: 'Standard B2B Ecosystem', low: 3000, high: 6000, usdText: '$3,000 – $6,000+' },
        custom: { name: 'Enterprise Retainer Scope', low: 6000, high: 15000, usdText: '$6,000 – $15,000+' }
      },
      perPageLow: 100,
      perPageHigh: 300,
      perPageUsdText: '$100 – $300+',
      notes: 'Direct B2B / retainer; hourly billing $50 – $150+/hr; value-based pricing.'
    }
  ];

  const [selectedRegionId, setSelectedRegionId] = useState('usa');
  const [selectedTierKey, setSelectedTierKey] = useState('standard');
  const [extraPagesCount, setExtraPagesCount] = useState(2);
  const [selectedAddons, setSelectedAddons] = useState(['Arabic/English Bilingual Localization']);

  const activeRegion = marketRegions.find((r) => r.id === selectedRegionId) || marketRegions[2];
  const activeTier = activeRegion.tiers[selectedTierKey];

  const optionalAddons = [
    { id: 'bilingual', name: 'Arabic/English Bilingual Localization', rateFactor: 0.25 },
    { id: 'ecommerce', name: 'E-Commerce / Stripe Payment Gateway', rateFactor: 0.35 },
    { id: 'ai-chatbot', name: 'AI Reasoning Chatbot Agent', rateFactor: 0.30 },
    { id: 'security', name: 'Zero-Trust WAF & Pen Testing Audit', rateFactor: 0.20 }
  ];

  const toggleAddon = (name) => {
    if (selectedAddons.includes(name)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== name));
    } else {
      setSelectedAddons([...selectedAddons, name]);
    }
  };

  // Base tier range
  const tierLow = activeTier.low;
  const tierHigh = activeTier.high;

  // Addon pages cost
  const addOnPagesCostLow = extraPagesCount * activeRegion.perPageLow;
  const addOnPagesCostHigh = extraPagesCount * activeRegion.perPageHigh;

  // Additional feature multipliers
  const totalAddonMultiplier = selectedAddons.reduce((sum, aName) => {
    const found = optionalAddons.find((item) => item.name === aName);
    return sum + (found ? found.rateFactor : 0);
  }, 0);

  const subtotalLow = (tierLow + addOnPagesCostLow) * (1 + totalAddonMultiplier);
  const subtotalHigh = (tierHigh + addOnPagesCostHigh) * (1 + totalAddonMultiplier);

  const finalLow = Math.round(subtotalLow);
  const finalHigh = Math.round(subtotalHigh);

  // Convert to USD equivalence if currency is PKR, AED, SAR
  const usdLow = activeRegion.currency === 'USD' ? finalLow : Math.round(finalLow / activeRegion.usdRate);
  const usdHigh = activeRegion.currency === 'USD' ? finalHigh : Math.round(finalHigh / activeRegion.usdRate);

  return (
    <section id="calculator" className="py-12 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-100/80 px-3.5 py-1 rounded-full border border-sky-200 inline-flex items-center gap-1.5 shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-sky-600" />
            <span>Google Sheet Rate Matrix • Real-Time Estimator</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Website Cost & Regional Rate Estimator
          </h2>

          <div className="flex justify-center pt-1">
            <WipBadge />
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2 font-normal">
            Customized using official market rate benchmarks (Pakistan, UAE, USA, Saudi Arabia, Fiverr, Upwork, LinkedIn B2B).
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* STEP 1: SELECT MARKET REGION OR PLATFORM */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-sky-150 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-sky-600" />
                  <span>1. Select Market Region or Platform</span>
                </h3>
                <span className="text-xs font-mono font-extrabold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
                  {activeRegion.currency} Rate Base
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {marketRegions.map((region) => {
                  const isSelected = selectedRegionId === region.id;
                  return (
                    <button
                      key={region.id}
                      type="button"
                      onClick={() => setSelectedRegionId(region.id)}
                      className={`p-3.5 rounded-2xl border text-xs text-left transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-sky-600 text-white border-sky-600 shadow-md shadow-sky-600/20 font-bold scale-[1.02]'
                          : 'bg-white text-slate-800 border-slate-200 hover:border-sky-300 hover:bg-sky-50/50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl">{region.flag}</span>
                        <div>
                          <div className="font-extrabold leading-tight">{region.name}</div>
                          <div className={`text-[10px] ${isSelected ? 'text-sky-100' : 'text-slate-500'} font-mono`}>
                            Currency: {region.currency}
                          </div>
                        </div>
                      </div>
                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-white text-sky-600 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: SELECT WEBSITE TIER (Starter, Standard, Custom) */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-sky-150 shadow-md space-y-4">
              <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-600" />
                <span>2. Select Website Package Tier</span>
              </h3>

              <div className="grid grid-cols-1 gap-2.5">
                {Object.entries(activeRegion.tiers).map(([tierKey, tierObj]) => {
                  const isSelected = selectedTierKey === tierKey;
                  return (
                    <button
                      key={tierKey}
                      type="button"
                      onClick={() => setSelectedTierKey(tierKey)}
                      className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-gradient-to-r from-slate-900 to-sky-950 text-white border-sky-400/50 shadow-lg'
                          : 'bg-white text-slate-800 border-slate-200 hover:border-sky-300 hover:bg-slate-50'
                      }`}
                    >
                      <div>
                        <div className="text-xs sm:text-sm font-black flex items-center gap-2">
                          <span>{tierObj.name}</span>
                        </div>
                        <div className={`text-xs font-mono font-bold mt-1 ${isSelected ? 'text-sky-300' : 'text-sky-600'}`}>
                          {activeRegion.symbol}{tierObj.low.toLocaleString()} – {tierObj.high.toLocaleString()}{' '}
                          <span className="text-[11px] opacity-80">({tierObj.usdText})</span>
                        </div>
                      </div>

                      {isSelected && (
                        <div className="w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center shrink-0">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 3: ADDITIONAL PAGES ADD-ON SLIDER */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-sky-150 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-indigo-600" />
                  <span>3. Add-on Extra Pages</span>
                </h3>
                <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
                  Rate: {activeRegion.symbol}{activeRegion.perPageLow.toLocaleString()} – {activeRegion.perPageHigh.toLocaleString()}/page ({activeRegion.perPageUsdText})
                </span>
              </div>

              <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                  <span>Additional Pages Count:</span>
                  <span className="text-sky-600 font-mono text-sm font-extrabold">{extraPagesCount} Pages</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="1"
                  value={extraPagesCount}
                  onChange={(e) => setExtraPagesCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                />
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>0 Pages</span>
                  <span>10 Pages</span>
                  <span>20+ Pages</span>
                </div>
              </div>
            </div>

            {/* STEP 4: FEATURE & INTEGRATION ADD-ONS */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-sky-150 shadow-md space-y-4">
              <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>4. Advanced Capabilities & Integrations</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {optionalAddons.map((addon) => {
                  const isSelected = selectedAddons.includes(addon.name);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.name)}
                      className={`p-3 rounded-2xl border text-xs font-bold text-left transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500/10 border-amber-400 text-amber-950 shadow-xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="truncate pr-2">{addon.name}</span>
                      {isSelected ? (
                        <div className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full border border-slate-300 shrink-0"></div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Live Calculation Summary (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-sky-200 shadow-xl space-y-6 bg-gradient-to-b from-white via-sky-50/40 to-white">
              <div className="border-b border-sky-100 pb-4">
                <span className="text-[11px] font-mono font-bold text-sky-600 uppercase tracking-widest bg-sky-100 px-2.5 py-0.5 rounded-full">
                  Google Sheet Rate Output
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-2 flex items-center gap-2">
                  <span>{activeRegion.flag}</span>
                  <span>{activeRegion.name} Estimate</span>
                </h3>
              </div>

              {/* Price Display Box */}
              <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-950 via-sky-950 to-slate-950 text-white shadow-xl space-y-3 relative overflow-hidden border border-sky-500/30">
                <div className="text-[11px] text-sky-300 uppercase tracking-wider font-mono font-bold flex items-center justify-between">
                  <span>Calculated Rate Range</span>
                  <span className="text-emerald-400 font-mono">● Active Matrix</span>
                </div>

                {/* Primary Local Currency Price */}
                <div className="text-2xl sm:text-3xl font-black text-white font-mono leading-tight">
                  <span className="text-sky-400">{activeRegion.symbol}</span>
                  <span>{finalLow.toLocaleString()}</span>
                  <span className="text-slate-400 text-lg font-normal mx-1">–</span>
                  <span>{finalHigh.toLocaleString()}</span>
                </div>

                {/* USD Equivalence if local currency */}
                {activeRegion.currency !== 'USD' && (
                  <div className="text-xs text-emerald-300 font-mono font-bold pt-1 border-t border-slate-800">
                    ≈ USD Equivalent: ${usdLow.toLocaleString()} – ${usdHigh.toLocaleString()}
                  </div>
                )}

                <div className="text-[11px] text-slate-400 font-mono">
                  Region: {activeRegion.name} ({activeRegion.currency})
                </div>
              </div>

              {/* Google Sheet Pricing Model & Key Notes */}
              <div className="bg-slate-900 text-slate-200 p-4 rounded-2xl border border-slate-800 text-xs space-y-1.5 font-mono">
                <div className="text-[10px] text-sky-400 uppercase font-bold tracking-wider">
                  Pricing Model & Key Notes (Google Sheet):
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  "{activeRegion.notes}"
                </p>
              </div>

              {/* Selected Specifications Breakdown */}
              <div className="space-y-2 text-xs text-slate-700 pt-2 border-t border-sky-100">
                <div className="font-extrabold text-slate-900 uppercase tracking-wider text-[11px]">
                  Selected Configuration Summary:
                </div>
                <div className="space-y-1.5 text-[11px]">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-sky-50">
                    <span className="font-semibold text-slate-800">• Region / Platform:</span>
                    <span className="text-sky-700 font-mono font-bold">{activeRegion.name}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-sky-50">
                    <span className="font-semibold text-slate-800">• Package Tier:</span>
                    <span className="text-sky-700 font-mono font-bold">{activeTier.name}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-sky-50">
                    <span className="font-semibold text-slate-800">• Additional Pages:</span>
                    <span className="text-sky-700 font-mono font-bold">+{extraPagesCount} Pages</span>
                  </div>
                  {selectedAddons.map((addon, aIdx) => (
                    <div key={aIdx} className="flex items-center justify-between p-2 rounded-lg bg-sky-50">
                      <span className="font-semibold text-slate-800">• Feature Add-on:</span>
                      <span className="text-emerald-700 font-mono font-bold">{addon}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onRequestProposal && onRequestProposal(`Website Rate Estimate [${activeRegion.name}] - ${activeTier.name} (+${extraPagesCount} pages)`)}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 hover:from-sky-500 hover:to-cyan-400 text-white font-bold text-xs shadow-lg shadow-sky-600/25 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Transfer Estimate to Proposal Request</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-medium pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero-Trust Proposal Confidentiality Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
