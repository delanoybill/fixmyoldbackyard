import type { Metadata } from "next";
import { DESIGN_OFFER, SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "3-D Backyard Design for $125 | Fix My Old Backyard",
  description:
    "See your new backyard before you build it. A custom 3-D design of your outdoor kitchen, patio cover or full yard for $125, including 2 rounds of changes.",
};

const STEPS = [
  { title: "Send your yard", body: "Email 3–5 photos of your yard, rough measurements, and what you want to build." },
  { title: "We design it in 3-D", body: "You get a 3-D model of your layout: island, cover, pool deck, or the whole yard." },
  { title: "Two rounds of changes", body: `Move the grill, change the finishes, try another layout. ${DESIGN_OFFER.revisions} revisions are included.` },
  { title: "Build with confidence", body: "Take the design to any contractor, or ask us for a quote if you're in Southern California." },
];

export default function DesignPage() {
  return (
    <main>
      <section className="border-b border-border bg-gradient-to-b from-emerald-50 to-background">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">From the book</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            See it in 3-D before you spend a dollar on concrete
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            The most expensive mistakes happen on paper: the grill in front of the window, the cover
            that blocks the view, the island with no landing space. A custom 3-D design catches them
            first. {DESIGN_OFFER.price}, with {DESIGN_OFFER.revisions} rounds of changes.
          </p>
          <a
            href={DESIGN_OFFER.emailHref}
            className="mt-8 inline-block rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Request My 3-D Design — {DESIGN_OFFER.price}
          </a>
          <p className="mt-3 text-sm text-muted-foreground">
            Opens an email to {SITE.email} with the details to fill in. Questions? Call {SITE.phone}.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl font-bold">How it works</h2>
        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="rounded-xl border border-border p-5">
              <div className="text-2xl font-bold text-emerald-600">{i + 1}</div>
              <h3 className="mt-2 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
