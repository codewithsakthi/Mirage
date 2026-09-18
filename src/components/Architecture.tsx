import React from 'react';
import { 
  User, 
  Layout, 
  Eye, 
  ShieldAlert, 
  Lock, 
  Bot, 
  CheckCircle, 
  ArrowDown, 
  ShieldCheck 
} from 'lucide-react';

export const Architecture: React.FC = () => {
  const steps = [
    {
      id: '1',
      title: 'User / Operator',
      desc: 'Requests autonomous workflow (e.g. "Export weekly research logs").',
      icon: <User className="w-5 h-5 text-blue-600" />,
      zone: 'user',
      badge: 'Operator Space'
    },
    {
      id: '2',
      title: 'Web Browser Environment',
      desc: 'Hosts webpage containing sensitive PII, forms, credentials, and images.',
      icon: <Layout className="w-5 h-5 text-slate-600" />,
      zone: 'client',
      badge: 'Client Sandbox'
    },
    {
      id: '3',
      title: 'On-Device Visual Perception',
      desc: 'WebAssembly & WebGPU neural models parse rendered pixels and DOM tree.',
      icon: <Eye className="w-5 h-5 text-indigo-600" />,
      zone: 'perception',
      badge: 'Edge Vision Engine'
    },
    {
      id: '4',
      title: 'Sensitive Data Detection',
      desc: 'Classifies and bounds PII, contact info, secret passwords, and biometric faces.',
      icon: <ShieldAlert className="w-5 h-5 text-amber-600" />,
      zone: 'detection',
      badge: 'Local Classification'
    },
    {
      id: '5',
      title: 'Local Redaction / Sanitization',
      desc: 'Substitutes raw values with deterministic synthetic tokens and masks image pixels.',
      icon: <Lock className="w-5 h-5 text-emerald-600" />,
      zone: 'redaction',
      badge: 'Zero-Egress Firewall'
    },
    {
      id: '6',
      title: 'Lightweight Browser Agent',
      desc: 'Receives safe sanitized DOM representation to plan actions and navigate.',
      icon: <Bot className="w-5 h-5 text-sky-600" />,
      zone: 'agent',
      badge: 'Safe Execution Context'
    },
    {
      id: '7',
      title: 'Task Execution & Feedback',
      desc: 'Target action completed without any exposure of sensitive user or mission secrets.',
      icon: <CheckCircle className="w-5 h-5 text-emerald-600" />,
      zone: 'execution',
      badge: 'Secure Completion'
    }
  ];

  return (
    <section id="architecture" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            System Topology
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
            End-to-End System Architecture
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Strict client-side isolation guarantees that sensitive information is classified and redacted on-device before external transmission.
          </p>
        </div>

        {/* Visual Pipeline Container */}
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-card relative">
          
          {/* Isolation Perimeter Badge */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                Local On-Device Trust Boundary (No Raw Data Egress)
              </span>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
              Zero Server-Side PII Leakage
            </span>
          </div>

          {/* Sequential Nodes */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-subtle transition-all gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-sm sm:text-base text-slate-900">
                          {step.title}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 font-semibold">
                          {step.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-xs font-mono font-bold text-slate-400 bg-slate-50 px-2.5 py-1 rounded border border-slate-100">
                    Step {step.id} of {steps.length}
                  </div>
                </div>

                {/* Arrow Connector between steps */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-1">
                    <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-xs">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  </div>
                )}

              </React.Fragment>
            ))}
          </div>

          {/* Architecture Takeaway Card */}
          <div className="mt-8 p-4 rounded-xl bg-blue-50/70 border border-blue-200 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div className="text-xs text-blue-900 leading-relaxed">
              <strong className="font-bold text-blue-950">Security Invariant: </strong>
              The Lightweight Browser Agent never directly sees unmasked credentials, phone numbers, or facial biometric coordinates. All perceptual and textual sanitization is performed locally inside the browser sandbox before agent prompt generation.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
