import Link from "next/link";
import { SITE, NAV_LINKS } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold">Fix My Old Backyard</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Real projects, real materials guidance, and real installation know-how — from
            the team behind the book <em>BBQing with Billy</em>.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Explore
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-emerald-600">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Get a Free Quote
          </h4>
          <p className="mt-3 text-sm">
            <a href={SITE.phoneHref} className="font-semibold hover:text-emerald-600">
              {SITE.phone}
            </a>
          </p>
          <p className="mt-1 text-sm">
            <a href={SITE.emailHref} className="hover:text-emerald-600">
              {SITE.email}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Fix My Old Backyard. All rights reserved.
      </div>
    </footer>
  );
}
