import React, { useState } from 'react';
import { X, Calculator, CheckCircle2, Trash2, ArrowRight, ShieldCheck, Sparkles, Send } from 'lucide-react';
import { CURRENCIES, SERVICE_CATEGORIES } from '../data/pricingData';
import confetti from 'canvas-confetti';

export default function PriceCalculatorModal({ isOpen, onClose }) {
  const [selectedCurrency, setSelectedCurrency] = useState('PKR');
  const [selectedServices, setSelectedServices] = useState([]); // array of service objects
  const [activeCategory, setActiveCategory] = useState('development');
  const [clientInfo, setClientInfo] = useState({ name: '', email: '', phone: '', notes: '' });
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentCategoryObj = SERVICE_CATEGORIES.find(c => c.id === activeCategory);

  const toggleService = (service, categoryName) => {
    const exists = selectedServices.some(s => s.id === service.id);
    if (exists) {
      setSelectedServices(selectedServices.filter(s => s.id !== service.id));
    } else {
      setSelectedServices([...selectedServices, { ...service, categoryName }]);
    }
  };

  const handleWhatsAppCheckout = () => {
    if (selectedServices.length === 0) return;
    const currencyObj = CURRENCIES.find(c => c.code === selectedCurrency);
    const serviceListText = selectedServices.map((s, idx) => `${idx + 1}. ${s.name} (${s.prices[selectedCurrency]})`).join('%0A');
    const message = `Hello Volen Solution!%0AI would like a custom quote/order for the following selected services (%0ACurrency: ${currencyObj.label}):%0A%0A${serviceListText}%0A%0AClient Name: ${clientInfo.name || 'Not provided'}%0AEmail: ${clientInfo.email || 'Not provided'}`;
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  const handleSubmitQuote = (e) => {
    e.preventDefault();
    setQuoteSubmitted(true);
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-sky-100 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 p-5 sm:p-6 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-sky-500/20 border border-sky-400/30 text-sky-400">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-sky-500/20 text-sky-300 px-2.5 py-0.5 rounded-full border border-sky-400/30">
                  Interactive Estimator
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-0.5">
                Volen Solution Pricing Calculator
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-full bg-slate-800/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Currency & Department Selector Bar */}
        <div className="bg-sky-50/80 border-b border-sky-100 p-4 shrink-0 space-y-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <span>Select Your Currency / Region:</span>
            </div>

            <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
              {CURRENCIES.map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => setSelectedCurrency(curr.code)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedCurrency === curr.code
                      ? 'bg-sky-600 text-white shadow-md scale-105'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-sky-100/60'
                  }`}
                >
                  {curr.label}
                </button>
              ))}
            </div>
          </div>

          {/* Department Tabs */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {SERVICE_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white/80 text-slate-600 border border-slate-200/80 hover:bg-white hover:text-sky-600'
                  }`}
                >
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Body Content (Split View on Desktop) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Available Services Checklist (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-600" />
                Select Services ({currentCategoryObj.name})
              </h4>
              <span className="text-[11px] text-slate-500">Click card to add/remove</span>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {currentCategoryObj.services.map((service) => {
                const isSelected = selectedServices.some(s => s.id === service.id);
                return (
                  <div
                    key={service.id}
                    onClick={() => toggleService(service, currentCategoryObj.name)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-sky-50 border-sky-500 shadow-sm ring-2 ring-sky-200'
                        : 'bg-white border-slate-200/80 hover:border-sky-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-sky-600 text-white' : 'border border-slate-300 bg-white'
                      }`}>
                        {isSelected && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-slate-900">{service.name}</div>
                        {service.detail && (
                          <div className="text-[10px] text-slate-500 font-normal leading-tight max-w-sm">
                            {service.detail}
                          </div>
                        )}
                        {service.badge && (
                          <span className="inline-block mt-0.5 px-2 py-0.2 rounded-full text-[9px] font-bold bg-sky-100 text-sky-800">
                            {service.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-xs font-mono font-extrabold text-sky-600">
                        {service.prices[selectedCurrency]}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Services Summary & Quote Panel (5 cols) */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-5 border border-sky-400/20 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                  <Calculator className="w-4 h-4 text-sky-400" />
                  Your Quote Summary
                </h4>
                <span className="text-[10px] font-mono text-sky-400 bg-sky-950 px-2 py-0.5 rounded-full border border-sky-800">
                  {selectedServices.length} Selected
                </span>
              </div>

              {selectedServices.length === 0 ? (
                <div className="text-center py-8 text-slate-400 text-xs space-y-2">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mx-auto text-slate-500">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <p>No services selected yet.</p>
                  <p className="text-[11px] text-slate-500">Select options from the left list to build your custom package.</p>
                </div>
              ) : (
                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {selectedServices.map((item) => (
                    <div key={item.id} className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-bold text-slate-200">{item.name}</div>
                        <div className="text-[10px] text-slate-400">{item.categoryName}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-sky-400">{item.prices[selectedCurrency]}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleService(item, item.categoryName);
                          }}
                          className="text-slate-500 hover:text-red-400 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quote Action Panel */}
            <div className="pt-3 border-t border-slate-800 space-y-3">
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Your Name (Optional)"
                  value={clientInfo.name}
                  onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 outline-none focus:border-sky-500"
                />
                <input
                  type="email"
                  placeholder="Your Email / Phone (Optional)"
                  value={clientInfo.email}
                  onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 outline-none focus:border-sky-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <button
                  disabled={selectedServices.length === 0}
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>WhatsApp Quote Order</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero-Trust Client Confidentiality SLA</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
