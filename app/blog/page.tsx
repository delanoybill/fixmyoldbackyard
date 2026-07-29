import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-data";

export default function BlogIndex() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Blog</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">Materials, Installation & Design Guides</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Practical, no-fluff guides to help you choose the right materials, understand the
        installation process, and match each product to its best use — written alongside the
        book <em>BBQing with Billy</em>.
      </p>
      <div className="mt-12 space-y-8">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block rounded-xl border border-border p-6 transition-shadow hover:shadow-md"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
              {post.category}
            </p>
            <h2 className="mt-1 text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
