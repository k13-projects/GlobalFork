import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PillButton from "@/components/PillButton";

export default function NotFound() {
  return (
    <>
      <PageHeader
        eyebrow="404"
        title="Lost in the plaza"
        subtitle="The page you’re looking for stepped out for a bite. Let’s get you back."
      />
      <section className="bg-[var(--color-sand)] px-8 py-24 text-center text-[var(--color-iron)]">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6">
          <p className="font-script text-3xl text-[var(--color-harvey)]">
            try one of these
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <PillButton href="/" variant="spicy">
              Home
            </PillButton>
            <PillButton href="/#vendors" variant="clay">
              Our Vendors
            </PillButton>
            <PillButton href="/#contact" variant="ironOnSand">
              Contact
            </PillButton>
          </div>
          <Link
            href="/"
            className="mt-4 font-display text-xs uppercase tracking-[0.22em] text-[var(--color-iron)]/80 underline-offset-8 hover:underline"
          >
            ← Back to Global Fork
          </Link>
        </div>
      </section>
    </>
  );
}
