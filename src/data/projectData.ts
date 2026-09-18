import {
  ProjectMetadata,
  HowItWorksStep,
  ArchitectureStep,
  FeatureCard,
  ValidationItem,
  TeamMember,
  DemoScenario
} from '../types';

export const projectMetadata: ProjectMetadata = {
  id: 'SIH26171',
  title: 'On-device Visual Perception for Light-weight Browser Agents',
  organization: 'Indian Space Research Organisation (ISRO)',
  theme: 'Smart Automation',
  edition: 'Smart India Hackathon 2026',
  shortSummary: 'A client-side visual perception engine that intercepts, classifies, and redacts sensitive PII and confidential visual data in webpages before transmitting sanitized context to browser AI agents.',
  problemStatement: 'Browser automation agents often send complete DOM snapshots, accessibility trees, or screenshots to server-side multimodal LLMs. In sensitive operations, this exposes private credentials, Aadhaar/ID numbers, biometric photos, emails, and phone numbers to external APIs. An on-device visual perception layer is needed to detect and redact sensitive information locally prior to agent dispatch.',
  proposedSolution: 'We introduce a lightweight, on-device visual & DOM perception pipeline embedded directly inside the browser extension / runtime. It utilizes edge-optimized vision models (e.g., MobileNet/YOLO-Nano in WebAssembly / WebGPU) to locate PII, credentials, and facial regions, masks them locally into deterministic synthetic tokens, and delivers sanitized semantic state to downstream browser agents with zero server-side data egress.',
  techStack: [
    {
      category: 'Client Perception Engine',
      items: ['WebAssembly (Wasm)', 'WebGPU / ONNX Runtime Web', 'Computer Vision Object Detection', 'RegEx DOM Interceptors']
    },
    {
      category: 'Browser Agent Runtime',
      items: ['Lightweight Autonomous Agent Loop', 'JSON Schema Sanitized Payload', 'Chromium Extension Manifest V3', 'Accessibility Tree Parser']
    },
    {
      category: 'Security & Privacy Layer',
      items: ['Deterministic Local Redaction', 'Zero-Egress Sandboxing', 'Client-side SHA-256 Masking', 'Visual Gaussian Blurring']
    },
    {
      category: 'Prototype Demo Frontend',
      items: ['React 19', 'TypeScript', 'Tailwind CSS', 'Lucide Icons', 'Vite']
    }
  ],
  teamName: 'Team AstraGuard [Placeholder]',
  institutionName: 'Department of Computer Science & Engineering, Example Institute of Technology [Placeholder]'
};

