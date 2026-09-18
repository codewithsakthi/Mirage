import React, { useState } from 'react';
import { 
  Scan, 
  ShieldCheck, 
  RotateCcw, 
  CheckCircle2, 
  AlertTriangle, 
  Lock, 
  Eye, 
  User, 
  Bot,
  Terminal, 
  Layers, 
  Globe, 
  Sparkles,
  Info
} from 'lucide-react';
import { demoScenarios } from '../data/projectData';
import type { SensitiveCategory } from '../types';

type DemoState = 'idle' | 'scanning' | 'scanned' | 'redacting' | 'redacted';

export const InteractiveDemo: React.FC = () => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [demoState, setDemoState] = useState<DemoState>('idle');
  const [activeTab, setActiveTab] = useState<'preview' | 'payload'>('preview');

  const scenario = demoScenarios[selectedScenarioIndex];
  const fields = scenario.mockPage.fields;

  const handleScan = () => {
    setDemoState('scanning');
    setTimeout(() => {
      setDemoState('scanned');
    }, 900);
  };

  const handleRedact = () => {
    setDemoState('redacting');
    setTimeout(() => {
      setDemoState('redacted');
    }, 800);
  };

  const handleReset = () => {
    setDemoState('idle');
  };

  const getCategoryBadge = (category: SensitiveCategory) => {
    switch (category) {
      case 'credentials':
        return {
          label: 'Credentials',
          bg: 'bg-rose-50 text-rose-700 border-rose-200',
          dot: 'bg-rose-500',
        };
      case 'pii':
        return {
          label: 'PII (Identity)',
          bg: 'bg-amber-50 text-amber-700 border-amber-200',
          dot: 'bg-amber-500',
        };
      case 'contact':
        return {
          label: 'Contact Info',
          bg: 'bg-blue-50 text-blue-700 border-blue-200',
          dot: 'bg-blue-500',
        };
      case 'face':
        return {
          label: 'Biometric / Face',
          bg: 'bg-purple-50 text-purple-700 border-purple-200',
          dot: 'bg-purple-500',
        };
      case 'financial':
        return {
          label: 'Financial Data',
          bg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          dot: 'bg-emerald-500',
        };
      default:
        return {
          label: 'Confidential',
          bg: 'bg-slate-100 text-slate-700 border-slate-200',
          dot: 'bg-slate-500',
        };
    }
  };

  // Generate mock outbound JSON payload for inspection
  const getSimulatedPayload = () => {
    if (demoState === 'redacted') {
      return JSON.stringify(
        {
          timestamp: new Date().toISOString(),
          sanitizedBy: 'OnDevice_Visual_Perception_v1.0_LocalWasm',
          securityStatus: 'CLEAN_SANITIZED_ZERO_EGRESS',
          targetService: scenario.mockPage.serviceName,
          agentGoal: scenario.agentGoal,
          domState: {
            formTitle: scenario.mockPage.formTitle,
            fields: fields.map(f => ({
              fieldId: f.id,
              fieldLabel: f.label,
              category: f.category,
              sanitizedValue: f.redactedValue,
              isRedacted: true,
              redactionMethod: f.isImage ? 'GAUSSIAN_FACE_MASK' : 'SYNTHETIC_TOKEN_REPLACE'
            })),
            unrestrictedContent: scenario.mockPage.safeContent
          }
        },
        null,
        2
      );
    } else {
      return JSON.stringify(
        {
          timestamp: new Date().toISOString(),
          securityStatus: 'UNPROTECTED_RAW_DOM_EXPOSURE_RISK',
          warning: 'RAW CREDENTIALS & PII EXPOSED WITHOUT ON-DEVICE PERCEPTION FILTER',
          targetService: scenario.mockPage.serviceName,
          agentGoal: scenario.agentGoal,
          domState: {
            formTitle: scenario.mockPage.formTitle,
            fields: fields.map(f => ({
              fieldId: f.id,
              fieldLabel: f.label,
              rawValue: f.rawValue,
              isRedacted: false
            })),
            unrestrictedContent: scenario.mockPage.safeContent
          }
        },
        null,
        2
      );
    }
  };

  return (
    <section id="demo" className="py-16 md:py-24 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Live Interactive Prototype
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
              On-Device Visual Perception Simulation
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
              Simulate webpage visual scanning and local redaction before sending payload to a browser agent.
            </p>
          </div>

          {/* Scenario Selector */}
          <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm">
            <span className="text-xs font-semibold text-slate-500 pl-2">Scenario:</span>
            {demoScenarios.map((sc, index) => (
              <button
                key={sc.id}
                onClick={() => {
                  setSelectedScenarioIndex(index);
                  setDemoState('idle');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedScenarioIndex === index
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {sc.title}
              </button>
            ))}
          </div>
        </div>

        {/* Prototype Toolbar Controls */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-card mb-6 flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            {/* Primary Action 1: Scan Page */}
            <button
              onClick={handleScan}
              disabled={demoState === 'scanning' || demoState === 'scanned' || demoState === 'redacted'}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-sm ${
                demoState === 'idle'
                  ? 'bg-blue-600 hover:bg-blue-700 text-white active:scale-95'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
              }`}
            >
              <Scan className={`w-4 h-4 ${demoState === 'scanning' ? 'animate-spin' : ''}`} />
              {demoState === 'scanning' ? 'Scanning Webpage Pixels...' : '1. Scan Page'}
            </button>

            {/* Primary Action 2: Redact Sensitive Data */}
            <button
              onClick={handleRedact}
              disabled={demoState !== 'scanned'}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-sm ${
                demoState === 'scanned'
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white active:scale-95 animate-bounce'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
              }`}
            >
              <Lock className="w-4 h-4" />
              {demoState === 'redacting' ? 'Sanitizing Locally...' : '2. Redact Sensitive Data'}
            </button>

            {/* Reset Button */}
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-semibold transition-all"
              title="Reset to default unredacted state"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
              Reset Demo
            </button>
          </div>

          {/* View Mode Toggle: Visual Webpage vs Outgoing Payload */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setActiveTab('preview')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === 'preview'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              Webpage Viewport
            </button>
            <button
              onClick={() => setActiveTab('payload')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === 'payload'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              Agent Payload Inspector
            </button>
          </div>

        </div>

        {/* Redaction Success Alert Banner */}
        {demoState === 'redacted' && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between gap-4 animate-in fade-in duration-300">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-emerald-950">
                  Sensitive information sanitized locally.
                </h4>
                <p className="text-xs text-emerald-800">
                  All PII, credentials, contact numbers, and biometric face regions replaced with synthetic tokens on-device. Zero data leaked to external agents.
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold border border-emerald-200">
              Safe for Agent Dispatch
            </span>
          </div>
        )}

        {/* Main Grid: Mock Browser Window + Telemetry Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left / Center: Simulated Browser (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-300 shadow-card overflow-hidden flex flex-col">
            
            {/* Fake Browser Window Header & Address Bar */}
            <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center gap-3">
              {/* Window dots */}
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-400"></span>
                <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
              </div>

              {/* URL Bar */}
              <div className="flex-1 bg-white px-3 py-1 rounded-lg border border-slate-200 text-xs font-mono text-slate-600 flex items-center gap-2 truncate shadow-xs">
                <Lock className="w-3 h-3 text-emerald-600 shrink-0" />
                <span className="text-slate-400">https://</span>
                <span className="text-slate-800 truncate">{scenario.url.replace('https://', '')}</span>
              </div>

              <div className="text-[11px] font-semibold text-slate-500 bg-slate-200/70 px-2 py-0.5 rounded">
                Simulated DOM
              </div>
            </div>

            {/* Agent Goal Header Banner */}
            <div className="bg-blue-50/80 px-5 py-2.5 border-b border-blue-100 flex items-start gap-2.5">
              <Bot className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div className="text-xs text-blue-900">
                <span className="font-bold">Autonomous Agent Goal: </span>
                {scenario.agentGoal}
              </div>
            </div>

            {/* Main Content Area */}
            {activeTab === 'preview' ? (
              <div className="p-6 relative">
                
                {/* Visual Scanning Animation Overlay */}
                {demoState === 'scanning' && (
                  <div className="absolute inset-0 bg-blue-500/10 z-20 pointer-events-none overflow-hidden flex flex-col justify-center items-center">
                    <div className="w-full h-1 bg-blue-500 shadow-[0_0_12px_#3b82f6] animate-scan"></div>
                    <div className="bg-slate-900/80 text-white text-xs font-mono px-3 py-1.5 rounded-full mt-4 flex items-center gap-2 backdrop-blur-sm shadow-md">
                      <Scan className="w-3.5 h-3.5 animate-spin text-blue-400" />
                      Analyzing DOM nodes & viewport pixels locally...
                    </div>
                  </div>
                )}

                {/* Simulated Webpage Content */}
                <div className="border border-slate-200 rounded-xl p-5 bg-white">
                  
                  {/* Page Top Heading */}
                  <div className="border-b border-slate-100 pb-4 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-700">
                      {scenario.mockPage.serviceName}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                      {scenario.mockPage.heading}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {scenario.mockPage.subheading}
                    </p>
                  </div>

                  {/* Form & Sensitive Fields */}
                  <div className="space-y-4">
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2">
                      {scenario.mockPage.formTitle}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {fields.map((field) => {
                        const isScanned = demoState === 'scanned';
                        const isRedacted = demoState === 'redacted';
                        const badge = getCategoryBadge(field.category);

                        return (
                          <div
                            key={field.id}
                            className={`p-3.5 rounded-xl border transition-all relative ${
                              isScanned
                                ? 'bg-amber-50/40 border-amber-300 ring-2 ring-amber-200 shadow-xs'
                                : isRedacted
                                ? 'bg-emerald-50/40 border-emerald-300'
                                : 'bg-slate-50 border-slate-200'
                            }`}
                          >
                            {/* Detection Category Tag (Scanned State) */}
                            {isScanned && (
                              <div className="absolute -top-2.5 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border shadow-xs animate-in zoom-in-90 bg-white border-amber-300 text-amber-800">
                                <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`}></span>
                                {badge.label} • {(field.confidence * 100).toFixed(0)}%
                              </div>
                            )}

                            {/* Redacted State Badge */}
                            {isRedacted && (
                              <div className="absolute -top-2.5 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-600 text-white shadow-xs animate-in zoom-in-90">
                                <ShieldCheck className="w-3 h-3" />
                                SANITIZED
                              </div>
                            )}

                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                              {field.label}
                            </label>

                            {/* Value Display (Text or Image) */}
                            {field.isImage ? (
                              <div className="flex items-center gap-3 mt-2">
                                <div
                                  className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold text-xs border transition-all ${
                                    isRedacted
                                      ? 'bg-slate-800 text-slate-400 border-slate-700 blur-[2px] select-none'
                                      : isScanned
                                      ? 'bg-purple-100 text-purple-700 border-purple-300 ring-2 ring-purple-200'
                                      : 'bg-blue-100 text-blue-700 border-blue-200'
                                  }`}
                                >
                                  {isRedacted ? 'BLURRED' : <User className="w-6 h-6" />}
                                </div>
                                <div className="text-xs">
                                  <div className="font-semibold text-slate-800">
                                    {isRedacted ? (
                                      <span className="font-mono text-emerald-700 bg-emerald-100/70 px-1.5 py-0.5 rounded">
                                        {field.redactedValue}
                                      </span>
                                    ) : (
                                      field.avatarPlaceholder
                                    )}
                                  </div>
                                  <div className="text-[11px] text-slate-500 mt-0.5">
                                    {isRedacted ? 'Gaussian face mask applied' : 'Visual face portrait'}
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="mt-1">
                                {isRedacted ? (
                                  <div className="font-mono text-xs font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-1.5 rounded-lg border border-emerald-200 flex items-center justify-between">
                                    <span>{field.redactedValue}</span>
                                    <Lock className="w-3 h-3 text-emerald-600" />
                                  </div>
                                ) : (
                                  <div className="font-mono text-xs text-slate-800 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 flex items-center justify-between">
                                    <span className={field.category === 'credentials' ? 'tracking-wider' : ''}>
                                      {field.rawValue}
                                    </span>
                                    {isScanned && (
                                      <Eye className="w-3.5 h-3.5 text-amber-600" />
                                    )}
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Scanned detection explanation */}
                            {isScanned && (
                              <div className="mt-2 text-[10px] text-amber-800/90 bg-amber-100/50 p-1.5 rounded flex items-start gap-1">
                                <Info className="w-3 h-3 shrink-0 mt-0.5 text-amber-600" />
                                <span>{field.explanation}</span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Safe non-sensitive context */}
                    <div className="pt-4 border-t border-slate-100">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Safe Non-Sensitive Structural Context (Passed to Agent as-is)
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                        {scenario.mockPage.safeContent.map((item, idx) => (
                          <div key={idx} className="text-xs">
                            <span className="font-semibold text-slate-600">{item.label}: </span>
                            <span className="text-slate-800 font-medium">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            ) : (
              /* Outgoing JSON Payload Inspection Tab */
              <div className="p-6 bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto min-h-[380px]">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400 text-[11px]">
                  <span>OUTGOING_AGENT_PAYLOAD_DISPATCH.json</span>
                  <span className={`px-2 py-0.5 rounded font-bold ${
                    demoState === 'redacted' ? 'bg-emerald-900/60 text-emerald-400 border border-emerald-700' : 'bg-rose-900/60 text-rose-300 border border-rose-700'
                  }`}>
                    {demoState === 'redacted' ? 'STATUS: SAFE_ZERO_EGRESS' : 'STATUS: UNPROTECTED_RISK'}
                  </span>
                </div>
                <pre className="text-slate-200 leading-relaxed font-mono">
                  {getSimulatedPayload()}
                </pre>
              </div>
            )}

            {/* Bottom Status bar */}
            <div className="bg-slate-50 px-5 py-3 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span>Perception Engine: <strong>Wasm Client Sandbox</strong></span>
              </div>
              <div className="text-slate-500">
                {demoState === 'idle' && 'Ready. Click "Scan Page" to begin on-device visual perception.'}
                {demoState === 'scanned' && 'Sensitive entities highlighted. Click "Redact Sensitive Data" to sanitize.'}
                {demoState === 'redacted' && 'Safe state ready. No private data is exposed to external agent.'}
              </div>
            </div>

          </div>

          {/* Right: Side Telemetry & Inspection Panel (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Audit Status Card */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-card">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                <Layers className="w-4 h-4 text-blue-600" />
                On-Device Telemetry & Status
              </h3>

              <div className="mt-4 space-y-3.5">
                
                {/* Detection Status */}
                <div>
                  <div className="text-xs text-slate-500 font-medium">Detection Status</div>
                  <div className="mt-1 flex items-center gap-2">
                    {demoState === 'idle' && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                        <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                        Idle (Awaiting Scan)
                      </span>
                    )}
                    {demoState === 'scanning' && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-100 text-blue-700 text-xs font-semibold animate-pulse">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        Scanning Viewport & DOM...
                      </span>
                    )}
                    {demoState === 'scanned' && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-100 text-amber-800 text-xs font-semibold">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                        {fields.length} Sensitive Items Detected
                      </span>
                    )}
                    {demoState === 'redacted' && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Sanitized Locally (0 Leaks)
                      </span>
                    )}
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <div className="text-[11px] text-slate-500 font-medium">Items Detected</div>
                    <div className="text-xl font-display font-bold text-slate-900 mt-0.5">
                      {demoState === 'idle' ? '0' : fields.length}
                    </div>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <div className="text-[11px] text-slate-500 font-medium">Items Redacted</div>
                    <div className={`text-xl font-display font-bold mt-0.5 ${
                      demoState === 'redacted' ? 'text-emerald-600' : 'text-slate-400'
                    }`}>
                      {demoState === 'redacted' ? `${fields.length} / ${fields.length}` : '0'}
                    </div>
                  </div>
                </div>

                {/* Processing Mode */}
                <div className="pt-2 border-t border-slate-100">
                  <div className="text-xs text-slate-500 font-medium">Processing Mode</div>
                  <div className="mt-1 flex items-center justify-between text-xs font-semibold text-slate-800 bg-blue-50/70 p-2.5 rounded-lg border border-blue-100">
                    <span>Client On-Device (Wasm)</span>
                    <span className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded text-[10px]">100% Local</span>
                  </div>
                </div>

                {/* Category Breakdown */}
                <div className="pt-2 border-t border-slate-100">
                  <div className="text-xs text-slate-500 font-medium mb-2">Detected Categories</div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-[11px] px-2 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-200 font-medium">
                      PII / Identity
                    </span>
                    <span className="text-[11px] px-2 py-1 rounded-md bg-rose-50 text-rose-700 border border-rose-200 font-medium">
                      Credentials / Keys
                    </span>
                    <span className="text-[11px] px-2 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200 font-medium">
                      Contact Numbers
                    </span>
                    <span className="text-[11px] px-2 py-1 rounded-md bg-purple-50 text-purple-700 border border-purple-200 font-medium">
                      Biometric Portrait
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Demonstration Tip for Evaluators */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-xs text-blue-900">
              <div className="font-bold flex items-center gap-1.5 mb-1 text-blue-950">
                <Info className="w-4 h-4 text-blue-600 shrink-0" />
                Demonstration Workflow Note
              </div>
              <p className="text-blue-800/90 leading-relaxed">
                Notice how the password, email, phone, full name, and face photo are detected and masked locally. The downstream agent never receives actual secrets.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
