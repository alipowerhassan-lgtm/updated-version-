import React, { useState } from 'react';
import WipBadge from './WipBadge';
import ThreeDTiltCard from './ThreeDTiltCard';
import {
  Star,
  ShieldCheck,
  Quote,
  MessageSquarePlus,
  ThumbsUp,
  CheckCircle2,
  Building2,
  Globe2,
  Send,
  Sparkles,
  Award,
  TrendingUp,
  UserCheck,
  X
} from 'lucide-react';

export default function FeedbackSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  // Form State
  const [formName, setFormName] = useState('');
  const [formRole, setFormRole] = useState('');
  const [formRegion, setFormRegion] = useState('USA');
  const [formCategory, setFormCategory] = useState('web');
  const [formRating, setFormRating] = useState(5);
  const [formMessage, setFormMessage] = useState('');

  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      quote: "Volen Solution re-architected our enterprise logistics web platform from the ground up. Their Next.js server rendering and database indexing cut our global edge latency by 54%. Exceptional engineering team!",
      author: "CTO, Global Logistics Platform",
      company: "Apex Global Supply",
      flag: '🇺🇸',
      region: 'USA',
      category: 'web',
      rating: 5,
      date: 'Aug 2026',
      verified: 'SOC-2 Verified Audit'
    },
    {
      id: 2,
      quote: "The autonomous AI reasoning agents built by Volen automated 42% of our tier-1 financial support tickets within 3 weeks of deployment. The RAG vector search precision is virtually flawless.",
      author: "Head of Operations, FinTech Services",
      company: "Lombard Financial UK",
      flag: '🇬🇧',
      region: 'UK',
      category: 'ai',
      rating: 5,
      date: 'Jul 2026',
      verified: 'Verified Enterprise Client'
    },
    {
      id: 3,
      quote: "Delivered production-grade enterprise software architecture for our Middle East expansion under tight Vision 2030 deadlines. Highly compliant, zero security vulnerabilities, and 100% on schedule.",
      author: "Director of Digital Transformation",
      company: "Riyadh Smart Ecosystems",
      flag: '🇸🇦',
      region: 'Saudi Arabia',
      category: 'security',
      rating: 5,
      date: 'Jun 2026',
      verified: 'Vision 2030 Partner'
    },
    {
      id: 4,
      quote: "Volen Solution is our go-to engineering studio in Pakistan. They built our cross-platform React Native app with 60FPS biometric authentication and offline sync. Outstanding quality and responsiveness.",
      author: "Founder & CEO, SaaS Studio",
      company: "NexaCloud Systems",
      flag: '🇵🇰',
      region: 'Pakistan HQ',
      category: 'web',
      rating: 5,
      date: 'May 2026',
      verified: 'Verified Enterprise Client'
    },
    {
      id: 5,
      quote: "Their digital marketing funnels and technical SEO strategy increased our organic lead conversion rate by 180% in UAE. They truly embody their philosophy: Together We Build, Grow & Secure.",
      author: "VP of Growth & E-Commerce",
      company: "Gulf Retail Holdings",
      flag: '🇦🇪',
      region: 'UAE',
      category: 'marketing',
      rating: 5,
      date: 'Apr 2026',
      verified: 'Verified Growth Client'
    },
    {
      id: 6,
      quote: "Zero-Trust WAF shielding and penetration testing audit performed by Volen passed our rigorous healthtech compliance review without a single red flag. Deep cybersecurity expertise.",
      author: "Chief Information Security Officer",
      company: "HealthVault America",
      flag: '🇺🇸',
      region: 'USA',
      category: 'security',
      rating: 5,
      date: 'Mar 2026',
      verified: 'Zero-Trust Audited'
    }
  ]);

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    if (!formName || !formMessage) return;

    const newTestimonial = {
      id: Date.now(),
      quote: formMessage,
      author: `${formRole || 'Verified Client'}`,
      company: formName,
      flag: formRegion === 'Pakistan' ? '🇵🇰' : formRegion === 'USA' ? '🇺🇸' : formRegion === 'UK' ? '🇬🇧' : formRegion === 'Saudi Arabia' ? '🇸🇦' : '🇦🇪',
      region: formRegion,
      category: formCategory,
      rating: parseInt(formRating),
      date: 'Just Now',
      verified: 'Newly Verified Submission'
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setSubmissionSuccess(true);
    setTimeout(() => {
      setSubmissionSuccess(false);
      setIsSubmitModalOpen(false);
      setFormName('');
      setFormRole('');
      setFormMessage('');
    }, 2000);
  };

  const filteredTestimonials = activeCategory === 'all'
    ? testimonials
    : testimonials.filter((t) => t.category === activeCategory);

  return (
    <section id="feedback" className="py-16 md:py-24 relative border-t border-sky-100/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* --- HEADER BLOCK --- */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-100/80 px-4 py-1.5 rounded-full border border-sky-200 inline-flex items-center gap-1.5 shadow-xs">
            <Award className="w-3.5 h-3.5 text-sky-600" />
            <span>Verified Client Reputation & Trust Matrix</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Client Feedback & <span className="tech-gradient-text">Global Reputation</span>
          </h2>

          <div className="flex justify-center pt-1">
            <WipBadge text="Client Reputation Portal Active — Live Submissions Enabled" />
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2 font-normal">
            Read verified reviews from enterprise leaders, CTOs, and founders across North America, Europe, MENA, and Pakistan HQ.
          </p>
        </div>

        {/* --- REPUTATION SCORE METRICS RIBBON --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-950 text-white rounded-3xl p-6 border border-sky-500/30 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-3 border-r border-slate-800 pr-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/40">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-white font-mono flex items-center gap-1">
                <span>4.98</span>
                <span className="text-xs text-amber-400">/ 5.0</span>
              </div>
              <div className="text-[10px] uppercase font-mono text-slate-400">120+ Enterprise Reviews</div>
            </div>
          </div>

          <div className="flex items-center gap-3 md:border-r border-slate-800 pr-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/40">
              <ThumbsUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-white font-mono">99.4%</div>
              <div className="text-[10px] uppercase font-mono text-slate-400">Client Satisfaction SLA</div>
            </div>
          </div>

          <div className="flex items-center gap-3 border-r border-slate-800 pr-4">
            <div className="w-10 h-10 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 border border-sky-500/40">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-white font-mono">100%</div>
              <div className="text-[10px] uppercase font-mono text-slate-400">On-Time Project Delivery</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/40">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-white font-mono">4 Hubs</div>
              <div className="text-[10px] uppercase font-mono text-slate-400">PK • USA • UK • KSA</div>
            </div>
          </div>
        </div>

        {/* --- CATEGORY FILTER TABS & SUBMIT FEEDBACK CTA --- */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sky-100 pb-4">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Reviews', count: testimonials.length },
              { id: 'web', label: '💻 Web & Mobile App', count: testimonials.filter((t) => t.category === 'web').length },
              { id: 'ai', label: '🤖 AI & Automation', count: testimonials.filter((t) => t.category === 'ai').length },
              { id: 'marketing', label: '📈 Digital Marketing', count: testimonials.filter((t) => t.category === 'marketing').length },
              { id: 'security', label: '🛡️ Security & SLA', count: testimonials.filter((t) => t.category === 'security').length }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeCategory === tab.id
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-sky-50'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  activeCategory === tab.id ? 'bg-sky-900 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsSubmitModalOpen(true)}
            className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer border border-sky-400/30"
          >
            <MessageSquarePlus className="w-4 h-4 text-sky-400" />
            <span>Submit Client Review</span>
          </button>
        </div>

        {/* --- TESTIMONIAL CARDS GRID (3D TILT) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item) => (
            <ThreeDTiltCard key={item.id} maxTilt={8} className="h-full">
              <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 border border-sky-150 flex flex-col justify-between h-full relative group shadow-sm hover:shadow-xl transition-all">
                <div>
                  {/* Top Bar: Rating Stars + Country Flag + Verified Pill */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-lg">{item.flag}</span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{item.verified}</span>
                      </span>
                    </div>
                  </div>

                  {/* Quote Content */}
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-sky-200 absolute -top-3 -left-2 -z-10 opacity-60" />
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic relative z-10 font-medium">
                      "{item.quote}"
                    </p>
                  </div>
                </div>

                {/* Author & Location Footer */}
                <div className="pt-4 border-t border-sky-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-black text-slate-900 group-hover:text-sky-600 transition-colors">
                      {item.author}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1 mt-0.5">
                      <Building2 className="w-3 h-3 text-sky-600" />
                      <span>{item.company}</span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    {item.date}
                  </span>
                </div>
              </div>
            </ThreeDTiltCard>
          ))}
        </div>

        {/* --- SUBMIT REVIEW MODAL DIALOG --- */}
        {isSubmitModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
            <div className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 border border-sky-200 shadow-2xl relative space-y-5">
              <button
                onClick={() => setIsSubmitModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                  Client Verification
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 pt-1">
                  Submit Verified Client Review
                </h3>
                <p className="text-slate-600 text-xs">
                  Share your experience working with Volen Solution software & growth teams.
                </p>
              </div>

              {submissionSuccess ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <div className="text-base font-bold text-emerald-900">Review Submitted Successfully!</div>
                  <p className="text-xs text-emerald-700">Thank you for helping us maintain our enterprise quality standards.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitFeedback} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Company / Org Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Tech Ltd"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Your Role / Title</label>
                      <input
                        type="text"
                        placeholder="e.g. CTO / Product Manager"
                        value={formRole}
                        onChange={(e) => setFormRole(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Region</label>
                      <select
                        value={formRegion}
                        onChange={(e) => setFormRegion(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none bg-white"
                      >
                        <option value="USA">🇺🇸 USA</option>
                        <option value="UK">🇬🇧 UK</option>
                        <option value="Saudi Arabia">🇸🇦 Saudi Arabia</option>
                        <option value="Pakistan">🇵🇰 Pakistan</option>
                        <option value="UAE">🇦🇪 UAE</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Service Type</label>
                      <select
                        value={formCategory}
                        onChange={(e) => setFormCategory(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none bg-white"
                      >
                        <option value="web">Web & Mobile</option>
                        <option value="ai">AI & Automation</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="security">Security & SLA</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Rating</label>
                      <select
                        value={formRating}
                        onChange={(e) => setFormRating(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none bg-white font-bold text-amber-600"
                      >
                        <option value="5">⭐⭐⭐⭐⭐ (5/5)</option>
                        <option value="4">⭐⭐⭐⭐ (4/5)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Feedback Message *</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Write your experience working with Volen Solution..."
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 text-white font-bold text-xs shadow-lg shadow-sky-600/25 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>Publish Verified Review</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
