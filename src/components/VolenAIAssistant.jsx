import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, X, Send, Sparkles, RefreshCw, ChevronRight
} from 'lucide-react';

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'bot',
    text: "👋 **Hello & Welcome to Volen Solution!**\n\nI am your Senior Technical Solutions Architect. I am trained to understand your business purpose, diagnose technical bottlenecks, and prescribe the exact software engineering solution for your project.\n\n**What is your primary goal or challenge today?**\nChoose an option below or type your project requirement directly:",
    timestamp: 'Just now',
    chips: [
      "🛍️ Launch an E-Commerce Store",
      "💡 Build a SaaS or Startup MVP",
      "📈 Get more leads & sales",
      "⚙️ Automate business operations",
      "🛡️ Redesign slow / insecure site",
      "💰 View pricing & 50/30/20 policy"
    ]
  }
];

const PRE_PROGRAMMED_KNOWLEDGE = [
  {
    // Greetings & Warm Welcome
    match: [
      /^(hi|hello|hey|salam|assalam|aoa|hola|greetings|good\s*(morning|afternoon|evening|day)|howdy|sup|yo)\b/i,
      /^how\s*are\s*you/i,
      /^who\s*are\s*you/i
    ],
    response: `👋 **Hello & Welcome to Volen Solution!**

I am your Senior Technical Solutions Architect. Whether you are launching a new digital venture, scaling existing customer sales, or automating internal operations, I am here to understand your business purpose and prescribe the exact engineering solution.

**What is your primary goal or challenge today?**
Click an option below or tell me about your project in your own words:`,
    chips: [
      "🛍️ Launch an E-Commerce Store",
      "💡 Build a SaaS or Startup MVP",
      "📈 Get more leads & sales",
      "⚙️ Automate business operations",
      "🛡️ Redesign slow / insecure site",
      "💰 View pricing & 50/30/20 policy"
    ]
  },
  {
    // E-Commerce & Online Retail Store Purpose
    match: [
      /ecommerce/i, /e-commerce/i, /store/i, /shop/i, /shopify/i, /woocommerce/i,
      /sell online/i, /amazon/i, /multi-vendor/i, /marketplace/i, /cart/i, /checkout/i, /retail/i
    ],
    response: `🎯 **Client Purpose Detected: High-Growth E-Commerce & Online Retail**

We engineer custom, high-speed storefronts designed for zero checkout drop-offs and seamless order fulfillment:

🛠️ **Tailored Engineering Solution:**
• **Modern Storefront:** React / Next.js high-speed frontend (sub-1.2s page loads for maximum conversion rates).
• **Multi-Gateway Checkout:** Automated payments via Stripe, Paymob, JazzCash, EasyPaisa & Cash-On-Delivery (COD).
• **Operational Dashboard:** Real-time stock synchronization, multi-variant matrix, bulk order dispatch portal, and automated SMS/WhatsApp alerts.
• **Security & Scale:** SSL/TLS encryption, anti-fraud rate limiting, and automated daily cloud backups.

💵 **Estimated Investment & Timeline:**
• **Local (PKR):** 120,000 – 350,000 PKR
• **International (USD):** $1,500 – $4,500 USD
• **Delivery:** 24 business days (Agile sprint staging reviews)
• **Payment Framework:** 50% Kickoff | 30% Staging QA Review | 20% Handover.`,
    chips: [
      "Open Cost Calculator",
      "What is your advance payment policy?",
      "Talk to an engineer on WhatsApp",
      "Request Technical Proposal"
    ]
  },
  {
    // SaaS MVP, Startups & Custom Web Application Purpose
    match: [
      /saas/i, /startup/i, /mvp/i, /web app/i, /custom application/i, /software/i,
      /portal/i, /platform/i, /build an app/i, /idea/i, /investor/i
    ],
    response: `🎯 **Client Purpose Detected: Scalable SaaS MVP & Custom Web Application**

We transform software ideas into investor-ready, scalable products with clean code architecture:

🛠️ **Tailored Engineering Solution:**
• **Full-Stack Architecture:** React 19 / Next.js 15 frontend paired with scalable Node.js / NestJS or Python FastAPI microservices.
• **Database & Caching:** PostgreSQL relational data model with Redis low-latency cache layer.
• **Auth & Recurring Billing:** Enterprise Role-Based Access Control (RBAC), multi-tenant JWT security, and Stripe subscription billing (recurring tiers, metered billing, invoices).
• **Code Ownership:** 100% intellectual property transfer with clean Git repositories and automated CI/CD pipelines.

💵 **Estimated Investment & Timeline:**
• **Local (PKR):** 400,000 – 1,200,000+ PKR
• **International (USD):** $3,500 – $12,000+ USD
• **Delivery:** 35 – 45 business days
• **Payment Framework:** 50% Advance | 30% Milestone Approval | 20% Final Release.`,
    chips: [
      "Request Technical Proposal",
      "Open Cost Calculator",
      "What tech stacks do you build with?",
      "Talk to an engineer on WhatsApp"
    ]
  },
  {
    // Lead Generation, Sales Funnel & Landing Page Purpose
    match: [
      /landing/i, /funnel/i, /conversion/i, /leads/i, /more leads/i, /sales page/i,
      /single page/i, /marketing page/i, /not getting sales/i, /low sales/i, /bounce/i
    ],
    response: `🎯 **Client Purpose Detected: High-Conversion Lead Funnel & Sales Growth**

We build lightning-fast, psychologically structured landing pages engineered to turn paid advertising into qualified paying customers:

🛠️ **Tailored Engineering Solution:**
• **Speed & Performance:** Sub-second page load times with Google Lighthouse 90+ score (eliminating 50%+ bounce rate on mobile ads).
• **Conversion Architecture:** Persuasive layout hierarchy, proof metrics, urgency triggers, and frictionless lead forms.
• **Instant Lead Sync:** Automated routing of leads directly to your WhatsApp Business number and CRM/Email within 3 seconds.
• **Analytics Ready:** Meta Pixel, Google Analytics 4, and server-side tracking pre-configured.

💵 **Estimated Investment & Timeline:**
• **Local (PKR):** 15,000 – 40,000 PKR
• **International (USD):** $200 – $600 USD
• **Delivery:** 5 business days
• **Payment Framework:** 50% Kickoff | 50% Live Handover.`,
    chips: [
      "Request Technical Proposal",
      "Open Cost Calculator",
      "Talk to an engineer on WhatsApp"
    ]
  },
  {
    // Business Process Automation, ERP & Custom Portals Purpose
    match: [
      /automate/i, /automation/i, /manual/i, /spreadsheet/i, /excel/i, /crm/i,
      /erp/i, /internal tool/i, /operations/i, /inventory system/i, /workflow/i, /staff portal/i
    ],
    response: `🎯 **Client Purpose Detected: Business Process Automation & Custom ERP**

We replace inefficient manual spreadsheets and messy paperwork with automated, centralized software portals:

🛠️ **Tailored Engineering Solution:**
• **Centralized Dashboard:** Cloud portal accessible securely on desktop, tablet, and mobile.
• **Role-Based Access Control:** Granular permissions for admins, department managers, field staff, and clients.
• **Automations:** Instant PDF invoice generation, automated receipt dispatch, SMS/WhatsApp order updates, and dynamic real-time reporting.
• **Integrations:** Direct sync with accounting software, Google Workspace, payment gateways, and custom REST APIs.

💵 **Estimated Investment & Timeline:**
• **Local (PKR):** 250,000 – 800,000 PKR
• **International (USD):** $2,500 – $8,000 USD
• **Delivery:** 20 – 30 business days.`,
    chips: [
      "Open Cost Calculator",
      "What is your advance payment policy?",
      "Talk to an engineer on WhatsApp"
    ]
  },
  {
    // Website Redesign, Speed Optimization & Security Hardening
    match: [
      /slow/i, /lag/i, /redesign/i, /revamp/i, /modernize/i, /outdated/i,
      /hack/i, /hacked/i, /security/i, /malware/i, /bug/i, /broken/i, /fix/i, /wordpress/i, /old site/i
    ],
    response: `🎯 **Client Purpose Detected: Website Modernization, Speed & Cyber Security**

We rescue slow, outdated, or vulnerable websites and rebuild them into cyber-grade, lightning-fast digital assets:

🛠️ **Tailored Engineering Solution:**
• **Modernization Rewrite:** Migration away from bloated, vulnerable WordPress plugins to clean React / Next.js architecture.
• **Speed Hardening:** Edge caching via Cloudflare CDN, WebP/AVIF next-gen image pipeline, and code-splitting.
• **Cyber Defense:** OWASP Top 10 mitigation, SSL/TLS A+ rating, automated DDoS filtering, and sanitized SQL/API inputs.
• **Mobile Ergonomics:** 100% fluid mobile responsiveness across all devices and screen sizes.

💵 **Estimated Investment & Timeline:**
• **Local (PKR):** 50,000 – 180,000 PKR
• **International (USD):** $500 – $2,000 USD
• **Delivery:** 7 – 14 business days.`,
    chips: [
      "Request Technical Proposal",
      "Open Cost Calculator",
      "Talk to an engineer on WhatsApp"
    ]
  },
  {
    // Mobile App Development (iOS & Android)
    match: [
      /mobile/i, /android/i, /ios/i, /app/i, /react native/i, /flutter/i, /play store/i, /app store/i, /iphone/i
    ],
    response: `🎯 **Client Purpose Detected: Mobile Application Engineering (iOS & Android)**

We develop sleek, native-feel mobile applications that engage users directly on their smartphones:

🛠️ **Tailored Engineering Solution:**
• **Cross-Platform:** Single high-performance codebase for iOS and Android using React Native.
• **Native Features:** Biometric authentication (FaceID/Fingerprint), push notification campaigns, offline data caching, and GPS/camera integrations.
• **Store Deployment:** Complete handling of Apple App Store and Google Play Store compliance, review, and publishing.

💵 **Estimated Investment & Timeline:**
• **Local (PKR):** 300,000 – 900,000 PKR
• **International (USD):** $3,000 – $9,000 USD
• **Delivery:** 30 – 45 business days.`,
    chips: [
      "Request Technical Proposal",
      "Open Cost Calculator",
      "Talk to an engineer on WhatsApp"
    ]
  },
  {
    // AI Integration, Custom Chatbots & Agents
    match: [
      /ai/i, /artificial intelligence/i, /chatbot/i, /bot/i, /llm/i, /gpt/i, /agent/i, /customer support/i
    ],
    response: `🎯 **Client Purpose Detected: AI Assistant & Intelligent Automation**

We build intelligent AI agents that automate customer inquiries, qualify high-value leads, and accelerate business operations:

🛠️ **Tailored Engineering Solution:**
• **Custom AI Agents:** Knowledge-grounded RAG bots trained specifically on your company's documents, product catalog, and service policies.
• **Omnichannel Embedding:** Deployed directly on your website or integrated into WhatsApp Business API.
• **Staff Escalation:** Smooth handoff logic that notifies your sales team when a prospect is ready to close.

💵 **Estimated Investment & Timeline:**
• **Local (PKR):** 80,000 – 250,000 PKR
• **International (USD):** $800 – $3,000 USD
• **Delivery:** 10 – 18 business days.`,
    chips: [
      "Request Technical Proposal",
      "Open Cost Calculator",
      "Talk to an engineer on WhatsApp"
    ]
  },
  {
    // 50/30/20 Customer Policy & Payment Safety
    match: [
      /policy/i, /advance/i, /milestone/i, /payment/i, /50%/i, /50\/30\/20/i,
      /contract/i, /refund/i, /guarantee/i, /safe/i, /trust/i, /terms/i, /scam/i, /risk/i
    ],
    response: `🛡️ **Volen Solution Zero-Risk Milestone Framework (50/30/20):**

We operate on a strictly transparent milestone structure to guarantee client peace of mind:

1. **50% Advance Kickoff:** Formalizes Sprint 1, creates private Git repositories, and initiates PRD technical specification.
2. **30% Client QA & Staging Milestone:** Billed ONLY after full staging server deployment, client hands-on testing, and revision sign-off.
3. **20% Production Handover:** Billed upon live production DNS release, SSL A+ audit, and complete intellectual property & repository transfer.

✅ **100% Client Code Ownership:** Zero vendor lock-in. Full source code, database credentials, and deployment keys are transferred directly to you.`,
    chips: [
      "Track a demo project",
      "Request Technical Proposal",
      "Open Cost Calculator",
      "Talk to an engineer on WhatsApp"
    ]
  },
  {
    // Pricing, Rates & Quotations
    match: [
      /cost/i, /price/i, /pricing/i, /quote/i, /quotation/i, /rates/i,
      /charges/i, /how much/i, /pkr/i, /usd/i, /dollar/i, /budget/i, /cheap/i, /expensive/i
    ],
    response: `💰 **Transparent Investment Guide (Dual-Currency):**

• **Landing Pages & Sales Funnels:** 15,000 – 40,000 PKR ($200 – $600 USD) | 5 Days
• **E-Commerce & Online Stores:** 120,000 – 350,000 PKR ($1,500 – $4,500 USD) | 24 Days
• **Custom SaaS MVPs & Portals:** 400,000 – 1,200,000+ PKR ($3,500 – $12,000+ USD) | 35–45 Days
• **Business Process Automation & ERP:** 250,000 – 800,000 PKR ($2,500 – $8,000 USD) | 20–30 Days

All projects are protected by our **50/30/20 payment framework**. You can calculate an instant itemized estimate using our interactive Cost Calculator.`,
    chips: [
      "Open Cost Calculator",
      "What is your advance payment policy?",
      "Request Technical Proposal",
      "Talk to an engineer on WhatsApp"
    ]
  },
  {
    // Tech Stack & Architecture
    match: [
      /tech/i, /stack/i, /technology/i, /languages/i, /framework/i,
      /react/i, /next/i, /node/i, /python/i, /database/i, /aws/i, /hosting/i, /cloud/i
    ],
    response: `⚡ **Volen Cyber-Grade Engineering Stack:**

• **Frontend:** React 19, Next.js 15, TailwindCSS 4, Three.js / WebGL 3D graphics.
• **Backend & APIs:** Node.js, Express, NestJS, Python (FastAPI & Flask).
• **Databases & Cache:** PostgreSQL, Redis, Supabase, MySQL, MongoDB.
• **Cloud & Infrastructure:** AWS (EC2/S3/Lambda), Docker containers, Cloudflare Edge CDN, Vercel.
• **Security:** OWASP Top 10 mitigation, SSL/TLS encryption, JWT/RBAC auth, and automated CI/CD testing.`,
    chips: [
      "💡 Build a SaaS or Startup MVP",
      "Open Cost Calculator",
      "Talk to an engineer on WhatsApp"
    ]
  },
  {
    // Direct Contact, WhatsApp & Booking Consultation
    match: [
      /whatsapp/i, /call/i, /contact/i, /talk/i, /phone/i, /human/i,
      /speak/i, /meeting/i, /consultant/i, /engineer/i, /schedule/i, /office/i
    ],
    response: `📞 **Connect Directly with Our Engineering Leads:**

• **Direct WhatsApp:** [Click here to open WhatsApp](https://wa.me/?text=Hello%20Volen%20Solution,%20I%20would%20like%20to%20consult%20an%20engineer%20about%20my%20project.)
• **Response Time:** Sub-15 minutes during operational hours.
• **Consultation Format:** 1-on-1 technical discovery, architecture diagramming, and fixed-quote specification.

You can also click below to request a formal technical proposal or test our interactive cost calculator.`,
    chips: [
      "Request Technical Proposal",
      "Open Cost Calculator",
      "What is your advance payment policy?"
    ]
  }
];

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

    if (query === "Open Cost Calculator" && onOpenCalculator) {
      setTimeout(() => {
        setIsTyping(false);
        onOpenCalculator();
        setIsOpen(false);
      }, 500);
      return;
    }
    if (query === "Track a demo project" && onOpenTracker) {
      setTimeout(() => {
        setIsTyping(false);
        onOpenTracker();
        setIsOpen(false);
      }, 500);
      return;
    }
    if (query === "Request Technical Proposal" && onRequestProposal) {
      setTimeout(() => {
        setIsTyping(false);
        onRequestProposal();
        setIsOpen(false);
      }, 500);
      return;
    }
    if (query === "Talk to an engineer on WhatsApp") {
      window.open("https://wa.me/?text=Hello%20Volen%20Solution,%20I%20would%20like%20to%20consult%20an%20engineer%20about%20my%20project.", "_blank");
    }

    setTimeout(() => {
      // Clean query to match keywords even if emojis are present in chips
      const cleanQuery = query.replace(/[^\w\s-]/gi, ' ').trim();

      let matched = PRE_PROGRAMMED_KNOWLEDGE.find((item) =>
        item.match.some((regex) => regex.test(query) || regex.test(cleanQuery))
      );

      let replyText = '';
      let replyChips = [];

      if (matched) {
        replyText = matched.response;
        replyChips = matched.chips;
      } else {
        replyText = `🎯 **Client Purpose Analysis:**\nThank you for sharing your requirement: *"${query}"*.\n\nAt Volen Solution, our engineering approach starts by diagnosing your exact business objectives and ROI before architecting code.\n\n**To recommend the most precise technical solution, timeline, and quote, which category best matches your project?**`;
        replyChips = [
          "🛍️ Launch an E-Commerce Store",
          "💡 Build a SaaS or Startup MVP",
          "📈 Get more leads & sales",
          "⚙️ Automate business operations",
          "🛡️ Redesign slow / insecure site",
          "Talk to an engineer on WhatsApp"
        ];
      }

      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        chips: replyChips
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Chat Window */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[410px] h-[540px] max-h-[82vh] bg-white rounded-3xl border border-sky-300 shadow-2xl shadow-sky-950/25 flex flex-col overflow-hidden mb-3 animate-in fade-in slide-in-from-bottom-6 duration-200">
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
                    Live
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">Architectural & Pricing Intelligence</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setMessages(INITIAL_MESSAGES)}
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
              <span>Direct Shortlinks:</span>
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
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-xs leading-relaxed ${
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
                <span className="text-[11px] font-semibold text-slate-500 ml-1">Volen AI is drafting response...</span>
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
              placeholder="Ask pricing, tech stack, or policy..."
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
            <span className="px-1.5 py-0.2 rounded text-[9px] bg-sky-500/20 text-sky-300 border border-sky-400/30">AI</span>
          </div>
          <div className="text-[10px] text-sky-200 font-medium leading-tight">Instant Estimator & Policy Bot</div>
        </div>
      </button>
    </div>
  );
}