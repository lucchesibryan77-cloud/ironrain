import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import { Kicker } from "@/components/ui";
import { CtaBand } from "@/components/cta";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: p.title, description: p.excerpt };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((x) => x.slug === slug);
  if (!post) notFound();
  const more = posts.filter((x) => x.slug !== slug).slice(0, 2);

  return (
    <>
      <article className="border-b border-line bg-paper">
        <header className="rainlines border-b border-line-dark bg-ink">
          <div className="mx-auto max-w-4xl px-5 py-20 md:py-28">
            <Kicker className="text-mute-dark">
              <Link href="/insights" className="hover:text-signal">Insights</Link> / {post.category}
            </Kicker>
            <h1 className="display mt-4 text-3xl uppercase text-paper md:text-5xl">{post.title}</h1>
            <p className="kicker mt-8 text-mute-dark">
              {post.author} ·{" "}
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              · {post.readTime} read
            </p>
          </div>
        </header>
        <div className="mx-auto max-w-4xl px-5 py-16 md:py-20">
          <div className="article-body">
            {post.body.map((block, i) =>
              block.startsWith("##") ? (
                <h2 key={i}>{block.slice(2)}</h2>
              ) : (
                <p key={i}>{block}</p>
              )
            )}
          </div>
          <footer className="mt-16 border-t border-line pt-8">
            <Kicker className="text-mute">Filed under {post.category} — {post.author}</Kicker>
            <p className="mt-4 max-w-xl text-sm leading-6 text-mute">
              Questions about your own environment? This is what we do all day.{" "}
              <Link href="/contact" className="underline decoration-signal underline-offset-4 hover:text-signal">
                Talk to an engineer
              </Link>
              .
            </p>
          </footer>
        </div>
      </article>

      <section className="border-b border-line bg-paper-2">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
          <h2 className="display mb-10 text-3xl uppercase text-ink md:text-4xl">Keep reading</h2>
          <div className="grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2">
            {more.map((p) => (
              <Link
                key={p.slug}
                href={`/insights/${p.slug}`}
                className="group bg-paper px-6 py-8 transition-colors hover:bg-paper-2"
              >
                <Kicker className="text-mute">{p.category} · {p.readTime}</Kicker>
                <h3 className="mt-3 text-xl font-extrabold uppercase tracking-tight text-ink group-hover:text-signal">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
