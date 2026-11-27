import Link from "next/link";
import { BOOK } from "@/lib/site-data";

export function PageHero({
  eyebrow,
  title,
  description,
  stats,
}: {
  eyebrow: string;
  title: string;
  description: string;
  stats: { label: string; value: string }[];
}) {
  return (
    <section className="border-b border-border bg-gradient-to-b from-emerald-50 to-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
          {eyebrow}
        </p>
        <h1 className="mt-2 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{description}</p>
        <div className="mt-8 flex flex-wrap gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-emerald-600">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/guides"
            className="rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Get the Guide
          </Link>
          <Link
            href="/3d-design"
            className="rounded-md border border-border px-6 py-3 text-sm font-semibold hover:bg-muted"
          >
            3-D Design — $125
          </Link>
          <a
            href={BOOK.url}
            className="rounded-md border border-border px-6 py-3 text-sm font-semibold hover:bg-muted"
          >
            Get the Book
          </a>
        </div>
      </div>
    </section>
  );
}
