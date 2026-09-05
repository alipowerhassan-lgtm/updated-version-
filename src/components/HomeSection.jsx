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
  CheckCircle2
} from 'lucide-react';

export default function HomeSection({ onSelectService, onRequestProposal }) {
  const teamMembers = [
    { name: 'Muhammad Mohsin Iqbal', title: 'Chief Executive Officer (CEO)', role: 'Leadership & Strategy', avatar: 'MI', bg: 'bg-slate-900' },
    { name: 'Amber Shahzadi', title: 'Full-Stack Developer', role: 'Engineering', avatar: 'AS', bg: 'bg-sky-600' },
    { name: 'Ali Hassan', title: 'Full-Stack & Systems Developer', role: 'Engineering & Systems', avatar: 'AH', bg: 'bg-cyan-600' },
    { name: 'Zohaib Sajjid', title: 'Graphic & Visual Designer', role: 'Creative Studio', avatar: 'ZS', bg: 'bg-indigo-600' },
    { name: 'Noor Fatima', title: 'UI/UX & Brand Designer', role: 'Product & Brand Design', avatar: 'NF', bg: 'bg-pink-600' },
    { name: 'Shiza Chishty', title: 'Digital Growth & Social Media Strategist', role: 'Growth & Marketing', avatar: 'SC', bg: 'bg-emerald-600' },
    { name: 'Muqdas Habib', title: 'Brand Expansion & Communications Specialist', role: 'Brand & Communications', avatar: 'MH', bg: 'bg-purple-600' },
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

        {/* --- SUB-BLOCK 1: WHO WE ARE & OUR TEAM --- */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-sky-150 shadow-md space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
              Who We Are & Our Team
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Pioneering Enterprise Software & Autonomous Systems
            </h2>
            {/* Narrative */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal pt-1">
              Volen Solution is a technology firm headquartered in Pakistan, architecting resilient digital ecosystems for global enterprises. We unite full-stack software development, automated AI reasoning pipelines, and cybersecurity protocols under one roof.
            </p>
          </div>

          {/* Leadership & Team Hierarchy (Frosted glass cards) */}
          <div>
            <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-4 text-center sm:text-left flex items-center justify-center sm:justify-start gap-2">
              <Users className="w-4 h-4 text-sky-600" />
              <span>Leadership & Core Team Hierarchy</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl bg-white/80 border border-sky-150 shadow-xs hover:border-sky-300 transition-all flex items-center gap-3.5 ${
                    idx === 0 ? 'sm:col-span-2 lg:col-span-3 bg-gradient-to-r from-sky-50/90 to-white border-sky-300' : ''
                  }`}
                >
                  <div className={`w-11 h-11 rounded-2xl ${member.bg} text-white font-extrabold text-xs flex items-center justify-center shadow-sm shrink-0`}>
                    {member.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900 leading-tight">{member.name}</h4>
                    <div className="text-xs font-bold text-sky-600 mt-0.5">{member.title}</div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">{member.role}</div>
                  </div>
                </div>
              ))}
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
