import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, X, Send, Sparkles, RefreshCw, ChevronRight
} from 'lucide-react';

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'bot',
    text: "Hello! I am Volen AI, your technical architect assistant. How can I assist you with your project estimation, tech stack selection, or our 50/30/20 customer policy today?",
    timestamp: 'Just now',
    chips: [
      "How much does an E-Commerce store cost?",
      "What is your advance payment policy?",
      "Custom SaaS MVP estimate & delivery timeline?",
      "What tech stacks do you build with?"
    ]
  }
];

const PRE_PROGRAMMED_KNOWLEDGE = [
  {
    match: [/cost/i, /price/i, /ecommerce/i, /e-commerce/i, /store/i, /amazon/i, /shop/i],
    response: `For a full-scale **E-Commerce Store** or multi-vendor catalog, Volen Solution provides end-to-end engineering:

• **Local (PKR):** 120,000 – 350,000 PKR
• **International (USD):** $1,500 – $4,500 USD
• **Timeline:** 24 business days (Agile sprints)
• **Includes:** Product catalog, variant engine, cart/checkout, Stripe / Paymob / JazzCash / COD gateways, live inventory & order dispatch dashboard, and SSL security.

Would you like an itemized proposal or to test our interactive Cost Calculator?`,
    chips: ["What is your advance payment policy?", "Open Cost Calculator", "Talk to an engineer on WhatsApp"]
  },
  {
    match: [/policy/i, /advance/i, /milestone/i, /payment/i, /50%/i, /contract/i, /refund/i],
    response: `At Volen Solution, we operate on a strictly transparent **50% / 30% / 20% Milestone Framework**:

1. **50% Advance:** Initiates project kickoff, PRD specification & sprint reservation.
2. **30% Review Milestone:** Billed only after full staging preview, client QA & feedback revisions.
3. **20% Final Handover:** Billed upon live production release, domain/DNS pointing, SSL A+ audit, and 100% intellectual property & code repository transfer.

Zero hidden fees, 100% client code ownership.`,
    chips: ["Track a demo project", "Request Technical Proposal", "Custom SaaS MVP estimate"]
  },
  {
    match: [/saas/i, /mvp/i, /web app/i, /custom application/i, /portal/i],
    response: `For **Custom Web Applications & SaaS MVPs**:

• **Local (PKR):** 400,000 – 1,200,000+ PKR
• **International (USD):** $3,500 – $12,000+ USD
• **Timeline:** 35 – 45 business days
• **Architecture:** React / Next.js front-end, Node.js / NestJS / Python backend, PostgreSQL / Redis, Enterprise RBAC & JWT multi-auth, and Stripe subscription billing.

Includes full source repository handover with CI/CD deployment pipelines.`,
    chips: ["What is your advance payment policy?", "Talk to an engineer on WhatsApp", "How much does a landing page cost?"]
  },
  {
    match: [/landing/i, /landing page/i, /sales funnel/i, /single page/i],
    response: `For **High-Conversion Landing Pages & Sales Funnels**:

• **Local (PKR):** 15,000 – 40,000 PKR
• **International (USD):** $200 – $600 USD
• **Timeline:** 5 business days
• **Features:** Sub-second load speed (Lighthouse 90+), custom UI/UX design, instant WhatsApp & CRM lead sync, and conversion-focused copywriting layout.`,
    chips: ["Open Cost Calculator", "Request Technical Proposal", "What tech stacks do you build with?"]
  },
  {
    match: [/tech/i, /stack/i, /technology/i, /languages/i, /framework/i],
    response: `Volen Solution builds exclusively with cyber-grade, scalable modern technologies:

• **Frontend:** React 19, Next.js 15, TailwindCSS 4, Three.js / WebGL.
• **Backend & APIs:** Node.js, Express, NestJS, Python (FastAPI / Flask).
• **Databases:** PostgreSQL, MySQL, Redis, Supabase, MongoDB.
• **Cloud & DevOps:** AWS, Docker, Kubernetes, Cloudflare, Vercel.
• **Security:** OWASP Top 10 mitigation, SSL/TLS encryption, and SOC-2 / GDPR compliance patterns.`,
    chips: ["How much does an E-Commerce store cost?", "What is your advance payment policy?", "Request Technical Proposal"]
  },
  {
    match: [/whatsapp/i, /call/i, /contact/i, /talk/i, /phone/i, /human/i],
    response: `You can reach our engineering leads directly on WhatsApp or schedule an architectural consultation call:

• **Direct WhatsApp:** [Click here to open WhatsApp](https://wa.me/?text=Hello%20Volen%20Solution,%20I%20would%20like%20to%20consult%20an%20engineer%20about%20my%20project.)
• **Response Time:** Sub-15 minutes during standard operational hours.`,
    chips: ["Request Technical Proposal", "What is your advance payment policy?"]
  }
];

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

    setTimeout(() => {
      let matched = PRE_PROGRAMMED_KNOWLEDGE.find((item) =>
        item.match.some((regex) => regex.test(query))
      );

      let replyText = '';
      let replyChips = [];

      if (matched) {
        replyText = matched.response;
        replyChips = matched.chips;
      } else {
        replyText = `Thank you for sharing your requirement: "${query}".\n\nOur engineering team tailors custom scopes based on your specific scale, APIs, and timeline requirements. You can calculate a live quote with our Interactive Calculator or request a formal proposal in 60 seconds.`;
        replyChips = [
          "What is your advance payment policy?",
          "How much does an E-Commerce store cost?",
          "Open Cost Calculator",
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
                  <div className="whitespace-pre-line">{msg.text}</div>
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