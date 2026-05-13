'use strict';

import React from 'react';
import Link from 'next/link';
import { useStore } from '../store/useStore';
import { FileText, Clock, Bookmark, Layers, Settings, ShieldAlert, CheckCircle, ArrowUpRight } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const { documents, activeDocumentId, setActiveDocument } = useStore();

  return (
    <aside className="w-64 shrink-0 bg-[#f0f0e8]/40 border-r border-[#d2d3c9] min-h-[calc(100vh-4rem)] p-4 flex flex-col justify-between hidden md:flex">
      <div className="space-y-6">
        {/* Quick Nav Trigger Links */}
        <div>
          <span className="text-[9px] font-bold text-[#6b6b61] uppercase tracking-wider block mb-2">
            Workspace Hub
          </span>
          <nav className="space-y-1">
            <Link 
              href="/dashboard"
              className="flex items-center gap-2 px-2.5 py-1.5 text-xs font-bold text-[#1a1a1a] hover:bg-white border border-transparent hover:border-[#d2d3c9] transition-colors"
            >
              <Clock className="w-3.5 h-3.5 text-[#7a5c40]" />
              <span>Recent Scans</span>
            </Link>
            <Link 
              href="/studio"
              className="flex items-center gap-2 px-2.5 py-1.5 text-xs font-bold text-[#1a1a1a] hover:bg-white border border-transparent hover:border-[#d2d3c9] transition-colors"
            >
              <Layers className="w-3.5 h-3.5 text-[#7a5c40]" />
              <span>Templates Studio</span>
            </Link>
            <Link 
              href="/assistant"
              className="flex items-center gap-2 px-2.5 py-1.5 text-xs font-bold text-[#1a1a1a] hover:bg-white border border-transparent hover:border-[#d2d3c9] transition-colors"
            >
              <Bookmark className="w-3.5 h-3.5 text-[#7a5c40]" />
              <span>Saved Drafts & Copilot</span>
            </Link>
          </nav>
        </div>

        {/* Scan History / Scanned Files List */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-bold text-[#6b6b61] uppercase tracking-wider">
              Scan History
            </span>
            <Link href="/scan" className="text-[9px] font-bold text-[#7a5c40] hover:underline flex items-center">
              New Scan
              <ArrowUpRight className="w-2.5 h-2.5 ml-0.5" />
            </Link>
          </div>

          <div className="space-y-1.5 max-h-[320px] overflow-y-auto pr-1">
            {documents.map((doc) => {
              const isActive = doc.id === activeDocumentId;
              const hasCriticalRisk = doc.overallRiskScore > 50;

              return (
                <Link
                  key={doc.id}
                  href={`/results/${doc.id}`}
                  onClick={() => setActiveDocument(doc.id)}
                  className={`block p-2 text-xs border transition-all ${
                    isActive 
                      ? 'bg-white border-[#7a5c40] shadow-xs ring-1 ring-[#7a5c40]/10 font-bold' 
                      : 'bg-[#f0f0e8]/60 border-[#d2d3c9] hover:bg-white text-[#6b6b61]'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <FileText className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isActive ? 'text-[#7a5c40]' : 'text-[#6b6b61]'}`} />
                    <div className="flex-1 min-w-0">
                      <p className={`truncate leading-tight ${isActive ? 'text-[#1a1a1a]' : ''}`}>
                        {doc.title}
                      </p>
                      <div className="flex items-center justify-between mt-1 pt-1 border-t border-[#d2d3c9]/40 text-[9px]">
                        <span className="text-[#6b6b61]">{doc.type}</span>
                        <span className={`font-bold flex items-center gap-0.5 ${
                          hasCriticalRisk ? 'text-red-700' : 'text-emerald-700'
                        }`}>
                          {hasCriticalRisk ? <ShieldAlert className="w-2.5 h-2.5" /> : <CheckCircle className="w-2.5 h-2.5" />}
                          Risk: {doc.overallRiskScore}%
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Config Link */}
      <div className="pt-4 border-t border-[#d2d3c9]">
        <Link
          href="/settings"
          className="flex items-center gap-2 px-2.5 py-1.5 text-xs font-bold text-[#6b6b61] hover:text-[#1a1a1a] transition-colors"
        >
          <Settings className="w-3.5 h-3.5" />
          <span>System Settings</span>
        </Link>
        <div className="mt-2 p-2 bg-white border border-[#d2d3c9] text-[9px] text-[#6b6b61]">
          <span className="font-bold text-[#7a5c40] uppercase block">AgreeMend Unlocked</span>
          <span>All Modules: 100% Free Access</span>
        </div>
      </div>
    </aside>
  );
};
