import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";

const PROJECTS = [
  {
    title: "Lakeside Deck — Low Lustre Enamel Coating",
    year: "2017",
    image:
      "https://galaxy-prod.tlcdn.com/view/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/c34e1b89842b48529dd4bfe1b9b2a0ee.webp",
    description:
      "A weathered lakeside deck brought back to life with a low-lustre enamel coating system — restoring color and slip resistance without a full teardown.",
  },
  {
    title: "New Deck Build",
    year: "Featured",
    image:
      "https://galaxy-prod.tlcdn.com/view/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/d4e784e2782a4ad8843808c3e6eb209d.webp",
    description:
      "Ground-up deck construction sized and framed to code, finished with a UV- and water-resistant top coat for long-term durability.",
  },
];

const SERVICES = [
  { title: "Deck Restoration", description: "Repair rot, resecure framing, and refinish worn decking." },
  { title: "Enamel Coatings", description: "Durable, slip-resistant coatings in a range of finishes." },
  { title: "UV & Water Protect", description: "Sealants that resist fading, cracking, and moisture damage." },
  { title: "New Deck Builds", description: "Custom-designed decks built to your yard and lifestyle." },
];

export default function DecksPage() {
  return (
    <main>
      <PageHero
        eyebrow="Decks & Coatings"
        title="Deck Restoration, Coatings & New Builds"
        description="From full restorations to brand-new construction, every deck gets a coating system matched to its exposure and traffic."
        stats={[
          { value: "25+", label: "Decks Restored" },
          { value: "100%", label: "Custom Finish" },
          { value: "5★", label: "Avg Rating" },
        ]}
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-4">
          {SERVICES.map((s) => (
            <div key={s.title} className="rounded-xl border border-border p-5">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>
    </main>
  );
}
