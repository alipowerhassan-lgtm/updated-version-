import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import VolenLogo from './VolenLogo';

export default function Navbar({ activePage, onNavigate, onRequestProposalClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', name: 'Home', href: '#home' },
    { id: 'services', name: 'Services', href: '#services' },
    { id: 'calculator', name: 'Calculator', href: '#calculator' },
    { id: 'technologies', name: 'Technologies', href: '#technologies' },
    { id: 'projects', name: 'Projects', href: '#projects' },
    { id: 'policy', name: 'Policy', href: '#policy' },
    { id: 'feedback', name: 'Feedback', href: '#feedback' },
    { id: 'contact', name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (id, href, e) => {
    e.preventDefault();
    onNavigate(id);
    setMobileMenuOpen(false);
    window.history.pushState(null, '', href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-2 z-50 max-w-6xl mx-2 sm:mx-auto px-3 sm:px-5 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-sky-200/60 shadow-md shadow-sky-500/5 transition-all duration-300">
      <div className="flex items-center justify-between gap-2">
        {/* Left: Official VOLEN SOLUTION Image Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick('home', '#home', e)}
          className="flex items-center group shrink-0"
        >
          <VolenLogo showTagline={false} />
        </a>

        {/* Center Nav Links - Clean Non-Scrolling Container */}
        <nav className="hidden md:flex items-center gap-0.5 lg:gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/60">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(link.id, link.href, e)}
                className={`px-2.5 lg:px-3 py-1.5 rounded-lg text-[11px] lg:text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-sky-600 shadow-xs border border-sky-100 font-bold'
                    : 'text-slate-600 hover:text-sky-600 hover:bg-white/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <button
            onClick={onRequestProposalClick}
            className="group relative inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 hover:from-sky-500 hover:to-cyan-400 shadow-md shadow-sky-600/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer overflow-hidden"
          >
            <span>Request Technical Proposal</span>
            <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-700 hover:text-sky-600 hover:bg-sky-50 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-sky-100 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(link.id, link.href, e)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                  activePage === link.id
                    ? 'bg-sky-50 text-sky-600 border border-sky-200/60 font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestProposalClick();
              }}
              className="mt-2 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-sky-600 to-cyan-500 shadow-md text-center cursor-pointer"
            >
              <span>Request Technical Proposal →</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
