import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 font-semibold text-[var(--color-fg)]">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-[var(--color-accent)] text-xs font-bold text-white">
            {site.name.charAt(0)}
          </span>
          {site.name}
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {site.nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-[var(--color-fg)]">
              {n.label}
            </Link>
          ))}
          <a href={site.social.twitter} target="_blank" rel="noreferrer" className="hover:text-[var(--color-fg)]">
            X
          </a>
          <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--color-fg)]">
            LinkedIn
          </a>
        </div>
        <p className="text-xs text-[var(--color-muted)]/70">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
