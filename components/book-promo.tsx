/* eslint-disable @next/next/no-img-element */
import { BOOK } from "@/lib/site-data";

export function BookPromo({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "" : "border-y border-border bg-neutral-950"}>
      <div
        className={
          compact
            ? "overflow-hidden rounded-2xl bg-neutral-950 text-white"
            : "mx-auto max-w-7xl px-6 py-16 text-white"
        }
      >
        <div
          className={`grid items-center gap-8 ${compact ? "p-6 sm:grid-cols-[160px_1fr]" : "md:grid-cols-[280px_1fr]"}`}
        >
          <a href={BOOK.url} className="mx-auto block w-40 md:w-auto">
            <img
              src={BOOK.cover}
              alt={`${BOOK.title} book cover`}
              className="w-full rounded-md shadow-2xl ring-1 ring-white/10"
            />
          </a>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              The book behind this site
            </p>
            <h2 className={`mt-2 font-bold tracking-tight ${compact ? "text-2xl" : "text-3xl md:text-4xl"}`}>
              {BOOK.title}
            </h2>
            <p className="mt-2 italic text-neutral-300">{BOOK.tagline}</p>
            {!compact && (
              <ul className="mt-5 space-y-2 text-neutral-200">
                {BOOK.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span className="text-amber-400">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={BOOK.url}
                className="rounded-md bg-orange-600 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-700"
              >
                Get the Book — {BOOK.price}
              </a>
              <span className="text-sm text-neutral-400">
                <s>{BOOK.regularPrice}</s> · Instant PDF download
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
