import { site } from "@/lib/site";

/**
 * Lead capture. Uses a Tally form embed (set site.tallyFormUrl). Until a real
 * form URL is set, we show the "Book a demo" button as a graceful fallback so
 * the section is never broken/empty.
 */
export function WaitlistCTA() {
  const hasForm = !site.tallyFormUrl.includes("REPLACE_ME");
  const embedSrc = hasForm
    ? `${site.tallyFormUrl}?transparentBackground=1&alignLeft=1`
    : null;

  return (
    <section id="demo" className="mx-auto max-w-3xl px-5 py-24">
      <div className="card p-8 text-center sm:p-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Give your fund an unfair edge.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[var(--color-muted)]">
          Join the waitlist for early access, or book a live walkthrough with the team.
        </p>

        {embedSrc ? (
          <div className="mt-8 overflow-hidden rounded-xl border border-[var(--color-border)]">
            <iframe
              src={embedSrc}
              width="100%"
              height="420"
              title="Join the waitlist"
              className="block"
            />
          </div>
        ) : (
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={site.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-xl btn-accent px-6 py-3 text-sm font-semibold sm:w-auto"
            >
              Book a demo
            </a>
            <a
              href={site.social.twitter}
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-xl border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-fg)] transition-colors hover:bg-[var(--color-surface)] sm:w-auto"
            >
              Follow along
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
