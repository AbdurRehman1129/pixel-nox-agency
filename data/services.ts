/**
 * lucide-react icon names — kept as strings so this file has no
 * component-library dependency. Resolve the actual icon component
 * wherever it's rendered, e.g.:
 *   import * as Icons from "lucide-react";
 *   const Icon = Icons[service.icon as keyof typeof Icons];
 */
export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  technologies?: string[];
}

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortDescription:
      "Fast, accessible, production-grade websites and web apps built on modern frameworks.",
    fullDescription:
      "We design and build web applications end to end — from marketing sites to complex, data-heavy dashboards. Every build is performance-budgeted, SEO-aware, and structured for long-term maintainability instead of a one-off launch.",
    icon: "Code2",
    features: [
      "Custom web app & marketing site development",
      "Responsive, accessible, SEO-optimized front ends",
      "API design and backend integration",
      "Performance auditing and Core Web Vitals tuning",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription:
      "Native-feeling iOS and Android apps from a single, well-architected codebase.",
    fullDescription:
      "From product scoping to App Store submission, we build cross-platform mobile apps that feel native, perform well on real devices, and are structured so future features don't require a rewrite.",
    icon: "Smartphone",
    features: [
      "Cross-platform iOS & Android development",
      "Offline-first data sync and push notifications",
      "App Store / Play Store submission support",
      "Ongoing maintenance and version upgrades",
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Firebase"],
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    shortDescription:
      "Security audits, hardening, and monitoring so your product earns customer trust.",
    fullDescription:
      "We assess applications and infrastructure for real-world risk, close the gaps that matter, and put practical monitoring in place — not a compliance checkbox, but a security posture your team can actually maintain.",
    icon: "ShieldCheck",
    features: [
      "Application & infrastructure security audits",
      "Penetration testing and vulnerability remediation",
      "Secure authentication and access control design",
      "Incident response planning and monitoring setup",
    ],
    technologies: ["OWASP ZAP", "Burp Suite", "AWS Security Hub", "SIEM tooling"],
  },
  {
    slug: "ai-development",
    title: "AI Development",
    shortDescription:
      "Practical AI features — from LLM-powered tools to custom models — built for production.",
    fullDescription:
      "We build AI features that solve a specific business problem: retrieval-augmented assistants, automation pipelines, and custom models, deployed with the monitoring and guardrails production systems need.",
    icon: "BrainCircuit",
    features: [
      "LLM-powered features and AI assistants",
      "RAG pipelines and vector search integration",
      "Custom model training and fine-tuning",
      "AI workflow automation",
    ],
    technologies: ["Python", "PyTorch", "LangChain", "OpenAI / Anthropic APIs"],
  },
  {
    slug: "cloud-services",
    title: "Cloud Services",
    shortDescription:
      "Cloud architecture, migration, and DevOps that scales with your product, not against it.",
    fullDescription:
      "We design and manage cloud infrastructure — from initial architecture to CI/CD pipelines and cost optimization — so your team ships confidently and your infrastructure bill doesn't become a surprise.",
    icon: "Cloud",
    features: [
      "Cloud architecture and migration",
      "CI/CD pipeline setup and automation",
      "Infrastructure as code",
      "Cost optimization and monitoring",
    ],
    technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
  },
  {
    slug: "payment-integration",
    title: "Payment Integration",
    shortDescription:
      "Secure, compliant payment flows integrated cleanly into your product.",
    fullDescription:
      "We integrate payment gateways, subscription billing, and payout systems with a focus on compliance and reliability — so transactions just work, and edge cases (refunds, disputes, failed payments) are handled gracefully.",
    icon: "CreditCard",
    features: [
      "Payment gateway integration (cards, wallets, local rails)",
      "Subscription and recurring billing setup",
      "PCI-DSS-aware implementation practices",
      "Refunds, disputes, and payout handling",
    ],
    technologies: ["Stripe", "PayPal", "Razorpay", "Webhooks"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}