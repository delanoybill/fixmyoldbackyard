import type { Metadata } from "next";
import { GUIDES } from "@/lib/site-data";
import { GuideCard } from "@/components/guide-card";
import { BookPromo } from "@/components/book-promo";

export const metadata: Metadata = {
  title: "Fix My Old Backyard Guides | Short, Practical PDF Guides",
  description:
    "20–30 page PDF guides on outdoor kitchens, patio covers, landscaping and pools: real costs, layouts, permits and checklists from a builder with 1,500+ backyards behind him.",
};

export default function GuidesPage() {
  return (
    <main>
      <section className="border-b border-border bg-gradient-to-b from-emerald-50 to-background">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">The Fix My Old Series</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Short guides that pay for themselves on the first decision
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Each guide covers one project start to finish: what it really costs, how to lay it out,
            which permits you need, and a checklist to hold your contractor to. 20–30 pages,
            instant PDF, $14.95.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GUIDES.map((g) => (
            <GuideCard key={g.number} guide={g} />
          ))}
        </div>
      </section>
      <BookPromo />
    </main>
  );
}
