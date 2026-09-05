import React from 'react';

export default function VolenLogo({ className = "", showTagline = false, variant = "dark" }) {
  const isDark = variant === "light";

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Stylized Circuit V Icon */}
      <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-slate-900 via-sky-900 to-sky-600 p-0.5 shadow-md flex items-center justify-center group-hover:scale-105 transition-transform">
        <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center relative overflow-hidden">
          {/* Circuit background lines */}
          <svg className="absolute inset-0 w-full h-full opacity-30 text-sky-400" viewBox="0 0 36 36" fill="none">
            <path d="M4 18H10M26 18H32M18 4V10M18 26V32" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="10" cy="18" r="1.5" fill="currentColor" />
            <circle cx="26" cy="18" r="1.5" fill="currentColor" />
          </svg>
          {/* Circuit 'V' Mark */}
          <svg className="w-5 h-5 text-sky-400 font-extrabold relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4L12 20L20 4" />
            <circle cx="4" cy="4" r="1" fill="#00A3FF" />
            <circle cx="20" cy="4" r="1" fill="#00A3FF" />
            <circle cx="12" cy="20" r="1" fill="#0284C7" />
          </svg>
        </div>
      </div>

      {/* Sapphire Brand Text */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1">
          <span className={`font-black text-xl sm:text-2xl tracking-tight leading-none ${isDark ? 'text-white' : 'text-slate-900'}`}>
            VOLEN
          </span>
          <span className="font-extrabold text-xl sm:text-2xl tracking-tight leading-none text-sky-600">
            SOLUTION
          </span>
        </div>
        {showTagline && (
          <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase mt-0.5">
            &lt;/&gt; Build | 📈 Grow | 🛡️ Secure
          </span>
        )}
      </div>
    </div>
  );
}
