import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/blog-data";
import { SITE } from "@/lib/site-data";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/blog" className="text-sm font-semibold text-emerald-600 hover:underline">
        ← Back to Blog
      </Link>
      <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-emerald-600">
        {post.category}
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{post.title}</h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/90">
        {post.content.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
      <div className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h3 className="font-semibold">Ready to start your project?</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Call {SITE.phone} or email {SITE.email} for a free quote.
        </p>
      </div>
    </main>
  );
}
