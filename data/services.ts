export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  /** lucide-react icon component name */
  icon: string;
  features: string[];
  technologies?: string[];
}

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortDescription:
      "Fast, scalable web apps engineered for growth — not just launch day.",
    fullDescription:
      "We design and build production-grade web applications, from marketing sites to complex internal platforms. Every build is architected for performance, maintainability, and the traffic spikes that come with success.",
    icon: "Code2",
    features: [
      "Custom web application development",
      "E-commerce and marketplace platforms",
      "Progressive Web Apps (PWA)",
      "API design and third-party integrations",
      "Performance and Core Web Vitals optimization",
    ],
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription:
      "Native-feel iOS and Android apps from a single, well-engineered codebase.",
    fullDescription:
      "From concept to App Store, we build mobile products that feel native, ship fast, and scale across platforms without duplicating engineering effort.",
    icon: "Smartphone",
    features: [
      "Cross-platform apps (iOS & Android)",
      "Native performance optimization",
      "Offline-first architecture",
      "Push notifications and deep linking",
      "App Store & Play Store deployment",
    ],
    technologies: ["React Native", "Swift", "Kotlin", "Expo", "Firebase"],
  },
  {
    slug: "cyber-security",
    title: "Cybersecurity",
    shortDescription:
      "Security built into the architecture, not bolted on after a breach.",
    fullDescription:
      "We audit, harden, and monitor software systems so vulnerabilities are caught before they become incidents — covering application, infrastructure, and data layers.",
    icon: "ShieldCheck",
    features: [
      "Security audits and penetration testing",
      "Secure architecture and code review",
      "Compliance readiness (SOC 2, GDPR, HIPAA)",
      "Identity and access management",
      "Incident response planning",
    ],
    technologies: ["OWASP", "Snyk", "AWS IAM", "OAuth 2.0", "SIEM tooling"],
  },
  {
    slug: "ai-development",
    title: "AI Development",
    shortDescription:
      "Applied AI features that solve a real workflow problem, not a demo.",
    fullDescription:
      "We build and integrate machine learning and generative AI into existing products — from internal automation to customer-facing intelligent features — grounded in your actual data.",
    icon: "BrainCircuit",
    features: [
      "LLM integration and RAG pipelines",
      "Custom model fine-tuning",
      "Workflow automation with AI agents",
      "Data pipeline and vector infrastructure",
      "AI feature prototyping and evaluation",
    ],
    technologies: ["Python", "PyTorch", "LangChain", "Anthropic/OpenAI APIs", "Vector DBs"],
  },
  {
    slug: "cloud-services",
    title: "Cloud Services",
    shortDescription:
      "Infrastructure that scales with usage, not with your ops team's hours.",
    fullDescription:
      "We design, migrate, and manage cloud infrastructure so systems stay reliable under load and costs stay predictable as you grow.",
    icon: "Cloud",
    features: [
      "Cloud architecture and migration",
      "CI/CD pipeline setup",
      "Infrastructure as Code",
      "Auto-scaling and cost optimization",
      "24/7 monitoring and observability",
    ],
    technologies: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform"],
  },
  {
    slug: "payment-integration",
    title: "Payment Integration",
    shortDescription:
      "Reliable, compliant payment flows that don't lose customers at checkout.",
    fullDescription:
      "We integrate and build payment infrastructure — subscriptions, marketplaces, multi-currency checkout — engineered for reliability and PCI compliance.",
    icon: "CreditCard",
    features: [
      "Payment gateway integration",
      "Subscription and billing systems",
      "Multi-currency and marketplace payments",
      "PCI-DSS compliant architecture",
      "Fraud detection and reconciliation",
    ],
    technologies: ["Stripe", "PayPal", "Adyen", "Webhooks", "Ledger systems"],
  },
];
