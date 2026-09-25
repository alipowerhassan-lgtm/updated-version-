import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, X, Send, Sparkles, RefreshCw, ChevronRight, MessageCircle
} from 'lucide-react';
import { SERVICE_CATEGORIES, CURRENCIES } from '../data/pricingData';

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'bot',
    text: "👋 **Hello! Welcome to Volen Solution.**\n\nI'm your project advisor. I provide exact rates and deliverable details across our **6 departments** and **5 global currencies (PKR, USD, GBP, SAR, AED)**.\n\n**How can I assist you?** You can type any service name (e.g. *\"Logo Design\"*, *\"1-Page Landing Page\"*, *\"Meta Ads\"*, *\"WhatsApp AI Bot\"*), ask for department rates, or plan your project:",
    timestamp: 'Just now',
    chips: [
      "💰 View All 6 Departments",
      "💻 Web Development Rates",
      "📱 Digital Marketing Rates",
      "🎯 Advertising Rates",
      "🎨 Graphic Design Rates",
      "🤖 AI Chatbots & Automation",
      "📍 Google Business Profile",
      "🧮 Open Cost Calculator",
      "💬 Chat with our team on WhatsApp"
    ]
  }
];

// Helper to search exact service from official 44-service matrix
function findExactService(query) {
  const q = query.toLowerCase().trim();
  const qWords = q.split(/\s+/).filter(w => w.length > 2);

  const allServices = [];
  SERVICE_CATEGORIES.forEach(cat => {
    cat.services.forEach(srv => {
      allServices.push({ ...srv, categoryName: cat.name });
    });
  });

  // 1. Exact name match or query contains full service name
  for (const srv of allServices) {
    const sName = srv.name.toLowerCase();
    if (q === sName || q.includes(sName)) {
      return srv;
    }
  }

  // 2. Specific exact intent mappings
  if (/\blogo(\s*design)?\b/i.test(q)) return allServices.find(s => s.id === 'gd-1');
  if (/\bbusiness card\b/i.test(q)) return allServices.find(s => s.id === 'gd-2');
  if (/\b(flyer)\b/i.test(q)) return allServices.find(s => s.id === 'gd-5');
  if (/\b(brochure)\b/i.test(q)) return allServices.find(s => s.id === 'gd-6');
  if (/\b(brand identity|branding kit|branding)\b/i.test(q)) return allServices.find(s => s.id === 'gd-7');
  if (/\blanding(\s*page)?\b/i.test(q)) return allServices.find(s => s.id === 'dev-1');
  if (/\bportfolio(\s*website)?\b/i.test(q)) return allServices.find(s => s.id === 'dev-2');
  if (/\b(3-5 page|business website)\b/i.test(q)) return allServices.find(s => s.id === 'dev-3');
  if (/\b(5-8 page|professional website)\b/i.test(q)) return allServices.find(s => s.id === 'dev-4');
  if (/\bdynamic website\b/i.test(q)) return allServices.find(s => s.id === 'dev-5');
  if (/\b(cms|wordpress)\b/i.test(q)) return allServices.find(s => s.id === 'dev-6');
  if (/\be-?commerce advanced\b/i.test(q)) return allServices.find(s => s.id === 'dev-8');
  if (/\be-?commerce basic\b/i.test(q) || /\be-?commerce\b/i.test(q) || /\bonline store\b/i.test(q)) return allServices.find(s => s.id === 'dev-7');
  if (/\bcustom website\b/i.test(q) || /\bbespoke\b/i.test(q)) return allServices.find(s => s.id === 'dev-9');
  if (/\bwhatsapp ads setup\b/i.test(q)) return allServices.find(s => s.id === 'adv-2');
  if (/\bmeta ads setup\b/i.test(q) || /\bfacebook ads setup\b/i.test(q)) return allServices.find(s => s.id === 'adv-1');
  if (/\bgoogle ads setup\b/i.test(q)) return allServices.find(s => s.id === 'adv-3');
  if (/\bmeta \+ google\b/i.test(q)) return allServices.find(s => s.id === 'adv-6');
  if (/\b(posts? \+ reels|reels)\b/i.test(q)) return allServices.find(s => s.id === 'mkt-7');
  if (/\b16 posts\b/i.test(q)) return allServices.find(s => s.id === 'mkt-6');
  if (/\b12 posts\b/i.test(q)) return allServices.find(s => s.id === 'mkt-5');
  if (/\b8 posts\b/i.test(q)) return allServices.find(s => s.id === 'mkt-4');
  if (/\b1 post\b/i.test(q)) return allServices.find(s => s.id === 'mkt-3');
  if (/\bwhatsapp ai chatbot\b/i.test(q) || /\bwhatsapp bot\b/i.test(q)) return allServices.find(s => s.id === 'ai-5');
  if (/\blead (generation|gen) bot\b/i.test(q)) return allServices.find(s => s.id === 'ai-3');
  if (/\bfaq (chatbot|bot)\b/i.test(q)) return allServices.find(s => s.id === 'ai-2');
  if (/\b(basic chatbot|website chatbot)\b/i.test(q)) return allServices.find(s => s.id === 'ai-1');
  if (/\b(crm integration|crm bot)\b/i.test(q)) return allServices.find(s => s.id === 'ai-7');
  if (/\b(ai agent|autonomous agent)\b/i.test(q)) return allServices.find(s => s.id === 'ai-8');
  if (/\b(gbp setup|google business setup|google maps setup)\b/i.test(q)) return allServices.find(s => s.id === 'gbp-1');
  if (/\b(profile optimization|gbp optimization)\b/i.test(q)) return allServices.find(s => s.id === 'gbp-2');
  if (/\b(setup \+ optimization|gbp bundle)\b/i.test(q)) return allServices.find(s => s.id === 'gbp-3');
  if (/\b(local seo|maps 3-pack)\b/i.test(q)) return allServices.find(s => s.id === 'gbp-4');
  if (/\b(gbp management|monthly management)\b/i.test(q)) return allServices.find(s => s.id === 'gbp-5');

  // 3. Substring matching in service name
  for (const srv of allServices) {
    const sName = srv.name.toLowerCase();
    if (sName.includes(q)) {
      return srv;
    }
  }

  // 4. Overlap scoring
  let bestMatch = null;
  let maxScore = 0;
  for (const srv of allServices) {
    const sTokens = srv.name.toLowerCase().split(/\s+/);
    let score = 0;
    for (const w of qWords) {
      if (sTokens.some(tok => tok.includes(w) || w.includes(tok))) {
        score++;
      }
    }
    if (score > maxScore && score >= 2) {
      maxScore = score;
      bestMatch = srv;
    }
  }

  return bestMatch;
}

