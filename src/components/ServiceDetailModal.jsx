import React from 'react';
import { X, ArrowRight, CheckCircle2, Cpu, Code2, Layers } from 'lucide-react';

export default function ServiceDetailModal({ service, isOpen, onClose, onRequestProposalForService }) {
  if (!isOpen || !service) return null;

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

        {/* Header: Large Service Icon Bubble */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-sky-50 border border-sky-200/80 flex items-center justify-center text-sky-600 shadow-sm shrink-0">
            {service.icon || <Code2 className="w-8 h-8 text-sky-600" />}
          </div>
          <div>
            <span className="text-[11px] font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
              {service.categoryBadge || 'Engineering Spec'}
            </span>
            {/* Service Title (Bold Navy #0F172A) */}
            <h3 className="text-2xl font-extrabold text-[#0F172A] tracking-tight mt-1">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Service Overview Description */}
        <div className="space-y-4 mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Overview</div>
          <p className="text-slate-600 text-sm leading-relaxed">
            {service.fullDescription || service.description}
          </p>
        </div>

        {/* Technical Specifications & Deliverables */}
        <div className="space-y-4 mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-sky-600" />
            <span>Technical Specifications & Deliverables</span>
          </div>

          {/* Architecture Highlights & Execution Process */}
          <div className="space-y-2">
            {(service.deliverables || [
              'Production-grade modular architecture',
              'Sub-second execution efficiency & latency optimization',
              'OWASP zero-trust endpoint shielding & audit',
              'Full repository handover & IP rights transfer'
            ]).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs font-medium text-slate-700 p-2 rounded-xl bg-sky-50/50 border border-sky-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Badges */}
          {service.techStack && (
            <div className="pt-2">
              <div className="text-[11px] font-bold text-slate-500 mb-2 flex items-center gap-1">
                <Layers className="w-3 h-3 text-sky-600" />
                <span>Core Tech Stack:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {service.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-slate-100 text-slate-800 border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Action */}
        <div className="pt-4 border-t border-sky-100">
          <button
            onClick={() => onRequestProposalForService(service.title)}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 hover:from-sky-500 hover:to-cyan-400 text-white font-bold text-xs shadow-lg shadow-sky-600/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Request Proposal for This Service</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
