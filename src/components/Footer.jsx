import React from 'react';
import { ArrowUp, ArrowRight, ShieldCheck, Mail, Phone, MapPin, Globe2 } from 'lucide-react';
import VolenLogo from './VolenLogo';

export default function Footer({ onNavigate, onRequestProposal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'services', name: 'Services' },
    { id: 'calculator', name: 'Estimator Calculator' },
    { id: 'technologies', name: 'Technologies Mastered' },
    { id: 'projects', name: 'Built Projects' },
    { id: 'policy', name: 'Company Policy' },
    { id: 'feedback', name: 'Client Feedback' },
    { id: 'contact', name: 'Contact Us' },
  ];

  const socialLinks = [
    { name: 'WhatsApp', href: 'https://wa.me/?text=Hello%20Volen%20Solution' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'Twitter (X)', href: 'https://twitter.com' },
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'YouTube', href: 'https://youtube.com' },
    { name: 'GitHub', href: 'https://github.com/alipowerhassan-lgtm/updated-version-.git' }
  ];

  const handleLinkClick = (id, e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    }
    window.location.hash = id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800/80 relative z-20 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-start">
              <VolenLogo showTagline={true} variant="light" />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Volen Solution architects resilient, production-grade software systems, automated AI reasoning pipelines, and zero-trust cybersecurity for global enterprise leaders.
            </p>

            {/* Slogan Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold bg-slate-900 text-sky-300 border border-slate-800 shadow-sm">
              <span className="text-sky-400">&lt;/&gt; Build</span> • <span className="text-emerald-400">📈 Grow</span> • <span className="text-indigo-400">🛡️ Secure</span>
            </div>

            <div className="text-xs font-semibold text-sky-400 pt-1 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>Core Philosophy: "Together we Build, Grow & Secure"</span>
            </div>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-100 flex items-center gap-1.5">
              <span>Navigation Pages</span>
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleLinkClick(link.id, e)}
                    className="hover:text-sky-400 transition-colors flex items-center gap-1.5 group cursor-pointer"
                  >
                    <span className="text-slate-600 group-hover:text-sky-500 font-mono text-[10px]">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Footprint & Contact Channels (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-100 flex items-center gap-1.5">
              <Globe2 className="w-4 h-4 text-sky-400" />
              <span>Global Operational Footprint</span>
            </h4>

            <div className="text-xs text-slate-400 space-y-1.5 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800/80">
              <div className="text-slate-200 font-bold flex items-center gap-1.5">
                <span>🇵🇰 Pakistan HQ (Central Architecture Studio)</span>
              </div>
              <div className="text-[11px] text-slate-400">
                Active Deployment Regional Hubs: 🇺🇸 USA • 🇬🇧 UK • 🇸🇦 Saudi Arabia
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Social Channels:</div>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-900 text-slate-300 hover:bg-sky-600 hover:text-white transition-colors border border-slate-800"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 pt-2">
          <div>
            © 2026 <span className="text-slate-200 font-bold">VOLEN SOLUTION</span>. All rights reserved. <span className="text-sky-400 font-medium">Together we Build, Grow & Secure.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold border border-slate-800 transition-colors cursor-pointer shadow-sm hover:border-sky-500/40"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
