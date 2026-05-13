'use strict';

import React, { useState } from 'react';
import { FileText, Plus, Sparkles, Wand2, Layers, Check, Copy } from 'lucide-react';

export const DraftEditor: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('Rental Agreement');
  const [editorContent, setEditorContent] = useState<string>(
    "RENTAL AGREEMENT DEED\n\nThis Agreement is made and executed on this day at Bangalore between the Landlord and the Tenant.\n\nWHEREAS the Landlord is the absolute owner of the scheduled residential premises.\n\n1. MONTHLY RENT & DEPOSIT:\nThe Tenant shall pay a monthly rent of INR 45,000. An interest-free refundable security deposit equivalent to 3 months rent shall be paid upfront.\n\n2. MAINTENANCE & USE:\nThe premises shall be used strictly for residential purposes. Minor day-to-day repairs shall be borne by the Tenant.\n\n3. NOTICE PERIOD:\nEither party may terminate this agreement by serving a two-month written notice."
  );
  const [aiPrompt, setAiPrompt] = useState<string>('');
  const [generating, setGenerating] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const templates = [
    'Rental Agreement',
    'NDA',
    'Freelance Contract',
    'Employment Offer',
    'Partnership Agreement'
  ];

  const clauseLibrary = [
    { title: "Standard Dispute Arbitration", text: "Any dispute arising out of this contract shall be referred to a sole arbitrator appointed mutually, sitting at current local jurisdiction." },
    { title: "Force Majeure clause", text: "Neither party shall be held liable for failure to perform obligations if prevented by acts of God, severe civil unrest, or global pandemics." },
    { title: "Mutual Non-Disparagement", text: "Both parties agree to refrain from making any defamatory or disparaging statements regarding the other party during or after the term." }
  ];

  const handleTemplateSelect = (tmpl: string) => {
    setSelectedTemplate(tmpl);
    if (tmpl === 'NDA') {
      setEditorContent("MUTUAL NON-DISCLOSURE AGREEMENT\n\nThis NDA establishes confidentiality parameters between the Disclosing Party and Receiving Party concerning proprietary commercial logic.\n\n1. DEFINITION:\nConfidential Information encompasses unreleased software builds, client ledgers, and financial records.\n\n2. EXCLUSIONS:\nInformation already public knowledge or independently conceived without access to disclosed parameters is fully excluded.\n\n3. TERM:\nObligations survive for 3 years post conclusion of negotiations.");
    } else if (tmpl === 'Freelance Contract') {
      setEditorContent("INDEPENDENT CONTRACTOR SERVICES AGREEMENT\n\n1. SCOPE OF WORK:\nContractor agrees to deliver custom full-stack software modules matching sprint parameters.\n\n2. PAYMENT SCHEDULE:\nPayments released within 10 business days following delivery milestones.\n\n3. IP OWNERSHIP:\nUpon full clearance of invoices, absolute title over customized codebases transfers fully to the Client.");
    } else {
      setEditorContent(`STANDARD LEGAL DEED: ${tmpl.toUpperCase()}\n\nGenerated base framework loaded successfully. Insert custom clause variables using AI assistance sidebars.`);
    }
  };

  const handleAiPromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiPrompt.trim()) return;
    setGenerating(true);
    
    setTimeout(() => {
      setEditorContent(prev => prev + `\n\n[AI SMART INSERTION - ${new Date().toLocaleTimeString()}]:\n` + "The parties mutually agree that any supplementary modifications shall be valid only when executed in writing and verified by electronic signatures.");
      setAiPrompt('');
      setGenerating(false);
    }, 800);
  };

  const insertClause = (textText: string) => {
    setEditorContent(prev => prev + `\n\n${textText}`);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(editorContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Left Templates & Clause Library */}
      <div className="lg:col-span-1 space-y-6">
        <div className="border bg-white p-4">
          <h3 className="text-xs font-bold text-[#6b6b61] uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#7a5c40]" />
            <span>Document Templates</span>
          </h3>
          <div className="space-y-1.5">
            {templates.map((tmpl) => (
              <button
                key={tmpl}
                onClick={() => handleTemplateSelect(tmpl)}
                className={`w-full text-left px-3 py-2 text-xs font-medium transition-colors border ${
                  selectedTemplate === tmpl
                    ? 'bg-[#7a5c40] text-white border-[#7a5c40]'
                    : 'bg-[#f0f0e8]/50 text-[#1a1a1a] border-[#d2d3c9] hover:bg-white'
                }`}
              >
                {tmpl}
              </button>
            ))}
          </div>
        </div>

        <div className="border bg-white p-4">
          <h3 className="text-xs font-bold text-[#6b6b61] uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Plus className="w-3.5 h-3.5 text-[#7a5c40]" />
            <span>Smart Clause Library</span>
          </h3>
          <div className="space-y-2.5">
            {clauseLibrary.map((item, idx) => (
              <div key={idx} className="p-2.5 bg-[#f0f0e8]/30 border border-[#d2d3c9]">
                <div className="flex items-start justify-between gap-1 mb-1">
                  <span className="text-[11px] font-bold text-[#1a1a1a]">{item.title}</span>
                  <button
                    onClick={() => insertClause(item.text)}
                    className="text-[9px] font-bold bg-[#7a5c40] text-white px-1.5 py-0.5 uppercase tracking-wider hover:bg-[#5c432d]"
                    title="Insert directly into document stream"
                  >
                    Insert
                  </button>
                </div>
                <p className="text-[10px] text-[#6b6b61] line-clamp-2 leading-tight">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Center Notion-like Editor Core Area */}
      <div className="lg:col-span-3 flex flex-col border bg-white min-h-[500px]">
        {/* Editor Toolbar */}
        <div className="p-3 bg-[#f0f0e8] border-b border-[#d2d3c9] flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#1a1a1a] uppercase tracking-wider px-2 py-1 bg-white border border-[#d2d3c9]">
              STUDIO v2.0
            </span>
            <span className="text-xs text-[#6b6b61] font-medium hidden sm:inline">
              Active: <strong className="text-[#7a5c40]">{selectedTemplate}</strong>
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 text-xs font-bold bg-white border border-[#d2d3c9] text-[#1a1a1a] hover:bg-[#f0f0e8] transition-colors flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#7a5c40]" />}
              <span>{copied ? 'Copied Content' : 'Copy Full Draft'}</span>
            </button>
          </div>
        </div>

        {/* Textable Canvas */}
        <div className="flex-1 p-6 flex flex-col">
          <textarea
            value={editorContent}
            onChange={(e) => setEditorContent(e.target.value)}
            className="w-full flex-1 resize-none border-0 focus:outline-hidden text-xs font-mono text-[#1a1a1a] leading-relaxed bg-transparent"
            placeholder="Start drafting legal definitions or type inline strings..."
          />
        </div>

        {/* Inline AI generation prompt tray */}
        <div className="p-4 border-t border-[#d2d3c9] bg-[#f0f0e8]/50">
          <form onSubmit={handleAiPromptSubmit} className="flex gap-2">
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#7a5c40]">
                <Sparkles className="w-4 h-4" />
              </span>
              <input
                type="text"
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                disabled={generating}
                placeholder="Ask AI to append terms: e.g., 'Add custom non-compete waiver for software IP'..."
                className="w-full pl-9 pr-3 py-2 bg-white border border-[#d2d3c9] text-xs text-[#1a1a1a] focus:outline-hidden focus:border-[#7a5c40]"
              />
            </div>
            <button
              type="submit"
              disabled={generating || !aiPrompt.trim()}
              className="px-4 py-2 bg-[#7a5c40] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#5c432d] disabled:opacity-50 transition-colors flex items-center gap-1 shrink-0"
            >
              <Wand2 className="w-3.5 h-3.5" />
              <span>{generating ? 'Inserting...' : 'AI Generate'}</span>
            </button>
          </form>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[9px] font-bold text-[#6b6b61] uppercase">Quick Prompts:</span>
            <button 
              type="button"
              onClick={() => setAiPrompt("Add strict governing laws mapped to Bangalore arbitration")}
              className="text-[9px] text-[#7a5c40] hover:underline"
            >
              + Governing Laws
            </button>
            <span className="text-[#d2d3c9] text-[9px]">|</span>
            <button 
              type="button"
              onClick={() => setAiPrompt("Draft fair non-poaching restrictions covering 12 months")}
              className="text-[9px] text-[#7a5c40] hover:underline"
            >
              + Non-Poaching
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
