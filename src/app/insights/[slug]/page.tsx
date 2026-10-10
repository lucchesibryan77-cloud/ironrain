import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import { Label } from "@/components/ui";
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
        <header className="border-b border-line-dark bg-dusk text-paper">
          <div className="mx-auto max-w-4xl px-5 py-16 md:py-24">
            <Label className="text-mute-dark">
              <Link href="/insights" className="underline decoration-ember underline-offset-4 hover:text-ember">
                Insights
              </Link>{" "}
              / {post.category}
            </Label>
            <h1 className="display mt-5 text-3xl md:text-5xl">{post.title}</h1>
            <p className="figcaption mt-8 text-[10px] text-mute-dark">
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
            <Label className="text-mute">
              Filed under {post.category} — {post.author}
            </Label>
            <p className="mt-4 max-w-xl text-sm leading-7 text-ink/70">
              Questions about your own environment? This is what we do all day.{" "}
              <Link href="/contact" className="font-semibold underline decoration-signal decoration-2 underline-offset-4 hover:text-signal">
                Talk to an engineer
              </Link>
              .
            </p>
          </footer>
        </div>
      </article>

      <section className="border-b border-line bg-paper-2">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
          <h2 className="display mb-10 text-3xl text-ink md:text-4xl">Keep reading</h2>
          <div className="grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2">
            {more.map((p) => (
              <Link
                key={p.slug}
                href={`/insights/${p.slug}`}
                className="group bg-paper px-7 py-8 transition-colors hover:bg-paper-2/70"
              >
                <Label className="text-mute">
                  {p.category} · {p.readTime}
                </Label>
                <h3 className="mt-3 font-serif text-xl font-semibold tracking-tight text-ink group-hover:text-signal">
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
