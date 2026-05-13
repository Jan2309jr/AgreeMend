'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Scale, Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push('/dashboard');
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#1a1a1a] text-white">
      {/* Left side minimal illustration area */}
      <div className="w-full md:w-1/2 bg-[#7a5c40] p-8 md:p-16 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#9c7c5c] relative overflow-hidden">
        {/* Abstract background graphics */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        
        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white text-[#7a5c40] flex items-center justify-center font-bold">
              <Scale className="w-4 h-4 stroke-[2.5]" />
            </div>
            <span className="text-sm font-black tracking-tight uppercase text-white">AgreeMend SaaS</span>
          </Link>
        </div>

        <div className="relative z-10 my-12 space-y-4">
          <span className="text-[10px] font-bold text-[#f0f0e8] bg-[#9c7c5c] px-2 py-0.5 uppercase tracking-widest inline-block">
            Secure Authentication Matrix
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
            Authenticate verification sessions safely.
          </h2>
          <p className="text-xs text-[#d4c5b3] max-w-sm font-medium leading-relaxed">
            Instant Single-Sign-On parameters map active workspace history instantly without persistent credential retention.
          </p>
        </div>

        <div className="relative z-10 pt-4 border-t border-[#9c7c5c]/60 flex items-center gap-2 text-[10px] text-[#f0f0e8]">
          <ShieldCheck className="w-4 h-4 text-white shrink-0" />
          <span>SOC2 Type II protocols enforce strict hardware token clearance.</span>
        </div>
      </div>

      {/* Right side functional auth inputs */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-2xl font-black uppercase tracking-wider text-white">Sign In to Dashboard</h1>
            <p className="text-xs text-[#d4c5b3] mt-1">Enter registered professional stream parameters below.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#d4c5b3] mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9c7c5c]">
                  <Mail className="w-4 h-4" />
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="operator@legalcorp.com"
                  className="w-full bg-[#1a1a1a] border border-[#9c7c5c] pl-10 pr-3 py-2.5 text-xs text-white placeholder:text-[#6b6b61] focus:outline-hidden focus:border-white"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#d4c5b3]">
                  Security Key Passcode
                </label>
                <Link href="/auth/forgot-password" className="text-[10px] text-[#9c7c5c] hover:underline font-bold">
                  Forgot Code?
                </Link>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9c7c5c]">
                  <Lock className="w-4 h-4" />
                </span>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-[#1a1a1a] border border-[#9c7c5c] pl-10 pr-3 py-2.5 text-xs text-white placeholder:text-[#6b6b61] focus:outline-hidden focus:border-white"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3 bg-[#7a5c40] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#5c432d] disabled:opacity-50 transition-colors flex items-center justify-center gap-2 border border-[#9c7c5c]"
            >
              <span>{loading ? 'Verifying stream...' : 'Authenticate Credentials'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Social login strings */}
          <div className="pt-6 border-t border-[#9c7c5c]/40 space-y-3">
            <span className="block text-center text-[9px] font-bold uppercase tracking-widest text-[#d4c5b3]">
              Alternative OpenID integrations
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button 
                type="button" 
                onClick={() => alert("Mocking absolute authentication redirection loop via Google OpenID matrix.")}
                className="py-2 bg-transparent border border-[#9c7c5c] text-xs font-bold text-white hover:bg-white/5 transition-colors"
              >
                Google SSO
              </button>
              <button 
                type="button"
                onClick={() => alert("Mocking multi-layer security challenge via Microsoft identity matrix.")}
                className="py-2 bg-transparent border border-[#9c7c5c] text-xs font-bold text-white hover:bg-white/5 transition-colors"
              >
                Microsoft Azure AD
              </button>
            </div>
          </div>

          <p className="text-center text-xs text-[#d4c5b3] pt-4">
            Don't have an organization string?{' '}
            <Link href="/auth/signup" className="text-white font-bold underline">
              Register Workspace
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
