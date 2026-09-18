import React from 'react';
import { 
  Cpu, 
  Search, 
  EyeOff, 
  ShieldAlert, 
  Zap, 
  Lock, 
  CheckCircle2 
} from 'lucide-react';
import { featuresList } from '../data/projectData';

export const Features: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-600" />;
      case 'Search':
        return <Search className="w-5 h-5 text-indigo-600" />;
      case 'EyeOff':
        return <EyeOff className="w-5 h-5 text-purple-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-amber-600" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-sky-600" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-emerald-600" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="features" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Core Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Key System Features
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Engineered specifically for low-latency on-device execution and maximum privacy preservation.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-card transition-all flex flex-col group"
            >
              {/* Top row: Icon + Highlight Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getIcon(feature.iconName)}
                </div>
                {feature.highlight && (
                  <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    {feature.highlight}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed flex-grow">
                {feature.description}
              </p>

              {/* Category tag footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Module Category</span>
                <span className="font-semibold text-slate-600">{feature.category}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
