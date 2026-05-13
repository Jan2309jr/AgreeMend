'use strict';

import React, { useState } from 'react';
import { Clause, useStore, Language } from '../store/useStore';
import { RiskBadge } from './RiskBadge';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, MessageSquare, Edit3, HelpCircle, AlertTriangle, Check, Copy, Share2, Send } from 'lucide-react';

interface ClauseCardProps {
  clause: Clause;
}

export const ClauseCard: React.FC<ClauseCardProps> = ({ clause }) => {
  const { currentLanguage } = useStore();
  const [expanded, setExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState<'explanation' | 'simplified' | 'negotiate'>('explanation');
  const [negotiationTone, setNegotiationTone] = useState<'balanced' | 'professional' | 'friendly' | 'aggressive'>('balanced');
  const [copied, setCopied] = useState(false);
  const [customExplanation, setCustomExplanation] = useState<string | null>(null);

  const getExplanationText = () => {
    if (customExplanation) return customExplanation;
    return clause.explanation[currentLanguage] || clause.explanation.English;
  };

  const getSimplifiedText = () => {
    return clause.simplifiedSummary[currentLanguage] || clause.simplifiedSummary.English;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExplainLike18 = () => {
    setCustomExplanation(
      "Imagine you buy a game pass but the second you skip a match, the admin deletes your whole account and takes your allowance. That's what this clause does to your wallet if you break the lease early."
    );
    setActiveTab('explanation');
  };

  const resetCustomExplanation = () => {
    setCustomExplanation(null);
  };

  return (
    <div className="border bg-white transition-all shadow-xs hover:shadow-sm">
      {/* Header Bar */}
      <div 
        onClick={() => setExpanded(!expanded)}
        className="p-4 bg-[#f0f0e8]/50 border-b border-[#d2d3c9] flex items-center justify-between gap-4 cursor-pointer select-none"
      >
        <div className="flex items-center gap-3 overflow-hidden">
          <RiskBadge level={clause.risk} className="shrink-0" />
          <h3 className="text-xs font-bold text-[#1a1a1a] truncate">{clause.title}</h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-[#6b6b61]">
          <span className="hidden sm:inline font-medium text-[10px]">Click to view details</span>
          {expanded ? <ChevronUp className="w-4 h-4 text-[#7a5c40]" /> : <ChevronDown className="w-4 h-4 text-[#7a5c40]" />}
        </div>
      </div>

      {/* Expandable Body */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-4 space-y-4">
              {/* Original Document Section */}
              <div className="bg-[#f0f0e8]/30 p-3 border border-[#d2d3c9]">
                <span className="text-[9px] font-bold text-[#7a5c40] uppercase tracking-wider block mb-1">
                  Original Document Text
                </span>
                <p className="text-xs text-[#1a1a1a] font-mono leading-relaxed select-text">
                  "{clause.originalText}"
                </p>
              </div>

              {/* Regional Warning Alert */}
              {clause.regionalWarning && (
                <div className="flex items-start gap-2.5 p-3 bg-amber-50 border border-amber-300 text-amber-900 text-xs">
                  <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold uppercase tracking-wider text-[10px] block text-amber-800">
                      Region-Specific Alert (Bangalore/Karnataka)
                    </span>
                    <p className="font-medium mt-0.5">{clause.regionalWarning}</p>
                  </div>
                </div>
              )}

              {/* Functional Switch Tabs */}
              <div className="border-b border-[#d2d3c9] flex items-center justify-between gap-2 pt-2">
                <div className="flex gap-1">
                  <button
                    onClick={() => { setActiveTab('explanation'); resetCustomExplanation(); }}
                    className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${
                      activeTab === 'explanation' && !customExplanation
                        ? 'border-[#7a5c40] text-[#7a5c40]'
                        : 'border-transparent text-[#6b6b61] hover:text-[#1a1a1a]'
                    }`}
                  >
                    AI Explanation
                  </button>
                  <button
                    onClick={() => setActiveTab('simplified')}
                    className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${
                      activeTab === 'simplified'
                        ? 'border-[#7a5c40] text-[#7a5c40]'
                        : 'border-transparent text-[#6b6b61] hover:text-[#1a1a1a]'
                    }`}
                  >
                    Simplified Summary
                  </button>
                  <button
                    onClick={() => setActiveTab('negotiate')}
                    className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${
                      activeTab === 'negotiate'
                        ? 'border-[#7a5c40] text-[#7a5c40] bg-[#9c7c5c]/5'
                        : 'border-transparent text-[#6b6b61] hover:text-[#1a1a1a]'
                    }`}
                  >
                    Negotiation Studio
                  </button>
                </div>

                {/* Inline Action helper buttons */}
                <div className="flex items-center gap-1.5 pb-1">
                  <button
                    onClick={handleExplainLike18}
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 border transition-colors ${
                      customExplanation 
                        ? 'bg-[#7a5c40] text-white border-[#7a5c40]'
                        : 'bg-[#f0f0e8] text-[#7a5c40] border-[#d2d3c9] hover:bg-[#d4c5b3]/30'
                    }`}
                    title="Explain using straightforward teenager-friendly logic"
                  >
                    Explain Like I'm 18
                  </button>
                </div>
              </div>

              {/* Tab Contents Content */}
              <div className="min-h-[70px] pt-1">
                {activeTab === 'explanation' && (
                  <motion.div
                    key="explanation"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs text-[#1a1a1a] font-medium leading-relaxed bg-white p-3 border border-[#d2d3c9]/40 relative"
                  >
                    {customExplanation && (
                      <span className="inline-block bg-[#7a5c40] text-white text-[9px] font-bold px-1.5 py-0.5 mb-2 uppercase tracking-widest">
                        Teenager Logic Active
                      </span>
                    )}
                    <p>{getExplanationText()}</p>
                  </motion.div>
                )}

                {activeTab === 'simplified' && (
                  <motion.div
                    key="simplified"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs font-bold text-[#7a5c40] bg-[#f0f0e8]/50 p-3 border border-[#d2d3c9] flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-[#7a5c40] shrink-0" />
                    <span>{getSimplifiedText()}</span>
                  </motion.div>
                )}

                {activeTab === 'negotiate' && (
                  <motion.div
                    key="negotiate"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-3 pt-1"
                  >
                    <div className="flex items-center justify-between bg-[#f0f0e8] p-1.5 border border-[#d2d3c9]">
                      <span className="text-[10px] font-bold text-[#6b6b61] uppercase tracking-wider ml-1">
                        Select Counter-Clause Tone:
                      </span>
                      <div className="flex gap-1">
                        {(['balanced', 'professional', 'friendly', 'aggressive'] as const).map((tone) => (
                          <button
                            key={tone}
                            onClick={() => setNegotiationTone(tone)}
                            className={`px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase transition-colors ${
                              negotiationTone === tone
                                ? 'bg-[#7a5c40] text-white'
                                : 'text-[#1a1a1a] hover:bg-[#d4c5b3]/40'
                            }`}
                          >
                            {tone}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 border border-[#7a5c40] bg-white relative">
                      <span className="absolute top-[-8px] left-3 bg-[#7a5c40] text-white text-[8px] font-bold uppercase tracking-widest px-1.5 py-0.5">
                        AI Suggested {negotiationTone} revision
                      </span>
                      <p className="text-xs text-[#1a1a1a] font-medium leading-relaxed pt-2">
                        "{clause.negotiationSuggestions[negotiationTone]}"
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div className="flex gap-2">
                        <button
                          onClick={() => copyToClipboard(clause.negotiationSuggestions[negotiationTone])}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f0f0e8] hover:bg-[#d4c5b3]/50 text-xs font-bold text-[#1a1a1a] border border-[#d2d3c9] transition-colors"
                        >
                          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#7a5c40]" />}
                          <span>{copied ? 'Copied' : 'Copy Draft'}</span>
                        </button>
                        <button 
                          onClick={() => alert(`Opening email integration interface to share counter-clause draft for: ${clause.title}`)}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f0f0e8] hover:bg-[#d4c5b3]/50 text-xs font-bold text-[#1a1a1a] border border-[#d2d3c9] transition-colors"
                        >
                          <Send className="w-3.5 h-3.5 text-[#7a5c40]" />
                          <span>Email Draft</span>
                        </button>
                      </div>

                      <button 
                        onClick={() => alert(`Generating direct shareable link & WhatsApp string for: ${clause.title}`)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-[#7a5c40] hover:bg-[#5c432d] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                        <span>Share Clause</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