// Helper to search entire department category
function findCategory(query) {
  const q = query.toLowerCase().trim();
  if (/(web development|development department|web dev|web design|website|software)/i.test(q) && !/marketing|ads|seo|logo/i.test(q)) {
    return SERVICE_CATEGORIES.find(c => c.id === 'development');
  }
  if (/(digital marketing|social media|post packages|reels|social)/i.test(q) && !/advertising|ads/i.test(q)) {
    return SERVICE_CATEGORIES.find(c => c.id === 'marketing');
  }
  if (/(advertising|meta ads|google ads|whatsapp ads|ad campaign|ppc|ad management)/i.test(q)) {
    return SERVICE_CATEGORIES.find(c => c.id === 'advertising');
  }
  if (/(graphic design|graphics|branding|logo|business card|flyer|brochure)/i.test(q) && !/web|development/i.test(q)) {
    return SERVICE_CATEGORIES.find(c => c.id === 'graphic-design');
  }
  if (/(ai services|chatbot|chatbots|ai bot|whatsapp bot|automation|autonomous agent)/i.test(q)) {
    return SERVICE_CATEGORIES.find(c => c.id === 'ai-services');
  }
  if (/(google business profile|google business|local seo|google maps|gbp)/i.test(q)) {
    return SERVICE_CATEGORIES.find(c => c.id === 'google-business');
  }
  return null;
}

// Helper to cleanly render bold text and links from markdown-like responses
function renderFormattedMessage(text) {
  const lines = text.split('\n');
  return lines.map((line, lineIdx) => {
    if (!line.trim()) {
      return <div key={lineIdx} className="h-1.5" />;
    }

    const regex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(line)) !== null) {
      if (match.index > lastIndex) {
        parts.push(line.substring(lastIndex, match.index));
      }
      const token = match[0];
      if (token.startsWith('**') && token.endsWith('**')) {
        parts.push(
          <strong key={match.index} className="font-bold text-slate-900">
            {token.slice(2, -2)}
          </strong>
        );
      } else if (token.startsWith('[') && token.includes('](')) {
        const label = token.substring(1, token.indexOf(']('));
        const url = token.substring(token.indexOf('](') + 2, token.length - 1);
        parts.push(
          <a
            key={match.index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 hover:text-sky-700 underline font-semibold transition-colors"
          >
            {label}
          </a>
        );
      }
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < line.length) {
      parts.push(line.substring(lastIndex));
    }

    return (
      <div key={lineIdx} className="min-h-[1.25em]">
        {parts.length > 0 ? parts : line}
      </div>
    );
  });
}

