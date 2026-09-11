import React from 'react';
import {
  Code,
  Smartphone,
  Bot,
  LayoutDashboard,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

export const projectsData = [
  {
    id: 1,
    title: 'Global Fleet Edge Gateway',
    client: 'Apex Freight & Logistics Platform',
    categoryBadge: 'Web & IoT Logistics',
    description: 'High-speed real-time dispatch and database telemetry handling 140,000+ daily fleet events.',
    fullDescription: 'Architected from the ground up to handle high-frequency IoT fleet dispatches across global hubs. Utilizes PostgreSQL materialized view tuning, Redis pub/sub caching, and Next.js server-side rendering to cut database query latency by 65%.',
    metrics: '⚡ 65% Latency Reduction • 140k Daily Events',
    techStack: ['React', 'Next.js 15', 'PostgreSQL', 'Redis', 'WebSockets', 'Node.js'],
    highlights: [
      'Sub-15ms database query response time',
      'Real-time WebSocket dispatch monitoring',
      'Zero-downtime microservice deployment',
      'Role-Based access control for global dispatchers'
    ],
    icon: <LayoutDashboard className="w-6 h-6 text-sky-600" />,
    matchKeys: ['web', 'web development', 'corporate', 'directory', 'listing', 'logistics', 'fleet']
  },
  {
    id: 2,
    title: 'FinTech Autonomous AI Support Agent',
    client: 'FinTech Global Services',
    categoryBadge: 'AI Reasoning Pipeline',
    description: 'Multi-step autonomous support agent that resolves 40%+ of Tier-1 support queries without human intervention.',
    fullDescription: 'Integrated custom OpenAI API fine-tuned models with Pinecone vector DB embeddings (RAG architecture). Enables natural language financial support querying with strict compliance guardrails.',
    metrics: '🤖 40%+ Query Automation • <2s Resolution',
    techStack: ['OpenAI API', 'LangChain', 'Python', 'Pinecone Vector DB', 'Node.js'],
    highlights: [
      'Custom RAG vector search over 50,000+ policy docs',
      'Automated multi-step transaction verification',
      'Zero data leakage privacy guardrails',
      '99.4% intent recognition precision'
    ],
    icon: <Bot className="w-6 h-6 text-purple-600" />,
    matchKeys: ['ai', 'fintech', 'automation', 'community', 'forum']
  },
  {
    id: 3,
    title: 'Real-Time Enterprise Analytics Dashboard',
    client: 'Enterprise SaaS Platform',
    categoryBadge: 'Executive Telemetry',
    description: 'Sub-second real-time executive dashboard visualizing multi-region telemetry and recurring subscription metrics.',
    fullDescription: 'Designed for enterprise C-suite leaders. Combines live WebSocket event streams, role-based metric cards, and downloadable PDF/CSV executive reports with zero technical debt.',
    metrics: '📊 99.99% Operational Uptime • 0ms Lag',
    techStack: ['React 19', 'Tailwind CSS', 'PostgreSQL', 'Chart.js', 'Express'],
    highlights: [
      'Live sub-second data streaming',
      'Exportable executive PDF financial summaries',
      'Granular role-based metric visibility',
      'AES-256 encrypted data transmission'
    ],
    icon: <Code className="w-6 h-6 text-cyan-600" />,
    matchKeys: ['saas', 'custom web app', 'custom-saas', 'dashboard', 'lms', 'educational', 'design', 'ui/ux', 'brand']
  },
  {
    id: 4,
    title: 'HealthPulse Mobile Platform',
    client: 'HealthPulse Tech Global',
    categoryBadge: 'Mobile Engineering',
    description: 'Biometric-secured mobile healthcare application delivering telemedicine consultations and offline vitals sync.',
    fullDescription: 'Built with React Native for iOS and Android. Features native FaceID / Fingerprint authentication, offline-first data sync, and instant HD video consultation rooms.',
    metrics: '📱 4.9 App Store Rating • 80k+ Active Users',
    techStack: ['React Native', 'iOS Swift', 'Android Kotlin', 'Expo', 'Redux Toolkit'],
    highlights: [
      'Biometric authentication (FaceID & Fingerprint)',
      'HIPAA-compliant encrypted data storage',
      'Offline vitals data persistence',
      'Push notification medication reminders'
    ],
    icon: <Smartphone className="w-6 h-6 text-emerald-600" />,
    matchKeys: ['mobile', 'mobile app', 'ios', 'android', 'react native']
  },
  {
    id: 5,
    title: 'Zero-Trust Cloud WAF & API Shield',
    client: 'Cloud SaaS Infrastructure Provider',
    categoryBadge: 'Web Security Shield',
    description: 'OWASP-compliant API gateway shielding SaaS endpoints against automated botnet traffic and DDoS attacks.',
    fullDescription: 'Hardened security architecture featuring Cloudflare Edge WAF rules, AES-256 payload encryption, strict rate limiting, and continuous vulnerability scanning.',
    metrics: '🛡️ 100% OWASP Compliance • 0 Vulnerabilities',
    techStack: ['OWASP Standards', 'Cloudflare WAF', 'AES-256', 'Node.js', 'Docker'],
    highlights: [
      'Automated DDoS & botnet traffic filtering',
      'Zero-trust API key authentication',
      'Real-time intrusion detection logging',
      'SOC2 & GDPR compliance ready'
    ],
    icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
    matchKeys: ['cloud', 'devops', 'api', 'maintenance', 'sla', 'security', 'maint']
  },
  {
    id: 6,
    title: 'OmniChannel Growth & Funnel Engine',
    client: 'E-Commerce Growth Enterprise',
    categoryBadge: 'Growth & Funnel Engineering',
    description: 'High-converting multi-touch acquisition funnel and technical SEO infrastructure boosting conversion by 3.2x.',
    fullDescription: 'Engineered high-performance web landing funnels with Next.js SSR, core web vitals optimization (100 Lighthouse score), and multi-touch attribution analytics.',
    metrics: '📈 3.2x Conversion Boost • +85% Retention',
    techStack: ['Next.js 15', 'Technical SEO', 'Analytics Engine', 'Tailwind CSS'],
    highlights: [
      '100/100 Core Web Vitals Lighthouse score',
      'Multi-touch user attribution tracking',
      'Dynamic A/B testing framework',
      'Sub-second page load times worldwide'
    ],
    icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
    matchKeys: ['ecommerce', 'e-commerce', 'landing', 'landing page', 'sales funnel', 'marketing', 'seo', 'growth', 'blog']
  }
];

export function findProjectForService(serviceOrTypeKey = '') {
  if (!serviceOrTypeKey) return projectsData[0];
  const normalized = serviceOrTypeKey.toLowerCase();
  const matched = projectsData.find(p =>
    p.matchKeys.some(k => normalized.includes(k)) ||
    p.title.toLowerCase().includes(normalized) ||
    p.categoryBadge.toLowerCase().includes(normalized)
  );
  return matched || projectsData[0];
}
