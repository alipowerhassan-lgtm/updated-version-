import React from 'react';

export default function TopUtilityBar({ onTrackProjectClick }) {
  const whatsappUrl = "https://wa.me/?text=Hello%20Volen%20Solution,%20I%20would%20like%20to%20request%20a%20technical%20proposal.";

  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2 px-6 flex flex-col sm:flex-row justify-between items-center gap-2 border-b border-slate-800">
      {/* Left: Global HQ & Scope */}
      <div className="flex items-center gap-2">
        <span>🇵🇰</span>
        <span className="font-semibold text-slate-200">Global HQ: Pakistan</span>
        <span className="text-slate-500">•</span>
        <span className="text-slate-300">Serving Enterprise Clients Worldwide</span>
      </div>

      {/* Right: Project Tracker, WhatsApp Channel & Operational Status */}
      <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
        <button
          onClick={onTrackProjectClick}
          className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors font-medium cursor-pointer hover:underline"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
          <span>Client Project Tracker</span>
        </button>

        <div className="h-3 w-px bg-slate-700 hidden sm:block"></div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium hover:underline"
          title="WhatsApp Channel /volen.solution"
        >
          <svg className="w-3.5 h-3.5 fill-current text-emerald-400" viewBox="0 0 24 24">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.762.459 3.48 1.332 5.001L2 22l5.127-1.339c1.465.795 3.118 1.217 4.88 1.218h.005c5.503 0 9.986-4.478 9.988-9.985 0-2.667-1.04-5.176-2.927-7.062A9.923 9.923 0 0 0 12.012 2z"/>
          </svg>
          <span>/volen.solution</span>
        </a>

        <div className="h-3 w-px bg-slate-700 hidden sm:block"></div>

        {/* Operational Status */}
        <div className="inline-flex items-center gap-1.5 text-cyan-300 font-semibold">
          <span>⚡ All Systems Operational</span>
        </div>
      </div>
    </div>
  );
}
