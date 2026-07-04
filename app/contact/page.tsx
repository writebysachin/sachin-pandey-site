"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../src/components/site-chrome";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <section className="relative border-b border-border">
        <div className="absolute inset-0 -z-10 bg-gradient-brand-soft opacity-70" />
        <div className="container-page py-20 md:py-28">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Work with me
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Let's see if there's a <span className="text-gradient-brand">system</span> worth
            building.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Tell me what you're trying to grow, what you've tried, and what's leaking. If a Clarity
            Sprint or audit makes sense, I'll say so. If not, I'll point you somewhere useful.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            {submitted ? (
              <div className="rounded-2xl border border-border bg-surface p-8">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Got it. <span className="text-gradient-brand">Talk soon.</span>
                </h2>
                <p className="mt-3 text-muted-foreground">
                  I read every message myself within 1 business day. If you don't hear back in 48
                  hours, email me directly at{" "}
                  <a
                    href="mailto:hello@sachinpandey.com.np"
                    className="text-foreground underline underline-offset-4"
                  >
                    hello@sachinpandey.com.np
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="rounded-2xl border border-border bg-background p-7 md:p-8"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Your name" name="name" required />
                  <Field label="Work email" name="email" type="email" required />
                </div>
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <Field label="Company / site" name="company" />
                  <SelectField
                    label="Engagement"
                    name="engagement"
                    options={[
                      "Clarity Sprint (7–10 days)",
                      "Audit call (45 min)",
                      "Ongoing systems work",
                      "Just exploring",
                    ]}
                  />
                </div>
                <div className="mt-5">
                  <label className="text-sm font-medium text-foreground">
                    What's actually going on?
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Where the leak is, what you've tried, what 'good' would look like in 90 days."
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-[15px] text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90 md:w-auto"
                >
                  Send request →
                </button>
                <p className="mt-3 text-xs text-muted-foreground">
                  No newsletter. No follow-up sequence. Just one human reply.
                </p>
              </form>
            )}
          </div>

          <aside className="md:col-span-5">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                What to expect
              </h3>
              <ul className="mt-4 space-y-4 text-sm">
                {[
                  ["Reply within 1 business day", "Usually same-day from Asia hours."],
                  ["A 45-minute audit call", "Camera optional. Real diagnosis, not a sales pitch."],
                  ["A written recommendation", "Clarity Sprint, retainer, or 'don't hire me'."],
                  ["No spam after", "If we don't work together, you never hear from me again."],
                ].map(([t, d]) => (
                  <li key={t}>
                    <p className="font-medium text-foreground">{t}</p>
                    <p className="text-muted-foreground">{d}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 rounded-2xl border border-border bg-background p-6">
              <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Direct channels
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:hello@sachinpandey.com.np"
                    className="text-foreground hover:text-primary"
                  >
                    hello@sachinpandey.com.np
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sachinpandey"
                    className="text-foreground hover:text-primary"
                  >
                    LinkedIn — preferred for first contact
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-[15px] text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </label>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <select
        name={name}
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-[15px] text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
