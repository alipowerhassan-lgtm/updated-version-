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
  BadgeDollarSign,
  Briefcase,
  TrendingUp,
  Megaphone,
  Search,
  Share2,
  Target,
  PenTool
} from 'lucide-react';
import ClientRoiCalculator from './ClientRoiCalculator';

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
      notes: 'Project-based flat fee; content/copywriting PKR 4,000 – 6,000/page.'
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
      notes: 'Value/hourly/project-based; hourly developer rates $50 – $150+/hr.'
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
      notes: 'Hourly ($15 – $50/hr general; $50 – $100+/hr senior) or milestone-based fixed price.'
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

  // Specific Website Types List
  const websiteTypes = [
    { id: 'portfolio', name: 'Portfolio & Personal Branding', desc: 'Case studies, interactive gallery, resume & client booking', priceFactor: 0.9 },
    { id: 'corporate', name: 'Corporate & Business Enterprise', desc: 'Multi-page corporate presence, service catalog & team hierarchy', priceFactor: 1.0 },
    { id: 'ecommerce', name: 'E-Commerce & Storefront', desc: 'Product catalog, shopping cart, Stripe/PayFast & inventory', priceFactor: 1.35 },
    { id: 'saas', name: 'SaaS & Web App Platform', desc: 'User auth, admin dashboard, recurring subscriptions & API backend', priceFactor: 1.6 },
    { id: 'lms', name: 'Educational & LMS Portal', desc: 'Student enrollment, video lectures, quizzes & certification engine', priceFactor: 1.4 },
    { id: 'landing-page', name: 'Sales Funnel / Landing Page', desc: 'High-converting lead capture, A/B testing & CTA integration', priceFactor: 0.8 }
  ];

  // Marketing & Growth Services List
  const marketingServices = [
    { id: 'seo', name: 'SEO Optimization & Keyword Strategy', desc: 'Technical SEO audit, on-page keywords & Google indexing', rateFactor: 0.2 },
    { id: 'smm', name: 'Social Media Marketing (SMM)', desc: 'Content creation, graphic posts & management (Meta/LinkedIn/TikTok)', rateFactor: 0.25 },
    { id: 'ppc', name: 'PPC Ad Campaigns & Lead Gen', desc: 'Google Ads & Meta Ads setup, conversion tracking & landing page sync', rateFactor: 0.3 },
    { id: 'copywriting', name: 'Brand Copywriting & Content', desc: 'High-converting sales copy, article writing & brand voice guide', rateFactor: 0.15 },
    { id: 'cro', name: 'Analytics & Funnel CRO Audit', desc: 'Google Analytics 4, heatmaps, user session recording & UX tuning', rateFactor: 0.18 }
  ];

  const [selectedRegionId, setSelectedRegionId] = useState('usa');
  const [selectedWebsiteTypeId, setSelectedWebsiteTypeId] = useState('corporate');
  const [selectedTierKey, setSelectedTierKey] = useState('standard');
  const [extraPagesCount, setExtraPagesCount] = useState(2);
  const [selectedAddons, setSelectedAddons] = useState(['Arabic/English Bilingual Localization']);
  const [selectedMarketing, setSelectedMarketing] = useState(['SEO Optimization & Keyword Strategy']);

  const activeRegion = marketRegions.find((r) => r.id === selectedRegionId) || marketRegions[2];
  const activeWebsiteType = websiteTypes.find((w) => w.id === selectedWebsiteTypeId) || websiteTypes[1];
  const activeTier = activeRegion.tiers[selectedTierKey];

  const optionalAddons = [
    { id: 'bilingual', name: 'Arabic/English Bilingual Localization', rateFactor: 0.25 },
    { id: 'ecommerce-payment', name: 'Stripe & Regional Payment Gateway Sync', rateFactor: 0.2 },
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

  const toggleMarketing = (name) => {
    if (selectedMarketing.includes(name)) {
      setSelectedMarketing(selectedMarketing.filter((m) => m !== name));
    } else {
      setSelectedMarketing([...selectedMarketing, name]);
    }
  };

  // Base tier calculation
  const tierLow = activeTier.low;
  const tierHigh = activeTier.high;

  // Addon pages cost
  const addOnPagesCostLow = extraPagesCount * activeRegion.perPageLow;
  const addOnPagesCostHigh = extraPagesCount * activeRegion.perPageHigh;

  // Feature Addon Multiplier
  const featureAddonMultiplier = selectedAddons.reduce((sum, aName) => {
    const found = optionalAddons.find((item) => item.name === aName);
    return sum + (found ? found.rateFactor : 0);
  }, 0);

  // Marketing Addon Multiplier
  const marketingAddonMultiplier = selectedMarketing.reduce((sum, mName) => {
    const found = marketingServices.find((item) => item.name === mName);
    return sum + (found ? found.rateFactor : 0);
  }, 0);

  // Total Multiplier
  const totalMultiplier = (activeWebsiteType.priceFactor) + featureAddonMultiplier + marketingAddonMultiplier;

  const subtotalLow = (tierLow + addOnPagesCostLow) * totalMultiplier;
  const subtotalHigh = (tierHigh + addOnPagesCostHigh) * totalMultiplier;

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
            <span>Google Sheet Rate Matrix • Web & Marketing Estimator</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Website Cost & Digital Marketing Estimator
          </h2>

          <div className="flex justify-center pt-1">
            <WipBadge />
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2 font-normal">
            Configure your exact website type (Portfolio, Business, E-Commerce, SaaS), market region rates, and integrated digital marketing growth campaigns.
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

            {/* STEP 2: SELECT SPECIFIC WEBSITE TYPE (Portfolio, Corporate, E-Commerce, SaaS, LMS) */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-sky-150 shadow-md space-y-4">
              <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-purple-600" />
                <span>2. Select Specific Website Type</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {websiteTypes.map((type) => {
                  const isSelected = selectedWebsiteTypeId === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedWebsiteTypeId(type.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-purple-900 text-white border-purple-500 shadow-md shadow-purple-900/20 font-bold'
                          : 'bg-white text-slate-800 border-slate-200 hover:border-purple-300 hover:bg-purple-50/30'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-black flex items-center justify-between">
                          <span>{type.name}</span>
                          {isSelected && (
                            <div className="w-4 h-4 rounded-full bg-purple-400 text-purple-950 flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          )}
                        </div>
                        <div className={`text-[11px] mt-1 font-normal leading-snug ${isSelected ? 'text-purple-200' : 'text-slate-500'}`}>
                          {type.desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 3: SELECT PACKAGE TIER & EXTRA PAGES */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-sky-150 shadow-md space-y-4">
              <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-600" />
                <span>3. Package Scope & Additional Pages</span>
              </h3>

              <div className="grid grid-cols-1 gap-2.5">
                {Object.entries(activeRegion.tiers).map(([tierKey, tierObj]) => {
                  const isSelected = selectedTierKey === tierKey;
                  return (
                    <button
                      key={tierKey}
                      type="button"
                      onClick={() => setSelectedTierKey(tierKey)}
                      className={`p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-gradient-to-r from-slate-900 to-sky-950 text-white border-sky-400/50 shadow-md'
                          : 'bg-white text-slate-800 border-slate-200 hover:border-sky-300 hover:bg-slate-50'
                      }`}
                    >
                      <div>
                        <div className="text-xs sm:text-sm font-black">{tierObj.name}</div>
                        <div className={`text-xs font-mono font-bold mt-0.5 ${isSelected ? 'text-sky-300' : 'text-sky-600'}`}>
                          {activeRegion.symbol}{tierObj.low.toLocaleString()} – {tierObj.high.toLocaleString()}{' '}
                          <span className="text-[11px] opacity-80">({tierObj.usdText})</span>
                        </div>
                      </div>

                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-sky-500 text-white flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Extra Pages Slider */}
              <div className="space-y-2.5 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                  <span>Add-on Extra Pages:</span>
                  <span className="text-sky-600 font-mono text-sm font-extrabold">+{extraPagesCount} Pages</span>
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
              </div>
            </div>

            {/* STEP 4: DIGITAL MARKETING & GROWTH SERVICES (SEO, SMM, PPC, COPYWRITING) */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-sky-150 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span>4. Digital Marketing & Growth Campaigns</span>
                </h3>
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {selectedMarketing.length} Active Services
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {marketingServices.map((marketing) => {
                  const isSelected = selectedMarketing.includes(marketing.name);
                  return (
                    <button
                      key={marketing.id}
                      type="button"
                      onClick={() => toggleMarketing(marketing.name)}
                      className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-950 text-emerald-100 border-emerald-500/60 shadow-xs font-bold'
                          : 'bg-white text-slate-800 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/20'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-black flex items-center justify-between">
                          <span>{marketing.name}</span>
                          {isSelected ? (
                            <div className="w-4 h-4 rounded-full bg-emerald-400 text-emerald-950 flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-slate-300 shrink-0"></div>
                          )}
                        </div>
                        <div className={`text-[10px] mt-1 leading-relaxed ${isSelected ? 'text-emerald-200' : 'text-slate-500'}`}>
                          {marketing.desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 5: TECHNICAL & SECURITY ADD-ONS */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-sky-150 shadow-md space-y-4">
              <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                <span>5. Security & Technical Integrations</span>
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
                          ? 'bg-indigo-50/90 border-indigo-400 text-indigo-950 shadow-xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="truncate pr-2">{addon.name}</span>
                      {isSelected ? (
                        <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0">
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
                  Live Calculator Breakdown
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-2 flex items-center gap-2">
                  <span>{activeRegion.flag}</span>
                  <span>{activeRegion.name} Estimate</span>
                </h3>
              </div>

              {/* Price Display Box */}
              <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-950 via-sky-950 to-slate-950 text-white shadow-xl space-y-3 relative overflow-hidden border border-sky-500/30">
                <div className="text-[11px] text-sky-300 uppercase tracking-wider font-mono font-bold flex items-center justify-between">
                  <span>Estimated Total Investment</span>
                  <span className="text-emerald-400 font-mono">● Google Sheet Verified</span>
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
                  Type: {activeWebsiteType.name}
                </div>
              </div>

              {/* Google Sheet Pricing Model & Key Notes */}
              <div className="bg-slate-900 text-slate-200 p-4 rounded-2xl border border-slate-800 text-xs space-y-1.5 font-mono">
                <div className="text-[10px] text-sky-400 uppercase font-bold tracking-wider">
                  Regional Rate Model Notes:
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  "{activeRegion.notes}"
                </p>
              </div>

              {/* Selected Specifications Breakdown */}
              <div className="space-y-2 text-xs text-slate-700 pt-2 border-t border-sky-100">
                <div className="font-extrabold text-slate-900 uppercase tracking-wider text-[11px]">
                  Configured Scope Summary:
                </div>
                <div className="space-y-1.5 text-[11px] max-h-48 overflow-y-auto pr-1">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-sky-50">
                    <span className="font-semibold text-slate-800">• Website Category:</span>
                    <span className="text-sky-700 font-mono font-bold">{activeWebsiteType.name}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-sky-50">
                    <span className="font-semibold text-slate-800">• Market Region:</span>
                    <span className="text-sky-700 font-mono font-bold">{activeRegion.name}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-sky-50">
                    <span className="font-semibold text-slate-800">• Package Tier:</span>
                    <span className="text-sky-700 font-mono font-bold">{activeTier.name}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-sky-50">
                    <span className="font-semibold text-slate-800">• Extra Pages:</span>
                    <span className="text-sky-700 font-mono font-bold">+{extraPagesCount} Pages</span>
                  </div>
                  {selectedMarketing.map((mItem, mIdx) => (
                    <div key={mIdx} className="flex items-center justify-between p-2 rounded-lg bg-emerald-50">
                      <span className="font-semibold text-emerald-900">• Marketing Service:</span>
                      <span className="text-emerald-700 font-mono font-bold">Active</span>
                    </div>
                  ))}
                  {selectedAddons.map((addon, aIdx) => (
                    <div key={aIdx} className="flex items-center justify-between p-2 rounded-lg bg-indigo-50">
                      <span className="font-semibold text-indigo-900">• Tech Integration:</span>
                      <span className="text-indigo-700 font-mono font-bold">Included</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onRequestProposal && onRequestProposal(`${activeWebsiteType.name} [${activeRegion.name}] - ${selectedMarketing.join(', ')}`)}
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

        {/* Dynamic Client ROI & Cost-Savings Calculator Section */}
        <div className="pt-8">
          <ClientRoiCalculator onRequestProposal={onRequestProposal} />
        </div>
      </div>
    </section>
  );
}
