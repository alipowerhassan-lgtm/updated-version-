import React, { useState } from 'react';
import WipBadge from './WipBadge';
import {
  Code,
  Smartphone,
  Bot,
  LayoutDashboard,
  Palette,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Wrench,
  ArrowRight,
  Zap,
  Calculator,
  ExternalLink
} from 'lucide-react';

export default function ServicesSection({ onSelectService, onBookConsultation }) {
  const [filter, setFilter] = useState('all');

  const servicesData = [
    {
      id: 1,
      title: 'Web Development',
      sloganCategory: 'Build',
      categoryBadge: 'Full-Stack Web',
      techStack: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS'],
      description: 'Modern, high-performance web applications built to enterprise standards with server-side rendering, SEO excellence, and microsecond responsiveness.',
      fullDescription: 'Custom enterprise web applications engineered with Next.js, React, and robust Node.js backend microservices. Features zero-lag client interactions, dynamic caching layers, and responsive UI across all screen viewports.',
      deliverables: [
        'Responsive Next.js / React 19 Frontend',
        'RESTful & GraphQL Node.js APIs',
        'SEO & Core Web Vitals Optimization',
        'Dockerized Container Deployment'
      ],
      icon: <Code className="w-6 h-6 text-sky-600" />,
      statusTag: 'Production Ready',
      statusColor: 'emerald'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      sloganCategory: 'Build',
      categoryBadge: 'Mobile Engineering',
      techStack: ['React Native', 'iOS', 'Android', 'Expo', 'Redux Toolkit'],
      description: 'Native-feel cross-platform mobile apps for iOS and Android, offering fluid 60FPS animations, offline sync, and secure biometric authentication.',
      fullDescription: 'Enterprise cross-platform mobile engineering powered by React Native. Delivers smooth native gestures, push notification pipelines, offline-first data synchronization, and App Store / Play Store publishing.',
      deliverables: [
        'iOS App Store & Android APK / AAB Builds',
        'Biometric Auth (FaceID / Fingerprint)',
        'Push Notification & Background Sync',
        'Offline Data Persistence'
      ],
      icon: <Smartphone className="w-6 h-6 text-sky-600" />,
      statusTag: 'Active Pipeline',
      statusColor: 'emerald'
    },
    {
      id: 3,
      title: 'AI Solutions',
      sloganCategory: 'Build',
      categoryBadge: 'AI & Automation',
      techStack: ['OpenAI API', 'Autonomous Agents', 'LangChain', 'Python', 'Vector DBs'],
      description: 'Custom AI integration, LLM autonomous agent workflows, smart search vector databases, and automated business processing pipelines.',
      fullDescription: 'Infuse your business workflows with autonomous AI agents, fine-tuned OpenAI API models, RAG vector embeddings, and intelligent natural language query interfaces.',
      deliverables: [
        'Custom RAG Vector Search Systems',
        'Automated Multi-Step AI Agents',
        'LLM Fine-Tuning & Prompt Engineering',
        'Enterprise AI Governance Guardrails'
      ],
      icon: <Bot className="w-6 h-6 text-purple-600" />,
      statusTag: 'High Demand',
      statusColor: 'purple'
    },
    {
      id: 4,
      title: 'Dashboard Systems',
      sloganCategory: 'Grow',
      categoryBadge: 'Real-Time Analytics',
      techStack: ['PostgreSQL', 'WebSockets', 'Chart.js', 'Redis', 'Tailwind'],
      description: 'Real-time telemetry dashboards, executive metrics monitoring, PostgreSQL analytical views, and instant WebSocket event streaming.',
      fullDescription: 'Tailor-made real-time analytics platforms designed for executives and operations. Features live WebSocket feeds, complex SQL data queries, role-based metric cards, and downloadable PDF/CSV reports.',
      deliverables: [
        'Live Sub-Second WebSocket Streaming',
        'PostgreSQL Materialized View Tuning',
        'Custom Charting & Metrics Components',
        'Exportable Executive PDF Reports'
      ],
      icon: <LayoutDashboard className="w-6 h-6 text-cyan-600" />,
      statusTag: 'Live Telemetry',
      statusColor: 'sky'
    },
    {
      id: 5,
      title: 'UI/UX Design',
      sloganCategory: 'Build',
      categoryBadge: 'Product Design',
      techStack: ['Figma', 'Interactive Prototypes', 'Wireframes', 'Design Systems'],
      description: 'User-centered product design, pixel-perfect wireframes, interactive prototypes, and scalable component design systems that convert visitors.',
      fullDescription: 'Transform complex user flows into intuitive, beautiful interfaces. We build comprehensive Figma design systems, dark/light theme palettes, micro-interaction guidelines, and user usability testing suites.',
      deliverables: [
        'Full Figma Interactive Prototypes',
        'Scalable UI Component Token Library',
        'User Journey & Wireframe Mapping',
        'Developer Handout Tokens & Specs'
      ],
      icon: <Palette className="w-6 h-6 text-pink-600" />,
      statusTag: 'Creative Suite',
      statusColor: 'pink'
    },
    {
      id: 6,
      title: 'Graphic Designing',
      sloganCategory: 'Grow',
      categoryBadge: 'Brand Identity',
      techStack: ['Vector Identity', 'Brand Kits', 'Adobe Illustrator', 'SVG Assets'],
      description: 'Scalable vector branding, custom tech logo marks, corporate visual guidelines, and high-impact marketing collateral for global brand presence.',
      fullDescription: 'Craft a striking visual identity that commands trust. Includes responsive SVG logos, corporate typography pairings, brand strategy pitch decks, and digital asset libraries.',
      deliverables: [
        'Vector Logo Mark & Typography Kit',
        'Brand Guidelines & Color Token Deck',
        'Scalable SVG Icons & Social Banners',
        'Print & Digital Marketing Kits'
      ],
      icon: <Sparkles className="w-6 h-6 text-amber-600" />,
      statusTag: 'Vector Studio',
      statusColor: 'amber'
    },
    {
      id: 7,
      title: 'Marketing Strategies',
      sloganCategory: 'Grow',
      categoryBadge: 'Growth Engineering',
      techStack: ['Digital Growth', 'Funnel Engineering', 'SEO', 'Analytics', 'Conversion'],
      description: 'Data-driven digital marketing funnels, technical SEO architecture, conversion rate optimization (CRO), and targeted growth campaigns.',
      fullDescription: 'Engineered growth strategies designed to acquire and retain high-value enterprise users. We optimize user acquisition funnels, run A/B conversion tests, and maximize ROI across digital channels.',
      deliverables: [
        'High-Converting Landing Page Funnels',
        'Technical Technical SEO Audit & Ranking',
        'Multi-Touch Attribution Tracking',
        'Conversion Rate Optimization (CRO)'
      ],
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
      statusTag: 'Growth Engine',
      statusColor: 'emerald'
    },
    {
      id: 8,
      title: 'Web Security',
      sloganCategory: 'Secure',
      categoryBadge: 'Zero-Trust Security',
      techStack: ['Zero-Trust Hardening', 'API Shielding', 'OWASP Top 10', 'AES-256', 'WAF'],
      description: 'Hardened web security, Web Application Firewall (WAF) shielding, OWASP vulnerability mitigation, and cryptographic API protection.',
      fullDescription: 'Protect your mission-critical infrastructure from cyber threats. We perform penetration audits, enforce zero-trust API authentication, implement Cloudflare WAF rules, and secure sensitive user data.',
      deliverables: [
        'Zero-Trust API Shielding & WAF Setup',
        'OWASP Top 10 Penetration Audit',
        'AES-256 Data Encryption At Rest/Transit',
        'Automated Bot & DDoS Protection'
      ],
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
      statusTag: 'Hardened Shield',
      statusColor: 'indigo'
    },
    {
      id: 9,
      title: 'Maintenance & Support',
      sloganCategory: 'Secure',
      categoryBadge: 'DevOps & Reliability',
      techStack: ['24/7 Monitoring', 'Database Tuning', 'Automated Backups', 'SLA Support'],
      description: 'Continuous 24/7 system health monitoring, PostgreSQL database indexing, automated daily backups, and rapid incident response SLAs.',
      fullDescription: 'Keep your digital systems running at peak condition. Our dedicated reliability engineering team monitors server vitals around the clock, applies zero-downtime security patches, and tunes database performance.',
      deliverables: [
        '24/7 Server Health & Alerting',
        'Database Query Indexing & Tuning',
        'Automated Daily Encrypted Backups',
        '< 15-Minute Critical Incident SLA'
      ],
      icon: <Wrench className="w-6 h-6 text-slate-700" />,
      statusTag: '24/7 Monitored',
      statusColor: 'slate'
    }
  ];

  const filteredServices = filter === 'all'
    ? servicesData
    : servicesData.filter(s => s.sloganCategory.toLowerCase() === filter.toLowerCase());

  return (
    <section id="services" className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          {/* Slogan Reference pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-sky-100/80 text-sky-900 border border-sky-200">
            <span>&lt;/&gt; Build</span> • <span>📈 Grow</span> • <span>🛡️ Secure</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our <span className="tech-gradient-text">Core Services</span>
          </h2>

          {/* Work in Progress Pill right below header */}
          <div className="flex justify-center pt-1">
            <WipBadge text="Services Module Under Development — Live Preview" />
          </div>

          <p className="text-slate-600 text-base leading-relaxed pt-2">
            9 specialized engineering modules designed to build your product, grow your audience, and secure your infrastructure.
          </p>
        </div>

        {/* PROMINENT STANDALONE CALCULATOR BANNER (OPENS IN NEW TAB) */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-sky-200 shadow-lg bg-gradient-to-r from-sky-900 via-slate-900 to-sky-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-sky-500/20 text-sky-300 border border-sky-400/30">
              <Calculator className="w-3.5 h-3.5 text-sky-400" />
              Interactive Estimator Tool
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Project Cost & Architecture Estimator Calculator
            </h3>
            <p className="text-xs sm:text-sm text-sky-200/80 max-w-xl">
              Calculate instant budget estimates, timeline durations, and security SLA configurations tailored to your organization. Opens in a standalone tool view.
            </p>
          </div>

          <a
            href="#calculator"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 via-sky-400 to-cyan-400 hover:from-sky-400 hover:to-cyan-300 text-white font-bold text-xs shadow-lg shadow-sky-500/30 hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <Calculator className="w-4 h-4 text-white" />
            <span>Open Calculator in New Tab</span>
            <ExternalLink className="w-4 h-4 text-white" />
          </a>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { label: 'All 9 Services', value: 'all', count: 9 },
            { label: '</> Build Modules', value: 'build', count: 4 },
            { label: '📈 Grow Modules', value: 'grow', count: 3 },
            { label: '🛡️ Secure Modules', value: 'secure', count: 2 },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                filter === tab.value
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-sky-50 hover:text-sky-600'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                filter === tab.value ? 'bg-sky-500 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* 3x3 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="glass-card glass-card-hover rounded-3xl p-6 border border-sky-100 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div>
                {/* Header row in card */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 rounded-2xl bg-sky-50/80 border border-sky-200/60 group-hover:scale-110 group-hover:bg-sky-100 transition-all duration-300">
                    {service.icon}
                  </div>

                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    {service.statusTag}
                  </span>
                </div>

                <div className="text-[11px] font-bold text-sky-600 uppercase tracking-wider mb-1">
                  {service.categoryBadge}
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors mb-2">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-sky-100/70">
                  {service.techStack.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-sky-50/80 text-sky-800 border border-sky-150"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.techStack.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono font-medium bg-slate-100 text-slate-500">
                      +{service.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* Card Action Link */}
                <div className="flex items-center justify-between text-xs font-bold text-sky-600 group-hover:text-sky-700">
                  <span>View Specifications</span>
                  <div className="w-7 h-7 rounded-full bg-sky-50 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-all">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-sky-400/20">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Zap className="w-5 h-5 text-amber-400 fill-current" />
              Need a Custom Enterprise Solution?
            </h4>
            <p className="text-xs text-sky-200/80">
              Combine Web, Mobile, AI, and Hardened Security modules tailored precisely for your organization.
            </p>
          </div>

          <button
            onClick={() => onBookConsultation('Custom Enterprise Suite')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-white font-bold text-xs shadow-md cursor-pointer shrink-0 transition-all hover:scale-105"
          >
            Request Custom Architecture →
          </button>
        </div>
      </div>
    </section>
  );
}
