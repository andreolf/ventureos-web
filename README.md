# VentureOS — marketing site

The AI-native CRM for venture capital. Marketing landing page + blog.

> **Placeholder brand.** The name/domain/links live in one file: [`src/lib/site.ts`](src/lib/site.ts). Edit that to rebrand the entire site.

## Stack

- Next.js 16 (App Router) + React 19
- Tailwind CSS v4
- Markdown blog (`content/blog/*.md`) via `gray-matter` + `marked`
- Fully static / SSG — fast, SEO- and GEO-friendly

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Rebrand checklist

1. Edit `src/lib/site.ts` — `name`, `domain`, `url`, links.
2. Set `tallyFormUrl` / `demoUrl` to your real [Tally](https://tally.so) form or booking link.
3. Swap `--color-accent` in `src/app/globals.css` for your brand color.

## Content

- **Blog posts:** add a `.md` file to `content/blog/` with frontmatter (`title`, `description`, `date`, `author`, `tags`). It auto-appears on `/blog`, the homepage teaser, and the sitemap.

## SEO / GEO

- Per-page metadata + Open Graph/Twitter cards
- `sitemap.xml`, `robots.txt` (auto-generated)
- Organization + Article JSON-LD structured data
- `public/llms.txt` so LLM answer engines (ChatGPT, Perplexity) can read and cite the product

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com). Set the custom domain there. No env vars required for the static site.
