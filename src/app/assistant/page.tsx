'use client';

import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Sidebar } from '../../components/Sidebar';
import { AIChatPanel } from '../../components/AIChatPanel';
import { useStore } from '../../store/useStore';
import { Bot, Sparkles, MessageSquare, Bookmark, Layers } from 'lucide-react';

export default function AssistantPage() {
  const { documents, activeDocumentId, setActiveDocument } = useStore();

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f0e8] text-[#1a1a1a]">
      <Navbar />

      <div className="flex-1 flex flex-col md:flex-row max-w-7xl w-full mx-auto border-x border-[#d2d3c9]">
        <Sidebar />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 flex flex-col">
          {/* Header Info */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#7a5c40]" />
              <span className="text-xs font-bold text-[#7a5c40] uppercase tracking-widest">
                Perplexity AI + Notion Core
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Conversational Legal Copilot
            </h1>
            <p className="text-xs text-[#6b6b61] mt-1 max-w-2xl leading-relaxed">
              Query our active statutes AI directly. Ask specific parameters regarding any lease, deposit dispute, non-compete waiver, or paste text strings inline to fetch plain-English definitions instantly.
            </p>
          </div>

          {/* Core Panel Hub */}
          <div className="flex-1 border bg-white grid grid-cols-1 lg:grid-cols-12 min-h-[600px] border-[#d2d3c9]">
            {/* Left Context file selector */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#d2d3c9] p-4 bg-[#f0f0e8]/30 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#6b6b61] uppercase tracking-wider block mb-3">
                  Select Context Stream
                </span>

                <div className="space-y-2">
                  {documents.map((doc) => (
                    <button
                      key={doc.id}
                      onClick={() => setActiveDocument(doc.id)}
                      className={`w-full text-left p-2.5 text-xs border transition-all ${
                        doc.id === activeDocumentId
                          ? 'bg-white border-[#7a5c40] font-bold shadow-xs'
                          : 'bg-transparent border-[#d2d3c9] hover:bg-white text-[#6b6b61]'
                      }`}
                    >
                      <div className="truncate text-[#1a1a1a]">{doc.title}</div>
                      <div className="flex justify-between items-center mt-1 text-[9px] text-[#6b6b61]">
                        <span>{doc.type}</span>
                        <span className="font-bold text-[#7a5c40]">Risk: {doc.overallRiskScore}%</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#d2d3c9]/60">
                <div className="p-3 bg-white border border-[#d2d3c9] text-[11px] text-[#6b6b61]">
                  <strong className="text-[#1a1a1a] block text-xs mb-1">💡 Smart Tip:</strong>
                  <span>Switching languages above translates all historical answers directly inside the message flow simultaneously.</span>
                </div>
              </div>
            </div>

            {/* Right Chat Stream */}
            <div className="lg:col-span-8 flex flex-col h-full">
              <AIChatPanel />
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
