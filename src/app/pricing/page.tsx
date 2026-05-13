'use client';

import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { PricingCard } from '../../components/PricingCard';
import { AnimatedGradient } from '../../components/AnimatedGradient';
import { ShieldCheck, HelpCircle, CheckCircle2 } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: "Community Base",
      price: "$0",
      period: "/ free forever",
      description: "Perfect for fast public review of standard rental agreements or instant clause extractions.",
      features: [
        "Basic AI scan logic",
        "Instant multi-language output",
        "Color-coded risk flags",
        "Standard base explanations",
        "Community forum matrix"
      ],
      popular: false,
      ctaText: "Start Free Analysis"
    },
    {
      name: "Professional Access",
      price: "$0",
      period: "/ 100% Free",
      description: "Complete AI analytics toolkit unlocked automatically once you complete operator authentication.",
      features: [
        "Full AI multi-layer analysis",
        "Drafting Studio + template unlock",
        "Multi-language native translation",
        "Negotiation counter-clause generation",
        "Downloadable audit PDF reports",
        "Unlimited continuous uploads"
      ],
      popular: true,
      ctaText: "Authenticate Free Access"
    },
    {
      name: "Team Operations",
      price: "$0",
      period: "/ Unlocked Free",
      description: "Unified collaborative space sharing synchronized standard models across team members.",
      features: [
        "Workspace sharing logic",
        "Shared custom legal libraries",
        "Bulk batch document analysis",
        "Admin control dashboards",
        "Version comparison timelines",
        "Unlimited auxiliary user seats"
      ],
      popular: false,
      ctaText: "Launch Shared Hub"
    },
    {
      name: "Enterprise SLA Node",
      price: "$0",
      period: "/ Fully Open",
      description: "Dedicated programmatic routing parameters mapping automated compliance checkpoints.",
      features: [
        "Continuous compliance checks",
        "Secure programmatic API access",
        "Organization AI copilot context",
        "Dedicated model tuning weights",
        "Zero-retention sanitization",
        "Community framework templates"
      ],
      popular: false,
      ctaText: "Connect API Core"
    }
  ];

  const faqs = [
    { q: "Are all premium features really free?", a: "Yes. AgreeMend is currently providing unmetered, 100% free lifetime access to all core modules, drafting studios, and multi-language verification streams upon secure login." },
    { q: "How secure are uploaded files?", a: "AgreeMend implements automated zero-retention memory scrubbing. Files are not cached or retained for secondary model updates." },
    { q: "Do you support regional Indian languages natively?", a: "Absolutely. Our translation pipeline natively indexes legal definitions in Kannada, Hindi, and Tamil without manual latency overhead." }
  ];

  return (
    <div className="min-h-screen flex flex-col relative bg-[#f0f0e8] text-[#1a1a1a]">
      <AnimatedGradient />
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        {/* Header Strings */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-white px-3 py-1 border border-[#d2d3c9] mb-4">
            <ShieldCheck className="w-4 h-4 text-[#7a5c40]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#7a5c40]">
              100% Free Lifetime Access Grant
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1a1a] uppercase tracking-tight">
            All Verification Nodes Unlocked Free
          </h1>
          <p className="text-xs sm:text-sm text-[#6b6b61] mt-3 leading-relaxed max-w-xl mx-auto">
            AgreeMend has removed all premium payment barriers. Every advanced legal studio, contextual copilot, and translation layout is completely free of charge upon standard login completion.
          </p>
        </div>

        {/* Pricing Matrix Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, idx) => (
            <PricingCard key={idx} plan={plan} />
          ))}
        </div>

        {/* FAQ helper strings */}
        <div className="mt-24 border-t border-[#d2d3c9] pt-12 max-w-4xl mx-auto">
          <h2 className="text-center text-sm font-black text-[#1a1a1a] uppercase tracking-wider mb-8">
            Frequently Assessed Inquiries
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-[#d2d3c9] p-4">
                <div className="flex items-start gap-1.5 mb-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-[#7a5c40] shrink-0 mt-0.5" />
                  <h3 className="text-xs font-bold text-[#1a1a1a] leading-tight">{faq.q}</h3>
                </div>
                <p className="text-[11px] text-[#6b6b61] leading-snug pt-1 border-t border-[#d2d3c9]/40">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Banner callout */}
        <div className="mt-16 bg-[#7a5c40] text-white p-6 border border-[#9c7c5c] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-[#f0f0e8] shrink-0" />
            <div>
              <span className="text-xs font-black uppercase tracking-wider block">AgreeMend Open Community Matrix</span>
              <p className="text-[11px] text-[#d4c5b3] mt-0.5">Empowering transparent legal logic across all operational user bases instantly.</p>
            </div>
          </div>
          <button onClick={() => alert("Free lifetime access applied automatically to active operator stream.")} className="px-4 py-2 bg-white text-[#7a5c40] text-xs font-bold uppercase tracking-wider hover:bg-[#f0f0e8] shrink-0">
            Access Free Platform
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
