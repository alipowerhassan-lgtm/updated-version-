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
  Users,
  Target,
  Compass,
  ArrowRight,
  CheckCircle2,
  Globe2,
  GitBranch,
  Terminal,
  Cpu
} from 'lucide-react';

export default function HomeSection({ onSelectService, onRequestProposal }) {
  const globalPresence = [
    {
      country: 'Pakistan',
      flag: '🇵🇰',
      role: 'Global Headquarters & Primary Engineering Hub',
      desc: 'Central architecture studio, R&D labs, and zero-trust engineering operations.',
      badge: 'Global HQ'
    },
    {
      country: 'USA (United States)',
      flag: '🇺🇸',
      role: 'Enterprise North America Client Operations',
      desc: 'Serving enterprise SaaS, AI reasoning systems, and Cloud clients across North America.',
      badge: 'Enterprise Hub'
    },
    {
      country: 'UK (United Kingdom)',
      flag: '🇬🇧',
      role: 'European Financial & Logistics Network',
      desc: 'Architecting high-speed edge gateways, fintech platforms, and logistics dashboards.',
      badge: 'Financial Hub'
    },
    {
      country: 'Saudi Arabia (KSA)',
      flag: '🇸🇦',
      role: 'MENA Digital Transformation & Vision 2030',
      desc: 'Delivering production-grade software architectures for Middle East enterprises.',
      badge: 'MENA Region'
    }
  ];

  const servicesData = [
    {
      id: 1,
      title: 'WEB DEVELOPMENT',
      shortTitle: 'Web Development',
      description: 'We build fast, responsive and secure websites tailored to your business needs.',
      fullDescription: 'We build fast, responsive and secure websites tailored to your business needs using modern full-stack architectures (React, Next.js, Node.js). High-speed performance, SEO excellence, and rock-solid scalability guaranteed.',
      categoryBadge: 'Full-Stack Web',
      techStack: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS'],
      deliverables: [
        'Responsive React / Next.js Web App',
        'RESTful & GraphQL API Infrastructure',
        'Core Web Vitals & Speed Optimization',
        'Secure Cloud Deployment'
      ],
      icon: <Code className="w-6 h-6 text-sky-600" />
    },
    {
      id: 2,
      title: 'MOBILE APP DEVELOPMENT',
      shortTitle: 'Mobile App Development',
      description: 'We create user-friendly, high-performance mobile apps for Android and iOS.',
      fullDescription: 'We create user-friendly, high-performance mobile apps for Android and iOS using cross-platform React Native frameworks. Delivers smooth 60FPS UI, push notifications, and offline data sync.',
      categoryBadge: 'Mobile Engineering',
      techStack: ['React Native', 'iOS', 'Android', 'Expo', 'Redux'],
      deliverables: [
        'iOS App Store & Android Builds',
        'Native Device API Integration',
        'Biometric & Encryption Security',
        'Offline Data Persistence'
      ],
      icon: <Smartphone className="w-6 h-6 text-sky-600" />
    },
    {
      id: 3,
      title: 'AI SOLUTIONS',
      shortTitle: 'AI Solutions',
      description: 'We deliver smart AI solutions to automate processes and drive business growth.',
      fullDescription: 'We deliver smart AI solutions to automate processes and drive business growth. Featuring LLM integrations, autonomous agent pipelines, vector databases, and custom reasoning engines.',
      categoryBadge: 'AI & Automation',
      techStack: ['OpenAI API', 'Autonomous Agents', 'LangChain', 'Python', 'Vector DBs'],
      deliverables: [
        'Automated Multi-Step AI Workflows',
        'Custom Vector Search & RAG Systems',
        'LLM Fine-Tuning & Prompt Engineering',
        'Enterprise AI Guardrails'
      ],
      icon: <Bot className="w-6 h-6 text-purple-600" />
    },
    {
      id: 4,
      title: 'DASHBOARD SYSTEMS',
      shortTitle: 'Dashboard Systems',
      description: 'We develop powerful dashboards that turn data into insights for better decisions.',
      fullDescription: 'We develop powerful dashboards that turn data into insights for better decisions. Real-time PostgreSQL telemetry, WebSocket feeds, and executive metric panels.',
      categoryBadge: 'Real-Time Analytics',
      techStack: ['PostgreSQL', 'WebSockets', 'Chart.js', 'Redis', 'Tailwind CSS'],
      deliverables: [
        'Live Sub-Second WebSocket Streaming',
        'PostgreSQL Materialized Analytics',
        'Custom Executive Metrics Panels',
        'Exportable PDF & CSV Reports'
      ],
      icon: <LayoutDashboard className="w-6 h-6 text-cyan-600" />
    },
    {
      id: 5,
      title: 'UI/UX DESIGN',
      shortTitle: 'UI/UX Design',
      description: 'We design intuitive and engaging interfaces that deliver great user experiences.',
      fullDescription: 'We design intuitive and engaging interfaces that deliver great user experiences. User-centered wireframing, high-fidelity Figma prototypes, and complete component design systems.',
      categoryBadge: 'Product Design',
      techStack: ['Figma', 'Prototypes', 'Design Systems', 'Usability Testing'],
      deliverables: [
        'Interactive Figma Design Prototypes',
        'Scalable Design System Tokens',
        'User Journey & Flow Mapping',
        'Developer Handout Token Specifications'
      ],
      icon: <Palette className="w-6 h-6 text-pink-600" />
    },
    {
      id: 6,
      title: 'GRAPHIC DESIGNING',
      shortTitle: 'Graphic Designing',
      description: 'We create stunning visuals that represent your brand and leave a lasting impact.',
      fullDescription: 'We create stunning visuals that represent your brand and leave a lasting impact. Scalable vector logo marks, corporate visual guidelines, and digital brand kits.',
      categoryBadge: 'Brand Identity',
      techStack: ['Vector Graphics', 'Adobe Illustrator', 'SVG Assets', 'Brand Kits'],
      deliverables: [
        'Vector Logo Mark & Typography Kit',
        'Brand Guidelines & Color Tokens',
        'Scalable SVG Icons & Social Banners',
        'Digital Marketing Collateral'
      ],
      icon: <Sparkles className="w-6 h-6 text-amber-600" />
    },
    {
      id: 7,
      title: 'MARKETING',
      shortTitle: 'Marketing',
      description: 'We help your brand grow with result-driven digital marketing strategies across platforms.',
      fullDescription: 'We help your brand grow with result-driven digital marketing strategies across platforms. Technical SEO audits, high-converting growth funnels, and targeted digital acquisition.',
      categoryBadge: 'Growth Engineering',
      techStack: ['Digital Growth', 'Funnel Engineering', 'SEO', 'Analytics'],
      deliverables: [
        'High-Converting Funnel Architecture',
        'Technical SEO Audit & Ranking',
        'Multi-Touch Attribution Analytics',
        'Conversion Rate Optimization (CRO)'
      ],
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />
    },
    {
      id: 8,
      title: 'WEB SECURITY',
      shortTitle: 'Web Security',
      description: 'We protect your website and data with advanced security solutions and best practices.',
      fullDescription: 'We protect your website and data with advanced security solutions and best practices. Hardened zero-trust security, WAF shielding, OWASP compliance, and SSL/TLS endpoint encryption.',
      categoryBadge: 'Zero-Trust Security',
      techStack: ['OWASP Compliance', 'SSL/TLS Encryption', 'RBAC', 'WAF Shielding'],
      deliverables: [
        'Zero-Trust API Shielding & WAF Setup',
        'OWASP Top 10 Security Audit',
        'AES-256 Data Encryption At Rest/Transit',
        'Automated Bot & DDoS Protection'
      ],
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />
    },
    {
      id: 9,
      title: 'MAINTENANCE',
      shortTitle: 'Maintenance',
      description: 'We provide ongoing maintenance and support to keep your systems updated, secure and running smoothly.',
      fullDescription: 'We provide ongoing maintenance and support to keep your systems updated, secure and running smoothly. 24/7 post-deployment monitoring, database indexing, and 99.99% system availability targets.',
      categoryBadge: 'Reliability & SLAs',
      techStack: ['24/7 Monitoring', 'PostgreSQL Tuning', 'Automated Backups', 'SLA Support'],
      deliverables: [
        '24/7 Server Health Alerting',
        'Database Query Indexing & Tuning',
        'Automated Daily Encrypted Backups',
        'Rapid Incident SLA Response'
      ],
      icon: <Wrench className="w-6 h-6 text-slate-700" />
    }
  ];

  return (
    <section id="home" className="relative pt-6 pb-20">
      {/* Background Gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-sky-200/30 via-sky-100/40 to-cyan-100/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* --- HERO TOP BLOCK --- */}
        <div className="text-center space-y-5 max-w-4xl mx-auto pt-4">
          {/* Eyebrow Tag */}
          <div className="inline-flex">
            <span className="bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-sky-200 shadow-xs">
              BUILDING RESILIENT DIGITAL ARCHITECTURES
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Transforming Ideas Into <br className="hidden sm:inline" />
            <span className="tech-gradient-text">Powerful Full-Stack Solutions</span>
          </h1>

          {/* Slogan Badge Pill */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-white/90 border border-sky-200 shadow-sm backdrop-blur-md text-xs sm:text-sm font-bold text-slate-800">
              <span className="font-mono text-sky-600 font-bold">&lt;/&gt; Build</span>
              <span className="text-slate-300">|</span>
              <span className="text-emerald-600">📈 Grow</span>
              <span className="text-slate-300">|</span>
              <span className="text-indigo-600">🛡️ Secure</span>
            </div>
          </div>

          {/* Universal Work in Progress Badge directly below main title */}
          <div className="flex justify-center pt-1">
            <WipBadge />
          </div>

          {/* CTA Action */}
          <div className="flex justify-center pt-2">
            <button
              onClick={onRequestProposal}
              className="px-8 py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 hover:from-sky-500 hover:to-cyan-400 shadow-lg shadow-sky-600/25 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Request Technical Proposal</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* --- GLOBAL PRESENCE & OPERATIONAL FOOTPRINT SUB-BLOCK --- */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-sky-150 shadow-md space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200 inline-flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-indigo-600" />
              <span>Global Operational Footprint</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Serving Enterprise Clients Across Key International Hubs
            </h2>
            <p className="text-slate-600 text-sm font-normal">
              Volen Solution delivers resilient software architectures, automated AI pipelines, and zero-trust security across 4 core worldwide operational territories.
            </p>
          </div>

          {/* 4 Countries Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {globalPresence.map((loc, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/90 border border-sky-150 shadow-xs hover:border-sky-300 transition-all space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-2xl">{loc.flag}</span>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                      {loc.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900">{loc.country}</h3>
                  <div className="text-xs font-bold text-sky-600 mt-0.5">{loc.role}</div>
                  <p className="text-slate-600 text-xs mt-2 leading-relaxed font-normal">
                    {loc.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-sky-100 flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Active Deployment Region</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- SUB-BLOCK 1: WHO WE ARE & OUR TEAM TREE HIERARCHY --- */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-sky-150 shadow-md space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
              Who We Are & Our Team
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Pioneering Enterprise Software & Autonomous Systems
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal pt-1">
              Volen Solution is a technology firm headquartered in Pakistan, architecting resilient digital ecosystems for global enterprises. We unite full-stack software development, automated AI reasoning pipelines, and cybersecurity protocols under one roof.
            </p>
          </div>

          {/* TREE-LIKE LEADERSHIP & CORE TEAM HIERARCHY SYSTEM */}
          <div className="space-y-6 pt-4 border-t border-sky-100">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-sky-600" />
                <span>Leadership & Organizational Hierarchy Tree</span>
              </h3>
              <span className="text-[11px] font-mono font-semibold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
                Role-Based Tree Structure
              </span>
            </div>

            {/* LEVEL 1: EXECUTIVE ROOT NODE (CEO) */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-2xl p-5 rounded-3xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white shadow-xl border border-sky-400/30 flex items-center justify-between gap-4 relative z-10 hover:scale-[1.01] transition-transform">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-sky-500/20 border border-sky-400/40 text-white font-extrabold text-base flex items-center justify-center shadow-inner shrink-0">
                    MI
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-sky-500/20 text-sky-300 border border-sky-400/30 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Level 1 • Executive Leadership
                    </div>
                    <h4 className="text-lg font-extrabold text-white leading-tight">Muhammad Mohsin Iqbal</h4>
                    <div className="text-xs font-extrabold text-sky-300 mt-0.5">Chief Executive Officer (CEO)</div>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5">Leadership & Strategy</div>
                  </div>
                </div>
              </div>

              {/* Trunk Vertical Connection Line */}
              <div className="w-0.5 h-8 bg-gradient-to-b from-sky-500 to-sky-300"></div>

              {/* Horizontal Branching Bar */}
              <div className="hidden lg:block w-[85%] h-0.5 bg-sky-300 relative">
                <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-sky-500 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-sky-500 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-sky-500 translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>

            {/* LEVEL 2: FUNCTIONAL DEPARTMENT BRANCHES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 relative">
              
              {/* BRANCH 1: ENGINEERING & SYSTEMS */}
              <div className="glass-card rounded-3xl p-5 border border-sky-200/80 bg-white/90 shadow-sm space-y-4 relative">
                <div className="flex items-center justify-between border-b border-sky-100 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-200">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-sky-600 uppercase font-bold">Branch 01</div>
                      <h5 className="text-xs font-extrabold text-slate-900">Engineering & Systems</h5>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Member Card 1 */}
                  <div className="p-3.5 rounded-2xl bg-sky-50/50 border border-sky-150 hover:bg-sky-50 hover:border-sky-300 transition-all flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs">
                      AS
                    </div>
                    <div>
                      <h6 className="text-xs font-extrabold text-slate-900 leading-tight">Amber Shahzadi</h6>
                      <div className="text-[11px] font-bold text-sky-600 mt-0.5">Full-Stack Developer</div>
                      <div className="text-[10px] text-slate-500 font-mono mt-0.5">Engineering</div>
                    </div>
                  </div>

                  {/* Member Card 2 */}
                  <div className="p-3.5 rounded-2xl bg-sky-50/50 border border-sky-150 hover:bg-sky-50 hover:border-sky-300 transition-all flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs">
                      AH
                    </div>
                    <div>
                      <h6 className="text-xs font-extrabold text-slate-900 leading-tight">Ali Hassan</h6>
                      <div className="text-[11px] font-bold text-cyan-600 mt-0.5">Full-Stack & Systems Developer</div>
                      <div className="text-[10px] text-slate-500 font-mono mt-0.5">Engineering & Systems</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BRANCH 2: UI/UX & CREATIVE STUDIO */}
              <div className="glass-card rounded-3xl p-5 border border-purple-200/80 bg-white/90 shadow-sm space-y-4 relative">
                <div className="flex items-center justify-between border-b border-purple-100 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-purple-50 text-purple-600 border border-purple-200">
                      <Palette className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-purple-600 uppercase font-bold">Branch 02</div>
                      <h5 className="text-xs font-extrabold text-slate-900">Design & Creative Studio</h5>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Member Card 1 */}
                  <div className="p-3.5 rounded-2xl bg-pink-50/50 border border-pink-150 hover:bg-pink-50 hover:border-pink-300 transition-all flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-pink-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs">
                      NF
                    </div>
                    <div>
                      <h6 className="text-xs font-extrabold text-slate-900 leading-tight">Noor Fatima</h6>
                      <div className="text-[11px] font-bold text-pink-600 mt-0.5">UI/UX & Brand Designer</div>
                      <div className="text-[10px] text-slate-500 font-mono mt-0.5">Product & Brand Design</div>
                    </div>
                  </div>

                  {/* Member Card 2 */}
                  <div className="p-3.5 rounded-2xl bg-indigo-50/50 border border-indigo-150 hover:bg-indigo-50 hover:border-indigo-300 transition-all flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs">
                      ZS
                    </div>
                    <div>
                      <h6 className="text-xs font-extrabold text-slate-900 leading-tight">Zohaib Sajjid</h6>
                      <div className="text-[11px] font-bold text-indigo-600 mt-0.5">Graphic & Visual Designer</div>
                      <div className="text-[10px] text-slate-500 font-mono mt-0.5">Creative Studio</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BRANCH 3: GROWTH & COMMUNICATIONS */}
              <div className="glass-card rounded-3xl p-5 border border-emerald-200/80 bg-white/90 shadow-sm space-y-4 relative">
                <div className="flex items-center justify-between border-b border-emerald-100 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-emerald-600 uppercase font-bold">Branch 03</div>
                      <h5 className="text-xs font-extrabold text-slate-900">Growth & Communications</h5>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Member Card 1 */}
                  <div className="p-3.5 rounded-2xl bg-emerald-50/50 border border-emerald-150 hover:bg-emerald-50 hover:border-emerald-300 transition-all flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs">
                      SC
                    </div>
                    <div>
                      <h6 className="text-xs font-extrabold text-slate-900 leading-tight">Shiza Chishty</h6>
                      <div className="text-[11px] font-bold text-emerald-600 mt-0.5">Digital Growth & Social Media Strategist</div>
                      <div className="text-[10px] text-slate-500 font-mono mt-0.5">Growth & Marketing</div>
                    </div>
                  </div>

                  {/* Member Card 2 */}
                  <div className="p-3.5 rounded-2xl bg-purple-50/50 border border-purple-150 hover:bg-purple-50 hover:border-purple-300 transition-all flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs">
                      MH
                    </div>
                    <div>
                      <h6 className="text-xs font-extrabold text-slate-900 leading-tight">Muqdas Habib</h6>
                      <div className="text-[11px] font-bold text-purple-600 mt-0.5">Brand Expansion & Communications Specialist</div>
                      <div className="text-[10px] text-slate-500 font-mono mt-0.5">Brand & Communications</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- SUB-BLOCK 2: VISION & GOAL --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* OUR VISION */}
          <div className="glass-card rounded-3xl p-8 border border-sky-150 shadow-md space-y-4 hover:border-sky-300 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Global Outlook</span>
                <h3 className="text-xl font-extrabold text-slate-900">OUR VISION</h3>
              </div>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed font-medium">
              "To engineer resilient, high-speed digital infrastructure and intelligent autonomous systems that empower global businesses to operate securely, eliminate technical debt, and dominate their digital presence."
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-sky-700">
              <CheckCircle2 className="w-4 h-4 text-sky-600" />
              <span>Resilient High-Speed Architecture</span>
            </div>
          </div>

          {/* OUR GOAL */}
          <div className="glass-card rounded-3xl p-8 border border-sky-150 shadow-md space-y-4 hover:border-emerald-300 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Execution Standard</span>
                <h3 className="text-xl font-extrabold text-slate-900">OUR GOAL</h3>
              </div>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed font-medium">
              "To deliver production-grade software architectures with guaranteed 99.99% operational uptime, zero-vulnerability code execution, and high-impact digital solutions that accelerate business growth from day one."
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>99.99% Operational Uptime Target</span>
            </div>
          </div>
        </div>

        {/* --- SUB-BLOCK 3: SERVICES INTRODUCTION & 9 CORE SERVICES --- */}
        <div id="services" className="space-y-8 scroll-mt-28">
          {/* Headline & Intro Paragraph (Bold uppercase) */}
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-100/80 px-3 py-1 rounded-full border border-sky-200">
              Capabilities
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              OUR SERVICES
            </h2>

            <p className="text-xs sm:text-sm font-black text-slate-800 leading-relaxed uppercase tracking-wide bg-sky-50/80 p-6 rounded-3xl border border-sky-200/80 shadow-xs">
              WE DELIVER AN END-TO-END SUITE OF NINE SPECIALIZED DIGITAL CAPABILITIES ENGINEERED TO ACCELERATE YOUR GROWTH AND SECURE YOUR ASSETS. FROM BUILDING HIGH-PERFORMANCE WEB AND MOBILE APPLICATIONS TO AUTOMATING WORKFLOWS WITH INTELLIGENT AI AGENTS AND HARDENING DATA WITH ENTERPRISE-GRADE WEB SECURITY, WE PROVIDE THE EXACT TECHNICAL FOUNDATION YOUR BUSINESS NEEDS TO SCALE WITHOUT COMPROMISE.
            </p>
          </div>

          {/* The 9 Core Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="glass-card glass-card-hover rounded-3xl p-6 border border-sky-150 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
              >
                {/* Accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-3 rounded-2xl bg-sky-50 border border-sky-200 group-hover:scale-110 transition-transform duration-200">
                      {service.icon}
                    </div>
                    <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {service.categoryBadge}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-[#0F172A] group-hover:text-sky-600 transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed mb-4 font-normal">
                    "{service.description}"
                  </p>
                </div>

                <div className="pt-3 border-t border-sky-100 flex items-center justify-between text-xs font-bold text-sky-600 group-hover:text-sky-700">
                  <span>Click for Full Technical Specs</span>
                  <div className="w-7 h-7 rounded-full bg-sky-50 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-all">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
