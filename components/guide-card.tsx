/* eslint-disable @next/next/no-img-element */
import { SITE, type Guide } from "@/lib/site-data";

export function GuideCard({ guide }: { guide: Guide }) {
  const notify = `mailto:${SITE.email}?subject=${encodeURIComponent(
    `Let me know when ${guide.title} is available`,
  )}`;
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      {guide.cover ? (
        <img src={guide.cover} alt={`${guide.title} cover`} className="aspect-[700/906] w-full object-cover" />
      ) : (
        <div className="flex aspect-[700/906] w-full flex-col items-center justify-center bg-neutral-900 p-6 text-center text-white">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-400">Fix My Old Backyard · Guide No. {guide.number}</p>
          <p className="mt-4 text-2xl font-bold">{guide.title}</p>
          <p className="mt-2 text-sm text-neutral-400">In the works</p>
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">Guide No. {guide.number}</p>
        <h3 className="mt-1 font-semibold">{guide.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{guide.subtitle}</p>
        <p className="mt-3 text-xs text-muted-foreground">{guide.topics.join(" · ")}</p>
        <div className="mt-auto pt-5">
          {guide.buyUrl ? (
            <a
              href={guide.buyUrl}
              className="block rounded-md bg-emerald-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Buy the PDF — {guide.price}
            </a>
          ) : (
            <a
              href={notify}
              className="block rounded-md border border-border px-4 py-2.5 text-center text-sm font-semibold hover:bg-muted"
            >
              Coming soon — {guide.price} · Notify me
            </a>
          )}
          {guide.pages && <p className="mt-2 text-center text-xs text-muted-foreground">{guide.pages} · Instant PDF</p>}
        </div>
      </div>
    </div>
  );
}
