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
  Building2,
  Megaphone,
  Search,
  Target,
  PenTool,
  Server,
  LifeBuoy,
  MessageCircle,
  FileDown
} from 'lucide-react';
import { generatePdfQuote } from '../utils/pdfQuoteGenerator';

export default function ServicesSection({ onSelectService, onBookConsultation, onViewCaseStudy }) {
  const [activeTabCategory, setActiveTabCategory] = useState('current');
  const [filter, setFilter] = useState('all');

  // Services Catalog Modal & Customizer State
  const [showWebsiteTypesModal, setShowWebsiteTypesModal] = useState(false);
  const [modalActiveCategory, setModalActiveCategory] = useState('web-apps'); // 'web-apps' | 'marketing' | 'graphic-design' | 'maintenance'
  const [selectedWebType, setSelectedWebType] = useState(null);
  const [selectedCustomOptions, setSelectedCustomOptions] = useState([]);
  const [selectedMarketingPackage, setSelectedMarketingPackage] = useState(null);
  const [selectedDesignPackage, setSelectedDesignPackage] = useState(null);
  const [selectedMaintenancePackage, setSelectedMaintenancePackage] = useState(null);
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
      baseDays: 5,
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
      baseDays: 7,
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
      baseDays: 14,
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
      baseDays: 10,
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
      baseDays: 24,
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
      baseDays: 30,
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
      baseDays: 35,
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
      baseDays: 28,
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
      baseDays: 45,
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

  // 4 Digital Marketing Packages Catalog
  const marketingPackagesCatalog = [
    {
      id: 'mkt-seo',
      title: 'Technical & Content SEO Growth',
      purpose: 'Dominate organic search rankings on Google with in-depth keyword architecture, technical speed audits, schema markup, and high-authority backlinks.',
      pkrRange: '30,000 – 75,000 PKR/mo',
      usdRange: '$300 – $750/mo',
      pkrMin: 30000,
      pkrMax: 75000,
      usdMin: 300,
      usdMax: 750,
      isRecurring: true,
      badge: 'Organic SEO',
      icon: <Search className="w-5 h-5 text-emerald-500" />,
      features: [
        'In-Depth Competitor & Keyword Research',
        'On-Page Schema & Core Web Vitals Fixes',
        'Google Search Console & Analytics Sync',
        'High-Authority Niche Backlink Strategy'
      ]
    },
    {
      id: 'mkt-smm',
      title: 'Social Media Management & Brand Presence',
      purpose: 'Complete social channels management across LinkedIn, Instagram, Facebook, and TikTok with high-engagement visuals, reels, captions, and community management.',
      pkrRange: '35,000 – 90,000 PKR/mo',
      usdRange: '$350 – $900/mo',
      pkrMin: 35000,
      pkrMax: 90000,
      usdMin: 350,
      usdMax: 900,
      isRecurring: true,
      badge: 'Social Media',
      icon: <Megaphone className="w-5 h-5 text-pink-500" />,
      features: [
        '14–18 Custom Static Creatives & Reels',
        'Engaging Brand Copywriting & Hashtags',
        'Daily DM & Comment Community Care',
        'Monthly Reach, Engagement & ROI Reports'
      ]
    },
    {
      id: 'mkt-ppc',
      title: 'High-ROAS Paid Ads (Meta & Google PPC)',
      purpose: 'Laser-targeted conversion funnels and paid ad campaigns across Google Search, Display, Meta (Instagram/Facebook), and TikTok to maximize lead volume and sales.',
      pkrRange: '50,000 – 130,000 PKR/mo',
      usdRange: '$500 – $1,300/mo',
      pkrMin: 50000,
      pkrMax: 130000,
      usdMin: 500,
      usdMax: 1300,
      isRecurring: true,
      badge: 'Paid Ads PPC',
      icon: <Target className="w-5 h-5 text-amber-500" />,
      features: [
        'Pixel & Server-Side Conversion API Setup',
        'Audience Segments & Lookalike Targeting',
        'Multi-Variant Ad Copy & Creative Testing',
        'Weekly ROAS & Cost-Per-Acquisition Tuning'
      ]
    },
    {
      id: 'mkt-full',
      title: 'Full-Funnel Omnichannel Digital Growth',
      purpose: 'All-inclusive growth partnership combining technical SEO, multi-channel paid ads, email marketing automation, and conversion rate optimization (CRO).',
      pkrRange: '110,000 – 260,000 PKR/mo',
      usdRange: '$1,100 – $2,600/mo',
      pkrMin: 110000,
      pkrMax: 260000,
      usdMin: 1100,
      usdMax: 2600,
      isRecurring: true,
      badge: 'Complete Growth',
      icon: <TrendingUp className="w-5 h-5 text-sky-500" />,
      features: [
        'Full Omnichannel Ads (Meta + Google)',
        'Enterprise SEO Architecture & Backlinks',
        'Automated Email Lead Nurture Funnels',
        'Dedicated Growth Director & Strategy Calls'
      ]
    }
  ];

  // 4 Graphic Designing & Brand Identity Packages Catalog
  const graphicDesignCatalog = [
    {
      id: 'des-identity',
      title: 'Core Brand Identity & Logo Kit',
      purpose: 'Essential visual branding for startups and businesses. Includes custom vector logo concepts, official color palette, typography guidelines, and source files.',
      pkrRange: '20,000 – 50,000 PKR',
      usdRange: '$200 – $500',
      pkrMin: 20000,
      pkrMax: 50000,
      usdMin: 200,
      usdMax: 500,
      isRecurring: false,
      badge: 'Logo & Identity',
      icon: <PenTool className="w-5 h-5 text-amber-500" />,
      features: [
        '3 Distinct Bespoke Logo Concepts',
        'Primary, Secondary & Icon Variations',
        'Corporate Color Tokens & Font Pairings',
        'Vector Files: AI, EPS, SVG, High-Res PNG'
      ]
    },
    {
      id: 'des-corporate',
      title: 'Complete Corporate Visual Brand Suite',
      purpose: 'Comprehensive brand transformation with business stationery, letterheads, social media cover templates, merchandise mockups, and a 25+ page brand bible.',
      pkrRange: '45,000 – 110,000 PKR',
      usdRange: '$450 – $1,100',
      pkrMin: 45000,
      pkrMax: 110000,
      usdMin: 450,
      usdMax: 1100,
      isRecurring: false,
      badge: 'Corporate Suite',
      icon: <Sparkles className="w-5 h-5 text-purple-500" />,
      features: [
        'Master Logo Suite (Dark, Light, Monochrome)',
        'Business Cards, Letterhead & Envelope Specs',
        'Social Media Templates for All Platforms',
        'Comprehensive 25+ Page Brand Guidelines PDF'
      ]
    },
    {
      id: 'des-uiux',
      title: 'UI/UX Interactive Figma Design System',
      purpose: 'Pixel-perfect UI wireframes, high-fidelity clickable Figma prototypes, mobile responsive breakpoints, and modular component token libraries ready for developer handoff.',
      pkrRange: '60,000 – 160,000 PKR',
      usdRange: '$600 – $1,600',
      pkrMin: 60000,
      pkrMax: 160000,
      usdMin: 600,
      usdMax: 1600,
      isRecurring: false,
      badge: 'UI/UX Design',
      icon: <Palette className="w-5 h-5 text-sky-500" />,
      features: [
        'Responsive Desktop, Tablet & Mobile Frames',
        'Clickable Interactive Figma Prototypes',
        'Auto-Layout UI Components & Tokens',
        'Developer-Ready CSS & SVG Asset Specs'
      ]
    },
    {
      id: 'des-collateral',
      title: 'Marketing Collateral & Pitch Decks',
      purpose: 'High-conversion marketing materials including investor pitch decks, tri-fold brochures, event roll-up banners, and high-impact digital ad creative bundles.',
      pkrRange: '25,000 – 65,000 PKR',
      usdRange: '$250 – $650',
      pkrMin: 25000,
      pkrMax: 65000,
      usdMin: 250,
      usdMax: 650,
      isRecurring: false,
      badge: 'Marketing Kits',
      icon: <Briefcase className="w-5 h-5 text-rose-500" />,
      features: [
        'Custom 15–20 Slide Investor Pitch Deck',
        'Print-Ready Brochures, Flyers & Rollups',
        'Ad Creative Banners in All Aspect Ratios',
        'Editable Canva / Figma Master Files'
      ]
    }
  ];

  // 4 Maintenance Retainers & 24/7 SLA Packages Catalog
  const maintenanceCatalog = [
    {
      id: 'maint-basic',
      title: 'Essential Upkeep & Security Retainer',
      purpose: 'Foundational maintenance for blogs and business websites needing uninterrupted uptime, weekly core security patches, SSL renewals, and automated daily backups.',
      pkrRange: '15,000 – 35,000 PKR/mo',
      usdRange: '$150 – $350/mo',
      pkrMin: 15000,
      pkrMax: 35000,
      usdMin: 150,
      usdMax: 350,
      isRecurring: true,
      badge: 'Essential SLA',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      features: [
        'Weekly Core & Security Dependency Updates',
        'Daily Automated Off-Site Cloud Backups',
        '24/7 Uptime & SSL Certificate Audits',
        'Monthly Health & Security Status Report'
      ]
    },
    {
      id: 'maint-pro',
      title: 'Professional Maintenance & Developer Support',
      purpose: 'Proactive support with dedicated developer hours for quick UI updates, bug fixes, database query optimization, and staging site testing before production releases.',
      pkrRange: '35,000 – 80,000 PKR/mo',
      usdRange: '$350 – $800/mo',
      pkrMin: 35000,
      pkrMax: 80000,
      usdMin: 350,
      usdMax: 800,
      isRecurring: true,
      badge: 'Dev Support',
      icon: <Wrench className="w-5 h-5 text-sky-500" />,
      features: [
        'Includes 10 Hours of Monthly Developer Support',
        'Speed Tuning & Database Index Optimization',
        'Emergency Security Patching (< 4hr response)',
        'Staging Environment Safe Verification'
      ]
    },
    {
      id: 'maint-enterprise',
      title: 'Enterprise 24/7 Monitored SLA Retainer',
      purpose: 'Mission-critical support for e-commerce, SaaS, and high-traffic portals requiring rapid incident response, continuous performance telemetry, and zero-downtime deploys.',
      pkrRange: '80,000 – 220,000 PKR/mo',
      usdRange: '$800 – $2,200/mo',
      pkrMin: 80000,
      pkrMax: 220000,
      usdMin: 800,
      usdMax: 2200,
      isRecurring: true,
      badge: '24/7 SLA',
      icon: <Server className="w-5 h-5 text-purple-500" />,
      features: [
        'Real-Time Telemetry & Prometheus Alerting',
        '< 15-Minute Critical Incident Response SLA',
        'Dedicated DevOps & Full-Stack Engineers',
        'Continuous Stress Testing & Zero Downtime'
      ]
    },
    {
      id: 'maint-rescue',
      title: 'Emergency Rescue & Codebase Recovery',
      purpose: 'One-time emergency rescue for broken applications, hacked websites, database corruption, failed cloud migrations, or critical security breach recoveries.',
      pkrRange: '40,000 – 100,000 PKR',
      usdRange: '$400 – $1,000',
      pkrMin: 40000,
      pkrMax: 100000,
      usdMin: 400,
      usdMax: 1000,
      isRecurring: false,
      badge: 'Emergency Rescue',
      icon: <LifeBuoy className="w-5 h-5 text-rose-500" />,
      features: [
        'Deep Malware & Vulnerability Neutralization',
        'Database Repair & Connection Pool Recovery',
        'Broken Payment Gateway & API Restoration',
        'Post-Mortem Root Cause & Hardening Report'
      ]
    }
  ];

  // Helper function to trigger interactive JS popup notification
  const triggerToast = (msg) => {
    setNotificationToast(msg);
    setTimeout(() => {
      setNotificationToast(null);
    }, 3200);
  };

  const openCategoryModal = (cat = 'web-apps') => {
    setModalActiveCategory(cat);
    setShowWebsiteTypesModal(true);
    const names = {
      'web-apps': 'Web & Web Applications (9 Types + Add-ons)',
      'marketing': 'Digital Marketing Packages',
      'graphic-design': 'Graphic Designing & Brand Identity',
      'maintenance': 'Maintenance Retainers & 24/7 SLA'
    };
    triggerToast(`Opened ${names[cat] || 'Services Catalog'}`);
  };

  const handleSelectWebType = (type) => {
    setSelectedWebType(type);
    triggerToast(`Selected: "${type.title}" (${currencyMode === 'PKR' ? type.pkrRange : type.usdRange})`);
  };

  const handleSelectMarketingPackage = (pkg) => {
    setSelectedMarketingPackage(pkg);
    triggerToast(`Selected Marketing Package: "${pkg.title}" (${currencyMode === 'PKR' ? pkg.pkrRange : pkg.usdRange})`);
  };

  const handleSelectDesignPackage = (pkg) => {
    setSelectedDesignPackage(pkg);
    triggerToast(`Selected Design Package: "${pkg.title}" (${currencyMode === 'PKR' ? pkg.pkrRange : pkg.usdRange})`);
  };

  const handleSelectMaintenancePackage = (pkg) => {
    setSelectedMaintenancePackage(pkg);
    triggerToast(`Selected Maintenance Tier: "${pkg.title}" (${currencyMode === 'PKR' ? pkg.pkrRange : pkg.usdRange})`);
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

    const baseDays = selectedWebType.baseDays || 7;
    const extraDays = projectAddons.length * 2;
    const totalDays = baseDays + extraDays;
    let timelineText = '';
    if (totalDays <= 7) {
      timelineText = `${totalDays} – ${totalDays + 2} Business Days`;
    } else if (totalDays <= 21) {
      const weeks = Math.round(totalDays / 7);
      timelineText = `${weeks} – ${weeks + 1} Weeks`;
    } else {
      const weeks = Math.round(totalDays / 7);
      timelineText = `${weeks} – ${weeks + 2} Weeks`;
    }

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
      addonCount: selectedCustomOptions.length,
      timelineText
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
      catalogType: 'web-apps',
      catalogLabel: 'Browse 9 Web & App Types & Rates →'
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
      statusColor: 'emerald',
      catalogType: 'web-apps',
      catalogLabel: 'Browse E-Commerce & SaaS App Rates →'
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
      statusColor: 'emerald',
      catalogType: 'marketing',
      catalogLabel: 'Browse Marketing Packages & Rates →'
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
      statusColor: 'amber',
      catalogType: 'graphic-design',
      catalogLabel: 'Browse Design Packages & Rates →'
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
      statusColor: 'slate',
      catalogType: 'maintenance',
      catalogLabel: 'Browse Maintenance SLAs & Rates →'
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

          <div className="flex flex-wrap items-center gap-2.5 relative z-10">
            <button
              onClick={() => openCategoryModal('web-apps')}
              className="px-3.5 py-2.5 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-400/40 font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Code className="w-3.5 h-3.5 text-sky-400" />
              <span>Web & Apps (9 Types)</span>
            </button>
            <button
              onClick={() => openCategoryModal('marketing')}
              className="px-3.5 py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-400/40 font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>Marketing (4 Pkgs)</span>
            </button>
            <button
              onClick={() => openCategoryModal('graphic-design')}
              className="px-3.5 py-2.5 rounded-xl bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 border border-pink-400/40 font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Palette className="w-3.5 h-3.5 text-pink-400" />
              <span>Graphic Design (4 Pkgs)</span>
            </button>
            <button
              onClick={() => openCategoryModal('maintenance')}
              className="px-3.5 py-2.5 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-400/40 font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Wrench className="w-3.5 h-3.5 text-purple-400" />
              <span>Maintenance (4 SLAs)</span>
            </button>
            <a
              href="#calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-600 hover:from-sky-400 hover:to-cyan-300 text-slate-950 font-black text-xs shadow-lg flex items-center gap-2 cursor-pointer shrink-0 border border-sky-300"
            >
              <Calculator className="w-3.5 h-3.5 text-slate-950 stroke-[2.5]" />
              <span>Open Full Calculator</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-950 stroke-[2.5]" />
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
                      if (service.catalogType) {
                        openCategoryModal(service.catalogType);
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

                      {/* Special Banner for Services with Catalog Types */}
                      {service.catalogType && (
                        <div className="mb-4 p-3 rounded-2xl bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-200 text-left space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-extrabold text-sky-900 flex items-center gap-1.5">
                              <FolderOpen className="w-3.5 h-3.5 text-sky-600" />
                              <span>
                                {service.catalogType === 'web-apps' && '9 Web & App Types Catalog'}
                                {service.catalogType === 'marketing' && '4 Digital Marketing Packages'}
                                {service.catalogType === 'graphic-design' && '4 Graphic Design Packages'}
                                {service.catalogType === 'maintenance' && '4 Maintenance Retainers & SLAs'}
                              </span>
                            </span>
                            <span className="text-[10px] font-mono font-bold bg-sky-600 text-white px-2 py-0.5 rounded-full">
                              PKR & USD Rates
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-600 font-normal">
                            {service.catalogType === 'web-apps' && 'Landing pages, Portfolios, E-Commerce, LMS, SaaS & Directories with side pricing and live customization calculator.'}
                            {service.catalogType === 'marketing' && 'Technical SEO audits, social media management, high-ROAS PPC ad funnels, and full-funnel digital growth.'}
                            {service.catalogType === 'graphic-design' && 'Core brand identity logos, full corporate visual suites, interactive UI/UX Figma prototypes & marketing kits.'}
                            {service.catalogType === 'maintenance' && 'Essential weekly security updates, proactive developer support, 24/7 emergency SLA & code rescue.'}
                          </p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openCategoryModal(service.catalogType);
                            }}
                            className="w-full py-2 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-[11px] font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
                          >
                            <span>{service.catalogLabel || 'Browse Packages & Rates →'}</span>
                          </button>
                        </div>
                      )}

                      {/* Deliverables List */}
                      <div className="space-y-1.5 mb-3">
                        {service.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-700 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* View Real Case Studies Mini-Link */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onViewCaseStudy) onViewCaseStudy(service.title);
                        }}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-600 hover:text-sky-800 hover:underline mb-2 cursor-pointer transition-colors"
                      >
                        <ExternalLink className="w-3 h-3 text-sky-500" />
                        <span>View Real Case Studies for this type →</span>
                      </button>
                    </div>

                    <div className="pt-4 border-t border-sky-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-sky-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        <span>{service.catalogType ? 'View Packages & Rates' : 'Explore Details'}</span>
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

        {/* MULTI-CATEGORY SERVICES EXPLORER MODAL WITH LIVE SIDE TASKBAR & BILL CALCULATION */}
        {showWebsiteTypesModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="w-full max-w-6xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-sky-200 flex flex-col overflow-hidden relative">
              {/* Modal Header */}
              <div className="p-5 sm:p-6 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-sky-500/20 text-sky-300 border border-sky-400/40">
                      Interactive Estimator & Service Catalog
                    </span>
                    <span className="text-xs text-slate-400 hidden sm:inline">
                      {modalActiveCategory === 'web-apps' && '9 Verified Web & App Categories + Add-on Customizer'}
                      {modalActiveCategory === 'marketing' && '4 Performance-Driven Digital Marketing Packages'}
                      {modalActiveCategory === 'graphic-design' && '4 Comprehensive Branding & Design Packages'}
                      {modalActiveCategory === 'maintenance' && '4 Reliable SLAs & Proactive Retainer Tiers'}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                    {modalActiveCategory === 'web-apps' && 'Web & Web Application Types & Live Pricing'}
                    {modalActiveCategory === 'marketing' && 'Digital Marketing, SEO & Paid Ads Packages'}
                    {modalActiveCategory === 'graphic-design' && 'Graphic Designing, UI/UX & Brand Identity'}
                    {modalActiveCategory === 'maintenance' && 'Maintenance Retainers & 24/7 SLA Support'}
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

              {/* Category Switcher Sub-Bar (4 Dedicated Domains) */}
              <div className="bg-slate-950 px-4 sm:px-6 py-3 border-b border-slate-800 flex flex-wrap items-center gap-2 overflow-x-auto">
                <button
                  onClick={() => {
                    setModalActiveCategory('web-apps');
                    triggerToast('Viewing Web & Web Application Types (9 Types + Add-ons)');
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                    modalActiveCategory === 'web-apps'
                      ? 'bg-sky-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>Web & Applications ({websiteTypesCatalog.length} Types)</span>
                </button>

                <button
                  onClick={() => {
                    setModalActiveCategory('marketing');
                    triggerToast('Viewing Digital Marketing Packages (4 Packages)');
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                    modalActiveCategory === 'marketing'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Digital Marketing ({marketingPackagesCatalog.length} Packages)</span>
                </button>

                <button
                  onClick={() => {
                    setModalActiveCategory('graphic-design');
                    triggerToast('Viewing Graphic Designing & Brand Identity Packages');
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                    modalActiveCategory === 'graphic-design'
                      ? 'bg-pink-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  <Palette className="w-3.5 h-3.5" />
                  <span>Graphic Designing ({graphicDesignCatalog.length} Packages)</span>
                </button>

                <button
                  onClick={() => {
                    setModalActiveCategory('maintenance');
                    triggerToast('Viewing Maintenance Retainers & SLA Support');
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                    modalActiveCategory === 'maintenance'
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  <Wrench className="w-3.5 h-3.5" />
                  <span>Maintenance & SLAs ({maintenanceCatalog.length} Tiers)</span>
                </button>
              </div>

              {/* Main Content Area: 2 Columns */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* 1. VIEW: WEB & APPLICATIONS (9 Types + 10 Add-ons) */}
                {modalActiveCategory === 'web-apps' && (
                  <>
                    {/* LEFT: 9 Website Types Cards (8 cols) */}
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                          Select A Website / Web App Category ({websiteTypesCatalog.length} Types Available)
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

                                <div className="mt-3 pt-2 border-t border-slate-100 space-y-1">
                                  {type.features.slice(0, 3).map((feat, fIdx) => (
                                    <div key={fIdx} className="text-[11px] text-slate-700 flex items-center gap-1.5">
                                      <Check className="w-3 h-3 text-emerald-500 shrink-0" />
                                      <span className="truncate">{feat}</span>
                                    </div>
                                  ))}
                                </div>

                                {/* Mini-link: View Real Case Studies for this type */}
                                <div className="mt-2.5 pt-1.5 border-t border-slate-100">
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setShowWebsiteTypesModal(false);
                                      if (onViewCaseStudy) onViewCaseStudy(type.title);
                                    }}
                                    className="text-[11px] font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1 hover:underline cursor-pointer"
                                  >
                                    <span>View Real Case Studies for this type →</span>
                                  </button>
                                </div>
                              </div>

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

                            {/* Estimated Turnaround Timeline */}
                            {totals?.timelineText && (
                              <div className="p-3 rounded-2xl bg-sky-950/50 border border-sky-800/60 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                                  <div>
                                    <div className="text-[10px] font-mono uppercase text-slate-400">Estimated Turnaround:</div>
                                    <div className="text-xs font-black font-mono text-sky-300">{totals.timelineText}</div>
                                  </div>
                                </div>
                                <span className="text-[9px] font-mono bg-sky-900/80 text-sky-200 px-2 py-0.5 rounded border border-sky-700/60">
                                  Agile Sprints
                                </span>
                              </div>
                            )}

                            {/* PDF Quote, WhatsApp Quick-Connect & Proposal Actions */}
                            <div className="space-y-2 mt-2">
                              <button
                                type="button"
                                onClick={() => {
                                  triggerToast(`Generating Official PDF Quote for ${selectedWebType.title}...`);
                                  generatePdfQuote({
                                    categoryTitle: 'Web & Applications',
                                    itemTitle: selectedWebType.title,
                                    badge: selectedWebType.badge,
                                    currencyMode,
                                    oneTimePrice: currencyMode === 'PKR'
                                      ? `PKR ${totals?.pkrMin.toLocaleString()} – ${totals?.pkrMax.toLocaleString()}`
                                      : `$${totals?.usdMin.toLocaleString()} – ${totals?.usdMax.toLocaleString()}`,
                                    monthlyPrice: totals?.hasMonthly
                                      ? (currencyMode === 'PKR' ? `PKR ${totals?.monthlyPkrMin.toLocaleString()} – ${totals?.monthlyPkrMax.toLocaleString()}/mo` : `$${totals?.monthlyUsdMin.toLocaleString()} – ${totals?.monthlyUsdMax.toLocaleString()}/mo`)
                                      : '',
                                    timeline: totals?.timelineText,
                                    addons: selectedCustomOptions,
                                    deliverables: selectedWebType.features,
                                    purpose: selectedWebType.purpose
                                  });
                                }}
                                className="w-full py-2.5 px-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                              >
                                <FileDown className="w-4 h-4 text-sky-400" />
                                <span>Download Official PDF Quote 📄</span>
                              </button>

                              <a
                                href={`https://wa.me/?text=${encodeURIComponent(
                                  `Hello Volen Solution! I configured a project on your website:\n• Project: ${selectedWebType.title}\n• One-Time Budget: ${currencyMode === 'PKR' ? `PKR ${totals?.pkrMin.toLocaleString()} – ${totals?.pkrMax.toLocaleString()}` : `$${totals?.usdMin.toLocaleString()} – ${totals?.usdMax.toLocaleString()}`}${totals?.hasMonthly ? `\n• Monthly Retainer: ${currencyMode === 'PKR' ? `PKR ${totals?.monthlyPkrMin.toLocaleString()} – ${totals?.monthlyPkrMax.toLocaleString()}/mo` : `$${totals?.monthlyUsdMin.toLocaleString()} – ${totals?.monthlyUsdMax.toLocaleString()}/mo`}` : ''}\n• Est. Timeline: ${totals?.timelineText || 'Standard Sprint'}${selectedCustomOptions.length > 0 ? `\n• Add-ons (${selectedCustomOptions.length}): ${selectedCustomOptions.map(a => a.name).join(', ')}` : ''}\n\nI would like to discuss this technical scope and kick off development.`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-2.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                              >
                                <MessageCircle className="w-4 h-4" />
                                <span>Discuss Scope on WhatsApp →</span>
                              </a>

                              <button
                                onClick={() => {
                                  setShowWebsiteTypesModal(false);
                                  onBookConsultation(`${selectedWebType.title} (${currencyMode} Scope) with ${selectedCustomOptions.length} Customizations: ${selectedCustomOptions.map(a => a.name).join(', ')}`);
                                  triggerToast(`Proceeding with ${selectedWebType.title} proposal request!`);
                                }}
                                className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-600 hover:from-sky-400 hover:to-cyan-300 text-slate-950 font-black text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                              >
                                <span>Request Formal Proposal →</span>
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="text-center py-6 space-y-2 text-slate-400 text-xs">
                            <FolderOpen className="w-8 h-8 text-slate-600 mx-auto" />
                            <p>No website or app type selected yet.</p>
                            <p className="text-[11px] text-slate-500">
                              Click on any category on the left to see instant pricing and live customization controls.
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
                  </>
                )}

                {/* 2. VIEW: DIGITAL MARKETING PACKAGES */}
                {modalActiveCategory === 'marketing' && (
                  <>
                    {/* LEFT: 4 Marketing Packages Grid (8 cols) */}
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                          Digital Marketing & Growth Retainers ({marketingPackagesCatalog.length} Packages Available)
                        </span>
                        <span className="text-[11px] text-emerald-600 font-bold">
                          Click any package to view deliverables & bill
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {marketingPackagesCatalog.map((pkg) => {
                          const isSelected = selectedMarketingPackage?.id === pkg.id;
                          return (
                            <div
                              key={pkg.id}
                              onClick={() => handleSelectMarketingPackage(pkg)}
                              className={`p-5 rounded-2xl border text-left transition-all cursor-pointer relative flex flex-col justify-between group ${
                                isSelected
                                  ? 'bg-emerald-50/90 border-emerald-500 shadow-md ring-2 ring-emerald-400/30'
                                  : 'bg-white border-slate-200 hover:border-emerald-300 hover:shadow-sm'
                              }`}
                            >
                              <div>
                                <div className="flex items-center justify-between gap-2 mb-2">
                                  <div className="p-2 rounded-xl bg-emerald-100/70 text-emerald-700">
                                    {pkg.icon}
                                  </div>
                                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                                    {pkg.badge}
                                  </span>
                                </div>

                                <h4 className="text-base font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                                  {pkg.title}
                                </h4>

                                <p className="text-slate-600 text-xs mt-1.5 leading-relaxed font-normal">
                                  {pkg.purpose}
                                </p>

                                <div className="mt-3 pt-2.5 border-t border-slate-100 space-y-1.5">
                                  {pkg.features.map((feat, fIdx) => (
                                    <div key={fIdx} className="text-[11px] text-slate-700 flex items-center gap-1.5">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                      <span>{feat}</span>
                                    </div>
                                  ))}
                                </div>

                                {/* Mini-link: View Real Case Studies for this type */}
                                <div className="mt-2.5 pt-1.5 border-t border-slate-100">
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setShowWebsiteTypesModal(false);
                                      if (onViewCaseStudy) onViewCaseStudy(pkg.title);
                                    }}
                                    className="text-[11px] font-bold text-emerald-600 hover:text-emerald-800 flex items-center gap-1 hover:underline cursor-pointer"
                                  >
                                    <span>View Real Case Studies for this type →</span>
                                  </button>
                                </div>
                              </div>

                              <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between">
                                <div>
                                  <div className="text-[10px] font-mono uppercase text-slate-400">
                                    Monthly Retainer ({currencyMode})
                                  </div>
                                  <div className="text-sm font-black font-mono text-emerald-700">
                                    {currencyMode === 'PKR' ? pkg.pkrRange : pkg.usdRange}
                                  </div>
                                </div>

                                <button
                                  type="button"
                                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                    isSelected
                                      ? 'bg-emerald-600 text-white'
                                      : 'bg-slate-100 text-slate-700 group-hover:bg-emerald-600 group-hover:text-white'
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

                    {/* RIGHT: MARKETING SIDE TASKBAR & STANDARDS (4 cols) */}
                    <div className="lg:col-span-4 space-y-5">
                      <div className="p-5 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800 space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                            <TrendingUp className="w-4 h-4 text-emerald-400" />
                            <span>Marketing Retainer Taskbar</span>
                          </span>
                          {selectedMarketingPackage && (
                            <button
                              onClick={() => {
                                setSelectedMarketingPackage(null);
                                triggerToast('Marketing selection cleared');
                              }}
                              className="text-[10px] text-slate-400 hover:text-white underline cursor-pointer"
                            >
                              Clear
                            </button>
                          )}
                        </div>

                        {selectedMarketingPackage ? (
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-400/30">
                                {selectedMarketingPackage.icon}
                              </div>
                              <div>
                                <div className="text-sm font-extrabold text-white">
                                  {selectedMarketingPackage.title}
                                </div>
                                <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                                  {selectedMarketingPackage.badge}
                                </span>
                              </div>
                            </div>

                            <p className="text-xs text-slate-300 leading-relaxed font-normal">
                              {selectedMarketingPackage.purpose}
                            </p>

                            <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
                              <div className="text-[10px] font-mono text-slate-400 uppercase flex items-center justify-between">
                                <span>Monthly Growth Retainer:</span>
                                <span className="text-emerald-400 font-bold">Recurring Monthly</span>
                              </div>
                              <div className="text-xl font-black font-mono text-emerald-300">
                                {currencyMode === 'PKR' ? selectedMarketingPackage.pkrRange : selectedMarketingPackage.usdRange}
                              </div>
                            </div>

                            <div className="space-y-1.5 pt-1">
                              <div className="text-[10px] font-mono text-slate-400 uppercase">
                                Included Monthly Deliverables:
                              </div>
                              <div className="space-y-1">
                                {selectedMarketingPackage.features.map((f, idx) => (
                                  <div key={idx} className="p-2 rounded-xl bg-slate-800/60 text-[11px] text-slate-200 flex items-center gap-1.5">
                                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                    <span>{f}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Marketing Campaign Timeline Badge */}
                            <div className="p-3 rounded-2xl bg-emerald-950/50 border border-emerald-800/60 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                                <div>
                                  <div className="text-[10px] font-mono uppercase text-slate-400">Campaign Timeline:</div>
                                  <div className="text-xs font-black font-mono text-emerald-300">1st Campaign Live in 3–5 Days</div>
                                </div>
                              </div>
                              <span className="text-[9px] font-mono bg-emerald-900/80 text-emerald-200 px-2 py-0.5 rounded border border-emerald-700/60">
                                Monthly Sprints
                              </span>
                            </div>

                            {/* PDF Quote, WhatsApp Quick-Connect & Proposal Actions */}
                            <div className="space-y-2 mt-2">
                              <button
                                type="button"
                                onClick={() => {
                                  triggerToast(`Generating Official PDF Quote for ${selectedMarketingPackage.title}...`);
                                  generatePdfQuote({
                                    categoryTitle: 'Digital Marketing & Growth',
                                    itemTitle: selectedMarketingPackage.title,
                                    badge: selectedMarketingPackage.badge,
                                    currencyMode,
                                    oneTimePrice: currencyMode === 'PKR' ? selectedMarketingPackage.pkrRange : selectedMarketingPackage.usdRange,
                                    monthlyPrice: currencyMode === 'PKR' ? selectedMarketingPackage.pkrRange : selectedMarketingPackage.usdRange,
                                    timeline: '1st Campaign Live in 3–5 Days • Monthly Sprints',
                                    addons: [],
                                    deliverables: selectedMarketingPackage.features,
                                    purpose: selectedMarketingPackage.purpose
                                  });
                                }}
                                className="w-full py-2.5 px-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                              >
                                <FileDown className="w-4 h-4 text-emerald-400" />
                                <span>Download Official PDF Quote 📄</span>
                              </button>

                              <a
                                href={`https://wa.me/?text=${encodeURIComponent(
                                  `Hello Volen Solution! I am interested in your Marketing Retainer:\n• Package: ${selectedMarketingPackage.title} (${selectedMarketingPackage.badge})\n• Monthly Growth Retainer: ${currencyMode === 'PKR' ? selectedMarketingPackage.pkrRange : selectedMarketingPackage.usdRange}\n• Launch Speed: 1st Campaign Live in 3–5 Days\n\nI would like to discuss our growth strategy on WhatsApp.`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-2.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                              >
                                <MessageCircle className="w-4 h-4" />
                                <span>Discuss Scope on WhatsApp →</span>
                              </a>

                              <button
                                onClick={() => {
                                  setShowWebsiteTypesModal(false);
                                  onBookConsultation(`${selectedMarketingPackage.title} [Marketing Retainer - ${currencyMode} Scope]: ${currencyMode === 'PKR' ? selectedMarketingPackage.pkrRange : selectedMarketingPackage.usdRange}`);
                                  triggerToast(`Proceeding with ${selectedMarketingPackage.title} proposal request!`);
                                }}
                                className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                              >
                                <span>Request Proposal for this Package →</span>
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="text-center py-8 space-y-2 text-slate-400 text-xs">
                            <TrendingUp className="w-8 h-8 text-slate-600 mx-auto" />
                            <p>No marketing package selected yet.</p>
                            <p className="text-[11px] text-slate-500">
                              Click any marketing package on the left to view retainer rates, deliverables, and live proposal options.
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Marketing Operations Standard Card */}
                      <div className="p-5 rounded-3xl bg-emerald-50/50 border border-emerald-200 space-y-3">
                        <div className="flex items-center gap-2 text-xs font-black text-emerald-950 uppercase tracking-wider">
                          <Megaphone className="w-4 h-4 text-emerald-600" />
                          <span>Growth & Marketing Standards</span>
                        </div>
                        <ul className="text-[11px] text-slate-700 space-y-2 leading-tight">
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span><strong>100% White-Hat SEO:</strong> Google Search Console & Schema compliant architecture.</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span><strong>Targeted PPC Funnels:</strong> Conversion API setup with real-time ROAS telemetry.</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span><strong>Bi-Weekly Sync:</strong> Dedicated growth strategist and executive KPI reporting.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}

                {/* 3. VIEW: GRAPHIC DESIGNING & BRAND IDENTITY */}
                {modalActiveCategory === 'graphic-design' && (
                  <>
                    {/* LEFT: 4 Graphic Design Packages Grid (8 cols) */}
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                          Graphic Designing & Brand Kits ({graphicDesignCatalog.length} Packages Available)
                        </span>
                        <span className="text-[11px] text-pink-600 font-bold">
                          Click any package to view source files & rates
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {graphicDesignCatalog.map((pkg) => {
                          const isSelected = selectedDesignPackage?.id === pkg.id;
                          return (
                            <div
                              key={pkg.id}
                              onClick={() => handleSelectDesignPackage(pkg)}
                              className={`p-5 rounded-2xl border text-left transition-all cursor-pointer relative flex flex-col justify-between group ${
                                isSelected
                                  ? 'bg-pink-50/90 border-pink-500 shadow-md ring-2 ring-pink-400/30'
                                  : 'bg-white border-slate-200 hover:border-pink-300 hover:shadow-sm'
                              }`}
                            >
                              <div>
                                <div className="flex items-center justify-between gap-2 mb-2">
                                  <div className="p-2 rounded-xl bg-pink-100/70 text-pink-700">
                                    {pkg.icon}
                                  </div>
                                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-800">
                                    {pkg.badge}
                                  </span>
                                </div>

                                <h4 className="text-base font-extrabold text-slate-900 group-hover:text-pink-700 transition-colors">
                                  {pkg.title}
                                </h4>

                                <p className="text-slate-600 text-xs mt-1.5 leading-relaxed font-normal">
                                  {pkg.purpose}
                                </p>

                                <div className="mt-3 pt-2.5 border-t border-slate-100 space-y-1.5">
                                  {pkg.features.map((feat, fIdx) => (
                                    <div key={fIdx} className="text-[11px] text-slate-700 flex items-center gap-1.5">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 shrink-0" />
                                      <span>{feat}</span>
                                    </div>
                                  ))}
                                </div>

                                {/* Mini-link: View Real Case Studies for this type */}
                                <div className="mt-2.5 pt-1.5 border-t border-slate-100">
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setShowWebsiteTypesModal(false);
                                      if (onViewCaseStudy) onViewCaseStudy(pkg.title);
                                    }}
                                    className="text-[11px] font-bold text-pink-600 hover:text-pink-800 flex items-center gap-1 hover:underline cursor-pointer"
                                  >
                                    <span>View Real Case Studies for this type →</span>
                                  </button>
                                </div>
                              </div>

                              <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between">
                                <div>
                                  <div className="text-[10px] font-mono uppercase text-slate-400">
                                    Fixed Project Package ({currencyMode})
                                  </div>
                                  <div className="text-sm font-black font-mono text-pink-700">
                                    {currencyMode === 'PKR' ? pkg.pkrRange : pkg.usdRange}
                                  </div>
                                </div>

                                <button
                                  type="button"
                                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                    isSelected
                                      ? 'bg-pink-600 text-white'
                                      : 'bg-slate-100 text-slate-700 group-hover:bg-pink-600 group-hover:text-white'
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

                    {/* RIGHT: GRAPHIC DESIGN SIDE TASKBAR & STANDARDS (4 cols) */}
                    <div className="lg:col-span-4 space-y-5">
                      <div className="p-5 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800 space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                          <span className="text-xs font-mono font-bold text-pink-400 uppercase tracking-wider flex items-center gap-1.5">
                            <Palette className="w-4 h-4 text-pink-400" />
                            <span>Design Package Taskbar</span>
                          </span>
                          {selectedDesignPackage && (
                            <button
                              onClick={() => {
                                setSelectedDesignPackage(null);
                                triggerToast('Design selection cleared');
                              }}
                              className="text-[10px] text-slate-400 hover:text-white underline cursor-pointer"
                            >
                              Clear
                            </button>
                          )}
                        </div>

                        {selectedDesignPackage ? (
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="p-2 rounded-xl bg-pink-500/20 text-pink-400 border border-pink-400/30">
                                {selectedDesignPackage.icon}
                              </div>
                              <div>
                                <div className="text-sm font-extrabold text-white">
                                  {selectedDesignPackage.title}
                                </div>
                                <span className="text-[10px] font-mono text-pink-300 bg-pink-950 px-2 py-0.5 rounded border border-pink-800">
                                  {selectedDesignPackage.badge}
                                </span>
                              </div>
                            </div>

                            <p className="text-xs text-slate-300 leading-relaxed font-normal">
                              {selectedDesignPackage.purpose}
                            </p>

                            <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
                              <div className="text-[10px] font-mono text-slate-400 uppercase flex items-center justify-between">
                                <span>Fixed Project Fee:</span>
                                <span className="text-pink-400 font-bold">100% Vector Ownership</span>
                              </div>
                              <div className="text-xl font-black font-mono text-pink-300">
                                {currencyMode === 'PKR' ? selectedDesignPackage.pkrRange : selectedDesignPackage.usdRange}
                              </div>
                            </div>

                            <div className="space-y-1.5 pt-1">
                              <div className="text-[10px] font-mono text-slate-400 uppercase">
                                Delivered Vector Files & Assets:
                              </div>
                              <div className="space-y-1">
                                {selectedDesignPackage.features.map((f, idx) => (
                                  <div key={idx} className="p-2 rounded-xl bg-slate-800/60 text-[11px] text-slate-200 flex items-center gap-1.5">
                                    <Check className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                                    <span>{f}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Design Turnaround Timeline Badge */}
                            <div className="p-3 rounded-2xl bg-pink-950/50 border border-pink-800/60 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-pink-400 shrink-0" />
                                <div>
                                  <div className="text-[10px] font-mono uppercase text-slate-400">Delivery Turnaround:</div>
                                  <div className="text-xs font-black font-mono text-pink-300">Concepts in 3–5 Days • Final 7–10 Days</div>
                                </div>
                              </div>
                              <span className="text-[9px] font-mono bg-pink-900/80 text-pink-200 px-2 py-0.5 rounded border border-pink-700/60">
                                Vector Assets
                              </span>
                            </div>

                            {/* PDF Quote, WhatsApp Quick-Connect & Proposal Actions */}
                            <div className="space-y-2 mt-2">
                              <button
                                type="button"
                                onClick={() => {
                                  triggerToast(`Generating Official PDF Quote for ${selectedDesignPackage.title}...`);
                                  generatePdfQuote({
                                    categoryTitle: 'Graphic Designing & Brand Identity',
                                    itemTitle: selectedDesignPackage.title,
                                    badge: selectedDesignPackage.badge,
                                    currencyMode,
                                    oneTimePrice: currencyMode === 'PKR' ? selectedDesignPackage.pkrRange : selectedDesignPackage.usdRange,
                                    monthlyPrice: '',
                                    timeline: 'Initial Concepts in 3–5 Days • Final in 7–10 Days',
                                    addons: [],
                                    deliverables: selectedDesignPackage.features,
                                    purpose: selectedDesignPackage.purpose
                                  });
                                }}
                                className="w-full py-2.5 px-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                              >
                                <FileDown className="w-4 h-4 text-pink-400" />
                                <span>Download Official PDF Quote 📄</span>
                              </button>

                              <a
                                href={`https://wa.me/?text=${encodeURIComponent(
                                  `Hello Volen Solution! I am interested in your Graphic Designing Package:\n• Package: ${selectedDesignPackage.title} (${selectedDesignPackage.badge})\n• Fixed Budget: ${currencyMode === 'PKR' ? selectedDesignPackage.pkrRange : selectedDesignPackage.usdRange}\n• Turnaround: Initial Concepts in 3–5 Days (Final in 7–10 Days)\n\nI would like to discuss creative direction and brand assets on WhatsApp.`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-2.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                              >
                                <MessageCircle className="w-4 h-4" />
                                <span>Discuss Scope on WhatsApp →</span>
                              </a>

                              <button
                                onClick={() => {
                                  setShowWebsiteTypesModal(false);
                                  onBookConsultation(`${selectedDesignPackage.title} [Graphic Design - ${currencyMode} Scope]: ${currencyMode === 'PKR' ? selectedDesignPackage.pkrRange : selectedDesignPackage.usdRange}`);
                                  triggerToast(`Proceeding with ${selectedDesignPackage.title} proposal request!`);
                                }}
                                className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600 hover:from-pink-400 hover:to-rose-300 text-slate-950 font-black text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                              >
                                <span>Request Proposal for this Package →</span>
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="text-center py-8 space-y-2 text-slate-400 text-xs">
                            <Palette className="w-8 h-8 text-slate-600 mx-auto" />
                            <p>No graphic design package selected yet.</p>
                            <p className="text-[11px] text-slate-500">
                              Click any design package on the left to view prices, vector deliverables, and interactive proposal options.
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Design Handoff Standards Card */}
                      <div className="p-5 rounded-3xl bg-pink-50/50 border border-pink-200 space-y-3">
                        <div className="flex items-center gap-2 text-xs font-black text-pink-950 uppercase tracking-wider">
                          <Sparkles className="w-4 h-4 text-pink-600" />
                          <span>Asset Handoff Standards</span>
                        </div>
                        <ul className="text-[11px] text-slate-700 space-y-2 leading-tight">
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-pink-600 shrink-0 mt-0.5" />
                            <span><strong>Master Vector Files:</strong> AI, EPS, SVG, and high-resolution 300DPI PNG files.</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-pink-600 shrink-0 mt-0.5" />
                            <span><strong>Interactive Figma Links:</strong> Clickable prototypes, autolayout tokens, and developer CSS specs.</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-pink-600 shrink-0 mt-0.5" />
                            <span><strong>Commercial IP Rights:</strong> Complete transfer of copyright ownership upon project sign-off.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}

                {/* 4. VIEW: MAINTENANCE & 24/7 SLA SUPPORT */}
                {modalActiveCategory === 'maintenance' && (
                  <>
                    {/* LEFT: 4 Maintenance Packages Grid (8 cols) */}
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                          Maintenance Retainers & SLA Tiers ({maintenanceCatalog.length} Tiers Available)
                        </span>
                        <span className="text-[11px] text-purple-600 font-bold">
                          Click any SLA tier to view response times & bill
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {maintenanceCatalog.map((pkg) => {
                          const isSelected = selectedMaintenancePackage?.id === pkg.id;
                          return (
                            <div
                              key={pkg.id}
                              onClick={() => handleSelectMaintenancePackage(pkg)}
                              className={`p-5 rounded-2xl border text-left transition-all cursor-pointer relative flex flex-col justify-between group ${
                                isSelected
                                  ? 'bg-purple-50/90 border-purple-500 shadow-md ring-2 ring-purple-400/30'
                                  : 'bg-white border-slate-200 hover:border-purple-300 hover:shadow-sm'
                              }`}
                            >
                              <div>
                                <div className="flex items-center justify-between gap-2 mb-2">
                                  <div className="p-2 rounded-xl bg-purple-100/70 text-purple-700">
                                    {pkg.icon}
                                  </div>
                                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800">
                                    {pkg.badge}
                                  </span>
                                </div>

                                <h4 className="text-base font-extrabold text-slate-900 group-hover:text-purple-700 transition-colors">
                                  {pkg.title}
                                </h4>

                                <p className="text-slate-600 text-xs mt-1.5 leading-relaxed font-normal">
                                  {pkg.purpose}
                                </p>

                                <div className="mt-3 pt-2.5 border-t border-slate-100 space-y-1.5">
                                  {pkg.features.map((feat, fIdx) => (
                                    <div key={fIdx} className="text-[11px] text-slate-700 flex items-center gap-1.5">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                                      <span>{feat}</span>
                                    </div>
                                  ))}
                                </div>

                                {/* Mini-link: View Real Case Studies for this type */}
                                <div className="mt-2.5 pt-1.5 border-t border-slate-100">
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setShowWebsiteTypesModal(false);
                                      if (onViewCaseStudy) onViewCaseStudy(pkg.title);
                                    }}
                                    className="text-[11px] font-bold text-purple-600 hover:text-purple-800 flex items-center gap-1 hover:underline cursor-pointer"
                                  >
                                    <span>View Real Case Studies for this type →</span>
                                  </button>
                                </div>
                              </div>

                              <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between">
                                <div>
                                  <div className="text-[10px] font-mono uppercase text-slate-400">
                                    {pkg.isRecurring ? `Monthly SLA Retainer (${currencyMode})` : `One-Time Rescue Fee (${currencyMode})`}
                                  </div>
                                  <div className="text-sm font-black font-mono text-purple-700">
                                    {currencyMode === 'PKR' ? pkg.pkrRange : pkg.usdRange}
                                  </div>
                                </div>

                                <button
                                  type="button"
                                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                    isSelected
                                      ? 'bg-purple-600 text-white'
                                      : 'bg-slate-100 text-slate-700 group-hover:bg-purple-600 group-hover:text-white'
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

                    {/* RIGHT: MAINTENANCE SIDE TASKBAR & SLA STANDARDS (4 cols) */}
                    <div className="lg:col-span-4 space-y-5">
                      <div className="p-5 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800 space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                          <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
                            <Wrench className="w-4 h-4 text-purple-400" />
                            <span>Maintenance SLA Taskbar</span>
                          </span>
                          {selectedMaintenancePackage && (
                            <button
                              onClick={() => {
                                setSelectedMaintenancePackage(null);
                                triggerToast('Maintenance selection cleared');
                              }}
                              className="text-[10px] text-slate-400 hover:text-white underline cursor-pointer"
                            >
                              Clear
                            </button>
                          )}
                        </div>

                        {selectedMaintenancePackage ? (
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-400/30">
                                {selectedMaintenancePackage.icon}
                              </div>
                              <div>
                                <div className="text-sm font-extrabold text-white">
                                  {selectedMaintenancePackage.title}
                                </div>
                                <span className="text-[10px] font-mono text-purple-300 bg-purple-950 px-2 py-0.5 rounded border border-purple-800">
                                  {selectedMaintenancePackage.badge}
                                </span>
                              </div>
                            </div>

                            <p className="text-xs text-slate-300 leading-relaxed font-normal">
                              {selectedMaintenancePackage.purpose}
                            </p>

                            <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
                              <div className="text-[10px] font-mono text-slate-400 uppercase flex items-center justify-between">
                                <span>{selectedMaintenancePackage.isRecurring ? 'Monthly SLA Billing:' : 'One-Time Project Fee:'}</span>
                                <span className="text-purple-400 font-bold">{selectedMaintenancePackage.isRecurring ? 'Recurring' : 'Fixed'}</span>
                              </div>
                              <div className="text-xl font-black font-mono text-purple-300">
                                {currencyMode === 'PKR' ? selectedMaintenancePackage.pkrRange : selectedMaintenancePackage.usdRange}
                              </div>
                            </div>

                            <div className="space-y-1.5 pt-1">
                              <div className="text-[10px] font-mono text-slate-400 uppercase">
                                Covered Maintenance Scopes:
                              </div>
                              <div className="space-y-1">
                                {selectedMaintenancePackage.features.map((f, idx) => (
                                  <div key={idx} className="p-2 rounded-xl bg-slate-800/60 text-[11px] text-slate-200 flex items-center gap-1.5">
                                    <Check className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                                    <span>{f}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Maintenance SLA Speed Badge */}
                            <div className="p-3 rounded-2xl bg-purple-950/50 border border-purple-800/60 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-purple-400 shrink-0" />
                                <div>
                                  <div className="text-[10px] font-mono uppercase text-slate-400">SLA Response Speed:</div>
                                  <div className="text-xs font-black font-mono text-purple-300">Setup in 24–48h • SLA &lt; 15 Mins</div>
                                </div>
                              </div>
                              <span className="text-[9px] font-mono bg-purple-900/80 text-purple-200 px-2 py-0.5 rounded border border-purple-700/60">
                                24/7 Monitored
                              </span>
                            </div>

                            {/* PDF Quote, WhatsApp Quick-Connect & Proposal Actions */}
                            <div className="space-y-2 mt-2">
                              <button
                                type="button"
                                onClick={() => {
                                  triggerToast(`Generating Official PDF Quote for ${selectedMaintenancePackage.title}...`);
                                  generatePdfQuote({
                                    categoryTitle: 'Maintenance & 24/7 SLA',
                                    itemTitle: selectedMaintenancePackage.title,
                                    badge: selectedMaintenancePackage.badge,
                                    currencyMode,
                                    oneTimePrice: currencyMode === 'PKR' ? selectedMaintenancePackage.pkrRange : selectedMaintenancePackage.usdRange,
                                    monthlyPrice: selectedMaintenancePackage.isRecurring ? (currencyMode === 'PKR' ? selectedMaintenancePackage.pkrRange : selectedMaintenancePackage.usdRange) : '',
                                    timeline: 'Setup in 24–48 Hours • Incident SLA < 15 Mins',
                                    addons: [],
                                    deliverables: selectedMaintenancePackage.features,
                                    purpose: selectedMaintenancePackage.purpose
                                  });
                                }}
                                className="w-full py-2.5 px-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                              >
                                <FileDown className="w-4 h-4 text-purple-400" />
                                <span>Download Official PDF Quote 📄</span>
                              </button>

                              <a
                                href={`https://wa.me/?text=${encodeURIComponent(
                                  `Hello Volen Solution! I am interested in your Maintenance & SLA Support:\n• Tier: ${selectedMaintenancePackage.title} (${selectedMaintenancePackage.badge})\n• Billing: ${currencyMode === 'PKR' ? selectedMaintenancePackage.pkrRange : selectedMaintenancePackage.usdRange}\n• Billing Mode: ${selectedMaintenancePackage.isRecurring ? 'Monthly Continuous SLA Retainer' : 'One-Time Emergency Rescue Fee'}\n• Response SLA: Critical Incidents Under 15 Minutes\n\nI would like to discuss our infrastructure maintenance needs on WhatsApp.`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-2.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                              >
                                <MessageCircle className="w-4 h-4" />
                                <span>Discuss Scope on WhatsApp →</span>
                              </a>

                              <button
                                onClick={() => {
                                  setShowWebsiteTypesModal(false);
                                  onBookConsultation(`${selectedMaintenancePackage.title} [Maintenance SLA - ${currencyMode} Scope]: ${currencyMode === 'PKR' ? selectedMaintenancePackage.pkrRange : selectedMaintenancePackage.usdRange}`);
                                  triggerToast(`Proceeding with ${selectedMaintenancePackage.title} proposal request!`);
                                }}
                                className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-purple-500 via-indigo-400 to-purple-600 hover:from-purple-400 hover:to-indigo-300 text-slate-950 font-black text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                              >
                                <span>Request Proposal for this SLA Tier →</span>
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="text-center py-8 space-y-2 text-slate-400 text-xs">
                            <Wrench className="w-8 h-8 text-slate-600 mx-auto" />
                            <p>No maintenance SLA selected yet.</p>
                            <p className="text-[11px] text-slate-500">
                              Click any maintenance tier on the left to view response times, rates, and coverage details.
                            </p>
                          </div>
                        )}
                      </div>

                      {/* DevOps SLA Standards Card */}
                      <div className="p-5 rounded-3xl bg-purple-50/50 border border-purple-200 space-y-3">
                        <div className="flex items-center gap-2 text-xs font-black text-purple-950 uppercase tracking-wider">
                          <ShieldCheck className="w-4 h-4 text-purple-600" />
                          <span>DevOps & Reliability Guarantees</span>
                        </div>
                        <ul className="text-[11px] text-slate-700 space-y-2 leading-tight">
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                            <span><strong>Rapid Incident Response:</strong> &lt; 15-minute emergency SLA response times on mission-critical tiers.</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                            <span><strong>Zero-Downtime Patching:</strong> Staging sandbox verification before applying updates to production.</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                            <span><strong>Automated Backups:</strong> Daily off-site cloud backups with instant point-in-time database restoration.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}

              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
