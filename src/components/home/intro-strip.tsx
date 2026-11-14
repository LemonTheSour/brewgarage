import Hours from "@/components/ui/hours";

// Dark band under the home hero: a short intro beside the opening hours.
export default function IntroStrip({ intro }: { intro: string }) {
  return (
    <section aria-label="About Brew Garage" className="bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 py-12 md:flex-row md:justify-between md:py-14">
        <p className="max-w-xl text-center text-lg leading-relaxed text-white/85 md:text-left md:text-xl">
          {intro}
        </p>
        <div className="shrink-0 border-l-4 border-brand pl-5">
          <h2 className="mb-1 font-display text-xl tracking-[0.2em] text-brand uppercase">Open</h2>
          <Hours />
        </div>
      </div>
    </section>
  );
}
