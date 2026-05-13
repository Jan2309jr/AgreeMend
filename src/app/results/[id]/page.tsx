'use client';

import React, { useTransition } from 'react';
import { useParams } from 'next/navigation';
import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';
import { Sidebar } from '../../../components/Sidebar';
import { ClauseCard } from '../../../components/ClauseCard';
import { LegalInsightCard } from '../../../components/LegalInsightCard';
import { AIChatPanel } from '../../../components/AIChatPanel';
import { 
  RiskDistributionChart, 
  LegalComplexityGraph, 
  ComplianceHeatmap, 
  RiskTimelineChart 
} from '../../../components/AnalyticsCharts';
import { useStore } from '../../../store/useStore';
import { 
  ShieldAlert, 
  FileText, 
  CheckCircle, 
  Activity, 
  HelpCircle,
  AlertTriangle,
  Scale
} from 'lucide-react';

// Using standard unwrap parameter pattern for Next.js App Router dynamic paths
export default function ResultsPage() {
  const params = useParams();
  const idParam = params?.id as string || 'doc-1';
  const { documents, activeDocumentId, setActiveDocument } = useStore();

  // Make sure active document state syncs if directly landed via URL
  React.useEffect(() => {
    if (idParam && idParam !== activeDocumentId) {
      setActiveDocument(idParam);
    }
  }, [idParam, activeDocumentId, setActiveDocument]);

  const doc = documents.find(d => d.id === idParam) || documents[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f0e8] text-[#1a1a1a]">
      <Navbar />

      {/* Main Multi-Panel Workspace Wrapper */}
      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl w-full mx-auto border-x border-[#d2d3c9]">
        {/* Panel 1: Left Context Navigation Sidebar */}
        <Sidebar />

        {/* Panel 2: Center Primary Clause Analysis Dashboard */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto space-y-8 max-w-4xl">
          {/* Top Active Log info */}
          <div className="border bg-white p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-[#d2d3c9]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold text-[#7a5c40] uppercase tracking-wider bg-[#f0f0e8] px-2 py-0.5 border border-[#d2d3c9]">
                  {doc.type}
                </span>
                <span className="text-xs text-[#6b6b61]">Uploaded: {doc.uploadDate}</span>
              </div>
              <h1 className="text-base sm:text-lg font-black text-[#1a1a1a] truncate max-w-md">
                {doc.title}
              </h1>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-bold text-[#6b6b61] uppercase">Status:</span>
              <span className={`px-2.5 py-1 text-xs font-bold uppercase tracking-wider border ${
                doc.overallRiskScore > 50 
                  ? 'bg-red-50 text-red-800 border-red-300' 
                  : 'bg-emerald-50 text-emerald-800 border-emerald-300'
              }`}>
                {doc.complianceStatus}
              </span>
            </div>
          </div>

          {/* Top Summary Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            <LegalInsightCard
              title="Risk Score"
              value={`${doc.overallRiskScore}%`}
              subtitle={doc.overallRiskScore > 50 ? "Critical Liability" : "Acceptable"}
              icon={ShieldAlert}
              variant={doc.overallRiskScore > 50 ? "danger" : "default"}
            />
            <LegalInsightCard
              title="Complexity"
              value={`${doc.legalComplexity}%`}
              subtitle="Dense legalese detected"
              icon={Activity}
              variant="warning"
            />
            <LegalInsightCard
              title="User Safety"
              value={`${doc.userSafetyScore}%`}
              subtitle="Protection baseline"
              icon={CheckCircle}
              variant="success"
            />
            <LegalInsightCard
              title="Confidence"
              value={`${doc.aiConfidence}%`}
              subtitle="Multi-domain audit"
              icon={HelpCircle}
              variant="default"
            />
            <div className="col-span-2 sm:col-span-1 border bg-[#7a5c40] text-white p-3 flex flex-col justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#f0f0e8]">Engine Status</span>
              <div>
                <div className="text-xs font-black uppercase tracking-tight">Verified</div>
                <p className="text-[9px] text-[#d4c5b3] mt-0.5">AgreeMend AI v4</p>
              </div>
            </div>
          </div>

          {/* Primary View: CLAUSE ANALYSIS ARRAYS */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#d2d3c9] pb-2">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#7a5c40]" />
                <h2 className="text-sm font-black text-[#1a1a1a] uppercase tracking-wider">
                  Extracted Clauses ({doc.clauses.length})
                </h2>
              </div>
              <span className="text-[10px] text-[#6b6b61] font-medium">
                Showing color-mapped safety parameters
              </span>
            </div>

            {doc.clauses.length === 0 ? (
              <div className="border bg-white p-8 text-center text-xs text-[#6b6b61]">
                No explicit risky sub-clauses found for this basic template. The document conforms perfectly to regional model protocols.
              </div>
            ) : (
              <div className="space-y-4">
                {doc.clauses.map((clause) => (
                  <ClauseCard key={clause.id} clause={clause} />
                ))}
              </div>
            )}
          </div>

          {/* Core Analytics & Visualization Modules */}
          <div className="space-y-4 pt-6 border-t border-[#d2d3c9]">
            <div className="flex items-center gap-2 mb-2">
              <Scale className="w-4 h-4 text-[#7a5c40]" />
              <h3 className="text-xs font-black text-[#1a1a1a] uppercase tracking-wider">
                Advanced Mathematical Analytics
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <RiskDistributionChart />
              <LegalComplexityGraph />
              <ComplianceHeatmap />
              <RiskTimelineChart />
            </div>
          </div>
        </main>

        {/* Panel 3: Right Persistent AI Insights Chat Panel */}
        <div className="w-full lg:w-80 shrink-0 border-t lg:border-t-0 lg:border-l border-[#d2d3c9] bg-white">
          <div className="sticky top-16 h-[calc(100vh-4rem)]">
            <AIChatPanel />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
