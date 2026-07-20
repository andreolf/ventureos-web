import { site } from "@/lib/site";

// Integrations the target audience already trusts. Honest social proof while
// there's no customer logo wall yet. Rendered as clean monochrome wordmarks.
const INTEGRATIONS = ["Gmail", "Google Drive", "Crunchbase", "PitchBook", "LinkedIn", "GitHub"];

export function TrustStrip() {
  return (
    <section aria-label="Trust" className="border-y border-[var(--color-border)]/60 bg-[var(--color-bg-soft)]">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          In production at {site.builtBy.fund} · works with the tools you already use
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {INTEGRATIONS.map((name) => (
            <span
              key={name}
              className="text-lg font-semibold tracking-tight text-[var(--color-muted)]/70 grayscale transition-colors hover:text-[var(--color-fg)]"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
