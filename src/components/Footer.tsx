import React from 'react';
import { Shield, ArrowUp } from 'lucide-react';
import { projectMetadata } from '../data/projectData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-white text-base tracking-tight">
                {projectMetadata.id}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-900/60 text-blue-300 border border-blue-700">
                ISRO Smart Automation
              </span>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              {projectMetadata.title} — Prototype website prepared for {projectMetadata.edition}.
            </p>

            <div className="text-[11px] text-slate-500">
              Organization: <strong className="text-slate-300">{projectMetadata.organization}</strong> • Theme: <strong className="text-slate-300">{projectMetadata.theme}</strong>
            </div>
          </div>

          {/* Quick Jump Links */}
          <div className="space-y-2">
            <div className="font-bold text-white text-xs uppercase tracking-wider mb-2">
              Navigation
            </div>
            <ul className="space-y-1.5">
              <li><a href="#overview" className="hover:text-white transition-colors">Overview</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Interactive Demo</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Architecture</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#validation" className="hover:text-white transition-colors">Validation Plan</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About & Team</a></li>
            </ul>
          </div>

          {/* Institutional / Team Placeholders */}
          <div className="space-y-2">
            <div className="font-bold text-white text-xs uppercase tracking-wider mb-2">
              Submission Metadata
            </div>
            <div className="space-y-1 text-slate-400">
              <div>Hackathon: <strong className="text-slate-300">{projectMetadata.edition}</strong></div>
              <div>Problem ID: <strong className="text-slate-300">{projectMetadata.id}</strong></div>
              <div>Team: <strong className="text-slate-300">{projectMetadata.teamName}</strong></div>
              <div className="text-slate-400 leading-tight">
                College: <strong className="text-slate-300">{projectMetadata.institutionName}</strong>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Back to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            Smart India Hackathon 2026 Prototype • Problem Statement {projectMetadata.id} (ISRO)
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
