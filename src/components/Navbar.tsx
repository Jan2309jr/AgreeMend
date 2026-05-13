'use strict';

import React, { useState } from 'react';
import Link from 'next/link';
import { TranslationToggle } from './TranslationToggle';
import { Scale, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#f0f0e8]/95 backdrop-blur-md border-b border-[#d2d3c9] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left Core Identity */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#7a5c40] text-white flex items-center justify-center border border-[#9c7c5c] group-hover:bg-[#5c432d] transition-colors">
              <Scale className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black text-[#1a1a1a] tracking-tight leading-none">
                AgreeMend
              </span>
              <span className="text-[8px] font-bold text-[#7a5c40] uppercase tracking-widest mt-0.5">
                AI Legal-Tech
              </span>
            </div>
          </Link>

          {/* Core Desktop Navigation String */}
          <nav className="hidden md:flex items-center gap-1.5">
            <Link 
              href="/scan" 
              className="px-3 py-1.5 text-xs font-bold text-[#1a1a1a] hover:bg-white hover:border-[#d2d3c9] border border-transparent transition-all"
            >
              Scan Document
            </Link>
            <Link 
              href="/results/doc-1" 
              className="px-3 py-1.5 text-xs font-bold text-[#1a1a1a] hover:bg-white hover:border-[#d2d3c9] border border-transparent transition-all"
            >
              Analysis Studio
            </Link>
            <Link 
              href="/assistant" 
              className="px-3 py-1.5 text-xs font-bold text-[#1a1a1a] hover:bg-white hover:border-[#d2d3c9] border border-transparent transition-all"
            >
              AI Assistant
            </Link>
            <Link 
              href="/studio" 
              className="px-3 py-1.5 text-xs font-bold text-[#1a1a1a] hover:bg-white hover:border-[#d2d3c9] border border-transparent transition-all"
            >
              Drafting Editor
            </Link>
            <Link 
              href="/pricing" 
              className="px-3 py-1.5 text-xs font-bold text-[#1a1a1a] hover:bg-white hover:border-[#d2d3c9] border border-transparent transition-all"
            >
              Pricing
            </Link>
          </nav>
        </div>

        {/* Right CTA Actions & Language Picker */}
        <div className="hidden lg:flex items-center gap-3">
          <TranslationToggle />

          <div className="flex items-center gap-2 border-l border-[#d2d3c9] pl-3">
            <Link
              href="/auth/login"
              className="px-3 py-1.5 text-xs font-bold text-[#1a1a1a] border border-[#d2d3c9] hover:bg-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/dashboard"
              className="px-3 py-1.5 text-xs font-bold bg-[#7a5c40] text-white hover:bg-[#5c432d] transition-colors"
            >
              Workspace
            </Link>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <div className="scale-90 origin-right">
            <TranslationToggle />
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#1a1a1a] border border-[#d2d3c9] bg-white hover:bg-[#f0f0e8] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#d2d3c9] px-4 py-4 space-y-2 shadow-lg">
          <Link 
            href="/scan" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-xs font-bold text-[#1a1a1a] hover:bg-[#f0f0e8] border border-transparent"
          >
            Scan Document
          </Link>
          <Link 
            href="/results/doc-1" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-xs font-bold text-[#1a1a1a] hover:bg-[#f0f0e8] border border-transparent"
          >
            Analysis Studio
          </Link>
          <Link 
            href="/assistant" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-xs font-bold text-[#1a1a1a] hover:bg-[#f0f0e8] border border-transparent"
          >
            AI Assistant
          </Link>
          <Link 
            href="/studio" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-xs font-bold text-[#1a1a1a] hover:bg-[#f0f0e8] border border-transparent"
          >
            Drafting Studio
          </Link>
          <Link 
            href="/pricing" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-xs font-bold text-[#1a1a1a] hover:bg-[#f0f0e8] border border-transparent"
          >
            Pricing Plans
          </Link>
          <div className="pt-2 border-t border-[#d2d3c9] grid grid-cols-2 gap-2">
            <Link
              href="/auth/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center px-3 py-2 text-xs font-bold text-[#1a1a1a] border border-[#d2d3c9] bg-[#f0f0e8]"
            >
              Sign In
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center px-3 py-2 text-xs font-bold bg-[#7a5c40] text-white"
            >
              Workspace
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
