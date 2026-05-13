'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Sidebar } from '../../components/Sidebar';
import { useStore } from '../../store/useStore';
import { 
  FileText, 
  Clock, 
  MessageSquare, 
  Plus, 
  FolderPlus, 
  Layers, 
  Users, 
  ShieldAlert, 
  CheckCircle,
  ArrowRight,
  Search
} from 'lucide-react';

export default function WorkspacePage() {
  const router = useRouter();
  const { documents, setActiveDocument } = useStore();
  const [activeTab, setActiveTab] = useState<'recent' | 'chats' | 'drafts' | 'team'>('recent');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDocs = documents.filter(doc => 
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDocClick = (id: string) => {
    setActiveDocument(id);
    router.push(`/results/${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f0e8] text-[#1a1a1a]">
      <Navbar />

      <div className="flex-1 flex flex-col md:flex-row max-w-7xl w-full mx-auto border-x border-[#d2d3c9]">
        <Sidebar />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto space-y-6">
          {/* Header Area */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#d2d3c9]">
            <div>
              <span className="text-[10px] font-bold text-[#7a5c40] uppercase tracking-widest block mb-1">
                Centralized History
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-[#1a1a1a] uppercase tracking-tight">
                Operator Workspace Hub
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/scan"
                className="px-4 py-2 bg-[#7a5c40] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#5c432d] transition-colors flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>New Audit Scan</span>
              </Link>
            </div>
          </div>

          {/* Quick Category Summary Ribbons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white p-3 border border-[#d2d3c9] flex flex-col justify-between">
              <span className="text-[10px] font-bold text-[#6b6b61] uppercase">Total Analyzed</span>
              <div className="text-lg font-black mt-1">{documents.length} Files</div>
            </div>
            <div className="bg-white p-3 border border-[#d2d3c9] flex flex-col justify-between">
              <span className="text-[10px] font-bold text-[#6b6b61] uppercase">Red Flags Identified</span>
              <div className="text-lg font-black text-red-700 mt-1">4 Incidents</div>
            </div>
            <div className="bg-white p-3 border border-[#d2d3c9] flex flex-col justify-between">
              <span className="text-[10px] font-bold text-[#6b6b61] uppercase">Saved Templates</span>
              <div className="text-lg font-black mt-1">5 Frameworks</div>
            </div>
            <div className="bg-white p-3 border border-[#d2d3c9] flex flex-col justify-between">
              <span className="text-[10px] font-bold text-[#6b6b61] uppercase">Team Workspaces</span>
              <div className="text-lg font-black text-[#7a5c40] mt-1">Active Space</div>
            </div>
          </div>

          {/* Core Hub Navigation Tabs */}
          <div className="border bg-white border-[#d2d3c9]">
            <div className="border-b border-[#d2d3c9] flex items-center justify-between p-2 flex-wrap gap-2 bg-[#f0f0e8]/30">
              <div className="flex gap-1">
                <button
                  onClick={() => setActiveTab('recent')}
                  className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                    activeTab === 'recent'
                      ? 'bg-[#7a5c40] text-white font-black'
                      : 'text-[#6b6b61] hover:text-[#1a1a1a]'
                  }`}
                >
                  Recent Scans
                </button>
                <button
                  onClick={() => setActiveTab('chats')}
                  className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                    activeTab === 'chats'
                      ? 'bg-[#7a5c40] text-white font-black'
                      : 'text-[#6b6b61] hover:text-[#1a1a1a]'
                  }`}
                >
                  AI Copilot Logs
                </button>
                <button
                  onClick={() => setActiveTab('drafts')}
                  className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                    activeTab === 'drafts'
                      ? 'bg-[#7a5c40] text-white font-black'
                      : 'text-[#6b6b61] hover:text-[#1a1a1a]'
                  }`}
                >
                  Saved Drafts
                </button>
                <button
                  onClick={() => setActiveTab('team')}
                  className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                    activeTab === 'team'
                      ? 'bg-[#7a5c40] text-white font-black'
                      : 'text-[#6b6b61] hover:text-[#1a1a1a]'
                  }`}
                >
                  Team Libraries
                </button>
              </div>

              {/* Filtering string */}
              {activeTab === 'recent' && (
                <div className="relative w-full sm:w-auto mt-2 sm:mt-0">
                  <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-[#6b6b61]">
                    <Search className="w-3.5 h-3.5" />
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Filter historical logs..."
                    className="w-full sm:w-48 pl-8 pr-2 py-1 text-xs bg-white border border-[#d2d3c9] text-[#1a1a1a] focus:outline-hidden focus:border-[#7a5c40]"
                  />
                </div>
              )}
            </div>

            {/* Tab Contents View Matrix */}
            <div className="p-4">
              {activeTab === 'recent' && (
                <div className="space-y-2">
                  {filteredDocs.length === 0 ? (
                    <div className="py-12 text-center text-xs text-[#6b6b61]">
                      No matched file titles identified under local operational queries.
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="bg-[#f0f0e8] text-[#6b6b61] uppercase tracking-wider border-b border-[#d2d3c9]">
                            <th className="p-2.5 font-bold">Document Title</th>
                            <th className="p-2.5 font-bold">Category</th>
                            <th className="p-2.5 font-bold">Assessed Risk</th>
                            <th className="p-2.5 font-bold">Complexity</th>
                            <th className="p-2.5 font-bold text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#d2d3c9]/40">
                          {filteredDocs.map((doc) => {
                            const isRisky = doc.overallRiskScore > 50;
                            return (
                              <tr key={doc.id} className="hover:bg-[#f0f0e8]/50 transition-colors">
                                <td className="p-2.5">
                                  <button 
                                    onClick={() => handleDocClick(doc.id)}
                                    className="font-bold text-[#1a1a1a] hover:underline flex items-center gap-1.5 truncate max-w-xs"
                                  >
                                    <FileText className="w-3.5 h-3.5 text-[#7a5c40] shrink-0" />
                                    <span className="truncate">{doc.title}</span>
                                  </button>
                                  <span className="text-[9px] text-[#6b6b61] block">Uploaded: {doc.uploadDate}</span>
                                </td>
                                <td className="p-2.5 font-medium">{doc.type}</td>
                                <td className="p-2.5">
                                  <span className={`px-2 py-0.5 text-[10px] font-bold inline-flex items-center gap-1 border ${
                                    isRisky ? 'bg-red-50 text-red-800 border-red-300' : 'bg-emerald-50 text-emerald-800 border-emerald-300'
                                  }`}>
                                    {isRisky ? <ShieldAlert className="w-2.5 h-2.5" /> : <CheckCircle className="w-2.5 h-2.5" />}
                                    <span>{doc.overallRiskScore}% Risk</span>
                                  </span>
                               </td>
                                <td className="p-2.5">
                                  <div className="w-24 bg-[#f0f0e8] h-2 border border-[#d2d3c9] overflow-hidden">
                                    <div 
                                      className="bg-[#7a5c40] h-full" 
                                      style={{ width: `${doc.legalComplexity}%` }}
                                    />
                                  </div>
                                  <span className="text-[9px] text-[#6b6b61] mt-0.5 block">{doc.legalComplexity}% complexity</span>
                                </td>
                                <td className="p-2.5 text-right">
                                  <button
                                    onClick={() => handleDocClick(doc.id)}
                                    className="px-2 py-1 bg-[#f0f0e8] text-[#1a1a1a] hover:bg-[#7a5c40] hover:text-white transition-colors border border-[#d2d3c9] font-bold uppercase tracking-wider text-[10px]"
                                  >
                                    Open Studio
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'chats' && (
                <div className="space-y-3">
                  <div className="p-3 bg-[#f0f0e8]/50 border border-[#d2d3c9] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-[#7a5c40]" />
                      <span className="text-xs font-bold text-[#1a1a1a]">Conversation Log: Bangalore Demo Copilot</span>
                    </div>
                    <span className="text-[10px] text-[#6b6b61]">Active Sync</span>
                  </div>
                  <p className="text-xs text-[#6b6b61] p-2 leading-relaxed">
                    Access conversation trees directly inside the Copilot drawer. Historical parameters update dynamically when viewing file analyses.
                  </p>
                  <button 
                    onClick={() => router.push('/assistant')}
                    className="mt-2 px-3 py-1.5 bg-[#7a5c40] text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Open Active Copilot Workspace
                  </button>
                </div>
              )}

              {activeTab === 'drafts' && (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 bg-[#f0f0e8]/30 border border-[#d2d3c9] flex flex-col justify-between">
                      <div>
                        <span className="text-[9px] font-bold text-[#7a5c40] uppercase block">Saved Template String</span>
                        <h4 className="text-xs font-black text-[#1a1a1a] mt-1">Optimized NDA Counter-Draft</h4>
                        <p className="text-[10px] text-[#6b6b61] mt-1 leading-snug">Customized assignment clauses preserving auxiliary software side projects.</p>
                      </div>
                      <Link href="/studio" className="mt-4 text-[10px] font-bold text-[#7a5c40] hover:underline flex items-center gap-1">
                        <span>Launch Studio v2</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="p-4 bg-[#f0f0e8]/30 border border-[#d2d3c9] flex flex-col justify-between">
                      <div>
                        <span className="text-[9px] font-bold text-[#7a5c40] uppercase block">Saved Template String</span>
                        <h4 className="text-xs font-black text-[#1a1a1a] mt-1">Bangalore Balanced Lease Baseline</h4>
                        <p className="text-[10px] text-[#6b6b61] mt-1 leading-snug">Pre-configured 1-month forfeiture cap and 24-hour statutory text requirements.</p>
                      </div>
                      <Link href="/studio" className="mt-4 text-[10px] font-bold text-[#7a5c40] hover:underline flex items-center gap-1">
                        <span>Launch Studio v2</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'team' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-[#f0f0e8] border border-[#d2d3c9]">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#7a5c40]" />
                      <span className="text-xs font-bold text-[#1a1a1a]">Legal Operations Core Sync</span>
                    </div>
                    <span className="text-[10px] font-bold text-white bg-[#7a5c40] px-2 py-0.5 uppercase tracking-widest">
                      Shared Access Node
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="border p-3">
                      <strong className="block text-[#1a1a1a]">Lead Counsel Operator</strong>
                      <span className="text-[10px] text-[#6b6b61]">owner@legalcorp.com</span>
                    </div>
                    <div className="border p-3">
                      <strong className="block text-[#1a1a1a]">Associate Reviewer</strong>
                      <span className="text-[10px] text-[#6b6b61]">associate@legalcorp.com</span>
                    </div>
                    <div className="border p-3 flex items-center justify-center bg-[#f0f0e8]/50 border-dashed">
                      <button onClick={() => alert("Provisioning operator token assignment loop.")} className="font-bold text-[#7a5c40] hover:underline">
                        + Provision Team Seat
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
