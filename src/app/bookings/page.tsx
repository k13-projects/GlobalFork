"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import PageHeader from "@/components/PageHeader";

type FormState = {
  occasion: string;
  partySize: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
};

const OCCASIONS = [
  "Birthday",
  "Corporate / Team",
  "Engagement / Wedding",
  "Anniversary",
  "Other",
];

const STEPS = ["Event", "Date & size", "About you"] as const;

export default function BookingsPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>({
    occasion: "",
    partySize: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const canAdvance =
    (step === 0 && form.occasion) ||
    (step === 1 && form.partySize && form.date) ||
    step === 2;

  const submit = () => {
    const subject = encodeURIComponent(
      `Booking inquiry — ${form.occasion} for ${form.partySize}`,
    );
    const body = encodeURIComponent(
      [
        `Occasion: ${form.occasion}`,
        `Party size: ${form.partySize}`,
        `Date: ${form.date}`,
        `Preferred time: ${form.time || "(any)"}`,
        ``,
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || "(none)"}`,
        ``,
        `Notes:`,
        form.notes || "(none)",
      ].join("\n"),
    );
    window.location.href = `mailto:bookings@globalfork.example?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <PageHeader
        eyebrow="Bookings"
        title="We love a special occasion"
        subtitle="From birthdays to big celebrations, GLOBAL FORK is the perfect place to gather, share, and indulge. Tell us about your event and we’ll be in touch."
      />

      <section className="bg-[var(--color-sand)] px-8 py-24 text-[var(--color-iron)]">
        <div className="mx-auto max-w-3xl">
          {/* Progress */}
          <ol aria-label="Booking steps" className="flex items-center gap-3">
            {STEPS.map((label, i) => {
              const state = i < step ? "done" : i === step ? "active" : "future";
              return (
                <li key={label} className="flex items-center gap-3">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full font-display text-sm transition-colors ${
                      state === "done"
                        ? "bg-[var(--color-clay)] text-[var(--color-sand)]"
                        : state === "active"
                          ? "bg-[var(--color-iron)] text-[var(--color-sand)]"
                          : "bg-[var(--color-iron)]/10 text-[var(--color-iron)]/45"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span
                    className={`font-display text-xs uppercase tracking-[0.22em] ${
                      state === "future"
                        ? "text-[var(--color-iron)]/45"
                        : "text-[var(--color-iron)]"
                    }`}
                  >
                    {label}
                  </span>
                  {i < STEPS.length - 1 && (
                    <span className="ml-2 h-px w-10 bg-[var(--color-iron)]/15" />
                  )}
                </li>
              );
            })}
          </ol>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="mt-12"
            >
              {step === 0 && (
                <div>
                  <h2 className="font-display text-3xl uppercase tracking-tight md:text-4xl">
                    What&rsquo;s the occasion?
                  </h2>
                  <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {OCCASIONS.map((opt) => {
                      const selected = form.occasion === opt;
                      return (
                        <li key={opt}>
                          <button
                            type="button"
                            onClick={() => update("occasion", opt)}
                            className={`w-full rounded-2xl border p-5 text-left font-display text-sm uppercase tracking-[0.16em] transition-colors ${
                              selected
                                ? "border-[var(--color-clay)] bg-[var(--color-clay)] text-[var(--color-sand)]"
                                : "border-[var(--color-iron)]/15 hover:border-[var(--color-iron)]/40"
                            }`}
                          >
                            {opt}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {step === 1 && (
                <div>
                  <h2 className="font-display text-3xl uppercase tracking-tight md:text-4xl">
                    When and how many?
                  </h2>
                  <p className="mt-3 text-[var(--color-iron)]/65">
                    Bookings are accepted for parties of 15 or more.
                  </p>
                  <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Field label="Party size">
                      <input
                        required
                        type="number"
                        min={15}
                        value={form.partySize}
                        onChange={(e) => update("partySize", e.target.value)}
                        placeholder="15+"
                        className="form-input"
                      />
                    </Field>
                    <Field label="Date">
                      <input
                        required
                        type="date"
                        value={form.date}
                        onChange={(e) => update("date", e.target.value)}
                        className="form-input"
                      />
                    </Field>
                    <Field label="Preferred time (optional)">
                      <input
                        type="time"
                        value={form.time}
                        onChange={(e) => update("time", e.target.value)}
                        className="form-input"
                      />
                    </Field>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="font-display text-3xl uppercase tracking-tight md:text-4xl">
                    A little about you
                  </h2>
                  <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Field label="Name">
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        autoComplete="name"
                        className="form-input"
                      />
                    </Field>
                    <Field label="Email">
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        autoComplete="email"
                        className="form-input"
                      />
                    </Field>
                    <Field label="Phone (optional)">
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        autoComplete="tel"
                        className="form-input"
                      />
                    </Field>
                    <Field label="Anything we should know?" full>
                      <textarea
                        rows={4}
                        value={form.notes}
                        onChange={(e) => update("notes", e.target.value)}
                        className="form-input resize-y"
                      />
                    </Field>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="font-display text-sm uppercase tracking-[0.2em] text-[var(--color-iron)]/65 transition-opacity hover:opacity-100 disabled:opacity-30"
            >
              ← Back
            </button>
            {step < STEPS.length - 1 ? (
              <button
                type="button"
                onClick={() => canAdvance && setStep((s) => s + 1)}
                disabled={!canAdvance}
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-spicy)] px-10 py-3 font-display text-sm uppercase tracking-[0.2em] text-[var(--color-sand)] transition-colors hover:bg-[var(--color-clay-deep)] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continue →
              </button>
            ) : (
              <button
                type="button"
                onClick={submit}
                disabled={!form.name || !form.email}
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-harvey)] px-10 py-3 font-display text-sm uppercase tracking-[0.2em] text-[var(--color-sand)] transition-colors hover:bg-[var(--color-ochre)] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Send Inquiry
              </button>
            )}
          </div>

          <p className="mt-10 text-center text-sm text-[var(--color-iron)]/55">
            Submission opens your mail app for now — we&rsquo;ll wire a hosted
            handler when the bookings inbox is configured.
          </p>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  full,
  children,
}: {
  label: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-2 ${full ? "md:col-span-2" : ""}`}>
      <span className="font-display text-xs uppercase tracking-[0.22em] text-[var(--color-iron)]/70">
        {label}
      </span>
      {children}
    </label>
  );
}
