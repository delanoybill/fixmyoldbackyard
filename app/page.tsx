import Link from "next/link";
import { SITE, GUIDES } from "@/lib/site-data";
import { BookPromo } from "@/components/book-promo";
import { GuideCard } from "@/components/guide-card";
import { BLOG_POSTS } from "@/lib/blog-data";

const CATEGORIES = [
  {
    href: "/driveways",
    title: "Driveways & Front Yards",
    image:
      "https://galaxy-prod.tlcdn.com/gen/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/e30f5fcd-c271-4c1c-8bc1-fe06d8fdd3ae.png",
    blurb: "Pavers, concrete, turf, and lighting that transform curb appeal.",
  },
  {
    href: "/decks",
    title: "Decks & Coatings",
    image:
      "https://galaxy-prod.tlcdn.com/view/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/c34e1b89842b48529dd4bfe1b9b2a0ee.webp",
    blurb: "Restorations, enamel coatings, and new deck builds that last.",
  },
  {
    href: "/patio-covers",
    title: "Patio Covers",
    image:
      "https://galaxy-prod.tlcdn.com/gen/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/6d6ee8dc-4806-4f29-aac6-cd3c7000433b.png",
    blurb: "Solid, lattice, aluminum, and freestanding covers built to spec.",
  },
  {
    href: "/bbq-islands",
    title: "BBQ Islands",
    image:
      "https://galaxy-prod.tlcdn.com/original/image/nano-banana-2-edit-generations/gemini-1780593123489-timestamp/9ff1eb8e-34c3-4caf-9aa4-2072a40d48dc.png?hsh=optimize",
    blurb: "Custom outdoor kitchens built around the grill you already love.",
  },
  {
    href: "/pool-remodels",
    title: "Pool Remodels",
    image:
      "https://galaxy-prod.tlcdn.com/gen/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/bfab90e0-fcd4-45e3-ac4e-51d78f954108.png",
    blurb: "Travertine decks, coping, and full resurfacing for tired pools.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-emerald-50 to-background">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            {SITE.tagline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Free articles, short guides and real project photos from a builder with 1,500+
            backyards behind him. Learn what things really cost, which materials hold up, and
            the mistakes to avoid before you hire anyone. The companion site to the book{" "}
            <em>Backyard Design and BBQing with Billy</em>.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/blog"
              className="rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Start Learning
            </Link>
            <Link
              href="/guides"
              className="rounded-md border border-border px-6 py-3 text-sm font-semibold hover:bg-muted"
            >
              Browse the Guides
            </Link>
          </div>
          <div className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-600">{BLOG_POSTS.length}</div>
              <div className="text-sm text-muted-foreground">Free Articles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">1,500+</div>
              <div className="text-sm text-muted-foreground">Backyards Built</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">{GUIDES.filter((g) => g.cover).length}</div>
              <div className="text-sm text-muted-foreground">Project Guides</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl font-bold">Learn by Project Type</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.image}
                alt={c.title}
                className="h-48 w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="p-5">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <BookPromo />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">The Fix My Old Guides</h2>
          <Link href="/guides" className="text-sm font-semibold text-emerald-600 hover:underline">
            All guides →
          </Link>
        </div>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Short, practical PDFs, one project each: real costs, layouts, permits and a checklist.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GUIDES.map((g) => (
            <GuideCard key={g.number} guide={g} />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Latest Articles</h2>
            <Link href="/blog" className="text-sm font-semibold text-emerald-600 hover:underline">
              View all articles →
            </Link>
          </div>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Guides on choosing the right materials, understanding the installation process, and
            matching each product to its best application — pavers, decks, patio covers, BBQ
            islands, and pool remodels.
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {BLOG_POSTS.slice(0, 4).map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="block h-full rounded-xl border border-border bg-background p-5 transition-shadow hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">{p.category}</p>
                  <h3 className="mt-1 font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
