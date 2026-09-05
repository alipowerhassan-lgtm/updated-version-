import React from 'react';
import WipBadge from './WipBadge';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export default function FeedbackSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Volen Solution re-architected our web platform from the ground up. Their focus on speed and database reliability cut our edge latency in half.",
      author: "CTO, Global Logistics Platform",
      rating: 5
    },
    {
      id: 2,
      quote: "The autonomous AI agents they built automated over 40% of our tier-1 support queries within the first month of deployment.",
      author: "Head of Operations, FinTech Services",
      rating: 5
    },
    {
      id: 3,
      quote: "Security and clean code were non-negotiable for us. Volen delivered a bulletproof dashboard system on schedule without any technical debt.",
      author: "Product Lead, Enterprise SaaS",
      rating: 5
    }
  ];

  return (
    <section id="feedback" className="py-16 md:py-24 relative border-t border-sky-100/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Client Feedback & Reputation
          </h2>

          {/* Universal Work in Progress Badge directly below main title */}
          <div className="flex justify-center pt-1">
            <WipBadge />
          </div>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="glass-card glass-card-hover rounded-3xl p-7 border border-sky-150 flex flex-col justify-between relative group"
            >
              <div>
                {/* Header: Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    Verified Client
                  </span>
                </div>

                {/* Quote Content */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-sky-200 absolute -top-2 -left-2 -z-10 opacity-70" />
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic relative z-10 font-medium">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-sky-100">
                <div className="text-xs font-bold text-[#0F172A]">
                  — {item.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
