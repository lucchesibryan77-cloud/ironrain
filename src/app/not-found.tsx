import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-dusk">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
        <p className="figcaption text-[10px] text-mute-dark">404 — record not found</p>
        <h1 className="display mt-5 max-w-2xl text-4xl text-paper md:text-6xl">
          That page isn&apos;t on file.
        </h1>
        <p className="mt-6 max-w-md text-[15px] leading-7 text-paper/75">
          The link may be stale, or the record was retired. Head back to the front desk — everything
          current lives there.
        </p>
        <Link
          href="/"
          className="figcaption mt-10 inline-block border border-ember bg-ember px-6 py-4 text-[11px] text-ink transition-colors hover:bg-[#d47a4f] hover:border-[#d47a4f]"
        >
          Back to the front desk
        </Link>
      </div>
    </section>
  );
}
