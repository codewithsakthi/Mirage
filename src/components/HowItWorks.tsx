import React from 'react';
import { Globe, Cpu, ShieldCheck, Bot, ArrowRight, CheckCircle2 } from 'lucide-react';
import { howItWorksSteps } from '../data/projectData';

export const HowItWorks: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-blue-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-indigo-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-sky-600" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            System Workflow
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
            How On-Device Privacy Perception Works
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A 4-step client-side pipeline that ensures private web content is sanitized before autonomous agent processing.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {howItWorksSteps.map((step) => (
            <div
              key={step.number}
              className="group relative flex flex-col rounded-2xl bg-slate-50/70 hover:bg-white p-6 border border-slate-200 hover:border-blue-300 hover:shadow-card transition-all"
            >
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-subtle flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getIcon(step.iconName)}
                </div>
                <span className="text-xs font-bold text-slate-400 font-mono">
                  STEP 0{step.number}
                </span>
              </div>

              {/* Step Tag */}
              <div className="text-xs font-semibold text-blue-700 mb-1.5">
                {step.tag}
              </div>

              {/* Title & Description */}
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                {step.title}
              </h3>
              
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                {step.shortDesc}
              </p>

              {/* Detailed Technical Callout */}
              <div className="mt-auto pt-3 border-t border-slate-200/80 text-[11px] text-slate-500 bg-slate-100/50 p-2.5 rounded-lg">
                <span className="font-semibold text-slate-700">Implementation: </span>
                {step.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Banner */}
        <div className="mt-12 p-5 rounded-xl bg-blue-50/70 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-blue-950">Strict Zero-Egress Guarantee</div>
              <div className="text-xs text-blue-800/80">Only sanitized DOM actions and structural tokens reach external browser automation agents.</div>
            </div>
          </div>
          <a
            href="#demo"
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
          >
            <span>See Interactive Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
