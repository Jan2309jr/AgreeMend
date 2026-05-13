'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Sidebar } from '../../components/Sidebar';
import { UploadZone } from '../../components/UploadZone';
import { Scale, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ScanPage() {
  const router = useRouter();

  const handleUploadComplete = (documentId: string) => {
    router.push(`/results/${documentId}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f0e8] text-[#1a1a1a]">
      <Navbar />

      <div className="flex-1 flex flex-col md:flex-row max-w-7xl w-full mx-auto border-x border-[#d2d3c9]">
        {/* Left Configured Persistent Sidebar */}
        <Sidebar />

        {/* Center Main Scanner Workspace Area */}
        <main className="flex-1 p-6 sm:p-10 flex flex-col justify-between overflow-y-auto">
          <div className="max-w-3xl w-full mx-auto space-y-8">
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-[#7a5c40] inline-block" />
                <span className="text-xs font-bold text-[#7a5c40] uppercase tracking-widest">
                  Secure Parsing Suite
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
                AI Document Scanner Studio
              </h1>
              <p className="text-xs text-[#6b6b61] mt-1 leading-relaxed">
                Drop your standard local Bangalore rental framework, custom PDF parameters, images, or legacy corporate files below. The multi-domain deep analysis pipeline extracts clauses instantly.
              </p>
            </div>

            {/* Core Dropzone Wrapper */}
            <div className="border-2 border-[#7a5c40] bg-white p-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-[#d2d3c9]/60 mb-4 text-xs font-bold">
                <span className="text-[#1a1a1a] uppercase">Dropzone v4.0 Active Matrix</span>
                <span className="text-[#7a5c40] bg-[#f0f0e8] px-2 py-0.5 border border-[#d2d3c9]">
                  OCR Integrated
                </span>
              </div>

              <UploadZone onComplete={handleUploadComplete} />
            </div>

            {/* Security checklist grid */}
            <div className="border bg-white p-5 border-[#d2d3c9]">
              <h3 className="text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-3">
                Extraction Engine Protections
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2 text-xs text-[#6b6b61]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1a1a1a] block font-medium">Zero-Retention Security</strong>
                    <span>Uploaded payloads clear memory automatically post JSON construction.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs text-[#6b6b61]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1a1a1a] block font-medium">Multi-Layer OCR pipelines</strong>
                    <span>Scans non-selectable physical image scans or scrambled line definitions.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs text-[#6b6b61]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1a1a1a] block font-medium">Cross-Domain RAG check</strong>
                    <span>Matches extracted clauses directly against regional statutory caps.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs text-[#6b6b61]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1a1a1a] block font-medium">Multi-Language Vernacular</strong>
                    <span>Processes local language clauses into structured uniform arrays.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-4 border-t border-[#d2d3c9]/60 flex items-center justify-between text-[11px] text-[#6b6b61]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#7a5c40]" />
              <span>TLS 1.3 Bank-grade encryption active</span>
            </div>
            <span>AgreeMend Core Pipeline</span>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
