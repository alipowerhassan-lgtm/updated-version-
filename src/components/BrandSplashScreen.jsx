import React, { useState, useEffect } from 'react';
import VolenLogo from './VolenLogo';

export default function BrandSplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setFadingOut(true), 300);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 800);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 text-white transition-opacity duration-500 selection:bg-sky-500 ${
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-sky-600/30 via-cyan-500/20 to-blue-700/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center p-6 max-w-md w-full">
        {/* Prominent Logo Animation */}
        <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
          <VolenLogo showTagline={true} variant="light" className="scale-125" />
        </div>

        {/* Headline */}
        <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white mt-2">
          VOLEN SOLUTION
        </h1>
        <p className="text-xs text-sky-300 font-mono tracking-wider uppercase mt-1">
          Architecting Resilient Digital Infrastructure
        </p>

        {/* Tagline Pill */}
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-slate-900/90 border border-sky-400/30 text-slate-200 shadow-lg backdrop-blur-md">
          <span className="font-mono text-sky-400 font-bold">&lt;/&gt; Build</span>
          <span className="text-slate-600">•</span>
          <span className="text-emerald-400">📈 Grow</span>
          <span className="text-slate-600">•</span>
          <span className="text-indigo-400">🛡️ Secure</span>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full mt-8 max-w-xs space-y-2">
          <div className="flex justify-between text-[11px] font-mono text-slate-400">
            <span>System Telemetry Node</span>
            <span className="text-cyan-400 font-bold">{progress}%</span>
          </div>

          <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800 p-0.5 shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 rounded-full transition-all duration-75"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Skip button */}
        <button
          onClick={() => {
            setFadingOut(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 300);
          }}
          className="mt-6 text-xs text-slate-500 hover:text-sky-400 font-mono underline transition-colors cursor-pointer"
        >
          Skip Intro →
        </button>
      </div>
    </div>
  );
}
