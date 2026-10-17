import Link from "next/link";
import { expenseTracker as app } from "@/data/expenseTrackerConfig";

const links = [
  { label: "Home", href: `${app.basePath}/home` },
  { label: "Privacy Policy", href: `${app.basePath}/privacy-policy` },
  { label: "Terms of Service", href: `${app.basePath}/term-of-services` },
];

export default function AppSubNav() {
  return (
    <div className="border-b border-line bg-panel">
      <nav
        aria-label="Expense Tracker"
        className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-6 gap-y-2 px-6 py-3 text-sm"
      >
        <span className="font-display font-semibold text-paper">
          {app.name}
        </span>
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="text-mist hover:text-paper">
            {l.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
