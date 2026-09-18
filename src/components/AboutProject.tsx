import React from 'react';
import { 
  FileText, 
  Lightbulb, 
  Code2, 
  Users, 
  Building2, 
  Shield, 
  Edit3 
} from 'lucide-react';
import { projectMetadata, teamMembers } from '../data/projectData';

export const AboutProject: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Project Overview & Team
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
            About the SIH 2026 Project
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A proposal for ISRO problem statement <strong className="text-slate-800">{projectMetadata.id}</strong> under Smart Automation.
          </p>
        </div>

        {/* 2-Column Overview: Problem vs Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          
          {/* Problem Statement Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-rose-50 text-rose-700 border border-rose-200">
                Problem Context
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-2">
              The Privacy Gap in Autonomous Browser Agents
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              {projectMetadata.problemStatement}
            </p>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-slate-400" />
              <span>Nodal Ministry / Org: <strong>{projectMetadata.organization}</strong></span>
            </div>
          </div>

          {/* Proposed Solution Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center">
                <Lightbulb className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200">
                Proposed Solution
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-2">
              On-Device Visual & DOM Perception Pipeline
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              {projectMetadata.proposedSolution}
            </p>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-600" />
              <span>Security Guarantee: <strong>Zero External PII Transmission</strong></span>
            </div>
          </div>

        </div>

        {/* Technology Stack Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Technology Stack & Architecture Components
              </h3>
              <p className="text-xs text-slate-500">
                Modern high-performance toolchain chosen for on-device edge inference.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projectMetadata.techStack.map((tech, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold text-slate-900 mb-2 border-b border-slate-200 pb-1.5">
                  {tech.category}
                </div>
                <ul className="space-y-1.5">
                  {tech.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-xs text-slate-600 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members Placeholder Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Team Members & Contributors
                </h3>
                <p className="text-xs text-slate-500">
                  {projectMetadata.teamName} • {projectMetadata.institutionName}
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium self-start sm:self-auto">
              <Edit3 className="w-3.5 h-3.5 text-amber-600" />
              <span>Easy to replace in <code>src/data/projectData.ts</code></span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-slate-50/70 border border-slate-200 hover:border-blue-200 hover:bg-white transition-all flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
                  {member.avatarInitial}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-sm text-slate-900 truncate">
                    {member.name}
                  </div>
                  <div className="text-xs font-semibold text-blue-700 mt-0.5 truncate">
                    {member.role}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 truncate">
                    {member.department}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1 truncate">
                    {member.college}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
