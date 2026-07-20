import fs from "fs";
import path from "path";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WaitlistCTA } from "@/components/WaitlistCTA";
import { TrustStrip } from "@/components/TrustStrip";
import { site } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";

const FEATURES = [
  {
    title: "AI deal sourcing",
    body: "Surface founders while they're still building — from GitHub, Product Hunt, and the ecosystem — before they raise and before the press.",
  },
  {
    title: "AI investment memos",
    body: "Turn a pitch deck into a structured first-pass memo in your fund's format: market sizing, team, risks, comparables. Edit, don't start from scratch.",
  },
  {
    title: "Pipeline that moves itself",
    body: "Every deal, every stage, one view. The system nudges owners on stale deals so nothing dies of neglect.",
  },
  {
    title: "Leading vs lagging signals",
    body: "We prioritize early indicators over already-closed rounds — so your team spends time where the edge actually is.",
  },
  {
    title: "Email & relationship tracking",
    body: "Connect your inbox to log every touch per company and contact automatically. Your relationship graph, always current.",
  },
  {
    title: "Clean data by default",
    body: "Auto-enrichment, dedup, and source attribution keep the CRM trustworthy — the foundation every AI feature depends on.",
  },
];

const STEPS = [
  { n: "01", title: "Connect", body: "Plug in your inbox, your Drive, and your sources. Import your existing pipeline in minutes." },
  { n: "02", title: "Surface", body: "AI sources and pre-rates companies daily, flagging the early signals worth your attention." },
  { n: "03", title: "Decide", body: "First-pass memos, research, and call prep are generated for you. Your team edits and decides." },
  { n: "04", title: "Move", body: "Assign owners, track stages, and get nudged before deals go cold. Close faster." },
];

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  const hasScreenshot = fs.existsSync(path.join(process.cwd(), "public", "product.png"));

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="hero-glow absolute inset-0 -z-10" />
          <div className="grid-lines absolute inset-0 -z-10" />
          <div className="mx-auto max-w-4xl px-5 pb-20 pt-24 text-center sm:pt-32">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/60 px-3 py-1 text-xs font-medium text-[var(--color-muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              {site.builtBy.blurb}
            </span>
            <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
              The AI operating system for{" "}
              <span className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] bg-clip-text text-transparent">
                venture capital
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-muted)]">
              {site.description}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={site.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-xl btn-accent px-7 py-3.5 text-sm font-semibold sm:w-auto"
              >
                Book a demo
              </a>
              <Link
                href="#features"
                className="w-full rounded-xl border border-[var(--color-border)] px-7 py-3.5 text-sm font-semibold text-[var(--color-fg)] transition-colors hover:bg-[var(--color-surface)] sm:w-auto"
              >
                See what it does
              </Link>
            </div>
          </div>
        </section>

        <TrustStrip />

        {/* Product preview — drop a real CRM screenshot at /public/product.png */}
        <section className="mx-auto max-w-6xl px-5 pt-20">
          <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl">
            <div className="flex items-center gap-1.5 border-b border-[var(--color-border)] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" />
              <span className="ml-3 text-xs text-[var(--color-muted)]">{site.domain}/dashboard</span>
            </div>
            {hasScreenshot ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src="/product.png" alt={`${site.name} pipeline dashboard`} className="block w-full" />
            ) : (
              <div className="grid aspect-[16/9] place-items-center bg-[var(--color-bg-soft)]">
                <div className="text-center">
                  <p className="text-sm font-medium text-[var(--color-fg)]">Product preview</p>
                  <p className="mt-1 text-xs text-[var(--color-muted)]">
                    Drop a screenshot at <code className="text-[var(--color-accent)]">/public/product.png</code>
                  </p>
                </div>
              </div>
            )}
          </div>
          <p className="mt-3 text-center text-xs text-[var(--color-muted)]">
            The pipeline your team actually works in.
          </p>
        </section>

        {/* Stats */}
        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid grid-cols-2 gap-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-10 lg:grid-cols-4">
            {site.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-bold tracking-tight text-[var(--color-fg)]">{s.value}</div>
                <div className="mt-2 text-sm text-[var(--color-muted)]">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-5 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Features
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Coverage and speed, without the busywork.
            </h2>
            <p className="mt-4 text-[var(--color-muted)]">
              AI handles finding, organizing, and pre-processing. Your team handles taste and trust.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="card p-6 transition-colors hover:border-[var(--color-accent)]/40">
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="border-y border-[var(--color-border)]/60 bg-[var(--color-bg-soft)]">
          <div className="mx-auto max-w-6xl px-5 py-24">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s) => (
                <div key={s.n}>
                  <div className="font-mono text-sm text-[var(--color-accent)]">{s.n}</div>
                  <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credibility */}
        <section className="mx-auto max-w-4xl px-5 py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Built by investors, not a lab
          </p>
          <blockquote className="mx-auto mt-5 max-w-2xl text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
            “{site.testimonial.quote}”
          </blockquote>
          <p className="mt-5 text-sm text-[var(--color-muted)]">
            <span className="font-semibold text-[var(--color-fg)]">{site.testimonial.name}</span>
            {" · "}
            {site.testimonial.role}
          </p>
        </section>

        {/* Blog teaser */}
        {posts.length > 0 && (
          <section className="border-t border-[var(--color-border)]/60">
            <div className="mx-auto max-w-6xl px-5 py-24">
              <div className="flex items-end justify-between gap-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">From the blog</h2>
                <Link href="/blog" className="text-sm font-medium text-[var(--color-accent)] hover:underline">
                  All posts →
                </Link>
              </div>
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {posts.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="card p-6 transition-colors hover:border-[var(--color-accent)]/40">
                    <p className="text-xs text-[var(--color-muted)]">
                      {new Date(p.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} · {p.readingTime}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold leading-snug">{p.title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm text-[var(--color-muted)]">{p.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}