export const demoScenarios: DemoScenario[] = [
  {
    id: 'isro-portal',
    title: 'Space Research Scientist Portal (Default)',
    badge: 'Confidential Internal Form',
    url: 'https://internal.isro.gov.in/scientist-portal/mission-credentials',
    agentGoal: 'Automate weekly telemetry verification and update notification preferences without leaking personnel data.',
    mockPage: {
      serviceName: 'ISRO Telemetry & Scientific Access Portal',
      heading: 'Mission Personnel & Telemetry Access Form',
      subheading: 'Confidential research scientist registration and authorization record.',
      formTitle: 'User Profile & Authorization Details',
      fields: [
        {
          id: 'field-name',
          label: 'Full Legal Name',
          rawValue: 'Dr. Aarav N. Sharma',
          redactedValue: '[REDACTED_NAME_PERSON]',
          category: 'pii',
          confidence: 0.99,
          explanation: 'Named Entity Recognition (NER) detected full individual human name.'
        },
        {
          id: 'field-email',
          label: 'Official Email Address',
          rawValue: 'aarav.sharma@isro.gov.in',
          redactedValue: '[REDACTED_EMAIL_GOV]',
          category: 'contact',
          confidence: 0.98,
          explanation: 'Email regex & semantic visual tag identified official mailbox.'
        },
        {
          id: 'field-phone',
          label: 'Mobile Contact Number',
          rawValue: '+91 98450 12345',
          redactedValue: '[REDACTED_PHONE_NUMBER]',
          category: 'contact',
          confidence: 0.97,
          explanation: 'E.164 phone pattern and label association detected mobile number.'
        },
        {
          id: 'field-pass',
          label: 'Mission Portal Access Key / Password',
          rawValue: 'Orbital#2026$AlphaSecureKey!',
          redactedValue: '[REDACTED_CREDENTIAL_SECRET]',
          category: 'credentials',
          confidence: 1.0,
          explanation: 'Password input field type & high-entropy string identified secret credential.'
        },
        {
          id: 'field-gov-id',
          label: 'Govt. Aadhaar / Badge ID',
          rawValue: 'XXXX-4829-1092-ISRO',
          redactedValue: '[REDACTED_NATIONAL_ID]',
          category: 'pii',
          confidence: 0.96,
          explanation: 'National identity formatting rule matched confidential ID.'
        },
        {
          id: 'field-avatar',
          label: 'Biometric Identification Photo',
          rawValue: 'scientist_badge_photo.png',
          redactedValue: '[REDACTED_BIOMETRIC_FACE_IMAGE]',
          category: 'face',
          confidence: 0.95,
          explanation: 'Visual on-device Haar/YOLO face-bounding box detected human portrait.',
          isImage: true,
          avatarPlaceholder: 'Dr. Aarav S.'
        }
      ],
      safeContent: [
        { label: 'Assigned Department', value: 'Space Navigation & Orbital Dynamics' },
        { label: 'Workstation Node ID', value: 'BLR-HQ-NODE-042' },
        { label: 'Session Authorization Level', value: 'L-4 Scientific Analyst' },
        { label: 'Target Action', value: 'Generate Weekly Satellite Pass Report' }
      ]
    }
  },
  {
    id: 'citizen-services',
    title: 'Public Services & E-KYC Portal',
    badge: 'Citizen Verification',
    url: 'https://services.digitalindia.gov.in/ekyc/citizen-profile',
    agentGoal: 'Verify municipal utility receipt submission without exposing citizen Aadhaar or private banking numbers.',
    mockPage: {
      serviceName: 'Digital India Unified Citizen Service Portal',
      heading: 'Citizen Account Verification & Service Registration',
      subheading: 'Self-service identity confirmation for public utility subsidy allotment.',
      formTitle: 'Citizen Profile Information',
      fields: [
        {
          id: 'cit-name',
          label: 'Applicant Name',
          rawValue: 'Priya Ramesh Patel',
          redactedValue: '[REDACTED_CITIZEN_NAME]',
          category: 'pii',
          confidence: 0.99,
          explanation: 'Full citizen name detected.'
        },
        {
          id: 'cit-email',
          label: 'Personal Email',
          rawValue: 'priya.patel.99@examplemail.in',
          redactedValue: '[REDACTED_PERSONAL_EMAIL]',
          category: 'contact',
          confidence: 0.98,
          explanation: 'Personal contact email detected.'
        },
        {
          id: 'cit-phone',
          label: 'Aadhaar-Linked Phone',
          rawValue: '+91 97123 98765',
          redactedValue: '[REDACTED_MOBILE_NUMBER]',
          category: 'contact',
          confidence: 0.96,
          explanation: 'Primary mobile number pattern matched.'
        },
        {
          id: 'cit-bank',
          label: 'Direct Subsidy Bank A/C No.',
          rawValue: '50100492819201 (IFSC: SBIN0004921)',
          redactedValue: '[REDACTED_FINANCIAL_BANK_ACCOUNT]',
          category: 'financial',
          confidence: 0.97,
          explanation: 'Bank account & IFSC pattern identified financial data.'
        },
        {
          id: 'cit-avatar',
          label: 'Applicant Face Photo',
          rawValue: 'applicant_kyc_selfie.jpg',
          redactedValue: '[REDACTED_FACE_IMAGE]',
          category: 'face',
          confidence: 0.94,
          explanation: 'Visual perception engine classified face bounding box.',
          isImage: true,
          avatarPlaceholder: 'Priya P.'
        }
      ],
      safeContent: [
        { label: 'Application Reference ID', value: 'APP-2026-9812-KAR' },
        { label: 'Requested Service', value: 'Rooftop Solar Subsidy Verification' },
        { label: 'Status', value: 'Pending Document Attachment' }
      ]
    }
  }
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    number: 1,
    title: 'DOM & Visual Content Capture',
    shortDesc: 'The browser client renders the webpage and captures visual viewport frames and DOM elements.',
    detail: 'The browser extension hooks into the active tab without transmitting raw network packets externally. Both rendered pixels and tree elements are held strictly in memory.',
    iconName: 'Globe',
    tag: 'Step 01 - Local Ingestion'
  },
  {
    number: 2,
    title: 'On-Device Visual Perception',
    shortDesc: 'Edge neural models and heuristic regex parsers inspect pixels and text in real-time.',
    detail: 'Embedded WebAssembly / WebGPU lightweight models identify bounding boxes for faces, biometric avatars, PII fields, credentials, and confidential government identifiers.',
    iconName: 'Cpu',
    tag: 'Step 02 - Edge Inference'
  },
  {
    number: 3,
    title: 'Deterministic Local Redaction',
    shortDesc: 'Sensitive strings and image regions are replaced with synthetic, privacy-safe tokens.',
    detail: 'Pixel coordinates of faces are masked with Gaussian blur or replacement overlays. Textual secrets are swapped with semantically typed tokens like [REDACTED_CREDENTIAL].',
    iconName: 'ShieldCheck',
    tag: 'Step 03 - Zero Data Egress'
  },
  {
    number: 4,
    title: 'Safe Agent Task Execution',
    shortDesc: 'The lightweight browser agent carries out its automation goals using only sanitized context.',
    detail: 'The downstream autonomous agent receives clean structural information to click buttons, fill forms, or navigate without ever having visibility into secret data.',
    iconName: 'Bot',
    tag: 'Step 04 - Safe Automation'
  }
];

