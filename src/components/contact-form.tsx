"use client";

import { useState } from "react";
import { z } from "zod";
import { site } from "@/lib/site";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  company: z.string().min(2, "Please enter your company."),
  email: z.string().email("That email address doesn't look right."),
  size: z.string(),
  topic: z.string(),
  message: z.string().min(20, "Give us a sentence or two so the right engineer calls back."),
});

type FormData = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormData, string>>;

const inputClass =
  "w-full border border-line bg-[#fffdf7] px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-mute/60 focus:border-signal focus:bg-white";

export function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    size: "1–25",
    topic: "Managed IT",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Errors = {};
      for (const issue of result.error.issues) {
        errs[issue.path[0] as keyof FormData] = issue.message;
      }
      setErrors(errs);
      return;
    }
    const subject = encodeURIComponent(`[Website] ${form.topic} — ${form.company}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nTeam size: ${form.size}\nTopic: ${form.topic}\n\n${form.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line bg-white px-6 py-12 text-center md:px-10">
        <p className="figcaption text-signal-deep">Request drafted</p>
        <h3 className="mt-4 text-2xl font-extrabold uppercase tracking-tight">
          Your email client just opened.
        </h3>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-mute">
          Everything you entered is pre-filled — just hit send. An engineer (not a salesperson)
          replies within one business day. If it&apos;s urgent, call {site.phone}.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="figcaption mt-8 border border-ink px-5 py-3 text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          Edit the message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border border-line bg-white p-6 md:p-10">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="figcaption mb-2 block text-mute">Name</label>
          <input id="cf-name" className={inputClass} value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Jane Doe" autoComplete="name" />
          {errors.name && <p className="mt-2 font-mono text-xs text-signal-deep">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="cf-company" className="figcaption mb-2 block text-mute">Company</label>
          <input id="cf-company" className={inputClass} value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Acme Dental" autoComplete="organization" />
          {errors.company && <p className="mt-2 font-mono text-xs text-signal-deep">{errors.company}</p>}
        </div>
        <div>
          <label htmlFor="cf-email" className="figcaption mb-2 block text-mute">Work email</label>
          <input id="cf-email" type="email" className={inputClass} value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="jane@acmedental.com" autoComplete="email" />
          {errors.email && <p className="mt-2 font-mono text-xs text-signal-deep">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="cf-size" className="figcaption mb-2 block text-mute">Team size</label>
          <select id="cf-size" className={inputClass} value={form.size} onChange={(e) => update("size", e.target.value)}>
            {["1–25", "26–75", "76–150", "151–250", "250+"].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-topic" className="figcaption mb-2 block text-mute">What do you need?</label>
          <select id="cf-topic" className={inputClass} value={form.topic} onChange={(e) => update("topic", e.target.value)}>
            {[
              "Managed IT",
              "Security Operations / RainWatch",
              "IronBaseline assessment",
              "StormCell IR retainer",
              "Compliance (HIPAA / CMMC / PCI / NIST)",
              "Website or platform build",
              "Something is on fire right now",
            ].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-message" className="figcaption mb-2 block text-mute">
            What&apos;s going on?
          </label>
          <textarea id="cf-message" rows={5} className={inputClass} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="We have ~40 staff in Albuquerque, our IT provider went quiet, and our cyber insurance renewal is in six weeks…" />
          {errors.message && <p className="mt-2 font-mono text-xs text-signal-deep">{errors.message}</p>}
        </div>
      </div>
      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
        <p className="figcaption text-mute">Replies within one business day · No spam, ever</p>
        <button type="submit" className="figcaption border border-signal bg-signal px-6 py-4 text-white transition-colors hover:bg-signal-deep hover:border-signal-deep">
          Send request →
        </button>
      </div>
    </form>
  );
}
