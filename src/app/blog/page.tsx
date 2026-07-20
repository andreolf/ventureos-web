import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Ideas on AI, deal sourcing, and modern venture operations from ${site.name}.`,
  alternates: { canonical: `${site.url}/blog` },
};

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">Blog</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          On AI and modern venture.
        </h1>
        <p className="mt-4 text-[var(--color-muted)]">
          Why the best funds are rebuilding their stack around intelligence.
        </p>

        <div className="mt-12 divide-y divide-[var(--color-border)]/60">
          {posts.length === 0 && <p className="text-[var(--color-muted)]">No posts yet.</p>}
          {posts.map((p) => (
            <article key={p.slug} className="py-8">
              <p className="text-xs text-[var(--color-muted)]">
                {new Date(p.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · {p.readingTime}
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                <Link href={`/blog/${p.slug}`} className="hover:text-[var(--color-accent)]">
                  {p.title}
                </Link>
              </h2>
              <p className="mt-2 text-[var(--color-muted)]">{p.description}</p>
              <Link href={`/blog/${p.slug}`} className="mt-3 inline-block text-sm font-medium text-[var(--color-accent)] hover:underline">
                Read →
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
