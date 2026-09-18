import React from 'react';
import { ArrowRight, Cpu, Lock, Bot, ChevronRight } from 'lucide-react';
import { projectMetadata } from '../data/projectData';

export const Hero: React.FC = () => {
  return (
    <section id="overview" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50 border-b border-slate-200">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* SIH / ISRO Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 shadow-sm text-xs md:text-sm font-medium text-blue-800 mb-6">
            <span className="font-semibold text-blue-900 bg-blue-100 px-2 py-0.5 rounded-full text-xs">
              SIH 2026
            </span>
            <span className="text-slate-400">•</span>
            <span>Problem Statement: <strong className="text-slate-900">{projectMetadata.id}</strong></span>
            <span className="text-slate-400">•</span>
            <span className="text-blue-700 font-semibold">{projectMetadata.organization}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-tight md:leading-[1.15]">
            On-Device Visual Perception for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600">
              Light-weight Browser Agents
            </span>
          </h1>

          {/* Short One-Line Description */}
          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
            A client-side privacy firewall that visually detects, classifies, and redacts sensitive PII and confidential webpage data before transmitting safe context to autonomous browser agents.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-sm hover:shadow active:scale-95 transition-all"
            >
              <span>Try Interactive Prototype</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-semibold text-base hover:border-slate-400 active:scale-95 transition-all"
            >
              <span>How It Works</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Visual Data Flow Diagram: Webpage -> On-device Detection -> Sanitized Data -> Browser Agent */}
          <div className="mt-12 p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-card">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Core Architectural Pipeline Flow
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative">
              {/* Step 1 */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center text-center group hover:bg-blue-50/50 hover:border-blue-200 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-2 font-semibold">
                  1
                </div>
                <div className="font-semibold text-sm text-slate-900">Webpage Content</div>
                <div className="text-xs text-slate-500 mt-1">Raw DOM + Visual Pixels with user data</div>
              </div>

              {/* Step 2 */}
              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 flex flex-col items-center text-center relative">
                <span className="absolute -top-2 px-2 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold tracking-wide">
                  LOCAL ON-DEVICE
                </span>
                <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-2 font-semibold shadow-sm">
                  2
                </div>
                <div className="font-semibold text-sm text-blue-950">On-Device Detection</div>
                <div className="text-xs text-blue-800/80 mt-1">Vision & Regex identifies PII & secrets</div>
              </div>

              {/* Step 3 */}
              <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 flex flex-col items-center text-center relative">
                <span className="absolute -top-2 px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold tracking-wide">
                  ZERO EGRESS
                </span>
                <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center mb-2 font-semibold shadow-sm">
                  3
                </div>
                <div className="font-semibold text-sm text-emerald-950">Sanitized Data</div>
                <div className="text-xs text-emerald-800/80 mt-1">Values substituted with [REDACTED] tokens</div>
              </div>

              {/* Step 4 */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center text-center group hover:bg-indigo-50/50 hover:border-indigo-200 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center mb-2 font-semibold">
                  4
                </div>
                <div className="font-semibold text-sm text-slate-900">Browser Agent</div>
                <div className="text-xs text-slate-500 mt-1">Executes browser goal using safe payload</div>
              </div>
            </div>
          </div>

          {/* 3 Metric / Key Highlight Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-subtle flex items-start gap-3.5 text-left">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-semibold text-sm text-slate-900">Local Processing</h2>
                <p className="text-xs text-slate-500 mt-0.5">Wasm & WebGPU models execute inference directly on-client with 0 cloud calls.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-subtle flex items-start gap-3.5 text-left">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-semibold text-sm text-slate-900">Privacy Protection</h2>
                <p className="text-xs text-slate-500 mt-0.5">Deterministic redaction prevents passwords, Aadhaar, and faces from leaving device.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-subtle flex items-start gap-3.5 text-left">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-semibold text-sm text-slate-900">Lightweight Architecture</h2>
                <p className="text-xs text-slate-500 mt-0.5">Ultra-low memory overhead (&lt;35MB) designed for nimble browser automation.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
