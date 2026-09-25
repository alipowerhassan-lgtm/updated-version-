// Volen Solution Authoritative Pricing Matrix
// Extracted from official pricing sheets with comprehensive delivery details

export const CURRENCIES = [
  { code: 'PKR', label: '🇵🇰 Pakistan (PKR)', symbol: 'PKR ' },
  { code: 'USD', label: '🇺🇸 USA (USD $)', symbol: '$' },
  { code: 'GBP', label: '🇬🇧 UK (GBP £)', symbol: '£' },
  { code: 'SAR', label: '🇸🇦 Saudi Arabia (SAR)', symbol: 'SAR ' },
  { code: 'AED', label: '🇦🇪 UAE (AED)', symbol: 'AED ' },
];

export const SERVICE_CATEGORIES = [
  {
    id: 'development',
    name: 'Development Department',
    icon: 'Code',
    description: 'Custom Web, Mobile, CMS & E-Commerce Engineering',
    services: [
      {
        id: 'dev-1',
        name: '1-Page Landing Page',
        prices: { PKR: 'PKR 8,000', USD: '$99', GBP: '£79', SAR: 'SAR 350', AED: 'AED 299' },
        badge: 'Popular',
        detail: 'High-conversion single page designed to turn visitors into leads with strong calls to action.',
        features: ['High-Conversion Lead Capture Form', 'Direct WhatsApp & Email Sync', 'Fully Mobile Responsive & Fast Speed']
      },
      {
        id: 'dev-2',
        name: 'Basic Portfolio Website',
        prices: { PKR: 'PKR 12,000', USD: '$149', GBP: '£119', SAR: 'SAR 500', AED: 'AED 399' },
        detail: 'Personal brand website showcasing projects, past work, resume download, and contact info.',
        features: ['Project Gallery & Case Studies', 'Downloadable Resume / CV', 'Custom About & Contact Form']
      },
      {
        id: 'dev-3',
        name: '3-5 Page Business Website',
        prices: { PKR: 'PKR 18,000', USD: '$199', GBP: '£159', SAR: 'SAR 750', AED: 'AED 499' },
        badge: 'Best Value',
        detail: 'Complete corporate website (Home, About, Services, Contact, Blog) establishing market authority.',
        features: ['Up to 5 Dedicated Custom Pages', 'Technical On-Page SEO Setup', 'Google Maps & Inquiry System']
      },
      {
        id: 'dev-4',
        name: '5-8 Page Professional Website',
        prices: { PKR: 'PKR 25,000', USD: '$299', GBP: '£219', SAR: 'SAR 1,000', AED: 'AED 699' },
        detail: 'Expanded corporate site with dedicated service landing pages, animations, and lead funnels.',
        features: ['Up to 8 Bespoke Web Pages', 'Smooth Micro-Interactions & UI', 'Speed Optimization & Analytics']
      },
      {
        id: 'dev-5',
        name: 'Dynamic Website',
        prices: { PKR: 'PKR 35,000', USD: '$399', GBP: '£349', SAR: 'SAR 1,500', AED: 'AED 999' },
        detail: 'Database-driven web application with user authentication, search filters, and dynamic data feeds.',
        features: ['User Registration & Authentication', 'PostgreSQL / MongoDB Database', 'Real-Time Dynamic Content Updates']
      },
      {
        id: 'dev-6',
        name: 'CMS Website',
        prices: { PKR: 'PKR 40,000', USD: '$449', GBP: '£399', SAR: 'SAR 1,800', AED: 'AED 1,199' },
        detail: 'Content Management System (WordPress / Strapi / Sanity) allowing easy non-technical content edits.',
        features: ['Intuitive Admin Dashboard', 'Unlimited Blog & Article Publishing', 'Client Training & Documentation']
      },
      {
        id: 'dev-7',
        name: 'E-Commerce Basic',
        prices: { PKR: 'PKR 45,000', USD: '$499', GBP: '£449', SAR: 'SAR 2,000', AED: 'AED 1,499' },
        detail: 'Complete online store with product catalog, cart, customer checkout, and payment gateways.',
        features: ['Up to 50 Products Uploaded', 'Online Payment Gateway Integration', 'Customer Cart & Order Notifications']
      },
      {
        id: 'dev-8',
        name: 'E-Commerce Advanced',
        prices: { PKR: 'PKR 70,000', USD: '$799', GBP: '£699', SAR: 'SAR 3,000', AED: 'AED 2,499' },
        badge: 'Enterprise',
        detail: 'Enterprise store with multi-currency, coupon engines, automated stock tracking, and CRM sync.',
        features: ['Multi-Currency & Global Shipping', 'Automated Inventory & Invoicing', 'Customer Wishlist & Review System']
      },
      {
        id: 'dev-9',
        name: 'Custom Website',
        prices: { PKR: 'PKR 85,000+', USD: '$999+', GBP: '£899+', SAR: 'SAR 4,000+', AED: 'AED 3,499+' },
        badge: 'Bespoke',
        detail: 'Tailor-made software architecture built to your exact business workflow and third-party APIs.',
        features: ['100% Bespoke Engineering Architecture', 'Custom Backend & Third-Party APIs', 'Enterprise Zero-Trust Security Audit']
      },
    ]
  },
  {
    id: 'marketing',
    name: 'Digital Marketing',
    icon: 'Share2',
    description: 'Social Media Management, Setup & Post Packages',
    services: [
      {
        id: 'mkt-1',
        name: 'Social Media Setup (Facebook, Instagram)',
        prices: { PKR: 'PKR 7,000', USD: '$75', GBP: '£60', SAR: 'SAR 300', AED: 'AED 300' },
        detail: 'Professional creation and branding of Facebook Business Page and Instagram Professional Account.',
        features: ['Custom Header Banners & Profile Icon', 'Complete Bio Optimization & Action Buttons', 'Account Linking & Meta Business Suite Setup']
      },
      {
        id: 'mkt-2',
        name: 'Social Media Setup (WhatsApp)',
        prices: { PKR: 'PKR 8,500', USD: '$85', GBP: '£60', SAR: 'SAR 300', AED: 'AED 300' },
        detail: 'WhatsApp Business verification, product catalog setup, and automated greeting workflows.',
        features: ['Verified WhatsApp Business Profile', 'Product & Services Catalog Setup', 'Automated Welcome & Away Greetings']
      },
      {
        id: 'mkt-3',
        name: '1 Post',
        prices: { PKR: 'PKR 500/mo', USD: '$15/mo', GBP: '£12/mo', SAR: 'SAR 50/mo', AED: 'AED 50/mo' },
        detail: 'Single high-impact custom designed social graphic with compelling caption and hashtags.',
        features: ['Custom Graphic Design Post', 'Strategic Copywriting & Call to Action', 'Targeted Niche Hashtags']
      },
      {
        id: 'mkt-4',
        name: '8 Posts',
        prices: { PKR: 'PKR 8,000/mo', USD: '$100/mo', GBP: '£80/mo', SAR: 'SAR 400/mo', AED: 'AED 400/mo' },
        detail: 'Consistent monthly presence with 2 strategic posts per week tailored to your audience.',
        features: ['8 Custom Designed Visual Posts', '2 Posts Published Per Week', 'Caption Writing & Hashtag Optimization']
      },
      {
        id: 'mkt-5',
        name: '12 Posts',
        prices: { PKR: 'PKR 12,000/mo', USD: '$150/mo', GBP: '£120/mo', SAR: 'SAR 600/mo', AED: 'AED 600/mo' },
        badge: 'Popular',
        detail: 'Active social media presence with 3 posts per week to boost visibility and engagement.',
        features: ['12 High-Quality Branded Posts', '3 Posts Published Weekly', 'Monthly Content Calendar & Scheduling']
      },
      {
        id: 'mkt-6',
        name: '16 Posts',
        prices: { PKR: 'PKR 18,000/mo', USD: '$200/mo', GBP: '£160/mo', SAR: 'SAR 800/mo', AED: 'AED 800/mo' },
        detail: 'High-frequency posting (4 posts/week) to aggressively capture market share and followers.',
        features: ['16 Creative Posts Per Month', '4 Posts Distributed Each Week', 'Monthly Reach & Engagement Analytics']
      },
      {
        id: 'mkt-7',
        name: 'Posts + Reels',
        prices: { PKR: 'PKR 20,000/mo', USD: '$275/mo', GBP: '£220/mo', SAR: 'SAR 1,100/mo', AED: 'AED 1,100/mo' },
        badge: 'Viral Growth',
        detail: 'Hybrid content mix combining eye-catching carousel posts with trending short-form video Reels.',
        features: ['Custom Graphics + Short Video Reels', 'Audio Trend Research & Fast Editing', 'Optimized for Algorithm Discoverability']
      },
      {
        id: 'mkt-8',
        name: 'Facebook + Instagram Management',
        prices: { PKR: 'PKR 35,000/mo', USD: '$450/mo', GBP: '£350/mo', SAR: 'SAR 1,700/mo', AED: 'AED 1,700/mo' },
        detail: 'Daily handling of your Facebook and Instagram accounts, story updates, and customer inquiries.',
        features: ['Daily Stories & Feed Publications', 'Active DM & Comment Moderation', 'Audience Growth & Competitor Benchmarking']
      },
      {
        id: 'mkt-9',
        name: 'Full Social Media Management',
        prices: { PKR: 'PKR 45,000/mo', USD: '$600/mo', GBP: '£500/mo', SAR: 'SAR 2,200/mo', AED: 'AED 2,200/mo' },
        badge: 'Complete Suite',
        detail: 'Full-service omnichannel social management across Meta, LinkedIn, and TikTok with monthly reports.',
        features: ['End-to-End Multi-Platform Management', 'Daily Community Management & Growth Strategy', 'Executive Monthly ROI & Performance Report']
      },
    ]
  },
  {
    id: 'advertising',
    name: 'Advertising',
    icon: 'TrendingUp',
    description: 'Meta, Google & WhatsApp Ad Campaigns & Management',
    services: [
      {
        id: 'adv-1',
        name: 'Meta Ads Setup',
        prices: { PKR: 'PKR 5,000', USD: '$75', GBP: '£60', SAR: 'SAR 300', AED: 'AED 300' },
        detail: 'Complete Facebook & Instagram Ads setup including Meta Pixel installation and audience building.',
        features: ['Meta Pixel & Conversion API Setup', 'Custom Audience & Lookalike Building', 'Initial Ad Creative & Copy Testing']
      },
      {
        id: 'adv-2',
        name: 'WhatsApp Ads Setup',
        prices: { PKR: 'PKR 9,500', USD: '$125', GBP: '£100', SAR: 'SAR 500', AED: 'AED 500' },
        detail: 'Targeted Click-to-WhatsApp ad campaigns sending qualified buyers straight into your chat.',
        features: ['Direct Click-to-WhatsApp Campaign Setup', 'Automated Lead Qualification Prompts', 'High-Converting Ad Copy & Creative']
      },
      {
        id: 'adv-3',
        name: 'Google Ads Setup',
        prices: { PKR: 'PKR 7,500', USD: '$100', GBP: '£80', SAR: 'SAR 400', AED: 'AED 400' },
        detail: 'Google Search campaign launch targeting high-intent buyer keywords with negative keyword filters.',
        features: ['Targeted Commercial Keyword Research', 'Google Tag Manager & Conversion Tracking', 'Ad Extensions (Sitelinks, Callouts, Phone)']
      },
      {
        id: 'adv-4',
        name: 'Facebook/Instagram Ads Management',
        prices: { PKR: 'PKR 10,000/mo', USD: '$200/mo', GBP: '£160/mo', SAR: 'SAR 800/mo', AED: 'AED 800/mo' },
        badge: 'Popular',
        detail: 'Continuous daily optimization of your Meta ad spend to reduce cost per lead and maximize sales.',
        features: ['A/B Testing Creatives & Headlines', 'Daily Bid & Budget Optimization', 'Weekly Performance Check-ins & Reports']
      },
      {
        id: 'adv-5',
        name: 'Google Ads Management',
        prices: { PKR: 'PKR 12,000/mo', USD: '$250/mo', GBP: '£200/mo', SAR: 'SAR 1,000/mo', AED: 'AED 1,000/mo' },
        detail: 'PPC campaign management ensuring top Google Search placement with low cost-per-click.',
        features: ['Keyword Bid Adjustments & Negative Lists', 'Search Term Waste Elimination', 'Quality Score Improvement & ROAS Tracking']
      },
      {
        id: 'adv-6',
        name: 'Meta + Google Management',
        prices: { PKR: 'PKR 20,000/mo', USD: '$400/mo', GBP: '£325/mo', SAR: 'SAR 1,600/mo', AED: 'AED 1,600/mo' },
        badge: 'Recommended',
        detail: 'Unified multi-channel ad management coordinating Google intent search with Meta retargeting.',
        features: ['Combined Multi-Platform Ad Strategy', 'Cross-Channel Funnel Retargeting', 'Comprehensive Unified Dashboard Reports']
      },
      {
        id: 'adv-7',
        name: 'WhatsApp Ads Management',
        prices: { PKR: 'PKR 12,000/mo', USD: '$250/mo', GBP: '£200/mo', SAR: 'SAR 1,000/mo', AED: 'AED 1,000/mo' },
        detail: 'Ongoing management and scaling of high-volume direct chat lead generation campaigns.',
        features: ['Daily Cost-per-Conversation Tuning', 'Audience Geo-Targeting & Creative Refresh', 'Lead Flow Tracking & Consultation Guidance']
      },
    ]
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    icon: 'Palette',
    description: 'Logo Design, Branding Kits, Print & Social Media Visuals',
    services: [
      {
        id: 'gd-1',
        name: 'Logo Design',
        prices: { PKR: 'PKR 3,000', USD: '$50', GBP: '£40', SAR: 'SAR 200', AED: 'AED 200' },
        badge: 'Essential',
        detail: 'Unique bespoke vector logo concepts created specifically for your company with source files.',
        features: ['2–3 Distinct Creative Concepts', 'Full Vector Source Files (AI, SVG, EPS, PNG)', 'Transparent Backgrounds & Favicon Format']
      },
      {
        id: 'gd-2',
        name: 'Business Card',
        prices: { PKR: 'PKR 1,500', USD: '$25', GBP: '£20', SAR: 'SAR 100', AED: 'AED 100' },
        detail: 'Double-sided modern executive business card design ready for high-resolution printing.',
        features: ['Double-Sided Custom Layout', '300 DPI Print-Ready CMYK PDF', 'Modern Minimalist or Luxury Styling']
      },
      {
        id: 'gd-3',
        name: 'Social Media Post',
        prices: { PKR: 'PKR 500', USD: '$12', GBP: '£10', SAR: 'SAR 50', AED: 'AED 50' },
        detail: 'Single high-resolution custom post graphic styled to match your visual brand identity.',
        features: ['Custom Sized for Instagram & Facebook', 'High-Res Web-Optimized PNG / JPG', 'Brand Colors & Font Consistency']
      },
      {
        id: 'gd-4',
        name: 'Social Media Package',
        prices: { PKR: 'PKR 5,000', USD: '$65', GBP: '£50', SAR: 'SAR 250', AED: 'AED 250' },
        detail: 'Branded visual bundle with matching story templates, post grids, and highlight covers.',
        features: ['6 Matching Post Templates', 'Instagram Highlight Icons & Banners', 'Reusable Design System Guidelines']
      },
      {
        id: 'gd-5',
        name: 'Flyer',
        prices: { PKR: 'PKR 2,000', USD: '$30', GBP: '£25', SAR: 'SAR 125', AED: 'AED 125' },
        detail: 'Promotional print and digital flyer design engineered to advertise events, offers, or products.',
        features: ['Single or Double Sided Artwork', 'Print-Ready Bleed & Margin Setup', 'Digital Social Sharing Version']
      },
      {
        id: 'gd-6',
        name: 'Brochure',
        prices: { PKR: 'PKR 3,000', USD: '$50', GBP: '£40', SAR: 'SAR 200', AED: 'AED 200' },
        detail: 'Professional corporate bi-fold or tri-fold brochure outlining your enterprise offerings.',
        features: ['Bi-Fold or Tri-Fold Multi-Page Layout', 'Organized Typography & Visual Hierarchy', 'High-Resolution CMYK Commercial Print PDF']
      },
      {
        id: 'gd-7',
        name: 'Complete Brand Identity',
        prices: { PKR: 'PKR 15,000', USD: '$250', GBP: '£200', SAR: 'SAR 1,000', AED: 'AED 1,000' },
        badge: 'Full Kit',
        detail: 'Master branding suite with logo mark, typography system, color tokens, and corporate stationery.',
        features: ['Master Logo Suite (Light & Dark)', 'Letterhead, Envelope & Business Cards', 'Official 15+ Page Brand Guidelines Guide']
      },
    ]
  },
  {
    id: 'ai-services',
    name: 'AI Services',
    icon: 'Bot',
    description: 'Chatbots, Autonomous Agents & CRM AI Integrations',
    services: [
      {
        id: 'ai-1',
        name: 'Basic Website Chatbot',
        prices: { PKR: 'PKR 15,000', USD: '$200', GBP: '£160', SAR: 'SAR 750', AED: 'AED 750' },
        detail: 'Interactive website chat widget with automated greetings, custom menu, and pre-programmed answers.',
        features: ['Embeddable Clean Chat Widget', 'Pre-Configured FAQ Navigation', 'Email Notification for Urgent Queries']
      },
      {
        id: 'ai-2',
        name: 'AI FAQ Chatbot',
        prices: { PKR: 'PKR 15,000', USD: '$250', GBP: '£200', SAR: 'SAR 950', AED: 'AED 950' },
        detail: 'ChatGPT-powered chatbot trained specifically on your company documents, pricing, and FAQs.',
        features: ['Trained on Your Custom Knowledge Base', 'Natural Language Understanding 24/7', 'Instant Answers in Multiple Languages']
      },
      {
        id: 'ai-3',
        name: 'AI Lead Generation Bot',
        prices: { PKR: 'PKR 20,000', USD: '$350', GBP: '£275', SAR: 'SAR 1,300', AED: 'AED 1,300' },
        badge: 'High ROI',
        detail: 'Autonomous assistant that engages website visitors, qualifies their budget, and captures contact info.',
        features: ['Automated Lead Qualification Dialogues', 'Contact Capture & Phone/Email Validation', 'Instant Webhook Sync to Email or Google Sheets']
      },
      {
        id: 'ai-4',
        name: 'WhatsApp Basic Bot',
        prices: { PKR: 'PKR 20,000', USD: '$350', GBP: '£275', SAR: 'SAR 1,300', AED: 'AED 1,300' },
        detail: 'Automated WhatsApp assistant with button menus, working hours responder, and catalog navigation.',
        features: ['WhatsApp Business API / Cloud Setup', 'Interactive Button & List Menus', '24/7 Auto-Reply & Live Agent Handover']
      },
      {
        id: 'ai-5',
        name: 'WhatsApp AI Chatbot',
        prices: { PKR: 'PKR 30,000', USD: '$500', GBP: '£400', SAR: 'SAR 1,900', AED: 'AED 1,900' },
        badge: 'Popular',
        detail: 'Smart AI conversational bot on WhatsApp capable of understanding complex user questions naturally.',
        features: ['OpenAI LLM Integration on WhatsApp', 'Context-Aware Multilingual Conversations', 'Smart Routing to Human Agent When Needed']
      },
      {
        id: 'ai-6',
        name: 'AI + Website + WhatsApp Integration',
        prices: { PKR: 'PKR 40,000', USD: '$700', GBP: '£550', SAR: 'SAR 2,600', AED: 'AED 2,600' },
        detail: 'Synchronized AI intelligence serving customers on your website and WhatsApp through one unified brain.',
        features: ['Unified Knowledge Base Across Channels', 'Shared Customer Chat History', 'Omnichannel Lead Capture & Alerting']
      },
      {
        id: 'ai-7',
        name: 'AI + CRM Integration',
        prices: { PKR: 'PKR 60,000', USD: '$1,000', GBP: '£800', SAR: 'SAR 3,750', AED: 'AED 3,750' },
        detail: 'AI assistant connected directly to your CRM (HubSpot, Zoho, Salesforce) to log leads and update records.',
        features: ['Direct CRM API Two-Way Connection', 'Automatic Deal & Contact Creation', 'Meeting Booking & Calendar Link Sync']
      },
      {
        id: 'ai-8',
        name: 'Custom AI Agent',
        prices: { PKR: 'PKR 100,000+', USD: '$1,500+', GBP: '£1,200+', SAR: 'SAR 5,600+', AED: 'AED 5,600+' },
        badge: 'Enterprise',
        detail: 'Autonomous enterprise AI agent equipped with function calling, database query tools, and custom workflows.',
        features: ['Multi-Step Autonomous Tool Execution', 'Private Vector Database & RAG Pipeline', 'Enterprise Privacy & Guardrails Architecture']
      },
    ]
  },
  {
    id: 'google-business',
    name: 'Google Business Profile',
    icon: 'MapPin',
    description: 'Setup, Profile Optimization, Local SEO & Monthly Management',
    services: [
      {
        id: 'gbp-1',
        name: 'Google Business Setup',
        prices: { PKR: 'PKR 3,000', USD: '$75', GBP: '£60', SAR: 'SAR 300', AED: 'AED 300' },
        detail: 'Official establishment, verification, and core business information setup on Google Maps and Search.',
        features: ['Google Maps Location Pin & Verification', 'Business Name, Category & Hours Setup', 'Phone, Website & Service Areas Configuration']
      },
      {
        id: 'gbp-2',
        name: 'Profile Optimization',
        prices: { PKR: 'PKR 5,000', USD: '$125', GBP: '£100', SAR: 'SAR 500', AED: 'AED 500' },
        detail: 'Strategic enhancement of existing listing with keyword-rich service descriptions and visual media.',
        features: ['High-Ranking Local Keyword Integration', 'Complete Services & Products Catalog Entry', 'Cover Photo, Logo & Geo-Tagged Image Uploads']
      },
      {
        id: 'gbp-3',
        name: 'Setup + Optimization',
        prices: { PKR: 'PKR 7,500', USD: '$175', GBP: '£140', SAR: 'SAR 650', AED: 'AED 650' },
        badge: 'Recommended',
        detail: 'End-to-end package covering brand-new listing verification plus complete search optimization.',
        features: ['Complete Verification Assistance', 'Full Keyword & Category Optimization', 'Initial Batch of 10+ Branded Visuals']
      },
      {
        id: 'gbp-4',
        name: 'Google Business + Local SEO',
        prices: { PKR: 'PKR 12,000', USD: '$300', GBP: '£250', SAR: 'SAR 1,100', AED: 'AED 1,100' },
        badge: 'Best Growth',
        detail: 'Dominant local visibility strategy designed to rank your business in the competitive Google Maps 3-Pack.',
        features: ['Google Maps 3-Pack Ranking Strategy', 'NAP Consistency & Local Citation Building', 'Review Generation Strategy & QR Code Setup']
      },
      {
        id: 'gbp-5',
        name: 'Monthly Management',
        prices: { PKR: 'PKR 5,000/mo', USD: '$150/mo', GBP: '£120/mo', SAR: 'SAR 550/mo', AED: 'AED 550/mo' },
        detail: 'Ongoing monthly care including weekly geo-tagged updates, review monitoring, and rank reporting.',
        features: ['4 Weekly Geo-Tagged Google Updates/Posts', 'Professional Review Monitoring & Responses', 'Monthly Keyword Impression & Call Report']
      },
    ]
  }
];
