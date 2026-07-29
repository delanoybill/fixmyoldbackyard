import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";

const PROJECTS = [
  {
    title: "Before: Dated Pool & Deck",
    image:
      "https://galaxy-prod.tlcdn.com/gen/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/7ce9b8b6-67eb-4651-87d8-c29636cfe884.png",
    description:
      "Worn pebble-finish plaster, cracked coping, and an overgrown yard — a typical starting point before a full remodel.",
  },
  {
    title: "After: Travertine Deck & Fiberglass Overlay",
    image:
      "https://galaxy-prod.tlcdn.com/gen/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/bfab90e0-fcd4-45e3-ac4e-51d78f954108.png",
    description:
      "Cream travertine deck and coping, a clean fiberglass overlay interior, and a new stacked-stone fire pit seating area.",
  },
  {
    title: "Travertine Pool Deck & Coping",
    year: "2025",
    image:
      "https://galaxy-prod.tlcdn.com/view/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/d4e784e2782a4ad8843808c3e6eb209d.webp",
    description:
      "Existing pool re-decked in cream travertine with a fire pit and tropical landscaping — no need to touch the pool shell itself.",
  },
  {
    title: "Travertine Hillside Pool & Spa Surround",
    year: "2025",
    image:
      "https://galaxy-prod.tlcdn.com/view/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/c34e1b89842b48529dd4bfe1b9b2a0ee.webp",
    description:
      "Hillside pool and spa finished with a stone veneer bond beam and blue glass fire pit, framed by panoramic views.",
  },
];

export default function PoolRemodelsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pool Remodels"
        title="Pool Deck, Coping & Fiberglass Overlay Remodels"
        description="From resurfacing a tired pool shell with a fast-turnaround fiberglass overlay to rebuilding the deck and coping around it, we handle residential pool remodels start to finish."
        stats={[
          { value: "No", label: "Cure Time on Overlay" },
          { value: "Fast", label: "Turnaround" },
          { value: "15+", label: "Years Experience" },
        ]}
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
        <div className="mt-12 rounded-xl border border-border bg-muted/40 p-8">
          <h2 className="text-xl font-bold">Commercial Pool Remodeling</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            For HOAs, apartment communities, hotels, and gyms, our sister company{" "}
            <a
              href="https://fixmyoldpool.com"
              className="font-semibold text-emerald-600 hover:underline"
            >
              FixMyOldPool.com
            </a>{" "}
            specializes in commercial fiberglass overlay resurfacing — fast turnaround, no cure
            time, and a durable, code-compliant white finish.
          </p>
        </div>
      </section>
    </main>
  );
}
