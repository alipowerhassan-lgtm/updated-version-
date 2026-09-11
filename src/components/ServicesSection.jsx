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
  CheckCircle2,
  X,
  Plus,
  Sliders,
  Check,
  Globe2,
  ShoppingBag,
  Briefcase,
  FileText,
  Users,
  GraduationCap,
  MessageSquare,
  DollarSign,
  ChevronRight,
  FolderOpen,
  Building2
} from 'lucide-react';

export default function ServicesSection({ onSelectService, onBookConsultation }) {
  const [activeTabCategory, setActiveTabCategory] = useState('current');
  const [filter, setFilter] = useState('all');

  // Website Types Modal & Customizer State
  const [showWebsiteTypesModal, setShowWebsiteTypesModal] = useState(false);
  const [selectedWebType, setSelectedWebType] = useState(null);
  const [selectedCustomOptions, setSelectedCustomOptions] = useState([]);
  const [currencyMode, setCurrencyMode] = useState('PKR'); // 'PKR' or 'USD'
  const [notificationToast, setNotificationToast] = useState(null); // JS Pop-up Notification

  // 9 Website Types provided by the user
  const websiteTypesCatalog = [
    {
      id: 'landing-page',
      title: 'Landing Page / Sales Funnel',
      purpose: 'Single high-conversion action (lead capture, event signup, product launch); minimal navigation, strong CTAs, forms.',
      pkrRange: '15,000 – 40,000 PKR',
      usdRange: '$200 – $600',
      pkrMin: 15000,
      pkrMax: 40000,
      usdMin: 200,
      usdMax: 600,
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      features: ['High-Conversion Lead Capture', 'A/B Testing Integration', 'Instant WhatsApp/Email Form Sync', 'Micro-Fast 1-Page Layout'],
      badge: 'High Conversion'
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      purpose: 'Showcasing personal work, creative projects, and case studies; interactive galleries, downloadable CV, contact form.',
      pkrRange: '20,000 – 55,000 PKR',
      usdRange: '$250 – $700',
      pkrMin: 20000,
      pkrMax: 55000,
      usdMin: 250,
      usdMax: 700,
      icon: <Briefcase className="w-5 h-5 text-sky-500" />,
      features: ['Interactive 3D Project Showcase', 'PDF CV Instant Download', 'Custom Case Study Pages', 'Client Inquiry Form'],
      badge: 'Personal Brand'
    },
    {
      id: 'corporate',
      title: 'Corporate / Business',
      purpose: 'Brand credibility and B2B/B2C service discovery; 5–10 pages, CMS setup, service pages, team, client reviews, lead forms.',
      pkrRange: '50,000 – 140,000 PKR',
      usdRange: '$700 – $2,200',
      pkrMin: 50000,
      pkrMax: 140000,
      usdMin: 700,
      usdMax: 2200,
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
      features: ['5–10 Custom Designed Pages', 'Headless CMS Integration', 'Corporate Team & Credibility Hub', 'Lead Qualification Workflows'],
      badge: 'Enterprise B2B'
    },
    {
      id: 'blog',
      title: 'Blog / Content Hub',
      purpose: 'Organic search growth and publishing; category archives, article search, comment systems, markdown/CMS, newsletter feeds.',
      pkrRange: '35,000 – 90,000 PKR',
      usdRange: '$500 – $1,500',
      pkrMin: 35000,
      pkrMax: 90000,
      usdMin: 500,
      usdMax: 1500,
      icon: <FileText className="w-5 h-5 text-emerald-500" />,
      features: ['Google SEO & Core Web Vitals Tuned', 'Markdown / Rich Article Editor', 'Newsletter Lead Magnet Integration', 'Category Tags & Live Search'],
      badge: 'SEO Growth'
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Store',
      purpose: 'Selling physical or digital products; product catalog, cart/checkout, payment gateways (Stripe/Paymob), inventory and order tracking.',
      pkrRange: '120,000 – 350,000 PKR',
      usdRange: '$1,500 – $4,500',
      pkrMin: 120000,
      pkrMax: 350000,
      usdMin: 1500,
      usdMax: 4500,
      icon: <ShoppingBag className="w-5 h-5 text-rose-500" />,
      features: ['Full Catalog, Cart & Checkout Flow', 'Stripe, Paymob, COD & Bank Wire Gateways', 'Live Inventory & Order Dispatch', 'Customer Account Dashboards'],
      badge: 'Full Store'
    },
    {
      id: 'directory',
      title: 'Listing / Directory',
      purpose: 'Aggregating properties, jobs, or businesses; multi-parameter filters, map views, user submissions, structured database querying.',
      pkrRange: '150,000 – 450,000 PKR',
      usdRange: '$1,800 – $5,000',
      pkrMin: 150000,
      pkrMax: 450000,
      usdMin: 1800,
      usdMax: 5000,
      icon: <Globe2 className="w-5 h-5 text-indigo-500" />,
      features: ['Multi-Parameter Database Filtering', 'Interactive Map Geolocation Pins', 'Vendor / User Listing Submissions', 'Claim & Verify Business Workflows'],
      badge: 'Directory Portal'
    },
    {
      id: 'lms',
      title: 'Educational / LMS',
      purpose: 'Online courses and progress tracking; video streaming integrations, user dashboards, quiz engines, automated certificates.',
      pkrRange: '200,000 – 600,000 PKR',
      usdRange: '$2,500 – $7,000',
      pkrMin: 20000,
      pkrMax: 600000,
      usdMin: 2500,
      usdMax: 7000,
      icon: <GraduationCap className="w-5 h-5 text-purple-500" />,
      features: ['Secure Cloud Video Streaming', 'Student Course Progress Tracking', 'Interactive Quiz & Grade Engine', 'Auto-Generated PDF Certificates'],
      badge: 'LMS Platform'
    },
    {
      id: 'community',
      title: 'Community / Forum',
      purpose: 'Peer networking and discussions; threaded replies, upvoting/reputation, WebSockets, moderation queues, activity notifications.',
      pkrRange: '180,000 – 500,000 PKR',
      usdRange: '$2,200 – $6,500',
      pkrMin: 180000,
      pkrMax: 500000,
      usdMin: 2200,
      usdMax: 6500,
      icon: <MessageSquare className="w-5 h-5 text-teal-500" />,
      features: ['Real-Time WebSocket Discussions', 'Threaded Replies & Upvote Karma', 'Moderator Dashboard & Filters', 'Real-time Push & Sound Alerts'],
      badge: 'Community Portal'
    },
    {
      id: 'custom-saas',
      title: 'Custom Web App (SaaS / MVP)',
      purpose: 'Interactive software delivered via the browser; user auth/RBAC, persistent database logic, external APIs, recurring subscriptions.',
      pkrRange: '400,000 – 1,200,000+ PKR',
      usdRange: '$3,500 – $12,000+',
      pkrMin: 400000,
      pkrMax: 1200000,
      usdMin: 3500,
      usdMax: 12000,
      icon: <Cpu className="w-5 h-5 text-cyan-500" />,
      features: ['Enterprise RBAC & SSO Multi-Auth', 'Stripe Recurring SaaS Subscriptions', 'Scalable PostgreSQL / Redis Architecture', 'Custom External API Integrations'],
      badge: 'Enterprise SaaS'
    }
  ];

  // Exact Customization Add-ons from User Specification
  const customizationAddons = [
    {
      id: 'additional-page',
      name: 'Additional Custom Page',
      scope: 'Designing and coding 1 extra responsive page beyond the base package (e.g., Careers, Case Studies).',
      pkrRange: '5,000 – 12,000 PKR',
      usdRange: '$50 – $150',
      pkrMin: 5000,
      pkrMax: 12000,
      usdMin: 50,
      usdMax: 150,
      isRecurring: false
    },
    {
      id: 'payment-gateway',
      name: 'Payment Gateway Setup',
      scope: 'Integrating 1 extra gateway (Stripe, PayPal, Paymob, JazzCash/EasyPaisa) + sandbox testing.',
      pkrRange: '15,000 – 35,000 PKR',
      usdRange: '$150 – $400',
      pkrMin: 15000,
      pkrMax: 35000,
      usdMin: 150,
      usdMax: 400,
      isRecurring: false
    },
    {
      id: 'user-auth',
      name: 'User Authentication & Roles',
      scope: 'JWT/OAuth setup, protected routes, sign-up/login, password reset, and role-based permissions (RBAC).',
      pkrRange: '35,000 – 80,000 PKR',
      usdRange: '$300 – $800',
      pkrMin: 35000,
      pkrMax: 80000,
      usdMin: 300,
      usdMax: 800,
      isRecurring: false
    },
    {
      id: 'crm-marketing',
      name: 'CRM / Marketing Integration',
      scope: 'Syncing contact/lead forms directly with HubSpot, Mailchimp, ActiveCampaign, or Google Sheets.',
      pkrRange: '10,000 – 25,000 PKR',
      usdRange: '$100 – $300',
      pkrMin: 10000,
      pkrMax: 25000,
      usdMin: 100,
      usdMax: 300,
      isRecurring: false
    },
    {
      id: 'admin-dashboard',
      name: 'Custom Admin Dashboard',
      scope: 'Lightweight backend panel for non-tech clients to view submissions, manage users, or edit records.',
      pkrRange: '40,000 – 90,000 PKR',
      usdRange: '$400 – $1,000',
      pkrMin: 40000,
      pkrMax: 90000,
      usdMin: 400,
      usdMax: 1000,
      isRecurring: false
    },
    {
      id: 'search-filter',
      name: 'Advanced Search & Filtering',
      scope: 'Multi-attribute dynamic filtering (category, price range, tags, live search) with debouncing and indexing.',
      pkrRange: '20,000 – 45,000 PKR',
      usdRange: '$200 – $500',
      pkrMin: 20000,
      pkrMax: 45000,
      usdMin: 200,
      usdMax: 500,
      isRecurring: false
    },
    {
      id: 'multilingual-i18n',
      name: 'Multi-Language (i18n)',
      scope: 'Internationalization setup (English/Urdu/Arabic), RTL layout mirroring, and translation dictionary files.',
      pkrRange: '25,000 – 50,000 PKR',
      usdRange: '$250 – $600',
      pkrMin: 25000,
      pkrMax: 50000,
      usdMin: 250,
      usdMax: 600,
      isRecurring: false
    },
    {
      id: 'core-web-vitals',
      name: 'Speed & Core Web Vitals',
      scope: 'Asset minification, Next.js image optimization, caching rules, CDN setup to achieve 90+ Lighthouse score.',
      pkrRange: '15,000 – 30,000 PKR',
      usdRange: '$150 – $350',
      pkrMin: 15000,
      pkrMax: 30000,
      usdMin: 150,
      usdMax: 350,
      isRecurring: false
    },
    {
      id: 'technical-seo',
      name: 'Technical SEO & Schema',
      scope: 'OpenGraph tags, JSON-LD structured data (Product, LocalBusiness, FAQ), dynamic sitemap, robots.txt.',
      pkrRange: '15,000 – 30,000 PKR',
      usdRange: '$150 – $350',
      pkrMin: 15000,
      pkrMax: 30000,
      usdMin: 150,
      usdMax: 350,
      isRecurring: false
    },
    {
      id: 'maintenance-retainer',
      name: 'Monthly Maintenance Retainer',
      scope: 'Regular package updates, cloud backups, uptime monitoring, bug fixes, and minor copy edits (up to 5 hrs/mo).',
      pkrRange: '15,000 – 40,000 PKR/mo',
      usdRange: '$150 – $400/mo',
      pkrMin: 15000,
      pkrMax: 40000,
      usdMin: 150,
      usdMax: 400,
      isRecurring: true
    }
  ];

  // Helper function to trigger interactive JS popup notification
  const triggerToast = (msg) => {
    setNotificationToast(msg);
    setTimeout(() => {
      setNotificationToast(null);
    }, 3200);
  };

  const handleSelectWebType = (type) => {
    setSelectedWebType(type);
    triggerToast(`Selected: "${type.title}" (${currencyMode === 'PKR' ? type.pkrRange : type.usdRange})`);
  };

  const handleToggleAddon = (addon) => {
    const exists = selectedCustomOptions.some(a => a.id === addon.id);
    if (exists) {
      setSelectedCustomOptions(selectedCustomOptions.filter(a => a.id !== addon.id));
      triggerToast(`Removed: "${addon.name}"`);
    } else {
      setSelectedCustomOptions([...selectedCustomOptions, addon]);
      triggerToast(`Added: "${addon.name}" (+${currencyMode === 'PKR' ? addon.pkrRange : addon.usdRange})`);
    }
  };

  // Calculate live dynamic customized price & itemized bill
  const calculateTotal = () => {
    if (!selectedWebType) return null;
    
    // Non-recurring project add-ons
    const projectAddons = selectedCustomOptions.filter(a => !a.isRecurring);
    const recurringAddons = selectedCustomOptions.filter(a => a.isRecurring);

    const projectAddonPkrMin = projectAddons.reduce((acc, curr) => acc + curr.pkrMin, 0);
    const projectAddonPkrMax = projectAddons.reduce((acc, curr) => acc + curr.pkrMax, 0);
    const projectAddonUsdMin = projectAddons.reduce((acc, curr) => acc + curr.usdMin, 0);
    const projectAddonUsdMax = projectAddons.reduce((acc, curr) => acc + curr.usdMax, 0);

    const monthlyPkrMin = recurringAddons.reduce((acc, curr) => acc + curr.pkrMin, 0);
    const monthlyPkrMax = recurringAddons.reduce((acc, curr) => acc + curr.pkrMax, 0);
    const monthlyUsdMin = recurringAddons.reduce((acc, curr) => acc + curr.usdMin, 0);
    const monthlyUsdMax = recurringAddons.reduce((acc, curr) => acc + curr.usdMax, 0);

    return {
      pkrMin: selectedWebType.pkrMin + projectAddonPkrMin,
      pkrMax: selectedWebType.pkrMax + projectAddonPkrMax,
      usdMin: selectedWebType.usdMin + projectAddonUsdMin,
      usdMax: selectedWebType.usdMax + projectAddonUsdMax,
      monthlyPkrMin,
      monthlyPkrMax,
      monthlyUsdMin,
      monthlyUsdMax,
      hasMonthly: recurringAddons.length > 0,
      addonCount: selectedCustomOptions.length
    };
  };

  const totals = calculateTotal();

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
      statusColor: 'emerald',
      hasWebsiteTypes: true // Trigger to show Website Types modal / catalog!
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
      {/* Interactive JS Pop-up Notification Toast */}
      {notificationToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-sky-400/50 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
          <span className="text-xs sm:text-sm font-semibold">{notificationToast}</span>
          <button
            onClick={() => setNotificationToast(null)}
            className="text-slate-400 hover:text-white ml-2 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

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

          <div className="flex flex-wrap items-center gap-3 relative z-10">
            <button
              onClick={() => {
                setShowWebsiteTypesModal(true);
                triggerToast('Opened Website Types & Interactive Pricing Explorer');
              }}
              className="px-5 py-3.5 rounded-2xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-400/40 font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <Layers className="w-4 h-4 text-sky-400" />
              <span>Explore 9 Website Types & Rates</span>
            </button>

            <a
              href="#calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-600 hover:from-sky-400 hover:to-cyan-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow-xl shadow-sky-400/25 hover:scale-105 transition-all flex items-center gap-2.5 cursor-pointer shrink-0 border border-sky-300"
            >
              <Calculator className="w-4.5 h-4.5 text-slate-950 stroke-[2.5]" />
              <span>Open Full Calculator</span>
              <ExternalLink className="w-4 h-4 text-slate-950 stroke-[2.5]" />
            </a>
          </div>
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
                    onClick={() => {
                      if (service.hasWebsiteTypes) {
                        setShowWebsiteTypesModal(true);
                        triggerToast('Viewing Website Types catalog with live pricing and customization options!');
                      } else {
                        onSelectService(service);
                      }
                    }}
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

                      {/* Special Banner for Web Development: 9 Website Types with Prices */}
                      {service.hasWebsiteTypes && (
                        <div className="mb-4 p-3 rounded-2xl bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-200 text-left space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-extrabold text-sky-900 flex items-center gap-1.5">
                              <FolderOpen className="w-3.5 h-3.5 text-sky-600" />
                              <span>9 Website Types Catalog</span>
                            </span>
                            <span className="text-[10px] font-mono font-bold bg-sky-600 text-white px-2 py-0.5 rounded-full">
                              PKR & USD Rates
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-600 font-normal">
                            Landing pages, Portfolios, E-Commerce, LMS, SaaS & Directories with side pricing and live customization calculator.
                          </p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowWebsiteTypesModal(true);
                              triggerToast('Launched Website Types Catalog with Live Side Taskbar!');
                            }}
                            className="w-full py-2 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-[11px] font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all"
                          >
                            <span>Browse Website Types & Rates →</span>
                          </button>
                        </div>
                      )}

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
                        <span>{service.hasWebsiteTypes ? 'View Website Types' : 'Explore Details'}</span>
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

        {/* MODAL: WEBSITE TYPES WITH SIDEBAR PRICING, CUSTOMIZER & SELECTION TASKBAR */}
        {showWebsiteTypesModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="w-full max-w-6xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-sky-200 flex flex-col overflow-hidden relative">
              {/* Modal Header */}
              <div className="p-5 sm:p-6 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-sky-500/20 text-sky-300 border border-sky-400/40">
                      Catalog & Interactive Estimator
                    </span>
                    <span className="text-xs text-slate-400 hidden sm:inline">
                      9 Verified Website Categories & Pricing
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                    Website Types, Features & Live Pricing
                  </h3>
                </div>

                {/* Currency Switcher & Close */}
                <div className="flex items-center gap-3">
                  <div className="bg-slate-800 p-1 rounded-xl flex items-center border border-slate-700">
                    <button
                      onClick={() => {
                        setCurrencyMode('PKR');
                        triggerToast('Switched to Local Market Rates (PKR)');
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                        currencyMode === 'PKR' ? 'bg-sky-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      🇵🇰 PKR Rates
                    </button>
                    <button
                      onClick={() => {
                        setCurrencyMode('USD');
                        triggerToast('Switched to International Rates (USD)');
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                        currencyMode === 'USD' ? 'bg-sky-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      🌎 USD Rates
                    </button>
                  </div>

                  <button
                    onClick={() => setShowWebsiteTypesModal(false)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Main Content Area: 2 Columns (Left: 9 Website Types Grid, Right: Side Taskbar & Live Customizer) */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* LEFT: 9 Website Types Cards (8 cols) */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                      Select A Website Category ({websiteTypesCatalog.length} Types Available)
                    </span>
                    <span className="text-[11px] text-sky-600 font-bold">
                      Click any card to select & customize
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {websiteTypesCatalog.map((type) => {
                      const isSelected = selectedWebType?.id === type.id;
                      return (
                        <div
                          key={type.id}
                          onClick={() => handleSelectWebType(type)}
                          className={`p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer relative flex flex-col justify-between group ${
                            isSelected
                              ? 'bg-sky-50/90 border-sky-500 shadow-md ring-2 ring-sky-400/30'
                              : 'bg-white border-slate-200 hover:border-sky-300 hover:shadow-sm'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <div className="p-2 rounded-xl bg-sky-100/70 text-sky-700">
                                {type.icon}
                              </div>
                              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                                {type.badge}
                              </span>
                            </div>

                            <h4 className="text-base font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors">
                              {type.title}
                            </h4>

                            <p className="text-slate-600 text-xs mt-1.5 leading-relaxed font-normal line-clamp-3">
                              {type.purpose}
                            </p>

                            {/* Features list */}
                            <div className="mt-3 pt-2 border-t border-slate-100 space-y-1">
                              {type.features.slice(0, 3).map((feat, fIdx) => (
                                <div key={fIdx} className="text-[11px] text-slate-700 flex items-center gap-1.5">
                                  <Check className="w-3 h-3 text-emerald-500 shrink-0" />
                                  <span className="truncate">{feat}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Price Tag Footer */}
                          <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between">
                            <div>
                              <div className="text-[10px] font-mono uppercase text-slate-400">
                                {currencyMode === 'PKR' ? 'Local Market (PKR)' : 'International (USD)'}
                              </div>
                              <div className="text-xs sm:text-sm font-black font-mono text-sky-700">
                                {currencyMode === 'PKR' ? type.pkrRange : type.usdRange}
                              </div>
                            </div>

                            <button
                              type="button"
                              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                isSelected
                                  ? 'bg-sky-600 text-white'
                                  : 'bg-slate-100 text-slate-700 group-hover:bg-sky-600 group-hover:text-white'
                              }`}
                            >
                              {isSelected ? '✓ Selected' : 'Select'}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* RIGHT: SIDE TASKBAR & LIVE CUSTOMIZER (4 cols) */}
                <div className="lg:col-span-4 space-y-5">
                  {/* Selected Item Summary Taskbar */}
                  <div className="p-5 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Layers className="w-4 h-4 text-sky-400" />
                        <span>Selection Side Taskbar</span>
                      </span>
                      {selectedWebType && (
                        <button
                          onClick={() => {
                            setSelectedWebType(null);
                            setSelectedCustomOptions([]);
                            triggerToast('Selection cleared');
                          }}
                          className="text-[10px] text-slate-400 hover:text-white underline cursor-pointer"
                        >
                          Clear
                        </button>
                      )}
                    </div>

                    {selectedWebType ? (
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-400/30">
                            {selectedWebType.icon}
                          </div>
                          <div>
                            <div className="text-sm font-extrabold text-white">
                              {selectedWebType.title}
                            </div>
                            <div className="text-[11px] text-slate-400 line-clamp-2">
                              {selectedWebType.purpose}
                            </div>
                          </div>
                        </div>

                        {/* Base Price */}
                        <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
                          <div className="text-[10px] font-mono text-slate-400 uppercase">
                            Base Category Cost ({currencyMode})
                          </div>
                          <div className="text-base font-black font-mono text-sky-300">
                            {currencyMode === 'PKR' ? selectedWebType.pkrRange : selectedWebType.usdRange}
                          </div>
                        </div>

                        {/* Selected Addons in Taskbar */}
                        {selectedCustomOptions.length > 0 && (
                          <div className="space-y-1.5 pt-1">
                            <div className="text-[10px] font-mono text-slate-400 uppercase flex items-center justify-between">
                              <span>Selected Add-ons ({selectedCustomOptions.length}):</span>
                              <span className="text-sky-400">Live Itemized Bill</span>
                            </div>
                            <div className="space-y-1 max-h-44 overflow-y-auto pr-1">
                              {selectedCustomOptions.map(addon => (
                                <div key={addon.id} className="p-2 rounded-xl bg-slate-800/80 text-[11px] flex items-center justify-between border border-slate-700/60">
                                  <div className="truncate pr-2">
                                    <span className="text-white font-medium">• {addon.name}</span>
                                    {addon.isRecurring && (
                                      <span className="ml-1 text-[9px] bg-purple-950 text-purple-300 px-1.5 py-0.5 rounded border border-purple-800">
                                        Monthly
                                      </span>
                                    )}
                                  </div>
                                  <span className="text-emerald-400 font-mono font-bold shrink-0">
                                    +{currencyMode === 'PKR' ? addon.pkrRange : addon.usdRange}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Live Total Bill Calculation */}
                        {totals && (
                          <div className="pt-3 border-t border-slate-800 space-y-2">
                            <div>
                              <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase flex items-center justify-between">
                                <span>One-Time Project Bill:</span>
                                <span className="text-[10px] font-mono text-slate-400">All Add-ons Included</span>
                              </div>
                              <div className="text-xl font-black font-mono text-white">
                                {currencyMode === 'PKR' ? (
                                  <>PKR {totals.pkrMin.toLocaleString()} – {totals.pkrMax.toLocaleString()}</>
                                ) : (
                                  <>${totals.usdMin.toLocaleString()} – ${totals.usdMax.toLocaleString()}</>
                                )}
                              </div>
                            </div>

                            {/* Recurring Monthly Retainer Bill if selected */}
                            {totals.hasMonthly && (
                              <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-700/60">
                                <div className="text-[10px] font-mono text-purple-300 font-bold uppercase flex items-center justify-between">
                                  <span>Monthly Retainer:</span>
                                  <span className="text-[10px] text-purple-200">5 hrs/mo support</span>
                                </div>
                                <div className="text-base font-black font-mono text-purple-200">
                                  {currencyMode === 'PKR' ? (
                                    <>PKR {totals.monthlyPkrMin.toLocaleString()} – {totals.monthlyPkrMax.toLocaleString()}/mo</>
                                  ) : (
                                    <>${totals.monthlyUsdMin.toLocaleString()} – ${totals.monthlyUsdMax.toLocaleString()}/mo</>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        <button
                          onClick={() => {
                            setShowWebsiteTypesModal(false);
                            onBookConsultation(`${selectedWebType.title} (${currencyMode} Scope) with ${selectedCustomOptions.length} Customizations: ${selectedCustomOptions.map(a => a.name).join(', ')}`);
                            triggerToast(`Proceeding with ${selectedWebType.title} proposal request!`);
                          }}
                          className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-600 hover:from-sky-400 hover:to-cyan-300 text-slate-950 font-black text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                        >
                          <span>Request Proposal for this Selection →</span>
                        </button>
                      </div>
                    ) : (
                      <div className="text-center py-6 space-y-2 text-slate-400 text-xs">
                        <FolderOpen className="w-8 h-8 text-slate-600 mx-auto" />
                        <p>No website type selected yet.</p>
                        <p className="text-[11px] text-slate-500">
                          Click on any website category on the left to see instant pricing and live customization controls.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Add-on Customizer Panel */}
                  <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                        <Sliders className="w-4 h-4 text-sky-600" />
                        <span>Add-on Customizer Options</span>
                      </span>
                      <span className="text-[10px] font-mono text-sky-700 bg-sky-100 px-2 py-0.5 rounded-full font-bold">
                        10 Options Available
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      Toggle optional capabilities to dynamically calculate the live project bill in the side taskbar.
                    </p>

                    <div className="space-y-2.5 pt-1 max-h-[460px] overflow-y-auto pr-1">
                      {customizationAddons.map((addon) => {
                        const isAdded = selectedCustomOptions.some(a => a.id === addon.id);
                        return (
                          <div
                            key={addon.id}
                            onClick={() => handleToggleAddon(addon)}
                            className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-2.5 ${
                              isAdded
                                ? 'bg-sky-50/90 border-sky-500 shadow-xs ring-1 ring-sky-400/30'
                                : 'bg-white border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            <div className="space-y-0.5 flex-1">
                              <div className="text-xs font-black text-slate-900 flex items-center justify-between gap-1">
                                <span>{addon.name}</span>
                                {addon.isRecurring && (
                                  <span className="text-[9px] font-mono font-bold bg-purple-100 text-purple-800 px-1.5 py-0.2 rounded">
                                    Recurring
                                  </span>
                                )}
                              </div>
                              <div className="text-[11px] text-slate-500 leading-tight">
                                {addon.scope}
                              </div>
                              <div className="text-[11px] font-mono font-extrabold text-sky-700 pt-1">
                                +{currencyMode === 'PKR' ? addon.pkrRange : addon.usdRange}
                              </div>
                            </div>

                            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                              isAdded ? 'bg-sky-600 text-white' : 'border border-slate-300'
                            }`}>
                              {isAdded ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5 text-slate-400" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
