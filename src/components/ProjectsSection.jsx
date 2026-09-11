import React from 'react';
import WipBadge from './WipBadge';
import {
  Code,
  Smartphone,
  Bot,
  LayoutDashboard,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function ProjectsSection({ onSelectProject }) {
  const projects = projectsData;

  return (
    <section id="projects" className="py-12 md:py-20 relative border-t border-sky-100/80 bg-sky-50/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-100/80 px-3.5 py-1 rounded-full border border-sky-200">
            Portfolio Showcase
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
            Projects Built
          </h2>

          {/* Universal Work in Progress Badge directly below main title */}
          <div className="flex justify-center pt-1">
            <WipBadge />
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2 font-normal">
            Explore production-grade enterprise software systems engineered and deployed by Volen Solution.
          </p>
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => onSelectProject(proj)}
              className="glass-card glass-card-hover rounded-3xl p-6 border border-sky-150 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 rounded-2xl bg-sky-50 border border-sky-200 group-hover:scale-110 transition-transform">
                    {proj.icon}
                  </div>
                  <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {proj.categoryBadge}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-[#0F172A] group-hover:text-sky-600 transition-colors mb-1">
                  {proj.title}
                </h3>

                <div className="text-[11px] font-bold text-sky-600 mb-3">
                  {proj.client}
                </div>

                <p className="text-slate-600 text-xs leading-relaxed mb-4 font-normal">
                  {proj.description}
                </p>

                {/* Benchmark Metric Pill */}
                <div className="p-2.5 rounded-xl bg-sky-50/80 border border-sky-200/60 mb-4 text-[11px] font-bold text-sky-900 font-mono">
                  {proj.metrics}
                </div>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-sky-100">
                  {proj.techStack.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200/80"
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.techStack.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono font-medium bg-slate-100 text-slate-500">
                      +{proj.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Link */}
                <div className="flex items-center justify-between text-xs font-bold text-sky-600 group-hover:text-sky-700">
                  <span>View Full Architecture Case Study</span>
                  <div className="w-7 h-7 rounded-full bg-sky-50 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-all">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
