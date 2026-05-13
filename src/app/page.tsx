'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { UploadZone } from '../components/UploadZone';
import { GlassCard } from '../components/GlassCard';
import { AnimatedGradient } from '../components/AnimatedGradient';
import { RiskBadge } from '../components/RiskBadge';
import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';
import { 
  FileText, 
  ShieldAlert, 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  Scale, 
  Layers, 
  Cpu, 
  Globe, 
  MessageSquare, 
  Play, 
  AlertTriangle,
  FileCheck,
  Building,
  UserCheck,
  Lock,
  Zap
} from 'lucide-react';

export default function LandingPage() {
  const router = useRouter();
  const { setActiveDocument } = useStore();
  const [liveScanActive, setLiveScanActive] = useState(false);

  const features = [
    { title: "AI Clause Detection", desc: "Instantly extracts and groups clauses from dense multi-page PDFs or DOCX uploads.", icon: FileText },
    { title: "Legal Risk Analysis", desc: "Flags severe liabilities, hidden cost traps, and deposit forfeitures automatically.", icon: ShieldAlert },
    { title: "Plain-English Simplification", desc: "Translates complex archaic legalese into clear, actionable logic everyone grasps.", icon: Sparkles },
    { title: "AI Drafting Assistant", desc: "Generates optimal, balanced counter-clauses tailored to your chosen risk appetite.", icon: Layers },
    { title: "Multi-language Translation", desc: "Read breakdowns natively in English, Kannada, Hindi, or Tamil instantly.", icon: Globe },
    { title: "Negotiation Suggestions", desc: "Provides professional, balanced, friendly, or aggressive email strings on demand.", icon: MessageSquare },
    { title: "Compliance Detection", desc: "Compares document logic against local statutory acts and baseline state rules.", icon: CheckCircle },
    { title: "AI Legal Copilot", desc: "Context-aware sidebar assistant ready to answer inline contract inquiries.", icon: Cpu },
    { title: "Region-aware Recommendations", desc: "Customizes legal warnings specifically for target municipal jurisdictions.", icon: Scale },
    { title: "Smart Red Flag Detection", desc: "Identifies severe, non-standard penalty terms that leave signees unprotected.", icon: AlertTriangle }
  ];

  const docCategories = [
    { title: "Rental Agreements", desc: "Verify lock-in rules, exit penalties, and mandatory painting costs.", riskExample: "Red Flag: 10-month deposit forfeit", icon: Building },
    { title: "Employment Contracts", desc: "Analyze restrictive post-separation non-competes and broad IP captures.", riskExample: "Caution: Global non-compete terms", icon: UserCheck },
    { title: "NDAs", desc: "Ensure non-disclosure boundaries don't restrict unrelated intellectual work.", riskExample: "Red Flag: Unlimited duration survival", icon: Lock },
    { title: "Startup Agreements", desc: "Audit co-founder vesting matrix terms and secondary dilution protections.", riskExample: "Caution: Unilateral buyback triggers", icon: Zap },
    { title: "Vendor Contracts", desc: "Scan SLA failure penalty caps and payment schedule auto-escalations.", riskExample: "Safe: Balanced mutual termination", icon: FileCheck },
    { title: "Property Documents", desc: "Verify clear chain of title transfer obligations and registration duties.", riskExample: "Red Flag: Vague statutory clearance", icon: Building },
    { title: "Freelance Contracts", desc: "Protect personal copyright retention prior to absolute milestone settlement.", riskExample: "Caution: Immediate full IP handoff", icon: FileText },
    { title: "Legal Notices", desc: "Decode response time demands and map out pre-litigation defense plans.", riskExample: "Red Flag: Short 48-hour reply mandates", icon: ShieldAlert }
  ];

  const handleDemoClick = () => {
    setActiveDocument('doc-1');
    router.push('/results/doc-1');
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-[#f0f0e8] text-[#1a1a1a]">
      <AnimatedGradient />
      <Navbar />

      <main className="flex-1 z-10">
        {/* HERO SECTION */}
        <section className="pt-12 sm:pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#d2d3c9]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Strategic Hero content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1 border border-[#d2d3c9]">
                <Sparkles className="w-4 h-4 text-[#7a5c40]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#7a5c40]">
                  Next-Gen AI Document Verification
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-[#1a1a1a]">
                Understand Any <br />
                <span className="bg-[#7a5c40] text-white px-2 py-0.5 inline-block border border-[#9c7c5c] shadow-md">
                  Legal Document
                </span> <br />
                Before You Sign.
              </h1>

              <p className="text-sm sm:text-base text-[#6b6b61] max-w-xl leading-relaxed font-medium">
                Upload contracts, agreements, or legal documents and get instant AI-powered risk analysis, plain-English explanations, drafting help, and multilingual support.
              </p>

              {/* Action strings */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/scan"
                  className="px-6 py-3.5 bg-[#7a5c40] hover:bg-[#5c432d] text-white text-xs font-bold uppercase tracking-wider border border-[#9c7c5c] shadow-md transition-all flex items-center gap-2"
                >
                  <span>Analyze Document</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={handleDemoClick}
                  className="px-5 py-3.5 bg-white hover:bg-[#f0f0e8] text-[#1a1a1a] text-xs font-bold uppercase tracking-wider border border-[#d2d3c9] transition-all"
                >
                  Try Demo
                </button>

                <button
                  onClick={() => setLiveScanActive(true)}
                  className="px-4 py-3.5 bg-transparent hover:bg-[#d4c5b3]/20 text-[#7a5c40] text-xs font-bold uppercase tracking-wider border border-transparent transition-all flex items-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Live Scan</span>
                </button>
              </div>

              {/* Notice tags */}
              <div className="pt-4 flex items-center gap-4 text-xs text-[#6b6b61]">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-emerald-600 inline-block" />
                  <span>No account required for MVP scan</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-[#7a5c40] inline-block" />
                  <span>Supports Bangalore Leases & Global SaaS docs</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual elements */}
            <div className="lg:col-span-5 relative">
              <div className="border-2 border-[#7a5c40] bg-white p-4 shadow-2xl relative z-20">
                <div className="flex items-center justify-between pb-3 border-b border-[#d2d3c9]/60 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 bg-[#7a5c40] block" />
                    <span className="text-[10px] font-bold text-[#1a1a1a] uppercase tracking-wider">
                      Live AI Document Scan Simulator
                    </span>
                  </div>
                  <span className="text-[9px] font-mono bg-red-50 text-red-700 border border-red-300 px-1.5 py-0.5 font-bold">
                    2 RED FLAGS DETECTED
                  </span>
                </div>

                {liveScanActive ? (
                  <UploadZone compact onComplete={(id) => router.push(`/results/${id}`)} />
                ) : (
                  <div className="space-y-3">
                    <div className="p-2.5 bg-[#f0f0e8]/50 border border-[#d2d3c9]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-bold text-[#1a1a1a]">Clause 4: Lock-in Penalty</span>
                        <RiskBadge level="Red Flag" />
                      </div>
                      <p className="text-[10px] text-[#6b6b61] font-mono leading-tight">
                        "Tenant forfeits full 10-month deposit upon vacation prior to 11 months completion."
                      </p>
                      <div className="mt-2 p-1.5 bg-white border border-red-200 text-[10px] text-red-800 font-medium">
                        <strong>AI translation:</strong> Highly predatory exit barrier. Demands reduction to standard 1-month retention baseline.
                      </div>
                    </div>

                    <div className="p-2.5 bg-[#f0f0e8]/50 border border-[#d2d3c9]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-bold text-[#1a1a1a]">Clause 9: Landlord Entry</span>
                        <RiskBadge level="Red Flag" />
                      </div>
                      <p className="text-[10px] text-[#6b6b61] font-mono leading-tight">
                        "Landlord reserves absolute right to inspect premises anytime without advance warning."
                      </p>
                    </div>

                    <div className="p-2.5 bg-[#f0f0e8]/50 border border-[#d2d3c9]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-bold text-[#1a1a1a]">Clause 12: General Maintenance</span>
                        <RiskBadge level="Safe" />
                      </div>
                      <p className="text-[10px] text-[#6b6b61] font-mono leading-tight">
                        "Minor bulb and tap fixture wear falls under tenant operational jurisdiction."
                      </p>
                    </div>

                    <button
                      onClick={() => setLiveScanActive(true)}
                      className="w-full py-2 bg-[#7a5c40] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#5c432d] transition-colors mt-2"
                    >
                      Drop Custom PDF to Test Engine
                    </button>
                  </div>
                )}
              </div>

              {/* Decorative floating sub-card backing */}
              <div className="absolute top-8 left-[-20px] right-8 bottom-[-20px] bg-[#9c7c5c] opacity-20 border border-[#7a5c40] z-10 pointer-events-none" />
              <div className="absolute top-16 left-[-40px] right-16 bottom-[-40px] bg-[#d4c5b3] opacity-30 border border-[#7a5c40] z-0 pointer-events-none" />
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#d2d3c9]">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#7a5c40] uppercase tracking-widest block mb-2">
              Systematic Processing flow
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
              3-Step Contract Audit Flow
            </h2>
            <p className="text-xs text-[#6b6b61] mt-2">
              Our automated legal engine converts dense documents into fully simplified, safe decisions instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="border bg-white p-6 relative">
              <span className="absolute top-0 right-0 bg-[#7a5c40] text-white text-xs font-bold px-2.5 py-1">
                STEP 01
              </span>
              <div className="w-10 h-10 bg-[#f0f0e8] border border-[#d2d3c9] flex items-center justify-center text-[#7a5c40] mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#1a1a1a] uppercase">Upload Document</h3>
              <p className="text-xs text-[#6b6b61] mt-2 leading-relaxed">
                Drop your rental lease, employment contract, NDA, or any scan. OCR pipelines read unsearchable layouts effortlessly.
              </p>
            </div>

            {/* Step 2 */}
            <div className="border bg-white p-6 relative">
              <span className="absolute top-0 right-0 bg-[#7a5c40] text-white text-xs font-bold px-2.5 py-1">
                STEP 02
              </span>
              <div className="w-10 h-10 bg-[#f0f0e8] border border-[#d2d3c9] flex items-center justify-center text-[#7a5c40] mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#1a1a1a] uppercase">AI Extracts & Analyzes</h3>
              <p className="text-xs text-[#6b6b61] mt-2 leading-relaxed">
                The engine maps custom clauses against dynamic regional legal frameworks, locating compliance breaches and cost traps.
              </p>
            </div>

            {/* Step 3 */}
            <div className="border bg-white p-6 relative">
              <span className="absolute top-0 right-0 bg-[#7a5c40] text-white text-xs font-bold px-2.5 py-1">
                STEP 03
              </span>
              <div className="w-10 h-10 bg-[#f0f0e8] border border-[#d2d3c9] flex items-center justify-center text-[#7a5c40] mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#1a1a1a] uppercase">Get Risks & Suggestions</h3>
              <p className="text-xs text-[#6b6b61] mt-2 leading-relaxed">
                Review color-coded risk metrics, copy customized counter-clause texts, and read explanations natively in regional vernaculars.
              </p>
            </div>
          </div>
        </section>

        {/* DOCUMENT TYPES CATEGORY SECTION */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#d2d3c9]">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-[#7a5c40] uppercase tracking-widest block mb-2">
                Multi-Domain Expertise
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
                Supported Document Categories
              </h2>
            </div>
            <p className="text-xs text-[#6b6b61] max-w-md font-medium">
              Demo optimized for Bangalore Rental agreements, while core engines scale uniformly across all personal and corporate agreements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {docCategories.map((cat, idx) => {
              const Icon = cat.icon;
              const isHighlight = idx === 0; // Highlight Rental agreement demo
              
              return (
                <div 
                  key={idx} 
                  className={`border p-5 flex flex-col justify-between transition-all ${
                    isHighlight 
                      ? 'bg-white border-2 border-[#7a5c40] shadow-md ring-1 ring-[#7a5c40]/10' 
                      : 'bg-white border-[#d2d3c9] hover:border-[#7a5c40]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2 border ${isHighlight ? 'bg-[#7a5c40] text-white border-[#7a5c40]' : 'bg-[#f0f0e8] text-[#7a5c40] border-[#d2d3c9]'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      {isHighlight && (
                        <span className="bg-[#7a5c40] text-white text-[8px] font-bold uppercase tracking-widest px-1.5 py-0.5">
                          Featured Demo
                        </span>
                      )}
                    </div>

                    <h3 className="text-xs font-black text-[#1a1a1a] uppercase tracking-wider">{cat.title}</h3>
                    <p className="text-[11px] text-[#6b6b61] mt-1 leading-tight line-clamp-2">{cat.desc}</p>
                    
                    <div className="mt-3 pt-2 border-t border-[#d2d3c9]/40">
                      <span className={`text-[9px] font-bold block truncate ${
                        cat.riskExample.startsWith('Red Flag') ? 'text-red-700' :
                        cat.riskExample.startsWith('Caution') ? 'text-amber-700' :
                        'text-emerald-700'
                      }`}>
                        {cat.riskExample}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#d2d3c9]/40">
                    <Link
                      href="/scan"
                      className={`block w-full text-center py-1.5 text-[10px] font-bold uppercase tracking-wider transition-colors ${
                        isHighlight
                          ? 'bg-[#7a5c40] text-white hover:bg-[#5c432d]'
                          : 'bg-[#f0f0e8] text-[#1a1a1a] hover:bg-[#7a5c40] hover:text-white border border-[#d2d3c9]'
                      }`}
                    >
                      Scan Category
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* COMPLETE FEATURES MATRIX SECTION */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#7a5c40] uppercase tracking-widest block mb-2">
              Platform Features
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Premium AI Legal Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="border bg-white p-4 flex flex-col justify-between border-[#d2d3c9] hover:border-[#7a5c40] transition-colors">
                  <div>
                    <div className="w-7 h-7 bg-[#f0f0e8] border border-[#d2d3c9] flex items-center justify-center text-[#7a5c40] mb-3">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-xs font-bold text-[#1a1a1a] uppercase tracking-wider leading-tight">{item.title}</h3>
                    <p className="text-[11px] text-[#6b6b61] mt-1.5 leading-snug">{item.desc}</p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-[#d2d3c9]/40 flex items-center justify-between text-[9px] text-[#7a5c40] font-bold">
                    <span>Engine Capability</span>
                    <span>● Active</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* BOTTOM FINAL DIRECT CALL TO ACTION */}
          <div className="mt-16 border-2 border-[#7a5c40] bg-white p-8 sm:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#9c7c5c]/10 translate-x-16 -translate-y-16 rotate-45 pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
                Ready to secure your signature?
              </h2>
              <p className="text-xs sm:text-sm text-[#6b6b61] max-w-xl mx-auto">
                Scan your agreements instantly. Avoid unexpected litigation, financial forfeiture traps, and secure balanced exit protocols.
              </p>
              <div className="flex justify-center gap-4 pt-2">
                <Link
                  href="/scan"
                  className="px-6 py-3 bg-[#7a5c40] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#5c432d] transition-colors"
                >
                  Launch Live Scanner
                </Link>
                <Link
                  href="/studio"
                  className="px-6 py-3 bg-[#f0f0e8] text-[#1a1a1a] text-xs font-bold uppercase tracking-wider border border-[#d2d3c9] hover:bg-white transition-colors"
                >
                  Try Drafting Studio
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