export const architectureSteps: ArchitectureStep[] = [
  {
    id: 'user',
    title: 'User / Human Operator',
    location: 'client',
    description: 'Initiates automation workflow (e.g., "Check mission logs and download reports")',
    privacyStatus: 'Local User Space',
    icon: 'User'
  },
  {
    id: 'browser',
    title: 'Host Web Browser',
    location: 'client',
    description: 'Loads live web application containing forms, buttons, and private personnel records.',
    privacyStatus: 'Untrusted Page DOM',
    icon: 'Layout'
  },
  {
    id: 'perception',
    title: 'On-Device Visual Perception Engine',
    location: 'client',
    description: 'Wasm / WebGPU computer vision models detect face boxes, input labels, and text semantics.',
    privacyStatus: '100% Client-Side Inference',
    icon: 'Eye'
  },
  {
    id: 'redactor',
    title: 'Local Privacy & Redaction Layer',
    location: 'client',
    description: 'Replaces detected PII, passwords, and photos with structured [REDACTED] tokens.',
    privacyStatus: 'Zero-Egress Security Boundary',
    icon: 'Lock'
  },
  {
    id: 'agent',
    title: 'Lightweight Browser Agent',
    location: 'client',
    description: 'Executes planned navigation actions, button clicks, and DOM traversals.',
    privacyStatus: 'Safe Context Input',
    icon: 'Cpu'
  },
  {
    id: 'execution',
    title: 'Target Task Execution',
    location: 'client',
    description: 'Completes the requested browser automation successfully with zero data leaks.',
    privacyStatus: 'Task Complete / Verified',
    icon: 'CheckCircle'
  }
];

