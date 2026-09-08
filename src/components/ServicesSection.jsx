import React, { useState } from 'react';
import WipBadge from './WipBadge';
import ThreeDTiltCard from './ThreeDTiltCard';
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
  ExternalLink,
  Layers,
  Rocket,
  Clock,
  Cpu,
  CheckCircle2
} from 'lucide-react';

export default function ServicesSection({ onSelectService, onBookConsultation }) {
  const [activeTabCategory, setActiveTabCategory] = useState('current');
  const [filter, setFilter] = useState('all');

  const currentServicesData = [
    {
      id: 1,
      title: 'Web Development',
      sloganCategory: 'Build',
      categoryBadge: 'Full-Stack Web',
      techStack: ['React 19', 'Next.js 15', 'Node.js', 'Express', 'Tailwind CSS'],
      description: 'Modern, high-performance web applications built to enterprise standards with server-side rendering, SEO excellence, and microsecond responsiveness.',
      fullDescription: 'Custom enterprise web applications engineered with Next.js, React, and robust Node.js backend microservices. Features zero-lag client interactions, dynamic caching layers, and responsive UI across all screen viewports.',
      deliverables: [
        'Responsive Next.js / React 19 Frontend',
        'RESTful & GraphQL Node.js APIs',
        'SEO & Core Web Vitals Optimization',
        'Dockerized Container Deployment'
      ],
      icon: <Code className="w-6 h-6 text-sky-600" />,
      statusTag: 'Active Service',
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
      statusTag: 'Active Service',
      statusColor: 'emerald'
    },
    {
      id: 3,
      title: 'UI/UX & Product Design',
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
      id: 4,
      title: 'E-Commerce & Custom Web Apps',
      sloganCategory: 'Build',
      categoryBadge: 'E-Commerce & SaaS',
      techStack: ['Stripe', 'PayFast', 'PostgreSQL', 'Tailwind', 'Next.js'],
      description: 'High-conversion online storefronts, payment gateway integrations, subscription billing systems, and custom SaaS web platforms.',
      fullDescription: 'End-to-end e-commerce development featuring inventory management, secure checkout gateways, order telemetry, and scalable serverless architecture.',
      deliverables: [
        'Stripe & Regional Payment Gateway Sync',
        'High-Converting Product Checkout Flow',
        'Admin Dashboard & Inventory Telemetry',
        'Sub-Second Page Load Optimization'
      ],
      icon: <Zap className="w-6 h-6 text-sky-600" />,
      statusTag: 'Active Service',
      statusColor: 'emerald'
    },
    {
      id: 5,
      title: 'Marketing Strategies & Digital Growth',
      sloganCategory: 'Grow',
      categoryBadge: 'Growth Engineering',
      techStack: ['Digital Growth', 'SEO Strategy', 'Social Media Ads', 'Funnel Optimization'],
      description: 'Data-driven digital marketing funnels, technical SEO architecture, social media marketing, conversion rate optimization (CRO), and targeted acquisition campaigns.',
      fullDescription: 'Engineered growth strategies designed to acquire and retain high-value enterprise clients. We optimize user acquisition funnels, run A/B conversion tests, and maximize ROI across digital channels.',
      deliverables: [
        'High-Converting Landing Page Funnels',
        'Technical SEO Audit & Search Ranking',
        'Multi-Channel Social Media Campaigns',
        'Conversion Rate Optimization (CRO)'
      ],
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
      statusTag: 'Growth Engine',
      statusColor: 'emerald'
    },
    {
      id: 6,
      title: 'Graphic Designing & Brand Identity',
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
      title: 'Real-Time Analytics & Dashboard Systems',
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
      id: 8,
      title: 'Web Security & Zero-Trust Hardening',
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
      title: 'Maintenance & 24/7 SLA Support',
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

  const upcomingServicesData = [
    {
      id: 100,
      title: 'AI Autonomous Reasoning & Agent Ecosystem',
      categoryBadge: 'AI & Machine Learning R&D',
      techStack: ['OpenAI / Claude API', 'Autonomous Agents', 'LangChain', 'Vector DBs', 'PyTorch'],
      description: 'Next-generation autonomous AI reasoning agents, custom RAG vector knowledge bases, and multi-step automated enterprise workflows.',
      fullDescription: 'Architecting fine-tuned AI reasoning agents capable of autonomous decision loops, multi-tool execution, document knowledge retrieval, and intelligent workflow automation.',
      launchTag: 'Upcoming AI Pipeline • Launch Q2 2027',
      isAiTag: true,
      icon: <Bot className="w-6 h-6 text-purple-400" />
    },
    {
      id: 101,
      title: 'Quantum Cloud Shielding',
      categoryBadge: 'Next-Gen R&D',
      techStack: ['Post-Quantum Crypto', 'Lattice Encryption', 'Key Vaults', 'HSM Integration'],
      description: 'Next-generation post-quantum cryptography, lattice-based API encryption, and hardware-isolated key vaults.',
      fullDescription: 'Engineering quantum-resilient cryptographic primitives and lattice-based key exchange protocols to safeguard enterprise APIs against future quantum computing decryption vectors.',
      launchTag: 'In R&D • Launch Q1 2027',
      isAiTag: false,
      icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />
    },
    {
      id: 102,
      title: 'Autonomous Robotics Workflows',
      categoryBadge: 'Robotics R&D',
      techStack: ['ROS2 Framework', 'Swarm AI', 'Spatial Telemetry', 'C++', 'Python'],
      description: 'Multi-agent swarm intelligence, ROS2 framework orchestration, and real-time spatial robotics telemetry.',
      fullDescription: 'Autonomous robotics orchestration engine uniting ROS2 middleware with multi-agent swarm intelligence for industrial automation and autonomous warehouse telemetry.',
      launchTag: 'In R&D • Launch Q2 2027',
      isAiTag: false,
      icon: <Cpu className="w-6 h-6 text-indigo-400" />
    },
    {
      id: 103,
      title: 'Spatial Computing & AR Workspaces',
      categoryBadge: 'Spatial Computing',
      techStack: ['WebXR API', 'Three.js 3D', 'Apple Vision Pro', 'CAD Digital Twins'],
      description: 'Immersive 3D web spatial interfaces, Apple Vision Pro WebXR frameworks, and interactive CAD digital twins.',
      fullDescription: 'Designing WebXR 3D spatial computing environments for enterprise engineering. Features interactive real-time digital twin visualization and Vision Pro AR workspace synchronization.',
      launchTag: 'In R&D • Launch Q3 2027',
      isAiTag: false,
      icon: <Layers className="w-6 h-6 text-pink-400" />
    }
  ];

  const filteredServices = filter === 'all'
    ? currentServicesData
    : currentServicesData.filter(s => s.sloganCategory.toLowerCase() === filter.toLowerCase());

  return (
    <section id="services" className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          {/* Slogan Reference pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-sky-100/80 text-sky-900 border border-sky-200 shadow-xs">
            <span>&lt;/&gt; Build</span> • <span>📈 Grow</span> • <span>🛡️ Secure</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Enterprise Software & <span className="tech-gradient-text">Growth Solutions</span>
          </h2>

          <div className="flex justify-center pt-1">
            <WipBadge text="Services Module Under Development — Live Preview" />
          </div>

          <p className="text-slate-700 text-sm sm:text-base font-semibold leading-relaxed max-w-2xl mx-auto pt-2">
            Volen Solution delivers resilient full-stack web applications, cross-platform mobile engineering, data-driven digital marketing, and zero-trust cybersecurity architectures built for global enterprise scale.
          </p>
        </div>

        {/* HIGH-CONTRAST STANDALONE CALCULATOR BANNER */}
        <div className="rounded-3xl p-6 sm:p-8 bg-slate-950 border-2 border-sky-400/40 shadow-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-3 text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-extrabold bg-sky-500/20 text-sky-300 border border-sky-400/40 shadow-sm">
              <Calculator className="w-4 h-4 text-sky-400" />
              <span>Interactive Estimator Tool</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight flex items-center justify-center md:justify-start gap-2">
              <span>Project Cost & Regional Rate Calculator</span>
            </h3>

            <p className="text-slate-200 text-xs sm:text-sm font-medium leading-relaxed max-w-xl">
              Calculate exact project costs based on your market region (Pakistan, UAE, USA, Saudi Arabia, Fiverr, Upwork, LinkedIn), website type, and digital marketing requirements.
            </p>
          </div>

          <a
            href="#calculator"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-600 hover:from-sky-400 hover:to-cyan-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow-xl shadow-sky-400/25 hover:scale-105 transition-all flex items-center gap-2.5 cursor-pointer shrink-0 border border-sky-300"
          >
            <Calculator className="w-4.5 h-4.5 text-slate-950 stroke-[2.5]" />
            <span>Open Calculator in New Tab</span>
            <ExternalLink className="w-4 h-4 text-slate-950 stroke-[2.5]" />
          </a>
        </div>

        {/* TWO MAIN CATEGORY TABS: CURRENT SERVICES vs UPCOMING SERVICES */}
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setActiveTabCategory('current')}
            className={`px-6 py-3.5 rounded-2xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
              activeTabCategory === 'current'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-sky-50'
            }`}
          >
            <Layers className="w-4 h-4 text-sky-400" />
            <span>Current Services</span>
          </button>

          <button
            onClick={() => setActiveTabCategory('upcoming')}
            className={`px-6 py-3.5 rounded-2xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
              activeTabCategory === 'upcoming'
                ? 'bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white shadow-md border border-purple-500/40'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-purple-50'
            }`}
          >
            <Rocket className="w-4 h-4 text-purple-400 animate-pulse" />
            <span>Upcoming Services (AI & R&D)</span>
          </button>
        </div>

        {/* CURRENT SERVICES VIEW */}
        {activeTabCategory === 'current' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Filter Navigation Sub-Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { label: 'All Services', value: 'all', count: 9 },
                { label: '</> Web & Software Services', value: 'build', count: 4 },
                { label: '📈 Digital Marketing & Growth', value: 'grow', count: 3 },
                { label: '🛡️ Security & Reliability', value: 'secure', count: 2 },
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setFilter(tab.value)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    filter === tab.value
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-sky-50 hover:text-sky-600'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                    filter === tab.value ? 'bg-sky-900 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>

            {/* 3x3 Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <ThreeDTiltCard key={service.id} maxTilt={8}>
                  <div
                    onClick={() => onSelectService(service)}
                    className="glass-card glass-card-hover rounded-3xl p-6 border border-sky-100 flex flex-col justify-between cursor-pointer group relative overflow-hidden h-full"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="p-3 rounded-2xl bg-sky-50/80 border border-sky-200/60 group-hover:scale-110 group-hover:bg-sky-100 transition-all duration-300">
                          {service.icon}
                        </div>
                        <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                          {service.categoryBadge}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-2">
                        {service.title}
                      </h3>

                      <p className="text-slate-600 text-xs leading-relaxed font-normal mb-4">
                        {service.description}
                      </p>

                      {/* Deliverables List */}
                      <div className="space-y-1.5 mb-4">
                        {service.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-700 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-sky-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-sky-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        <span>Explore Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onBookConsultation(service.title);
                        }}
                        className="px-3 py-1.5 rounded-xl text-[11px] font-bold text-white bg-slate-900 hover:bg-sky-600 transition-colors shadow-xs cursor-pointer"
                      >
                        Request Proposal
                      </button>
                    </div>
                  </div>
                </ThreeDTiltCard>
              ))}
            </div>
          </div>
        )}

        {/* UPCOMING SERVICES VIEW */}
        {activeTabCategory === 'upcoming' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                Future R&D Capabilities
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Upcoming AI & Next-Gen Engineering
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Future technology pipelines currently under development in our R&D labs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingServicesData.map((service) => (
                <ThreeDTiltCard key={service.id} maxTilt={6}>
                  <div className={`rounded-3xl p-6 border text-white shadow-xl space-y-4 flex flex-col justify-between h-full relative overflow-hidden ${
                    service.isAiTag
                      ? 'bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 border-purple-500/40 ring-1 ring-purple-400/30'
                      : 'bg-gradient-to-br from-slate-900 via-sky-950 to-slate-950 border-sky-500/30'
                  }`}>
                    <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>

                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="p-3 rounded-2xl bg-white/10 border border-white/10">
                          {service.icon}
                        </div>

                        {service.isAiTag ? (
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md flex items-center gap-1 border border-purple-300/40 animate-pulse">
                            <Sparkles className="w-3.5 h-3.5 text-white" />
                            <span>AI Powered R&D</span>
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-800 text-sky-300 border border-slate-700">
                            {service.categoryBadge}
                          </span>
                        )}
                      </div>

                      <h4 className="text-lg font-extrabold text-white mb-2">
                        {service.title}
                      </h4>

                      <p className="text-slate-300 text-xs leading-relaxed font-normal mb-4">
                        {service.fullDescription}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {service.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-white/10 text-slate-200 border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        <span>{service.launchTag}</span>
                      </div>

                      <button
                        onClick={() => onBookConsultation(service.title)}
                        className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 transition-colors shadow-sm cursor-pointer"
                      >
                        Join Beta Access
                      </button>
                    </div>
                  </div>
                </ThreeDTiltCard>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
