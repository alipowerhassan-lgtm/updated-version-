import React from 'react';

export default function EyebrowTag({ text = "BUILDING RESILIENT DIGITAL ARCHITECTURES", icon, className = "" }) {
  return (
    <div className={`bg-sky-50 border border-sky-200/80 px-4 py-1.5 text-xs font-semibold text-sky-600 tracking-wider uppercase rounded-full inline-flex items-center gap-2 shadow-xs backdrop-blur-xs ${className}`}>
      {icon ? (
        icon
      ) : (
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
        </span>
      )}
      <span>{text}</span>
    </div>
  );
}
