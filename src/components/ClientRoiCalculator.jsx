import React, { useState } from 'react';
import { 
  Calculator, DollarSign, TrendingUp, Zap, Clock, ShieldCheck, 
  ArrowRight, CheckCircle2, Sparkles 
} from 'lucide-react';

export default function ClientRoiCalculator({ onRequestProposal }) {
  const [currency, setCurrency] = useState('PKR'); // 'PKR' or 'USD'
  const [teamSize, setTeamSize] = useState(5);
  const [manualHoursWeekly, setManualHoursWeekly] = useState(15);
  const [hourlyCost, setHourlyCost] = useState(currency === 'PKR' ? 1500 : 25);
  const [monthlyCloudWaste, setMonthlyCloudWaste] = useState(currency === 'PKR' ? 45000 : 350);

  // Switch hourly default when currency toggles
  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
    if (newCurrency === 'PKR') {
      setHourlyCost(1500);
      setMonthlyCloudWaste(45000);
    } else {
      setHourlyCost(25);
      setMonthlyCloudWaste(350);
    }
  };

  // Calculations
  // Total manual labor cost spent each month doing repetitive tasks
  const monthlyLaborCost = teamSize * manualHoursWeekly * 4 * hourlyCost;
  // Volen software automation typically reduces manual admin overhead by 70%
  const automationEfficiencyFactor = 0.70;
  const monthlyLaborSaved = Math.round(monthlyLaborCost * automationEfficiencyFactor);
  // Volen infrastructure engineering cuts cloud waste by ~35%
  const monthlyCloudSaved = Math.round(monthlyCloudWaste * 0.35);

  const totalMonthlySavings = monthlyLaborSaved + monthlyCloudSaved;
  const annualSavings = totalMonthlySavings * 12;

  // Estimated hours freed up for the team every single month
  const hoursFreedMonthly = Math.round(teamSize * manualHoursWeekly * 4 * automationEfficiencyFactor);

  const formatMoney = (val) => {
    if (currency === 'PKR') {
      return `PKR ${val.toLocaleString('en-US')}`;
    }
    return `$${val.toLocaleString('en-US')}`;
  };

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-sky-200/80 bg-gradient-to-br from-white via-sky-50/30 to-indigo-50/20 shadow-xl space-y-6">
      {/* Header Block */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-sky-100 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-[11px] font-bold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            <span>Interactive ROI & Efficiency Simulator</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-1.5 flex items-center gap-2">
            <span>Business Value & Cost-Savings Calculator</span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Discover how much capital, hours, and cloud waste Volen custom software & automations can eliminate for your enterprise.
          </p>
        </div>

        {/* Currency Switcher */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 border border-slate-200 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => handleCurrencyChange('PKR')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              currency === 'PKR' ? 'bg-white text-sky-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🇵🇰 PKR
          </button>
          <button
            type="button"
            onClick={() => handleCurrencyChange('USD')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              currency === 'USD' ? 'bg-white text-sky-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🌐 USD ($)
          </button>
        </div>
      </div>

      {/* 2-Column Grid: Sliders on Left, Live ROI Summary on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Dynamic Sliders (7 Cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Slider 1: Team Size */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-700">Team Members Working on Manual/Admin Work:</span>
              <span className="font-mono font-black text-sm text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-200">
                {teamSize} People
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-mono">
              <span>1 Person</span>
              <span>25 People</span>
              <span>50 People</span>
            </div>
          </div>

          {/* Slider 2: Weekly Hours per person spent manually */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-700">Manual Hours Spent Per Person (Weekly):</span>
              <span className="font-mono font-black text-sm text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-200">
                {manualHoursWeekly} Hours / wk
              </span>
            </div>
            <input
              type="range"
              min="2"
              max="40"
              value={manualHoursWeekly}
              onChange={(e) => setManualHoursWeekly(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-mono">
              <span>2 Hours</span>
              <span>20 Hours</span>
              <span>40 Hours</span>
            </div>
          </div>

          {/* Slider 3: Hourly Labor Cost */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-700">Average Hourly Employee / Staff Cost:</span>
              <span className="font-mono font-black text-sm text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-200">
                {formatMoney(hourlyCost)} / hr
              </span>
            </div>
            <input
              type="range"
              min={currency === 'PKR' ? 500 : 10}
              max={currency === 'PKR' ? 6000 : 100}
              step={currency === 'PKR' ? 250 : 5}
              value={hourlyCost}
              onChange={(e) => setHourlyCost(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
            />
          </div>

          {/* Slider 4: Monthly Cloud / Server / Tool Spend */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-700">Current Monthly Cloud & SaaS Tool Spend:</span>
              <span className="font-mono font-black text-sm text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-200">
                {formatMoney(monthlyCloudWaste)} / mo
              </span>
            </div>
            <input
              type="range"
              min={currency === 'PKR' ? 10000 : 100}
              max={currency === 'PKR' ? 300000 : 3000}
              step={currency === 'PKR' ? 5000 : 50}
              value={monthlyCloudWaste}
              onChange={(e) => setMonthlyCloudWaste(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
            />
          </div>
        </div>

        {/* Right: Real-time ROI Savings Card (5 Cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 rounded-3xl p-6 text-white border border-sky-400/30 shadow-2xl space-y-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
              Estimated Return on Investment
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
              ~70% Efficiency Boost
            </span>
          </div>

          {/* Big Number Headline */}
          <div className="space-y-1">
            <div className="text-xs text-slate-400 font-medium">Projected Annual Savings:</div>
            <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono tracking-tight">
              {formatMoney(annualSavings)}
            </div>
            <div className="text-xs text-slate-300">
              Or <strong className="text-white">{formatMoney(totalMonthlySavings)}</strong> reclaimed every month.
            </div>
          </div>

          {/* Metric Breakdown Grid */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-1.5 text-sky-300 text-[11px] font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>Time Reclaimed</span>
              </div>
              <div className="text-lg font-black text-white font-mono mt-1">
                {hoursFreedMonthly} hrs/mo
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Redirected to core growth</div>
            </div>

            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-1.5 text-emerald-300 text-[11px] font-semibold">
                <Zap className="w-3.5 h-3.5" />
                <span>Cloud Optimization</span>
              </div>
              <div className="text-lg font-black text-white font-mono mt-1">
                35% Less Waste
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Cache & database tuning</div>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => onRequestProposal?.('ROI Re-engineering Consultation')}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-400 hover:to-cyan-300 text-slate-950 font-black text-xs shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Turn These Savings into Reality →</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}