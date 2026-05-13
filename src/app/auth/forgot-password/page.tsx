'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a] text-white p-4">
      <div className="w-full max-w-md border border-[#9c7c5c] p-8 bg-[#1a1a1a]">
        <Link href="/auth/login" className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#9c7c5c] hover:underline uppercase tracking-wider mb-6">
          <ArrowLeft className="w-3 h-3" />
          <span>Return to Authentication</span>
        </Link>

        {submitted ? (
          <div className="text-center space-y-4 py-4">
            <CheckCircle2 className="w-12 h-12 text-[#9c7c5c] mx-auto" />
            <h2 className="text-lg font-black uppercase tracking-wider text-white">Reset Payload Triggered</h2>
            <p className="text-xs text-[#d4c5b3] leading-relaxed">
              If the specific organization prefix string corresponds to an active persistent account, recovery matrices will be broadcast directly via SMTP queues.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <h1 className="text-xl font-black uppercase tracking-wider text-white">Recover Identity</h1>
              <p className="text-xs text-[#d4c5b3] mt-1">Request secure challenge links sent to registered stream addresses.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#d4c5b3] mb-1.5">
                  Authorized Email Address
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9c7c5c]">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    type="email"
                    required
                    placeholder="operator@legalcorp.com"
                    className="w-full bg-[#1a1a1a] border border-[#9c7c5c] pl-10 pr-3 py-2.5 text-xs text-white placeholder:text-[#6b6b61] focus:outline-hidden focus:border-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#7a5c40] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#5c432d] transition-colors border border-[#9c7c5c]"
              >
                Broadcast Recovery Loop
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
