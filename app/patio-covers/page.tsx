import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";

const PROJECTS = [
  {
    title: "Patio Cover Installation",
    image:
      "https://galaxy-prod.tlcdn.com/gen/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/6d6ee8dc-4806-4f29-aac6-cd3c7000433b.png",
    description:
      "Full-frame patio cover install over a new paver patio and outdoor kitchen, wired for ceiling fans and recessed lighting.",
  },
  {
    title: "Open Lattice Patio Cover",
    image:
      "https://galaxy-prod.tlcdn.com/gen/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/5069db76-84eb-4da7-9cf8-737b33784be2.png",
    description:
      "Open lattice roof design that filters sunlight while keeping the space bright — a popular option for dining areas.",
  },
  {
    title: "Freestanding Patio Cover",
    image:
      "https://galaxy-prod.tlcdn.com/gen/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/2aeed880-2eb6-4ffb-85e9-5d9f171891c9.png",
    description:
      "A freestanding aluminum cover set away from the house, anchored on its own footings for full design flexibility.",
  },
  {
    title: "Full-Day Patio Cover Build",
    image:
      "https://galaxy-prod.tlcdn.com/gen/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/b6164e5d-7bf0-4611-a7c0-7085e86a2cfe.png",
    description:
      "Start-to-finish install completed in a single day — from footings to finished roof panels.",
  },
  {
    title: "Hillside Aluminum Cover Over Outdoor Kitchen",
    image:
      "https://galaxy-prod.tlcdn.com/gen/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/924231df-616d-4ca6-a65b-759127e7e42a.png",
    description:
      "Aluminum cover engineered for a sloped hillside lot, sheltering a full outdoor kitchen and dining area with a view.",
  },
  {
    title: "Solid Aluminum Cover With Ceiling Fan",
    image:
      "https://galaxy-prod.tlcdn.com/gen/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/5e768a47-8955-4ac5-b0d2-7261de11d96c.png",
    description:
      "Solid insulated roof panels with an integrated ceiling fan and recessed lighting for year-round comfort.",
  },
  {
    title: "Freestanding Aluminum Cover on Paver Patio",
    image:
      "https://galaxy-prod.tlcdn.com/gen/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/2c9a3f35-1a2a-4d9e-be56-a67dbee8309d.png",
    description:
      "Freestanding cover paired with a new paver patio, designed to match the home's existing rooflines.",
  },
  {
    title: "Attached Aluminum Cover — Large Tile Patio",
    image:
      "https://galaxy-prod.tlcdn.com/gen/user_30QJeY3LUaNi6PsUOFlH7ToUk5J/924231df-616d-4ca6-a65b-759127e7e42a.png",
    description:
      "House-attached cover spanning a large tiled patio, built to carry snow/wind loads per local code.",
  },
];

const SERVICES = [
  { title: "Solid Patio Covers", description: "Insulated roof panels for full sun and rain protection." },
  { title: "Lattice Covers", description: "Filtered light and airflow for a softer, open feel." },
  { title: "Freestanding Builds", description: "Independent structures anywhere in the yard." },
  { title: "Aluminum & Wood", description: "Material options matched to your home's style and budget." },
];

export default function PatioCoversPage() {
  return (
    <main>
      <PageHero
        eyebrow="Patio Covers"
        title="Solid, Lattice & Aluminum Patio Covers"
        description="Custom-designed patio covers built to shade, shelter, and extend your living space outdoors — in the material and style that fits your home."
        stats={[
          { value: "30+", label: "Covers Installed" },
          { value: "100%", label: "Custom Design" },
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
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>
    </main>
  );
}
