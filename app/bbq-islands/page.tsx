import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";

const PROJECTS = [
  {
    title: "L-Shape Outdoor Kitchen With Custom Island",
    image:
      "https://galaxy-prod.tlcdn.com/original/image/nano-banana-2-edit-generations/gemini-1780593123489-timestamp/9ff1eb8e-34c3-4caf-9aa4-2072a40d48dc.png?hsh=optimize",
    description:
      "10' L-shaped island with a built-in 36\" grill, dark charcoal granite countertop, and grey stone veneer siding — matched to an extended patio cover overhead.",
  },
  {
    title: "Outdoor Kitchen Under Louvered Patio Cover",
    image:
      "https://galaxy-prod.tlcdn.com/gen/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/cb9c645a-3f41-459a-a9ca-1b9a1213dab8.png",
    description:
      "Wood-plank veneer island with polished granite countertop, built-in grill, side burner, and mini fridge — set beneath an adjustable louvered roof.",
  },
  {
    title: "Modern Charcoal Kitchen With Linear Fireplace",
    image:
      "https://galaxy-prod.tlcdn.com/gen/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/5e768a47-8955-4ac5-b0d2-7261de11d96c.png",
    description:
      "Matte charcoal wood-plank veneer cabinetry, granite waterfall countertop, wine fridge, and a floating-hearth linear fireplace nearby.",
  },
  {
    title: "L-Shape Kitchen & Custom Bar",
    image:
      "https://galaxy-prod.tlcdn.com/gen/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/2aeed880-2eb6-4ffb-85e9-5d9f171891c9.png",
    description:
      "Large L-shaped kitchen with dual appliances, stacked-stone fireplace, and a matching custom bar table for entertaining.",
  },
  {
    title: "Dual-Grill Kitchen With Kegerator",
    image:
      "https://galaxy-prod.tlcdn.com/gen/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/b6164e5d-7bf0-4611-a7c0-7085e86a2cfe.png",
    description:
      "Walnut wood-plank veneer cabinetry, travertine paver patio, dual stainless steel BBQs, and a built-in kegerator.",
  },
  {
    title: "Desert-Modern Kitchen With Pizza Oven",
    image:
      "https://galaxy-prod.tlcdn.com/gen/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/02b477e8-8f38-48df-9fa8-4c96be53b1bb.png",
    description:
      "Sand-toned veneer island with built-in pizza oven insert, set against desert landscaping with agave and boulders.",
  },
  {
    title: "Bronze-Toned Pergola Kitchen With Fire Pit",
    image:
      "https://galaxy-prod.tlcdn.com/gen/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/5f1e64a0-59a1-4e0e-99c5-863d0badb787.png",
    description:
      "Honey-toned wood-plank cabinetry under a bronze aluminum pergola, with a circular fire pit lounge just steps away.",
  },
  {
    title: "Evening Entertaining Kitchen",
    image:
      "https://galaxy-prod.tlcdn.com/gen/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/924231df-616d-4ca6-a65b-759127e7e42a.png",
    description:
      "Golden-hour build with a motorized louvered roof, gray paver patio, and a stacked-stone fireplace with wood mantel.",
  },
];

const FEATURES = [
  { title: "Built-in Grills", description: "Bull, Weber, Napoleon and other trusted brands." },
  { title: "Stone & Stucco", description: "Veneer finishes matched to your home's exterior." },
  { title: "Concrete Tops", description: "Custom-poured countertops in any color or edge profile." },
  { title: "Fridges & Drawers", description: "Storage and refrigeration built into the island." },
];

export default function BbqIslandsPage() {
  return (
    <main>
      <PageHero
        eyebrow="BBQ Islands"
        title="Custom Outdoor Kitchens & BBQ Islands"
        description="Built-in grills, stone and stucco finishes, and concrete countertops — designed around how you actually cook and entertain."
        stats={[
          { value: "50+", label: "Islands Built" },
          { value: "100%", label: "Custom Designed" },
          { value: "5★", label: "Avg Rating" },
        ]}
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-4">
          {FEATURES.map((s) => (
            <div key={s.title} className="rounded-xl border border-border p-5">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>
    </main>
  );
}
