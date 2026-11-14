import type { ReactNode } from "react";

interface SectionProps {
  title?: string;
  /** Small amber line above the title. */
  eyebrow?: string;
  id?: string;
  children: ReactNode;
  className?: string;
  /** "narrow" for reading text, "wide" for grids. */
  width?: "narrow" | "wide";
  tone?: "light" | "paper" | "dark";
}

const tones = {
  light: "bg-white text-ink",
  paper: "bg-paper text-ink",
  dark: "bg-ink text-white",
};

// Full-width band with a centred content column and an optional heading.
export default function Section({
  title,
  eyebrow,
  id,
  children,
  className = "",
  width = "narrow",
  tone = "light",
}: SectionProps) {
  return (
    <section id={id} className={`${tones[tone]} scroll-mt-28 md:scroll-mt-16`}>
      <div
        className={`mx-auto w-full px-5 py-14 md:py-20 ${width === "wide" ? "max-w-6xl" : "max-w-3xl"} ${className}`}
      >
        {title && <SectionTitle eyebrow={eyebrow}>{title}</SectionTitle>}
        {children}
      </div>
    </section>
  );
}

export function SectionTitle({
  children,
  eyebrow,
  align = "center",
}: {
  children: ReactNode;
  eyebrow?: string;
  align?: "center" | "left";
}) {
  const centred = align === "center";
  return (
    <div className={`mb-10 flex flex-col ${centred ? "items-center text-center" : "items-start"}`}>
      {eyebrow && (
        <p className="font-display text-lg uppercase tracking-[0.25em] text-brand-dark">{eyebrow}</p>
      )}
      <h2 className="font-display text-5xl leading-none font-bold uppercase tracking-wide md:text-6xl">
        {children}
      </h2>
      <span className="mt-3 block h-1 w-12 bg-brand" aria-hidden="true" />
    </div>
  );
}
