"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import PageHeader from "@/components/PageHeader";
import PillButton from "@/components/PillButton";

type Topic = "general" | "vendor" | "careers";

const TOPICS: { id: Topic; label: string; mailto: string; copy: string }[] = [
  {
    id: "general",
    label: "General",
    mailto: "hello@globalfork.example",
    copy: "Questions, partnerships, press, or anything else.",
  },
  {
    id: "vendor",
    label: "Vendor Opportunities",
    mailto: "vendors@globalfork.example",
    copy: "Want to bring your concept to the plaza? Tell us about it.",
  },
  {
    id: "careers",
    label: "Careers",
    mailto: "careers@globalfork.example",
    copy: "Looking to join the team. Hospitality, kitchen, plaza ops.",
  },
];

export default function ContactPage() {
  const [topic, setTopic] = useState<Topic>("general");
  const active = useMemo(
    () => TOPICS.find((t) => t.id === topic) ?? TOPICS[0],
    [topic],
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`[${active.label}] from ${name || "Global Fork site"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name || ""}\n${email || ""}`.trim(),
    );
    return `mailto:${active.mailto}?subject=${subject}&body=${body}`;
  }, [active, name, email, message]);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s connect"
        subtitle="Food, culture, and community come together here. Reach out — we’re always ready to connect."
      />

      <section className="bg-[var(--color-sand)] px-8 py-24 text-[var(--color-iron)]">
        <div className="mx-auto max-w-4xl">
          {/* Topic tabs */}
          <div role="tablist" aria-label="Contact topic" className="flex flex-wrap gap-2 border-b border-[var(--color-iron)]/10 pb-1">
            {TOPICS.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={topic === t.id}
                aria-controls={`panel-${t.id}`}
                id={`tab-${t.id}`}
                onClick={() => setTopic(t.id)}
                className={`relative rounded-t-md px-5 py-3 font-display text-sm uppercase tracking-[0.18em] transition-colors ${
                  topic === t.id
                    ? "text-[var(--color-iron)]"
                    : "text-[var(--color-iron)]/55 hover:text-[var(--color-iron)]/85"
                }`}
              >
                {t.label}
                {topic === t.id && (
                  <motion.span
                    aria-hidden
                    layoutId="contact-tab-underline"
                    className="absolute inset-x-3 bottom-0 h-[2px] bg-[var(--color-clay)]"
                  />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={topic}
              role="tabpanel"
              id={`panel-${topic}`}
              aria-labelledby={`tab-${topic}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="pt-10"
            >
              <p className="text-lg leading-relaxed text-[var(--color-iron)]/75">
                {active.copy}
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = mailtoHref;
                }}
                className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
              >
                <Field label="Your name">
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    className="form-input"
                  />
                </Field>
                <Field label="Email">
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    className="form-input"
                  />
                </Field>
                <Field label="Message" full>
                  <textarea
                    required
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="form-input resize-y"
                  />
                </Field>
                <div className="md:col-span-2">
                  <PillButton href={mailtoHref} variant="spicy">
                    Send Message
                  </PillButton>
                  <p className="mt-3 text-sm text-[var(--color-iron)]/55">
                    Opens your mail app — we&rsquo;ll wire a hosted form when
                    the inbox is finalized.
                  </p>
                </div>
              </form>
            </motion.div>
          </AnimatePresence>
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
