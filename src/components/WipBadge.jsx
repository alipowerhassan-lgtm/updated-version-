import React from 'react';

export default function WipBadge({ className = "" }) {
  return (
    <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200 shadow-xs ${className}`}>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
      </span>
      <span>Work in Progress — Live Production Preview</span>
    </div>
  );
}
