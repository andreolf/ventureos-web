import Link from "next/link";
import { site, demoHref } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)]/60 bg-[var(--color-bg)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-[var(--color-accent)] text-sm font-bold text-white">
            {site.name.charAt(0)}
          </span>
          {site.name}
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-[var(--color-muted)] md:flex">
          {site.nav.map((n) => (
            <Link key={n.href} href={n.href} className="transition-colors hover:text-[var(--color-fg)]">
              {n.label}
            </Link>
          ))}
        </nav>
        <Link href={demoHref} className="rounded-xl btn-accent px-4 py-2 text-sm font-semibold">
          Book a demo
        </Link>
      </div>
    </header>
  );
}
