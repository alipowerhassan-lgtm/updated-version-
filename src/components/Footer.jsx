import React from 'react';
import { ArrowUp } from 'lucide-react';
import VolenLogo from './VolenLogo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'WhatsApp', href: 'https://wa.me/?text=Hello%20Volen%20Solution', label: '/volen.solution' },
    { name: 'Twitter (X)', href: 'https://twitter.com', label: '/volen.solution' },
    { name: 'TikTok', href: 'https://tiktok.com', label: '/volen.solution' },
    { name: 'Instagram', href: 'https://instagram.com', label: '/volen.solution' },
    { name: 'LinkedIn', href: 'https://linkedin.com', label: '/volen.solution' },
    { name: 'YouTube', href: 'https://youtube.com', label: '/volen.solution' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-start">
              <VolenLogo showTagline={true} variant="light" />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Engineered to build resilient digital architectures for enterprise clients globally. Next-generation Web, Mobile, AI, and Zero-Trust Security infrastructure.
            </p>

            {/* Slogan Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-mono font-bold bg-slate-800 text-sky-300 border border-slate-700">
              <span>&lt;/&gt; Build</span> • <span>📈 Grow</span> • <span>🛡️ Secure</span>
            </div>

            <div className="text-xs font-semibold text-sky-400 pt-1">
              Philosophy: "Together we Build, Grow & Secure"
            </div>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-200">System Modules</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li><a href="#home" className="hover:text-sky-400 transition-colors">01. Home & Dashboard</a></li>
              <li><a href="#about" className="hover:text-sky-400 transition-colors">02. Corporate Overview & Goal</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">03. 9 Core Service Cards</a></li>
              <li><a href="#feedback" className="hover:text-sky-400 transition-colors">04. Client Reputation & Reviews</a></li>
              <li><a href="#contact" className="hover:text-sky-400 transition-colors">05. Direct Contact & Quote</a></li>
            </ul>
          </div>

          {/* Social Matrix & HQ (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-200">
              Global HQ & Channels
            </h4>

            <div className="text-xs text-slate-400">
              <span className="text-slate-200 font-bold">🇵🇰 Pakistan HQ:</span> Serving Enterprise Clients Worldwide
            </div>

            <div className="space-y-2">
              <div className="text-[11px] text-slate-400 font-semibold">Social Matrix (/volen.solution):</div>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800 text-slate-300 hover:bg-sky-600 hover:text-white transition-colors border border-slate-700/60"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Volen Solution. All rights reserved. <span className="text-slate-300 font-medium">Together we Build, Grow & Secure.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition-colors cursor-pointer"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
