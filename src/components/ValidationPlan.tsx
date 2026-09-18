import React from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { validationChecklist } from '../data/projectData';

export const ValidationPlan: React.FC = () => {
  return (
    <section id="validation" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            SIH Evaluation Rubric
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Validation & Demonstration Plan
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A structured evaluation checklist verifying each phase of the on-device privacy workflow.
          </p>
        </div>

        {/* Checklist Container */}
        <div className="max-w-4xl mx-auto space-y-4">
          {validationChecklist.map((item, index) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-card transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-blue-600">
                      CRITERION 0{index + 1}
                    </span>
                    <h4 className="font-bold text-sm sm:text-base text-slate-900">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Status / Expected outcome */}
              <div className="sm:text-right shrink-0 bg-white sm:bg-transparent p-3 sm:p-0 rounded-xl border sm:border-0 border-slate-200 w-full sm:w-auto">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Verified in Demo
                </span>
                <div className="text-[11px] text-slate-500 mt-1 font-medium max-w-xs">
                  {item.expectedOutcome}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Link to Try in Demo */}
        <div className="mt-10 text-center">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all"
          >
            <span>Run Demonstration Checklist on Live Prototype</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
