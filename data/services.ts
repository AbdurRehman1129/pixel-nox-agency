export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  /** A deeper, service-specific explanation for the dedicated services page. */
  detailedExplanation: string;
  /** Display price range. Always project-based — see priceNote. */
  priceRange: string;
  /** Clarifies pricing is a starting point, not a fixed rate card. */
  priceNote: string;
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
    detailedExplanation:
      "Most web projects fail quietly, months after launch, when the codebase can't absorb new features without breaking old ones. We build the opposite: a foundation that gets easier to extend over time, not harder. That means real component architecture instead of copy-pasted pages, database schemas that anticipate your next three features instead of just your first one, and a deployment pipeline that lets you ship a fix in minutes, not a fire drill in hours. Whether you need a marketing site that converts, a customer portal, or an internal tool your team will actually use, we treat the first release as the beginning of the product's life, not the end of the project.",
    priceRange: "$3,000 – $25,000+",
    priceNote:
      "Marketing sites and landing pages sit at the lower end; multi-role platforms with custom backends and integrations sit higher. Final quote depends on scope.",
    icon: "Code2",
    features: [
      "Custom web application development",
      "E-commerce and marketplace platforms",
      "Progressive Web Apps (PWA)",
      "API design and third-party integrations",
      "Performance and Core Web Vitals optimization",
      "Ongoing maintenance and feature roadmaps",
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
    detailedExplanation:
      "Building two separate native apps for iOS and Android usually means two codebases, two release schedules, and twice the bugs. We build from a single, well-structured cross-platform codebase that still delivers native-feeling performance and platform-appropriate UI — so your app feels like it belongs on each device, not like a web page wrapped in a shell. We also handle the parts founders often underestimate: offline behavior when connectivity drops, push notification infrastructure, deep linking for marketing campaigns, and the App Store / Play Store submission process itself, including the review cycles and metadata that determine whether your launch goes smoothly or stalls in review.",
    priceRange: "$8,000 – $40,000+",
    priceNote:
      "A focused MVP with core screens starts near the lower end; apps with real-time features, offline sync, or complex backends run higher.",
    icon: "Smartphone",
    features: [
      "Cross-platform apps (iOS & Android)",
      "Native performance optimization",
      "Offline-first architecture",
      "Push notifications and deep linking",
      "App Store & Play Store deployment",
      "Post-launch monitoring and crash reporting",
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
    detailedExplanation:
      "Most security work happens reactively — after an incident, an audit deadline, or a client's compliance team asks an uncomfortable question. We'd rather find the gap before someone else does. That starts with a real audit of your application, infrastructure, and access controls, not an automated scan you could run yourself, followed by prioritized fixes ranked by actual exploitability and business impact rather than a generic severity score. If you're heading toward SOC 2, GDPR, or HIPAA requirements, we help you get the architecture and evidence trail in place ahead of the audit, instead of scrambling to retrofit it once a client contract requires it.",
    priceRange: "$2,500 – $20,000+",
    priceNote:
      "A focused application audit starts lower; ongoing monitoring, compliance readiness programs, or infrastructure-wide hardening scale up from there.",
    icon: "ShieldCheck",
    features: [
      "Security audits and penetration testing",
      "Secure architecture and code review",
      "Compliance readiness (SOC 2, GDPR, HIPAA)",
      "Identity and access management",
      "Incident response planning",
      "Ongoing vulnerability monitoring",
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
    detailedExplanation:
      "A lot of \"AI features\" are a chatbot bolted onto a product with no real connection to how the business actually works, and they get abandoned within a quarter. We start from the opposite direction: what decision or task is slow or manual today, and does AI genuinely make it faster or more accurate — or is a simpler rule-based system actually the better answer? When AI is the right tool, we build it grounded in your real data through retrieval pipelines rather than hoping a model \"knows\" your business, evaluate it against real cases before shipping (not just a demo that impresses in a meeting), and design for the failure cases — because every AI feature fails sometimes, and what matters is what happens next.",
    priceRange: "$5,000 – $35,000+",
    priceNote:
      "A scoped feature like an internal automation or RAG-based assistant starts lower; custom model work or multi-agent systems scale up based on data and infrastructure needs.",
    icon: "BrainCircuit",
    features: [
      "LLM integration and RAG pipelines",
      "Custom model fine-tuning",
      "Workflow automation with AI agents",
      "Data pipeline and vector infrastructure",
      "AI feature prototyping and evaluation",
      "Ongoing model performance monitoring",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "LangChain",
      "Anthropic/OpenAI APIs",
      "Vector DBs",
    ],
  },
  {
    slug: "cloud-services",
    title: "Cloud Services",
    shortDescription:
      "Infrastructure that scales with usage, not with your ops team's hours.",
    fullDescription:
      "We design, migrate, and manage cloud infrastructure so systems stay reliable under load and costs stay predictable as you grow.",
    detailedExplanation:
      "Cloud bills tend to grow the same way technical debt does — quietly, until someone finally looks at the invoice. We design infrastructure with cost and reliability as first-class concerns from the start: right-sized resources instead of over-provisioned defaults, autoscaling that responds to real load instead of guesswork, and Infrastructure as Code so your environment is reproducible and auditable instead of a collection of manual console changes only one person remembers how to fix. Whether you're migrating off a fragile legacy setup, building a CI/CD pipeline your team can trust, or need genuine 24/7 monitoring instead of alerts nobody reads, we set it up so scaling is a config change, not a fire drill.",
    priceRange: "$1,500 – $15,000+ setup, or $500+/mo managed",
    priceNote:
      "One-time migration or CI/CD setup projects are quoted individually; ongoing managed infrastructure and monitoring is typically billed monthly.",
    icon: "Cloud",
    features: [
      "Cloud architecture and migration",
      "CI/CD pipeline setup",
      "Infrastructure as Code",
      "Auto-scaling and cost optimization",
      "24/7 monitoring and observability",
      "Disaster recovery planning",
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
    detailedExplanation:
      "Checkout is the one part of a product where a bug directly costs you revenue, not just a bad review — an unhandled webhook or a race condition in your billing logic can mean double-charged customers or silently failed subscriptions. We build payment flows the way we'd want them built if it were our own money moving through the system: idempotent webhook handling, reconciliation logic that catches mismatches before your finance team does, and PCI-compliant architecture so sensitive card data never touches your servers unnecessarily. Whether it's a simple one-time checkout, recurring subscriptions with proration and dunning, or a marketplace splitting payouts across multiple parties, we've built the edge cases before, not just the happy path.",
    priceRange: "$2,000 – $12,000+",
    priceNote:
      "A standard checkout or subscription integration starts lower; marketplace payouts, multi-currency support, or custom fraud rules scale the estimate up.",
    icon: "CreditCard",
    features: [
      "Payment gateway integration",
      "Subscription and billing systems",
      "Multi-currency and marketplace payments",
      "PCI-DSS compliant architecture",
      "Fraud detection and reconciliation",
      "Webhook and dispute handling",
    ],
    technologies: ["Stripe", "PayPal", "Adyen", "Webhooks", "Ledger systems"],
  },
];
