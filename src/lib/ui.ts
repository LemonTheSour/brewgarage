// Shared class strings so buttons and headings look identical everywhere.

const btnBase =
  "inline-flex h-12 items-center justify-center gap-2 rounded-sm px-6 font-display text-xl font-semibold uppercase tracking-wider transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

export const btnPrimary = `${btnBase} bg-brand text-ink hover:bg-white`;
export const btnOutline = `${btnBase} border-2 border-white text-white hover:bg-white hover:text-ink`;
export const btnDark = `${btnBase} bg-ink text-white hover:bg-brand hover:text-ink`;

export const eyebrow =
  "font-display text-lg uppercase tracking-[0.25em] text-brand";
