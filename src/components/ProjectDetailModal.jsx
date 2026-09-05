import React from 'react';
import { X, ArrowRight, CheckCircle2, ShieldCheck, Cpu, Layers } from 'lucide-react';

export default function ProjectDetailModal({ project, isOpen, onClose, onRequestProposalForProject }) {
  if (!isOpen || !project) return null;

  return (
    <div className="backdrop-blur-md bg-slate-900/40 fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl p-8 max-w-lg w-full border border-sky-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close button (X) top right */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <span className="text-[11px] font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
            {project.categoryBadge}
          </span>
          <h3 className="text-2xl font-extrabold text-[#0F172A] tracking-tight mt-2">
            {project.title}
          </h3>
          <div className="text-xs text-slate-500 font-medium mt-1">Client: {project.client}</div>
        </div>

        {/* Overview */}
        <div className="space-y-4 mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Architecture Overview</div>
          <p className="text-slate-600 text-sm leading-relaxed font-normal">
            {project.fullDescription || project.description}
          </p>
        </div>

        {/* Key Metrics */}
        <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-200/80 mb-6">
          <div className="text-xs font-bold text-sky-900 uppercase tracking-wider mb-1">Empirical Benchmark Impact</div>
          <div className="text-sm font-extrabold text-sky-700 font-mono">{project.metrics}</div>
        </div>

        {/* Technical Deliverables */}
        <div className="space-y-4 mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-sky-600" />
            <span>Key Engineering Highlights</span>
          </div>

          <div className="space-y-2">
            {project.highlights.map((h, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs font-medium text-slate-700 p-2 rounded-xl bg-slate-50 border border-slate-200/70">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="pt-2">
            <div className="text-[11px] font-bold text-slate-500 mb-2 flex items-center gap-1">
              <Layers className="w-3 h-3 text-sky-600" />
              <span>Technology Stack Used:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-slate-100 text-slate-800 border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="pt-4 border-t border-sky-100">
          <button
            onClick={() => onRequestProposalForProject(project.title)}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 hover:from-sky-500 hover:to-cyan-400 text-white font-bold text-xs shadow-lg shadow-sky-600/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Request Similar System Proposal</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
