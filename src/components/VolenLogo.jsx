import React from 'react';

export default function VolenLogo({ className = "", showTagline = false, variant = "dark" }) {
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <img
        src="/volen-logo.jpg"
        alt="VOLEN SOLUTION"
        className="h-8 sm:h-9 object-contain rounded-md"
      />
      {showTagline && (
        <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase ml-2 hidden sm:inline-block">
          &lt;/&gt; Build | 📈 Grow | 🛡️ Secure
        </span>
      )}
    </div>
  );
}
