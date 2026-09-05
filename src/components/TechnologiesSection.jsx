import React, { useState } from 'react';
import WipBadge from './WipBadge';
import {
  Code2,
  Cpu,
  Database,
  Cloud,
  ShieldCheck,
  Smartphone,
  Layers,
  CheckCircle2,
  Sparkles,
  Zap
} from 'lucide-react';

export default function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const techCategories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'web', label: 'Web & Full-Stack' },
    { id: 'mobile', label: 'Mobile Engineering' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'data', label: 'Data & Analytics' },
    { id: 'cloud', label: 'Cloud & Security' }
  ];

  const technologies = [
    {
      name: 'React 19 & Next.js 15',
      category: 'web',
      description: 'Server-side rendering, micro-frontend architecture, and zero-bundle size React Server Components.',
      level: 'Mastery: 99%',
      badge: 'Frontend Core',
      icon: <Code2 className="w-6 h-6 text-sky-500" />
    },
    {
      name: 'Node.js & Express / NestJS',
      category: 'web',
      description: 'Event-driven asynchronous microservices, RESTful APIs, GraphQL endpoints, and high-concurrency event loops.',
      level: 'Mastery: 98%',
      badge: 'Backend Core',
      icon: <Layers className="w-6 h-6 text-emerald-500" />
    },
    {
      name: 'Tailwind CSS & Glassmorphism',
      category: 'web',
      description: 'Custom design systems, utility-first CSS, dark/light themes, smooth hardware-accelerated animations.',
      level: 'Mastery: 100%',
      badge: 'UI Design Token',
      icon: <Sparkles className="w-6 h-6 text-cyan-500" />
    },
    {
      name: 'React Native & Expo',
      category: 'mobile',
      description: 'Cross-platform mobile applications for iOS & Android with 60FPS fluid animations and native device access.',
      level: 'Mastery: 96%',
      badge: 'Mobile Core',
      icon: <Smartphone className="w-6 h-6 text-indigo-500" />
    },
    {
      name: 'OpenAI API & Autonomous Agents',
      category: 'ai',
      description: 'Custom LLM reasoning chains, LangChain pipelines, automated multi-step decision agents, and RAG architectures.',
      level: 'Mastery: 97%',
      badge: 'AI Engine',
      icon: <Cpu className="w-6 h-6 text-purple-500" />
    },
    {
      name: 'Python & Vector DBs (Pinecone/Chroma)',
      category: 'ai',
      description: 'High-dimensional embeddings, semantic document search, automated data pipelines, and PyTorch ML models.',
      level: 'Mastery: 95%',
      badge: 'Vector Intelligence',
      icon: <Zap className="w-6 h-6 text-amber-500" />
    },
    {
      name: 'PostgreSQL & Materialized Analytics',
      category: 'data',
      description: 'Complex SQL queries, JSONB indexing, materialized view tuning, and sub-millisecond query execution.',
      level: 'Mastery: 98%',
      badge: 'Relational DB',
      icon: <Database className="w-6 h-6 text-blue-600" />
    },
    {
      name: 'Redis & WebSockets',
      category: 'data',
      description: 'In-memory pub/sub caching, real-time telemetry streaming, session state store, and rate limiting.',
      level: 'Mastery: 99%',
      badge: 'Real-Time Stream',
      icon: <Zap className="w-6 h-6 text-red-500" />
    },
    {
      name: 'Docker & Kubernetes',
      category: 'cloud',
      description: 'Containerized microservices deployments, horizontal pod autoscaling, zero-downtime rolling updates.',
      level: 'Mastery: 94%',
      badge: 'DevOps & Infra',
      icon: <Cloud className="w-6 h-6 text-sky-600" />
    },
    {
      name: 'Zero-Trust WAF & OWASP Shielding',
      category: 'cloud',
      description: 'Cloudflare Edge protection, AES-256 encryption, rate limiting, DDoS mitigation, and vulnerability scanning.',
      level: 'Mastery: 99%',
      badge: 'Enterprise Security',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />
    }
  ];

  const filteredTech = activeCategory === 'all'
    ? technologies
    : technologies.filter(t => t.category === activeCategory);

  return (
    <section id="technologies" className="py-12 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-100/80 px-3.5 py-1 rounded-full border border-sky-200">
            Technical Stack Excellence
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
            Technologies Mastered
          </h2>

          {/* Universal Work in Progress Badge directly below main title */}
          <div className="flex justify-center pt-1">
            <WipBadge />
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2 font-normal">
            We master production-grade software frameworks, artificial intelligence reasoning pipelines, and zero-trust cloud architectures.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {techCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-sky-50 hover:text-sky-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTech.map((tech, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-3xl p-6 border border-sky-150 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 rounded-2xl bg-sky-50 border border-sky-200">
                    {tech.icon}
                  </div>
                  <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {tech.badge}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-[#0F172A] mb-2">
                  {tech.name}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed mb-4 font-normal">
                  {tech.description}
                </p>
              </div>

              <div className="pt-3 border-t border-sky-100 flex items-center justify-between text-xs font-bold text-sky-600">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Production Verified
                </span>
                <span className="font-mono text-slate-700">{tech.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
