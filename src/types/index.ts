export type SensitiveCategory = 'pii' | 'credentials' | 'contact' | 'face' | 'financial' | 'confidential';

export interface SensitiveField {
  id: string;
  label: string;
  rawValue: string;
  redactedValue: string;
  category: SensitiveCategory;
  confidence: number;
  explanation: string;
  isImage?: boolean;
  avatarPlaceholder?: string;
  boundingBox?: {
    top: string;
    left: string;
    width: string;
    height: string;
  };
}

export interface DemoScenario {
  id: string;
  title: string;
  badge: string;
  url: string;
  agentGoal: string;
  mockPage: {
    serviceName: string;
    heading: string;
    subheading: string;
    formTitle: string;
    fields: SensitiveField[];
    safeContent: {
      label: string;
      value: string;
    }[];
  };
}

export interface HowItWorksStep {
  number: number;
  title: string;
  shortDesc: string;
  detail: string;
  iconName: string;
  tag: string;
}

export interface ArchitectureStep {
  id: string;
  title: string;
  location: 'client' | 'external';
  description: string;
  privacyStatus: string;
  icon: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  category: string;
  iconName: string;
  highlight?: string;
}

export interface ValidationItem {
  id: string;
  title: string;
  description: string;
  status: 'passed' | 'ready' | 'simulated';
  expectedOutcome: string;
}

export interface TeamMember {
  name: string;
  role: string;
  department: string;
  college: string;
  avatarInitial: string;
}

export interface ProjectMetadata {
  id: string;
  title: string;
  organization: string;
  theme: string;
  edition: string;
  shortSummary: string;
  problemStatement: string;
  proposedSolution: string;
  techStack: {
    category: string;
    items: string[];
  }[];
  teamName: string;
  institutionName: string;
}
