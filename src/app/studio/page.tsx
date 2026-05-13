'use client';

import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Sidebar } from '../../components/Sidebar';
import { DraftEditor } from '../../components/DraftEditor';
import { Layers, Wand2 } from 'lucide-react';

export default function StudioPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f0f0e8] text-[#1a1a1a]">
      <Navbar />

      <div className="flex-1 flex flex-col md:flex-row max-w-7xl w-full mx-auto border-x border-[#d2d3c9]">
        <Sidebar />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto space-y-6">
          {/* Header section */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Wand2 className="w-3.5 h-3.5 text-[#7a5c40]" />
              <span className="text-xs font-bold text-[#7a5c40] uppercase tracking-widest">
                Future-Facing Capability
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-[#1a1a1a] uppercase tracking-tight">
              AI Document Drafting Studio
            </h1>
            <p className="text-xs text-[#6b6b61] mt-1 max-w-2xl leading-relaxed">
              Create balanced legal templates loaded directly with smart clause insertions. Edit strings dynamically, copy secure frameworks, and generate counter-clauses using interactive prompts.
            </p>
          </div>

          {/* Core Studio Implementation */}
          <div className="border-t border-[#d2d3c9] pt-4">
            <DraftEditor />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