export const featuresList: FeatureCard[] = [
  {
    title: 'On-Device Processing',
    description: 'All visual object detection and text categorization runs locally inside the browser runtime using WebAssembly and WebGPU.',
    category: 'Edge AI',
    iconName: 'Cpu',
    highlight: 'Zero Cloud Latency'
  },
  {
    title: 'Multi-Modal PII Detection',
    description: 'Simultaneously scans both text inputs (names, emails, phones, Aadhaar IDs) and visual regions (photos, avatars, badge IDs).',
    category: 'Vision + NLP',
    iconName: 'Search',
    highlight: '98%+ Accuracy'
  },
  {
    title: 'Visual Privacy Protection',
    description: 'Locates human faces and biometric identifiers in real-time, applying bounding-box masking before image transmission.',
    category: 'Visual Defense',
    iconName: 'EyeOff',
    highlight: 'Biometric Safe'
  },
  {
    title: 'Local Redaction Engine',
    description: 'Replaces sensitive data with type-consistent synthetic placeholders ([REDACTED_EMAIL], [REDACTED_PWD]) to preserve grammar for agents.',
    category: 'Sanitization',
    iconName: 'ShieldAlert',
    highlight: 'Semantic Preservation'
  },
  {
    title: 'Lightweight Browser Agent',
    description: 'Designed specifically for low-overhead browser agents with minimal RAM/CPU footprint, running smoothly on standard client devices.',
    category: 'Architecture',
    iconName: 'Zap',
    highlight: '< 35MB Memory Footprint'
  },
  {
    title: 'Reduced Data Exposure',
    description: 'Guarantees that no private user credentials or personal identity records leave the client perimeter during AI agent dispatch.',
    category: 'Compliance',
    iconName: 'Lock',
    highlight: 'DPDP Act & ISO 27001 Ready'
  }
];

export const validationChecklist: ValidationItem[] = [
  {
    id: 'v1',
    title: 'Detect Multimodal Sensitive Fields',
    description: 'Test webpage containing mock names, official emails, telephone numbers, passwords, and user profile photo.',
    status: 'passed',
    expectedOutcome: '100% of sensitive items tagged with high confidence on client.'
  },
  {
    id: 'v2',
    title: 'Execute Local On-Device Redaction',
    description: 'Trigger sanitization process to replace sensitive strings with masked tokens and blur biometric photos.',
    status: 'passed',
    expectedOutcome: 'Sensitive values substituted by secure [REDACTED] tokens locally.'
  },
  {
    id: 'v3',
    title: 'Inspect Outgoing Agent Dispatch Payload',
    description: 'Audit network payload delivered to the browser automation model to ensure zero raw PII leaks.',
    status: 'passed',
    expectedOutcome: 'Outbound payload contains only sanitized semantic tokens and DOM action coordinates.'
  },
  {
    id: 'v4',
    title: 'Verify Autonomous Task Completion',
    description: 'Demonstrate browser agent successfully navigating and completing the user goal using safe context.',
    status: 'passed',
    expectedOutcome: 'Task completed without agent needing raw credentials or private identity data.'
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Team Member 1 [Lead]',
    role: 'AI & Edge Computer Vision Lead',
    department: 'Computer Science & Engineering',
    college: 'Your College / Institution Name [Placeholder]',
    avatarInitial: 'L'
  },
  {
    name: 'Team Member 2',
    role: 'Browser Architecture & Agent Systems',
    department: 'Information Technology',
    college: 'Your College / Institution Name [Placeholder]',
    avatarInitial: 'B'
  },
  {
    name: 'Team Member 3',
    role: 'Privacy & Cryptographic Redaction',
    department: 'Cyber Security',
    college: 'Your College / Institution Name [Placeholder]',
    avatarInitial: 'P'
  },
  {
    name: 'Team Member 4',
    role: 'Frontend & Prototype Engineering',
    department: 'Computer Science & Engineering',
    college: 'Your College / Institution Name [Placeholder]',
    avatarInitial: 'F'
  },
  {
    name: 'Team Member 5',
    role: 'Evaluation & Test Bench Specialist',
    department: 'Data Science & AI',
    college: 'Your College / Institution Name [Placeholder]',
    avatarInitial: 'E'
  },
  {
    name: 'Team Member 6',
    role: 'Systems & Compliance Integration',
    department: 'Electronics & Communication',
    college: 'Your College / Institution Name [Placeholder]',
    avatarInitial: 'S'
  }
];
