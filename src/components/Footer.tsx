'use strict';

import React from 'react';
import Link from 'next/link';
import { Scale } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#d2d3c9] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Identity col */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#7a5c40] text-white flex items-center justify-center border border-[#9c7c5c]">
                <Scale className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="text-xs font-black tracking-tight text-[#1a1a1a]">AgreeMend SaaS</span>
            </div>
            <p className="text-xs text-[#6b6b61] leading-relaxed max-w-xs">
              Global AI legal infrastructure providing automated clause verification, compliance indexing, and smart counter-drafting suites.
            </p>
            <span className="inline-block text-[9px] font-mono text-[#7a5c40] bg-[#f0f0e8] px-2 py-0.5 border border-[#d2d3c9]">
              ISO-27001 & SOC2 Verified Demo
            </span>
          </div>

          {/* Links col 1 */}
          <div>
            <h4 className="text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-3">Capabilities</h4>
            <ul className="space-y-2 text-xs text-[#6b6b61]">
              <li><Link href="/scan" className="hover:text-[#7a5c40]">Rental Contracts Scan</Link></li>
              <li><Link href="/scan" className="hover:text-[#7a5c40]">Employment Offer Review</Link></li>
              <li><Link href="/scan" className="hover:text-[#7a5c40]">NDA Risk Verification</Link></li>
              <li><Link href="/studio" className="hover:text-[#7a5c40]">AI Drafting Framework</Link></li>
              <li><Link href="/assistant" className="hover:text-[#7a5c40]">Multi-Lingual Translations</Link></li>
            </ul>
          </div>

          {/* Links col 2 */}
          <div>
            <h4 className="text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-3">Enterprise Suite</h4>
            <ul className="space-y-2 text-xs text-[#6b6b61]">
              <li><Link href="/pricing" className="hover:text-[#7a5c40]">SaaS Tier Options</Link></li>
              <li><Link href="/pricing" className="hover:text-[#7a5c40]">Admin Control Logs</Link></li>
              <li><Link href="/settings" className="hover:text-[#7a5c40]">API Connectors</Link></li>
              <li><Link href="/dashboard" className="hover:text-[#7a5c40]">Shared Team Library</Link></li>
            </ul>
          </div>

          {/* Legal disclaimer col */}
          <div>
            <h4 className="text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-3">Disclaimer</h4>
            <p className="text-[11px] text-[#6b6b61] leading-tight">
              AgreeMend provides programmatic natural language analyses based on active statutes. It is not an active law firm substitute. Always ratify complex final documents with verified licensed counsel.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#d2d3c9]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6b6b61]">
          <span>&copy; {new Date().getFullYear()} AgreeMend Corp. Global SaaS Architecture. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/settings" className="hover:underline">Privacy Shield</Link>
            <Link href="/settings" className="hover:underline">Terms of Protocol</Link>
            <Link href="/settings" className="hover:underline">Regional Matrix</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
