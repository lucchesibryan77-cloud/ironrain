import { clients } from "@/lib/cases";

/** Client register — a directory, not a logo carousel. */
export function ClientWall() {
  return (
    <section aria-label="Selected clients" className="border-b border-line bg-paper-2">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-16">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-ink">
            Client register
          </h2>
          <p className="figcaption text-mute">Selected engagements · references under NDA</p>
        </div>
        <ul className="mt-8 grid grid-cols-1 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((name) => (
            <li
              key={name}
              className="border-t border-line py-3.5 font-serif text-lg font-medium text-ink/80 transition-colors hover:text-signal-deep"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
