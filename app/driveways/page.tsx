import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";

const PROJECTS = [
  {
    title: "Front Yard & Driveway Transformation",
    year: "2026",
    image:
      "https://galaxy-prod.tlcdn.com/gen/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/e30f5fcd-c271-4c1c-8bc1-fe06d8fdd3ae.png",
    description:
      "Southern California front yard rebuilt with interlocking pavers, LED-lit entry steps, low-water artificial turf, custom concrete planters, and fresh landscaping.",
  },
  {
    title: "How We Install — Paver & Concrete Base",
    year: "Process",
    image:
      "https://galaxy-prod.tlcdn.com/view/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/aad0a1518d75450d8ca6442b914e456d.png",
    description:
      "Our four-step install: excavate and grade the base, set forms and compact a gravel sub-base, pour and screed the concrete, then hand-finish the surface for a clean, level result.",
  },
  {
    title: "Travertine Pool Deck & Coping",
    year: "2025",
    image:
      "https://galaxy-prod.tlcdn.com/view/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/d4e784e2782a4ad8843808c3e6eb209d.webp",
    description:
      "Cream travertine deck and coping around an existing pool, paired with a custom fire pit and tropical landscaping for year-round outdoor living.",
  },
  {
    title: "Travertine Hillside Pool & Spa Surround",
    year: "2025",
    image:
      "https://galaxy-prod.tlcdn.com/view/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/c34e1b89842b48529dd4bfe1b9b2a0ee.webp",
    description:
      "A hillside pool and spa surround finished with a stone veneer bond beam, a blue glass fire pit, and panoramic views built into the design.",
  },
];

export default function DrivewaysPage() {
  return (
    <main>
      <PageHero
        eyebrow="Driveways & Front Yards"
        title="Driveways, Walkways & Front Yard Makeovers"
        description="Pavers, concrete, turf, and lighting — designed and installed to hold up under real Southern California weather and daily use."
        stats={[
          { value: "100+", label: "Jobs Completed" },
          { value: "5★", label: "Avg Rating" },
          { value: "15+", label: "Years Experience" },
        ]}
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>
    </main>
  );
}
