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

export default function ProjectsSection({ onSelectProject }) {
  const projects = [
    {
      id: 1,
      title: 'Global Fleet Edge Gateway',
      client: 'Apex Freight & Logistics Platform',
      categoryBadge: 'Web & IoT Logistics',
      description: 'High-speed real-time dispatch and database telemetry handling 140,000+ daily fleet events.',
      fullDescription: 'Architected from the ground up to handle high-frequency IoT fleet dispatches across global hubs. Utilizes PostgreSQL materialized view tuning, Redis pub/sub caching, and Next.js server-side rendering to cut database query latency by 65%.',
      metrics: '⚡ 65% Latency Reduction • 140k Daily Events',
      techStack: ['React', 'Next.js 15', 'PostgreSQL', 'Redis', 'WebSockets', 'Node.js'],
      highlights: [
        'Sub-15ms database query response time',
        'Real-time WebSocket dispatch monitoring',
        'Zero-downtime microservice deployment',
        'Role-Based access control for global dispatchers'
      ],
      icon: <LayoutDashboard className="w-6 h-6 text-sky-600" />
    },
    {
      id: 2,
      title: 'FinTech Autonomous AI Support Agent',
      client: 'FinTech Global Services',
      categoryBadge: 'AI Reasoning Pipeline',
      description: 'Multi-step autonomous support agent that resolves 40%+ of Tier-1 support queries without human intervention.',
      fullDescription: 'Integrated custom OpenAI API fine-tuned models with Pinecone vector DB embeddings (RAG architecture). Enables natural language financial support querying with strict compliance guardrails.',
      metrics: '🤖 40%+ Query Automation • <2s Resolution',
      techStack: ['OpenAI API', 'LangChain', 'Python', 'Pinecone Vector DB', 'Node.js'],
      highlights: [
        'Custom RAG vector search over 50,000+ policy docs',
        'Automated multi-step transaction verification',
        'Zero data leakage privacy guardrails',
        '99.4% intent recognition precision'
      ],
      icon: <Bot className="w-6 h-6 text-purple-600" />
    },
    {
      id: 3,
      title: 'Real-Time Enterprise Analytics Dashboard',
      client: 'Enterprise SaaS Platform',
      categoryBadge: 'Executive Telemetry',
      description: 'Sub-second real-time executive dashboard visualizing multi-region telemetry and recurring subscription metrics.',
      fullDescription: 'Designed for enterprise C-suite leaders. Combines live WebSocket event streams, role-based metric cards, and downloadable PDF/CSV executive reports with zero technical debt.',
      metrics: '📊 99.99% Operational Uptime • 0ms Lag',
      techStack: ['React 19', 'Tailwind CSS', 'PostgreSQL', 'Chart.js', 'Express'],
      highlights: [
        'Live sub-second data streaming',
        'Exportable executive PDF financial summaries',
        'Granular role-based metric visibility',
        'AES-256 encrypted data transmission'
      ],
      icon: <Code className="w-6 h-6 text-cyan-600" />
    },
    {
      id: 4,
      title: 'HealthPulse Mobile Platform',
      client: 'HealthPulse Tech Global',
      categoryBadge: 'Mobile Engineering',
      description: 'Biometric-secured mobile healthcare application delivering telemedicine consultations and offline vitals sync.',
      fullDescription: 'Built with React Native for iOS and Android. Features native FaceID / Fingerprint authentication, offline-first data sync, and instant HD video consultation rooms.',
      metrics: '📱 4.9 App Store Rating • 80k+ Active Users',
      techStack: ['React Native', 'iOS Swift', 'Android Kotlin', 'Expo', 'Redux Toolkit'],
      highlights: [
        'Biometric authentication (FaceID & Fingerprint)',
        'HIPAA-compliant encrypted data storage',
        'Offline vitals data persistence',
        'Push notification medication reminders'
      ],
      icon: <Smartphone className="w-6 h-6 text-emerald-600" />
    },
    {
      id: 5,
      title: 'Zero-Trust Cloud WAF & API Shield',
      client: 'Cloud SaaS Infrastructure Provider',
      categoryBadge: 'Web Security Shield',
      description: 'OWASP-compliant API gateway shielding SaaS endpoints against automated botnet traffic and DDoS attacks.',
      fullDescription: 'Hardened security architecture featuring Cloudflare Edge WAF rules, AES-256 payload encryption, strict rate limiting, and continuous vulnerability scanning.',
      metrics: '🛡️ 100% OWASP Compliance • 0 Vulnerabilities',
      techStack: ['OWASP Standards', 'Cloudflare WAF', 'AES-256', 'Node.js', 'Docker'],
      highlights: [
        'Automated DDoS & botnet traffic filtering',
        'Zero-trust API key authentication',
        'Real-time intrusion detection logging',
        'SOC2 & GDPR compliance ready'
      ],
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />
    },
    {
      id: 6,
      title: 'OmniChannel Growth & Funnel Engine',
      client: 'E-Commerce Growth Enterprise',
      categoryBadge: 'Growth & Funnel Engineering',
      description: 'High-converting multi-touch acquisition funnel and technical SEO infrastructure boosting conversion by 3.2x.',
      fullDescription: 'Engineered high-performance web landing funnels with Next.js SSR, core web vitals optimization (100 Lighthouse score), and multi-touch attribution analytics.',
      metrics: '📈 3.2x Conversion Boost • +85% Retention',
      techStack: ['Next.js 15', 'Technical SEO', 'Analytics Engine', 'Tailwind CSS'],
      highlights: [
        '100/100 Core Web Vitals Lighthouse score',
        'Multi-touch user attribution tracking',
        'Dynamic A/B testing framework',
        'Sub-second page load times worldwide'
      ],
      icon: <TrendingUp className="w-6 h-6 text-amber-600" />
    }
  ];

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
