import { site, formReady, contactMailto } from "@/lib/site";

/**
 * Lead capture. Uses a Tally form embed (set site.tallyFormUrl). Until a real
 * form URL is set, we fall back to a working mailto so nothing 404s.
 */
export function WaitlistCTA() {
  const embedSrc = formReady
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
              href={contactMailto}
              className="w-full rounded-xl btn-accent px-6 py-3 text-sm font-semibold sm:w-auto"
            >
              Email us to book a demo
            </a>
          </div>
          <p className="mt-4 text-xs text-[var(--color-muted)]">
            Or reach us directly at{" "}
            <a href={contactMailto} className="font-medium text-[var(--color-accent)] hover:underline">
              {site.contactEmail}
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
