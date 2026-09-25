import React, { useState } from 'react';
import WipBadge from './WipBadge';
import { CURRENCIES, SERVICE_CATEGORIES } from '../data/pricingData';
import { Calculator, CheckCircle2, ArrowRight, Sparkles, Code, Share2, TrendingUp, Palette, Bot, MapPin } from 'lucide-react';

export default function PricingSection({ onOpenCalculator, onSelectServiceForModal }) {
  const [selectedCurrency, setSelectedCurrency] = useState('PKR');
  const [selectedDept, setSelectedDept] = useState('all');

  const getDepartmentIcon = (iconName) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5 text-sky-600" />;
      case 'Share2': return <Share2 className="w-5 h-5 text-purple-600" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-emerald-600" />;
      case 'Palette': return <Palette className="w-5 h-5 text-pink-600" />;
      case 'Bot': return <Bot className="w-5 h-5 text-amber-600" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-red-500" />;
      default: return <Sparkles className="w-5 h-5 text-sky-600" />;
    }
  };

  const filteredCategories = selectedDept === 'all'
    ? SERVICE_CATEGORIES
    : SERVICE_CATEGORIES.filter(cat => cat.id === selectedDept);

  return (
    <section id="services" className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-sky-100/80 text-sky-900 border border-sky-200">
            <span>&lt;/&gt; Build</span> • <span>📈 Grow</span> • <span>🛡️ Secure</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Official <span className="tech-gradient-text">Services & Pricing Matrix</span>
          </h2>

          <div className="flex justify-center pt-1">
            <WipBadge text="Live Authoritative Pricing — 5 Global Regions" />
          </div>

          <p className="text-slate-600 text-base leading-relaxed pt-2">
            Transparent enterprise pricing for Development, Digital Marketing, Advertising, Graphic Design, and AI Services.
          </p>
        </div>

        {/* Currency & Region Selector Bar */}
        <div className="glass-card rounded-3xl p-4 sm:p-6 border border-sky-150 shadow-md mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-sky-100 pb-4">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Select Region / Currency</div>
              <div className="text-sm font-bold text-slate-900">Multi-Currency Global Rates</div>
            </div>

            {/* Currency Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {CURRENCIES.map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => setSelectedCurrency(curr.code)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedCurrency === curr.code
                      ? 'bg-gradient-to-r from-slate-900 to-sky-600 text-white shadow-md scale-105'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-sky-50'
                  }`}
                >
                  {curr.label}
                </button>
              ))}
            </div>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-1">
            <button
              onClick={() => setSelectedDept('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedDept === 'all'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'bg-white/80 text-slate-600 border border-slate-200 hover:bg-sky-50'
              }`}
            >
              All 6 Departments
            </button>

            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedDept(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedDept === cat.id
                    ? 'bg-sky-600 text-white shadow-md'
                    : 'bg-white/80 text-slate-600 border border-slate-200 hover:bg-sky-50'
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-[10px] bg-slate-100 text-slate-700 px-1.5 py-0.2 rounded-full font-mono">
                  {cat.services.length}
                </span>
              </button>
            ))}

            {/* Calculator CTA Launch Pill */}
            <button
              onClick={onOpenCalculator}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md transition-all flex items-center gap-1.5 cursor-pointer ml-auto"
            >
              <Calculator className="w-4 h-4" />
              <span>Launch Price Calculator 🧮</span>
            </button>
          </div>
        </div>

        {/* Services Render by Category */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              {/* Category Sub-Header */}
              <div className="flex items-center gap-3 border-b border-sky-150 pb-3">
                <div className="p-2.5 rounded-2xl bg-sky-50 border border-sky-200">
                  {getDepartmentIcon(category.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">{category.name}</h3>
                  <p className="text-xs text-slate-500">{category.description}</p>
                </div>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.services.map((service) => (
                  <div
                    key={service.id}
                    className="glass-card glass-card-hover rounded-3xl p-5 border border-sky-100 flex flex-col justify-between relative group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-150">
                          {category.name.split(' ')[0]}
                        </span>
                        {service.badge && (
                          <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full border border-amber-200">
                            {service.badge}
                          </span>
                        )}
                      </div>

                      <h4 className="text-base font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors mb-1.5">
                        {service.name}
                      </h4>

                      {service.detail && (
                        <p className="text-xs text-slate-600 leading-relaxed mb-3 font-normal">
                          {service.detail}
                        </p>
                      )}

                      {service.features && (
                        <div className="space-y-1.5 mb-4 bg-sky-50/60 p-2.5 rounded-2xl border border-sky-100/80">
                          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-700">What's Included:</div>
                          {service.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-1.5 text-[11px] text-slate-700 font-medium leading-tight">
                              <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-sky-100/80 flex items-center justify-between mt-3">
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400">Official Rate</div>
                        <div className="text-lg font-mono font-extrabold text-sky-600">
                          {service.prices[selectedCurrency]}
                        </div>
                      </div>

                      <button
                        onClick={onOpenCalculator}
                        className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-sky-600 text-white text-xs font-bold transition-colors shadow-xs flex items-center gap-1 cursor-pointer"
                      >
                        <span>Select</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Global Floating Calculator Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-sky-400/20">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Calculator className="w-5 h-5 text-amber-400" />
              Build Your Custom Package & Estimate Total Cost
            </h4>
            <p className="text-xs text-sky-200/80">
              Combine items across Web, Mobile, Marketing, Ads, Graphic Design, and AI Chatbots with instant multi-currency quotes.
            </p>
          </div>

          <button
            onClick={onOpenCalculator}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-white font-bold text-xs shadow-md cursor-pointer shrink-0 transition-all hover:scale-105 flex items-center gap-2"
          >
            <Calculator className="w-4 h-4" />
            <span>Open Interactive Calculator</span>
          </button>
        </div>

      </div>
    </section>
  );
}
