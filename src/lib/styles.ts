// Shared Tailwind class strings, so repeated elements look identical everywhere.
// Colours and fonts themselves are design tokens in src/app/globals.css.

const btnBase =
  "inline-flex h-12 items-center justify-center gap-2 rounded-sm px-6 font-display text-xl font-semibold uppercase tracking-wider transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

/** Amber button, for use on dark backgrounds and photos. */
export const btnPrimary = `${btnBase} bg-brand text-ink hover:bg-white`;
/** White outline button, for use on dark backgrounds and photos. */
export const btnOutline = `${btnBase} border-2 border-white text-white hover:bg-white hover:text-ink`;
/** Black button, for use on light backgrounds. */
export const btnDark = `${btnBase} bg-ink text-white hover:bg-brand hover:text-ink`;
/** Black outline button, for use on light backgrounds. */
export const btnOutlineDark = `${btnBase} border-2 border-ink text-ink hover:bg-ink hover:text-white`;

/** Small spaced amber heading used on dark panels (footer, contact info). */
export const panelHeading =
  "mb-3 font-display text-xl uppercase tracking-[0.2em] text-brand";