export default function VolenAIAssistant({ onOpenTracker, onOpenCalculator, onRequestProposal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [consultation, setConsultation] = useState({
    active: false,
    step: 0,
    projectType: '',
    features: '',
    design: '',
    timeline: '',
    lastPlan: null
  });
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Direct Action Shortcuts
    if ((query === "Open Cost Calculator" || query === "🧮 Open Cost Calculator") && onOpenCalculator) {
      setTimeout(() => {
        setIsTyping(false);
        onOpenCalculator();
        setIsOpen(false);
      }, 400);
      return;
    }
    if ((query === "Track a demo project" || query === "Project Tracker") && onOpenTracker) {
      setTimeout(() => {
        setIsTyping(false);
        onOpenTracker();
        setIsOpen(false);
      }, 400);
      return;
    }
    if ((query === "Request Technical Proposal" || query === "📄 Request Formal Technical Proposal" || query.includes("Formal Technical Proposal")) && onRequestProposal) {
      setTimeout(() => {
        setIsTyping(false);
        onRequestProposal(consultation.projectType ? `Custom ${consultation.projectType} Proposal` : undefined);
        setIsOpen(false);
      }, 400);
      return;
    }
    if (query === "Talk to an engineer on WhatsApp" || query === "💬 Chat with our team on WhatsApp") {
      window.open("https://wa.me/?text=Hello%20Volen%20Solution,%20I%20would%20like%20to%20consult%20an%20engineer%20about%20my%20project.", "_blank");
    }
    if (query.includes("Open WhatsApp with this Plan Pre-Filled")) {
      const plan = consultation.lastPlan;
      const text = plan
        ? `Hello Volen Solution! I finalized my website plan with Volen AI:%0A%0A• Project: ${encodeURIComponent(plan.projectType)}%0A• Features: ${encodeURIComponent(plan.features)}%0A• Design: ${encodeURIComponent(plan.design)}%0A• Timeline: ${encodeURIComponent(plan.timeline)}%0A• Budget: ${encodeURIComponent(plan.pkrBudget)} / ${encodeURIComponent(plan.usdBudget)}%0A%0AI would like to schedule kickoff.`
        : `Hello Volen Solution, I would like to consult an engineer about my project.`;
      window.open(`https://wa.me/?text=${text}`, "_blank");
    }
    if (query === "🔄 Plan Another Website" || query === "Plan Another Project") {
      setConsultation({
        active: true,
        step: 1,
        projectType: '',
        features: '',
        design: '',
        timeline: '',
        lastPlan: null
      });
      setTimeout(() => {
        const botMsg = {
          id: Date.now() + 1,
          sender: 'bot',
          text: `What type of website would you like to plan? Select an option:`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          chips: [
            "🛍️ E-Commerce & Online Store",
            "🏢 Corporate & Business Showcase",
            "🚀 Custom SaaS / Web Portal",
            "🎯 High-Conversion Landing Page",
            "💼 Portfolio & Creative Agency"
          ]
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
      }, 400);
      return;
    }

    // Checking if user is triggering interactive website planning
    const isPlanTrigger = /(plan my website|i\s*(want|need|require|looking for)\s*(a|an)?\s*(new)?\s*(website|web site|site|app|web app|store|ecommerce|e-commerce|platform|software|landing)|build\s*(me)?\s*(a|an)?\s*(website|site|store|app)|make\s*(me)?\s*(a|an)?\s*(website|site|store|app))/i.test(query);

    setTimeout(() => {
      // 1. If currently in interactive consultation flow:
      if (consultation.active) {
        // Step 1: Project Type
        if (consultation.step === 1) {
          let chosenType = query.replace(/[^\w\s-]/gi, '').trim();
          if (/ecommerce|e-commerce|store|shop|sell online/i.test(query)) chosenType = 'E-Commerce & Online Store';
          else if (/saas|startup|mvp|platform|web app/i.test(query)) chosenType = 'Custom SaaS / Web Application';
          else if (/corporate|business|company/i.test(query)) chosenType = 'Corporate & Business Showcase';
          else if (/landing|funnel|single page/i.test(query)) chosenType = 'High-Conversion Landing Page';
          else if (/portfolio|agency|showcase/i.test(query)) chosenType = 'Creative Portfolio / Agency';

          setConsultation((prev) => ({ ...prev, step: 2, projectType: chosenType }));

          let featureChips = [
            "Multi-Gateway Checkout (Stripe, JazzCash, COD)",
            "Inventory Sync & Dispatch Portal",
            "Customer Accounts & Order Tracking",
            "Complete Turnkey Store"
          ];

          if (chosenType.includes('SaaS')) {
            featureChips = [
              "Multi-Tier Auth & Role-Based Access (RBAC)",
              "Stripe Recurring Subscription Billing",
              "Interactive Analytics & Admin Dashboard",
              "Complete MVP Architecture"
            ];
          } else if (chosenType.includes('Corporate')) {
            featureChips = [
              "Appointment Booking System",
              "Multi-Language & Case Studies Hub",
              "WhatsApp CRM Lead Routing",
              "Full Corporate Business Suite"
            ];
          } else if (chosenType.includes('Landing')) {
            featureChips = [
              "Sub-Second Load Speed (Lighthouse 90+)",
              "3-Second Instant WhatsApp & CRM Routing",
              "Meta Pixel & GA4 Conversion Tracking",
              "Complete High-Conversion Funnel"
            ];
          } else if (chosenType.includes('Portfolio')) {
            featureChips = [
              "Interactive 3D / WebGL Showcase",
              "Project Case Studies & Client Reviews",
              "Direct Inquiry & Booking Form",
              "Complete Agency Portfolio"
            ];
          }

          const botMsg = {
            id: Date.now() + 1,
            sender: 'bot',
            text: `Selected: **${chosenType}**.\n\nWhat core features must this project include?`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            chips: featureChips
          };
          setMessages((prev) => [...prev, botMsg]);
          setIsTyping(false);
          return;
        }

        // Step 2: Features
        if (consultation.step === 2) {
          setConsultation((prev) => ({ ...prev, step: 3, features: query }));

          const botMsg = {
            id: Date.now() + 1,
            sender: 'bot',
            text: `Recorded features: **${query}**.\n\nWhat design style best fits your brand?`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            chips: [
              "⚡ Ultra-Modern & Cyber-Grade",
              "🎨 Clean Minimalist & Luxury",
              "🔥 High-Volume Retail & Dynamic",
              "📱 Mobile-First App-Like"
            ]
          };
          setMessages((prev) => [...prev, botMsg]);
          setIsTyping(false);
          return;
        }

        // Step 3: Design
        if (consultation.step === 3) {
          setConsultation((prev) => ({ ...prev, step: 4, design: query }));

          const botMsg = {
            id: Date.now() + 1,
            sender: 'bot',
            text: `Selected style: **${query}**.\n\nWhat is your target launch timeline?`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            chips: [
              "⚡ Priority Sprint (1–2 Weeks)",
              "📅 Standard Agile Delivery (3–4 Weeks)",
              "⏳ Flexible Timeline (1–2 Months)"
            ]
          };
          setMessages((prev) => [...prev, botMsg]);
          setIsTyping(false);
          return;
        }

        // Step 4: Timeline ➔ Synthesize Architectural Plan & Budget!
        if (consultation.step === 4) {
          const type = consultation.projectType || 'Custom Web Platform';
          const feats = consultation.features || 'Full Feature Suite';
          const des = consultation.design || 'Modern Cyber-Grade';
          const time = query;

          let pkrBudget = 'PKR 45,000 – 70,000';
          let usdBudget = '$499 – $799';
          let gbpBudget = '£449 – £699';
          let sarBudget = 'SAR 2,000 – 3,000';
          let aedBudget = 'AED 1,499 – 2,499';
          let sprintWeeks = '3–4 weeks';

          if (/saas|mvp|app/i.test(type)) {
            pkrBudget = 'PKR 85,000 – 150,000+';
            usdBudget = '$999 – $1,800+';
            gbpBudget = '£899 – £1,500+';
            sarBudget = 'SAR 4,000 – 7,000+';
            aedBudget = 'AED 3,499 – 6,500+';
            sprintWeeks = '4–6 weeks';
          } else if (/landing|funnel/i.test(type)) {
            pkrBudget = 'PKR 8,000 – 15,000';
            usdBudget = '$99 – $175';
            gbpBudget = '£79 – £140';
            sarBudget = 'SAR 350 – 650';
            aedBudget = 'AED 299 – 599';
            sprintWeeks = '1 week';
          } else if (/corporate|business/i.test(type)) {
            pkrBudget = 'PKR 18,000 – 25,000';
            usdBudget = '$199 – $299';
            gbpBudget = '£159 – £219';
            sarBudget = 'SAR 750 – 1,000';
            aedBudget = 'AED 499 – 699';
            sprintWeeks = '2–3 weeks';
          } else if (/portfolio|agency/i.test(type)) {
            pkrBudget = 'PKR 12,000 – 20,000';
            usdBudget = '$149 – $250';
            gbpBudget = '£119 – £200';
            sarBudget = 'SAR 500 – 850';
            aedBudget = 'AED 399 – 750';
            sprintWeeks = '1–2 weeks';
          }

          const planData = {
            projectType: type,
            features: feats,
            design: des,
            timeline: time,
            pkrBudget,
            usdBudget,
            gbpBudget,
            sarBudget,
            aedBudget,
            sprintWeeks
          };

          setConsultation({
            active: false,
            step: 0,
            projectType: type,
            features: feats,
            design: des,
            timeline: time,
            lastPlan: planData
          });

          const planResponse = `📋 **Exact Project Plan & Estimate**

🎯 **Scope:** ${type}
⚙️ **Features:** ${feats}
🎨 **Design:** ${des}
⏱️ **Timeline:** ${time} (${sprintWeeks})

💰 **Exact Rates Across 5 Currencies:**
• 🇵🇰 PKR: **${pkrBudget}**
• 🇺🇸 USD: **${usdBudget}**
• 🇬🇧 GBP: **${gbpBudget}**
• 🇸🇦 SAR: **${sarBudget}**
• 🇦🇪 AED: **${aedBudget}**

🛠️ **Engineering Architecture:**
• Frontend: React 19 / Next.js 15, TailwindCSS 4, sub-second load times
• Backend: Node.js (NestJS / Express) or Python (FastAPI)
• Database & Cloud: PostgreSQL, Redis, Cloudflare Edge CDN & AWS
• Security: SSL A+ Grade, OWASP Top 10 mitigation

🛡️ **Payment Framework (50/30/20 Safe Policy):**
• 50% Advance Kickoff (Sprint 1 & Git repository creation)
• 30% Milestone Review (Staging test link QA sign-off)
• 20% Handover (Live release, domain pointing & 100% IP code transfer)`;

          const botMsg = {
            id: Date.now() + 1,
            sender: 'bot',
            text: planResponse,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            chips: [
              "📲 Open WhatsApp with this Plan Pre-Filled",
              "📄 Request Formal Technical Proposal",
              "🧮 Open Cost Calculator",
              "🔄 Plan Another Website"
            ]
          };
          setMessages((prev) => [...prev, botMsg]);
          setIsTyping(false);
          return;
        }
      }

      // 2. Cold-start Planning Trigger:
      if (isPlanTrigger) {
        let prefilledType = '';
        if (/ecommerce|e-commerce|store|shop|sell online/i.test(query)) prefilledType = 'E-Commerce & Online Store';
        else if (/saas|startup|mvp|platform|web app/i.test(query)) prefilledType = 'Custom SaaS / Web Application';
        else if (/corporate|business|company/i.test(query)) prefilledType = 'Corporate & Business Showcase';
        else if (/landing|funnel|single page/i.test(query)) prefilledType = 'High-Conversion Landing Page';
        else if (/portfolio|agency|showcase/i.test(query)) prefilledType = 'Creative Portfolio / Agency';

        if (prefilledType) {
          setConsultation({
            active: true,
            step: 2,
            projectType: prefilledType,
            features: '',
            design: '',
            timeline: '',
            lastPlan: null
          });

          let featureChips = [
            "Multi-Gateway Checkout (Stripe, JazzCash, COD)",
            "Inventory Sync & Dispatch Portal",
            "Customer Accounts & Order Tracking",
            "Complete Turnkey Store"
          ];
          if (prefilledType.includes('SaaS')) {
            featureChips = [
              "Multi-Tier Auth & Role-Based Access (RBAC)",
              "Stripe Recurring Subscription Billing",
              "Interactive Analytics & Admin Dashboard",
              "Complete MVP Architecture"
            ];
          }

          const botMsg = {
            id: Date.now() + 1,
            sender: 'bot',
            text: `Selected: **${prefilledType}**.\n\nWhat core features will your project need?`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            chips: featureChips
          };
          setMessages((prev) => [...prev, botMsg]);
          setIsTyping(false);
          return;
        }

        // Start from step 1
        setConsultation({
          active: true,
          step: 1,
          projectType: '',
          features: '',
          design: '',
          timeline: '',
          lastPlan: null
        });

        const botMsg = {
          id: Date.now() + 1,
          sender: 'bot',
          text: `What kind of website would you like to build? Select below:`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          chips: [
            "🛍️ E-Commerce & Online Store",
            "🏢 Corporate & Business Showcase",
            "🚀 Custom SaaS / Web Portal",
            "🎯 High-Conversion Landing Page",
            "💼 Portfolio & Creative Agency"
          ]
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
        return;
      }

      // 3. EXACT SERVICE LOOKUP (Checks all 44 services)
      const cleanQuery = query.replace(/[^\w\s-]/gi, ' ').trim();
      const exactService = findExactService(cleanQuery);

      if (exactService) {
        const replyText = `📋 **Exact Service Details: ${exactService.name}**
📁 **Department:** ${exactService.categoryName}

💰 **Official Rates Across 5 Currencies:**
• 🇵🇰 PKR: **${exactService.prices.PKR}**
• 🇺🇸 USD: **${exactService.prices.USD}**
• 🇬🇧 GBP: **${exactService.prices.GBP}**
• 🇸🇦 SAR: **${exactService.prices.SAR}**
• 🇦🇪 AED: **${exactService.prices.AED}**

📝 **Deliverable Details:**
${exactService.detail}

✅ **What's Included:**
${exactService.features.map(f => `• ${f}`).join('\n')}

🛡️ **Payment Framework:**
Volen 50/30/20 Safe Policy (50% Advance Kickoff | 30% Staging QA Review | 20% Handover & 100% Code Ownership).`;

        const botMsg = {
          id: Date.now() + 1,
          sender: 'bot',
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          chips: [
            "🧮 Open Cost Calculator",
            "📄 Request Formal Technical Proposal",
            "💬 Chat with our team on WhatsApp",
            "💰 View All 6 Departments"
          ]
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
        return;
      }

      // 4. DEPARTMENT / CATEGORY LOOKUP (Lists exact rates for all services in category)
      const exactCategory = findCategory(cleanQuery);
      if (exactCategory) {
        const servicesList = exactCategory.services.map((s, idx) => 
          `${idx + 1}. **${s.name}**\n   • Rates: **${s.prices.PKR}** | **${s.prices.USD}** | **${s.prices.GBP}** | **${s.prices.SAR}** | **${s.prices.AED}**\n   • Deliverable: ${s.detail}`
        ).join('\n\n');

        const replyText = `📋 **${exactCategory.name} — Official Rate Matrix:**\n*${exactCategory.description}*\n\n${servicesList}\n\n🛡️ **Payment Terms:** Volen 50/30/20 Safe Policy & 100% Client Code/Asset Ownership.`;

        const botMsg = {
          id: Date.now() + 1,
          sender: 'bot',
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          chips: [
            "🧮 Open Cost Calculator",
            "📄 Request Formal Technical Proposal",
            "💬 Chat with our team on WhatsApp",
            "💰 View All 6 Departments"
          ]
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
        return;
      }

      // 5. ALL DEPARTMENTS / OVERVIEW OF ALL PRICING
      if (/(all|pricing|rates|departments|categories|services|what do you do|cost)/i.test(cleanQuery)) {
        const replyText = `💰 **Volen Solution — 6 Service Departments & Official Starting Rates:**

1. 💻 **Development Department (9 Services)**
   • 1-Page Landing Page to Custom E-Commerce & Web Apps
   • Rates: PKR 8,000 – 85,000+ | $99 – $999+ | £79 – £899+ | SAR 350 – 4,000+ | AED 299 – 3,499+

2. 📱 **Digital Marketing (9 Services)**
   • Social Media Setup (FB/IG/WhatsApp), 1–16 Monthly Posts, Reels & Full Management
   • Rates: PKR 500 – 45,000/mo | $15 – $600/mo | £12 – $500/mo | SAR 50 – 2,200/mo | AED 50 – 2,200/mo

3. 🎯 **Advertising (7 Services)**
   • Meta (FB/IG), WhatsApp & Google Ads Setup and Monthly Optimization
   • Setup: PKR 5,000 – 9,500 | $75 – $125
   • Management: PKR 10,000 – 20,000/mo | $200 – $400/mo

4. 🎨 **Graphic Design (7 Services)**
   • Vector Logos, Business Cards, Social Bundles, Flyers, Brochures & Brand Identity Kits
   • Rates: PKR 500 – 15,000 | $12 – $250 | £10 – £200 | SAR 50 – 1,000 | AED 50 – 1,000

5. 🤖 **AI Services (8 Services)**
   • Website FAQ Chatbots, Lead Generation Bots, WhatsApp AI Bots & Custom AI Agents
   • Rates: PKR 15,000 – 100,000+ | $200 – $1,500+ | £160 – £1,200+ | SAR 750 – 5,600+ | AED 750 – 5,600+

6. 📍 **Google Business Profile (5 Services)**
   • Profile Setup, Search Optimization, Bundle, Local SEO & Monthly Updates
   • Rates: PKR 3,000 – 12,000 | $75 – $300 | £60 – £250 | SAR 300 – 1,100 | AED 300 – 1,100

🛡️ **All projects are governed by our transparent 50/30/20 Safe Milestone Policy.** Type any service name for exact details!`;

        const botMsg = {
          id: Date.now() + 1,
          sender: 'bot',
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          chips: [
            "💻 Web Development Rates",
            "📱 Digital Marketing Rates",
            "🎯 Advertising Rates",
            "🎨 Graphic Design Rates",
            "🤖 AI Chatbots & Automation",
            "📍 Google Business Profile"
          ]
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
        return;
      }

      // 6. GREETINGS & CASUAL CONVERSATION
      if (/^(hi|hello|hey|salam|assalam|aoa|greetings|good\s*(morning|afternoon|evening)|how\s*are\s*you|who\s*are\s*you)/i.test(cleanQuery)) {
        const replyText = `👋 **Hello! Great to connect with you.**

I am your project advisor at Volen Solution. I provide exact rates and deliverable details across our **6 departments**:
1. 💻 Web & App Development
2. 📱 Digital Marketing & Posts
3. 🎯 Meta, Google & WhatsApp Advertising
4. 🎨 Graphic Design & Branding
5. 🤖 AI Chatbots & Automation
6. 📍 Google Business Profile & Local SEO

Which service or department would you like exact rates and deliverables for?`;

        const botMsg = {
          id: Date.now() + 1,
          sender: 'bot',
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          chips: [
            "💰 View All 6 Departments",
            "💻 Web Development Rates",
            "📱 Digital Marketing Rates",
            "🎯 Advertising Rates",
            "🧮 Open Cost Calculator",
            "💬 Chat with our team on WhatsApp"
          ]
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
        return;
      }

      // 7. COMPLIMENTS & THANKS
      if (/^(thanks|thank you|thx|great|awesome|perfect|helpful|cool|nice)/i.test(cleanQuery)) {
        const replyText = `You're very welcome! 😊 Let me know if you need exact details on any other service, want to test the **Cost Calculator**, or wish to talk directly with our team on WhatsApp.`;
        const botMsg = {
          id: Date.now() + 1,
          sender: 'bot',
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          chips: [
            "🧮 Open Cost Calculator",
            "💰 View All 6 Departments",
            "💬 Chat with our team on WhatsApp"
          ]
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
        return;
      }

      // 8. 50/30/20 POLICY & PAYMENT TERMS
      if (/(policy|safe|advance|payment|milestone|50\/30\/20|guarantee|terms)/i.test(cleanQuery)) {
        const replyText = `🛡️ **Volen Solution 50/30/20 Safe Milestone Policy:**

1. **50% Advance Kickoff:** Formalizes Sprint 1, creates your private Git repository, and initiates technical design.
2. **30% Milestone Staging Review:** Billed ONLY after staging server deployment, client hands-on testing, and revision sign-off.
3. **20% Final Handover:** Billed upon production DNS release, SSL A+ audit, and complete intellectual property & repository transfer.

✅ **100% Code Ownership:** Full source code, database access, design vector files, and deployment keys are transferred directly to you.`;

        const botMsg = {
          id: Date.now() + 1,
          sender: 'bot',
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          chips: [
            "💰 View All 6 Departments",
            "🧮 Open Cost Calculator",
            "📄 Request Formal Technical Proposal",
            "💬 Chat with our team on WhatsApp"
          ]
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
        return;
      }

      // 9. CURRENCY SUPPORT
      if (/(currency|currencies|usd|pkr|gbp|sar|aed|dollar|riyal|dirham|pound)/i.test(cleanQuery)) {
        const replyText = `🌍 **Supported Currencies & Payment Methods:**

• 🇵🇰 **Pakistan (PKR):** Raast, Bank Transfer, JazzCash, EasyPaisa
• 🇺🇸 **United States & Global (USD $):** Stripe, Payoneer, Wise, Wire Transfer
• 🇬🇧 **United Kingdom (GBP £):** UK Faster Payments, Wise, Stripe
• 🇸🇦 **Saudi Arabia (SAR):** Local Saudi Bank Transfer, Wise, Card Payment
• 🇦🇪 **United Arab Emirates (AED):** UAE Bank Transfer, Stripe, Wise

All rates are fixed and itemized with no hidden currency conversion surcharges.`;

        const botMsg = {
          id: Date.now() + 1,
          sender: 'bot',
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          chips: [
            "💰 View All 6 Departments",
            "🧮 Open Cost Calculator",
            "💬 Chat with our team on WhatsApp"
          ]
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
        return;
      }

      // 10. HUMAN / WHATSAPP / CONTACT
      if (/(whatsapp|call|phone|human|contact|talk|consultant|meet|office)/i.test(cleanQuery)) {
        const replyText = `📞 **Connect with our Engineering & Project Team:**

• **WhatsApp:** [Click here to open WhatsApp](https://wa.me/?text=Hello%20Volen%20Solution,%20I%20would%20like%20to%20consult%20an%20engineer%20about%20my%20project.)
• **Response Window:** Under 15 minutes during operational hours.
• **Format:** 1-on-1 discovery, technical requirement analysis, and formal written estimate.`;

        const botMsg = {
          id: Date.now() + 1,
          sender: 'bot',
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          chips: [
            "🧮 Open Cost Calculator",
            "📄 Request Formal Technical Proposal",
            "💰 View All 6 Departments"
          ]
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
        return;
      }

      // DEFAULT FALLBACK: DIRECT, EXACT, RELEVANT
      const defaultText = `I understand you're asking about: *"${query}"*.

To provide exact rates and deliverables, please select a department or type a specific service name:
• 💻 **Development:** Landing Page, Portfolio, Business Site, E-Commerce, Custom App
• 📱 **Marketing:** Social Setup, 1–16 Monthly Posts, Reels, Full Management
• 🎯 **Advertising:** Meta Ads, Google Ads, WhatsApp Ads
• 🎨 **Graphic Design:** Logo, Business Card, Flyer, Brochure, Complete Brand Identity
• 🤖 **AI Services:** Website Chatbot, FAQ Bot, Lead Gen Bot, WhatsApp AI Bot, AI Agent
• 📍 **Google Business:** Profile Setup, Optimization, Local SEO, Monthly Updates`;

      const defaultMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: defaultText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        chips: [
          "💰 View All 6 Departments",
          "💻 Web Development Rates",
          "📱 Digital Marketing Rates",
          "🎯 Advertising Rates",
          "🎨 Graphic Design Rates",
          "🤖 AI Chatbots & Automation",
          "📍 Google Business Profile",
          "🧮 Open Cost Calculator"
        ]
      };
      setMessages((prev) => [...prev, defaultMsg]);
      setIsTyping(false);
    }, 350);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Chat Window */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[420px] h-[550px] max-h-[84vh] bg-white rounded-3xl border border-sky-300 shadow-2xl shadow-sky-950/25 flex flex-col overflow-hidden mb-3 animate-in fade-in slide-in-from-bottom-6 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 px-4 py-3.5 text-white flex items-center justify-between border-b border-sky-500/20 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center text-slate-950 shadow-md">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 border-2 border-slate-950 rounded-full animate-pulse"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm tracking-tight text-white">Volen AI Assistant</h3>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 font-mono font-bold border border-sky-400/30">
                    Online
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">Exact Rates & Department Guide</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  setMessages(INITIAL_MESSAGES);
                  setConsultation({
                    active: false,
                    step: 0,
                    projectType: '',
                    features: '',
                    design: '',
                    timeline: '',
                    lastPlan: null
                  });
                }}
                title="Reset Conversation"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close Chat"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Tool Navigation Bar */}
          <div className="px-3 py-1.5 bg-sky-50/70 border-b border-sky-100 flex items-center justify-between text-[11px] text-slate-600 shrink-0">
            <span className="font-semibold text-sky-800 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-sky-600" />
              <span>Quick Actions:</span>
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenCalculator && onOpenCalculator();
                }}
                className="px-2 py-0.5 rounded bg-white hover:bg-sky-100 border border-sky-200 text-sky-700 font-bold transition-colors cursor-pointer"
              >
                Calculator
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenTracker && onOpenTracker();
                }}
                className="px-2 py-0.5 rounded bg-white hover:bg-sky-100 border border-sky-200 text-sky-700 font-bold transition-colors cursor-pointer"
              >
                Project Tracker
              </button>
              <button
                onClick={() => {
                  window.open("https://wa.me/?text=Hello%20Volen%20Solution,%20I%20would%20like%20to%20consult%20an%20engineer%20about%20my%20project.", "_blank");
                }}
                className="px-2 py-0.5 rounded bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-700 font-bold transition-colors cursor-pointer flex items-center gap-1"
              >
                <MessageCircle className="w-3 h-3" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Message Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/40 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 shadow-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-tr-none'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none'
                  }`}
                >
                  {msg.sender === 'bot' ? (
                    <div className="space-y-1">{renderFormattedMessage(msg.text)}</div>
                  ) : (
                    <div className="whitespace-pre-line">{msg.text}</div>
                  )}
                  <div
                    className={`text-[9px] mt-1 text-right ${
                      msg.sender === 'user' ? 'text-sky-200' : 'text-slate-400'
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>

                {/* Optional Chips below Bot response */}
                {msg.chips && msg.chips.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5 max-w-[95%]">
                    {msg.chips.map((chip, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(chip)}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-white hover:bg-sky-50 text-sky-700 border border-sky-200 shadow-2xs font-semibold hover:border-sky-400 transition-all text-left cursor-pointer flex items-center gap-1"
                      >
                        <span>{chip}</span>
                        <ChevronRight className="w-3 h-3 text-sky-400 shrink-0" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 text-slate-400 text-xs px-3 py-2 bg-white border border-slate-200 rounded-2xl w-fit">
                <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                <span className="text-[11px] font-semibold text-slate-500 ml-1">Fetching exact details...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask for exact rates (e.g. 'Logo Design', 'Landing Page')..."
              className="flex-1 px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-800 placeholder:text-slate-400"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-xs"
              aria-label="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white shadow-xl shadow-sky-950/30 hover:shadow-sky-500/25 hover:-translate-y-0.5 active:translate-y-0 border border-sky-400/30 transition-all duration-200 cursor-pointer"
        aria-label="Open Volen AI Assistant"
      >
        <div className="relative">
          <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-sky-400 to-cyan-400 text-slate-950 flex items-center justify-center font-bold shadow-md">
            <Bot className="w-4 h-4" />
          </div>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 border-2 border-slate-950 rounded-full animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 border-2 border-slate-950 rounded-full"></span>
        </div>

        <div className="text-left hidden sm:block">
          <div className="text-xs font-black tracking-tight leading-tight flex items-center gap-1.5">
            <span>Volen AI Assistant</span>
            <span className="px-1.5 py-0.2 rounded text-[9px] bg-sky-500/20 text-sky-300 border border-sky-400/30">Live</span>
          </div>
          <div className="text-[10px] text-sky-200 font-medium leading-tight">Exact Rates & Details Guide</div>
        </div>
      </button>
    </div>
  );
}