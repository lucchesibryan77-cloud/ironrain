import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-ink rainlines">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
        <p className="kicker text-signal">404 / Not found</p>
        <h1 className="display mt-4 text-5xl uppercase text-paper md:text-7xl">
          That page isn&apos;t on the network.
        </h1>
        <p className="mt-6 max-w-md text-sm leading-6 text-mute-dark">
          The link may be stale, or the route was retired. Head back to the homepage — everything
          current lives there.
        </p>
        <Link
          href="/"
          className="kicker mt-8 inline-block border border-signal bg-signal px-5 py-3.5 text-white transition-colors hover:bg-signal-deep hover:border-signal-deep"
        >
          Back to base
        </Link>
      </div>
    </section>
  );
}
