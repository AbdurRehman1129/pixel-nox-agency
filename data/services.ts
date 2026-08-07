// ---------------------------------------------------------------------------
// Pixel Nox — Single Source of Truth: Services
// Exactly 6 services. Every service-related component/page pulls from here.
// ---------------------------------------------------------------------------

export interface Service {
  slug: string;
  title: string;
  /** Short one/two-liner used on the homepage service card */
  shortDescription: string;
  /** Longer copy used on the service detail view */
  fullDescription: string;
  /** lucide-react icon component name, e.g. "Code2" */
  icon: string;
  /** Bullet list of what's included / what makes it distinct */
  features: string[];
  /** Optional list of technologies commonly used for this service */
  technologies?: string[];
}

export const services: Service[] = [
  {
    slug: "web-app-development",
    title: "Web App Development",
    shortDescription:
      "Fast, scalable web applications built with modern frameworks and clean architecture.",
    fullDescription:
      "We design and build production-grade web applications — from customer-facing platforms to internal tools — using modern frameworks, type-safe code, and architecture that scales with your team. Every build is optimized for performance, maintainability, and a smooth handoff.",
    icon: "Code2",
    features: [
      "Custom front-end and back-end architecture",
      "API design and integration",
      "Performance and Core Web Vitals optimization",
      "CI/CD pipeline setup",
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "TypeScript"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription:
      "Native-feeling iOS and Android apps from a single, well-engineered codebase.",
    fullDescription:
      "We build cross-platform mobile applications that feel native, ship fast, and are easy to maintain long-term. From MVP to App Store launch, we handle architecture, offline support, push notifications, and release management.",
    icon: "Smartphone",
    features: [
      "Cross-platform iOS & Android builds",
      "Offline-first data handling",
      "Push notifications & deep linking",
      "App Store / Play Store release management",
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Firebase"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription:
      "Interface design grounded in usability research, not just visual trends.",
    fullDescription:
      "Good software feels obvious to use. We design interfaces backed by user research, information architecture, and interaction design principles — delivering wireframes, prototypes, and design systems your engineering team can build from directly.",
    icon: "PenTool",
    features: [
      "User research & journey mapping",
      "Wireframes & interactive prototypes",
      "Design systems & component libraries",
      "Usability testing",
    ],
    technologies: ["Figma", "Framer"],
  },
  {
    slug: "custom-software-solutions",
    title: "Custom Software Solutions",
    shortDescription:
      "Purpose-built systems for workflows off-the-shelf software can't handle.",
    fullDescription:
      "When existing tools don't fit the way your business actually operates, we build custom software around your workflow — internal dashboards, automation tools, and systems that integrate cleanly with what you already run.",
    icon: "Settings2",
    features: [
      "Workflow & requirements analysis",
      "Internal tools & admin dashboards",
      "Process automation",
      "Third-party system integration",
    ],
    technologies: ["Node.js", "Python", "PostgreSQL", "Docker"],
  },
  {
    slug: "saas-product-development",
    title: "SaaS Product Development",
    shortDescription:
      "End-to-end SaaS builds — multi-tenant architecture, billing, and everything between.",
    fullDescription:
      "We take SaaS products from concept to launch: multi-tenant architecture, authentication, subscription billing, and the operational tooling needed to run and scale a product business, not just ship a demo.",
    icon: "Layers",
    features: [
      "Multi-tenant architecture",
      "Subscription billing integration",
      "Role-based access & authentication",
      "Analytics & usage tracking",
    ],
    technologies: ["Next.js", "Stripe", "PostgreSQL", "AWS"],
  },
  {
    slug: "it-consulting",
    title: "IT Consulting",
    shortDescription:
      "Technical strategy, architecture review, and hands-on guidance for engineering teams.",
    fullDescription:
      "Sometimes the highest-leverage work is a second set of experienced eyes. We provide architecture reviews, technology roadmaps, and hands-on technical guidance to help engineering teams make better decisions faster.",
    icon: "Compass",
    features: [
      "Architecture & code audits",
      "Technology stack recommendations",
      "Scalability & security review",
      "Team process and tooling guidance",
    ],
  },
];

export default services;