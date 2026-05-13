'use client';

import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Sidebar } from '../../components/Sidebar';
import { useStore, Language } from '../../store/useStore';
import { 
  User, 
  CreditCard, 
  Bell, 
  Globe, 
  Cpu, 
  Link as LinkIcon, 
  ShieldAlert, 
  Check, 
  Save 
} from 'lucide-react';

export default function SettingsPage() {
  const { currentLanguage, setLanguage } = useStore();
  const [activeSection, setActiveSection] = useState<string>('profile');
  const [saved, setSaved] = useState(false);

  const sections = [
    { id: 'profile', title: 'Operator Profile', icon: User },
    { id: 'billing', title: 'SaaS Tier Billing', icon: CreditCard },
    { id: 'notifications', title: 'System Alerts', icon: Bell },
    { id: 'language', title: 'Vernacular Translation', icon: Globe },
    { id: 'ai', title: 'Engine Preferences', icon: Cpu },
    { id: 'apps', title: 'Connected Protocols', icon: LinkIcon },
    { id: 'security', title: 'Hardware Clearance', icon: ShieldAlert },
  ];

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f0e8] text-[#1a1a1a]">
      <Navbar />

      <div className="flex-1 flex flex-col md:flex-row max-w-7xl w-full mx-auto border-x border-[#d2d3c9]">
        <Sidebar />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto space-y-6">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-[#d2d3c9]">
            <div>
              <span className="text-[10px] font-bold text-[#7a5c40] uppercase tracking-widest block mb-1">
                Persistent Environment Parameters
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-[#1a1a1a] uppercase tracking-tight">
                System Configurations
              </h1>
            </div>

            <button
              onClick={handleSave}
              className="px-4 py-2 bg-[#7a5c40] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#5c432d] transition-colors flex items-center gap-1.5"
            >
              {saved ? <Check className="w-3.5 h-3.5" /> : <Save className="w-3.5 h-3.5" />}
              <span>{saved ? 'Applied Updates' : 'Commit Configuration'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left side nav tabs */}
            <div className="lg:col-span-4 border bg-white border-[#d2d3c9]">
              <div className="p-3 bg-[#f0f0e8]/50 border-b border-[#d2d3c9] text-xs font-bold uppercase tracking-wider text-[#6b6b61]">
                Configuration Sectors
              </div>
              <div className="divide-y divide-[#d2d3c9]/40">
                {sections.map((sect) => {
                  const Icon = sect.icon;
                  const isActive = activeSection === sect.id;
                  
                  return (
                    <button
                      key={sect.id}
                      onClick={() => setActiveSection(sect.id)}
                      className={`w-full flex items-center gap-2.5 p-3 text-xs transition-colors ${
                        isActive 
                          ? 'bg-[#7a5c40] text-white font-bold' 
                          : 'hover:bg-[#f0f0e8]/40 text-[#1a1a1a]'
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{sect.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right side form layouts */}
            <div className="lg:col-span-8 border bg-white p-6 border-[#d2d3c9] min-h-[400px]">
              {activeSection === 'profile' && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wider border-b border-[#d2d3c9] pb-2">
                    Operator Identity Matrix
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase text-[#6b6b61] mb-1">Assigned Name</label>
                      <input type="text" defaultValue="Operator Lead" className="w-full text-xs p-2 border border-[#d2d3c9] bg-[#f0f0e8]/30 focus:outline-hidden focus:border-[#7a5c40]" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase text-[#6b6b61] mb-1">Corporate Stream</label>
                      <input type="email" readOnly defaultValue="operator@legalcorp.com" className="w-full text-xs p-2 border border-[#d2d3c9] bg-[#f0f0e8]/80 text-[#6b6b61]" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase text-[#6b6b61] mb-1">Organization Title</label>
                    <input type="text" defaultValue="AgreeMend Corp Team Operations" className="w-full text-xs p-2 border border-[#d2d3c9] bg-[#f0f0e8]/30 focus:outline-hidden focus:border-[#7a5c40]" />
                  </div>
                </div>
              )}

              {activeSection === 'billing' && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wider border-b border-[#d2d3c9] pb-2">
                    SaaS Subscription State
                  </h3>
                  <div className="p-3 bg-[#f0f0e8] border border-[#d2d3c9] flex items-center justify-between">
                    <div>
                      <strong className="text-xs text-[#1a1a1a] block">Active Grant: Community Lifetime Access</strong>
                      <span className="text-[10px] text-[#6b6b61]">All analytical verification pipelines and studios are 100% Free once authenticated.</span>
                    </div>
                    <span className="text-xs font-black text-[#7a5c40] uppercase">$0 Applied</span>
                  </div>
                </div>
              )}

              {activeSection === 'notifications' && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wider border-b border-[#d2d3c9] pb-2">
                    Alert Delivery Loops
                  </h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs">
                      <input type="checkbox" defaultChecked className="accent-[#7a5c40]" />
                      <span>Broadcast real-time analysis complete queues via SMTP hooks</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs">
                      <input type="checkbox" defaultChecked className="accent-[#7a5c40]" />
                      <span>Send compliance change monitoring triggers automatically</span>
                    </label>
                  </div>
                </div>
              )}

              {activeSection === 'language' && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wider border-b border-[#d2d3c9] pb-2">
                    Global Engine Dialect
                  </h3>
                  <p className="text-xs text-[#6b6b61] leading-relaxed">
                    Select target regional dialects to rewrite explanation cards instantly across current local and workspace instances.
                  </p>

                  <div className="grid grid-cols-2 gap-2 max-w-xs">
                    {(['English', 'Kannada', 'Hindi', 'Tamil'] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        className={`p-2 text-xs font-bold border text-center transition-colors ${
                          currentLanguage === lang 
                            ? 'bg-[#7a5c40] text-white border-[#7a5c40]' 
                            : 'bg-[#f0f0e8]/50 text-[#1a1a1a] border-[#d2d3c9] hover:bg-white'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === 'ai' && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wider border-b border-[#d2d3c9] pb-2">
                    Modeling Weights & Copilot parameters
                  </h3>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-[#6b6b61] mb-1">Target Engine Weight</label>
                    <select className="w-full text-xs p-2 border border-[#d2d3c9] bg-white focus:outline-hidden focus:border-[#7a5c40]">
                      <option>AgreeMend Legal-v4.2 (Highly accurate global inference)</option>
                      <option>AgreeMend Speed-v3.0 (Low latency mobile verification)</option>
                    </select>
                  </div>
                </div>
              )}

              {activeSection === 'apps' && (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wider border-b border-[#d2d3c9] pb-2">
                    Connected Integrations
                  </h3>
                  <div className="border p-3 flex items-center justify-between text-xs">
                    <div>
                      <strong className="block text-[#1a1a1a]">WhatsApp Integration Node</strong>
                      <span className="text-[10px] text-[#6b6b61]">Broadcast counter-clauses cleanly</span>
                    </div>
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-300 font-bold uppercase">Connected</span>
                  </div>
                  <div className="border p-3 flex items-center justify-between text-xs">
                    <div>
                      <strong className="block text-[#1a1a1a]">Grammarly / Notion AI Connect</strong>
                      <span className="text-[10px] text-[#6b6b61]">Sync inline text modifiers directly</span>
                    </div>
                    <button onClick={() => alert("Simulating integration node activation protocol.")} className="text-[10px] text-[#7a5c40] font-bold uppercase underline">
                      Authorize Connect
                    </button>
                  </div>
                </div>
              )}

              {activeSection === 'security' && (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wider border-b border-[#d2d3c9] pb-2">
                    Zero-Retention Compliance Verification
                  </h3>
                  <p className="text-xs text-[#6b6b61] leading-relaxed">
                    Current workspace processes enforce continuous memory sanitization. Uploaded contract streams are completely decoupled from analytical model checkpoints.
                  </p>
                  <div className="p-2.5 bg-red-50 border border-red-200 text-[10px] text-red-800 font-bold uppercase">
                    Hardware Memory Scrub Status: SUCCESSFUL
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
