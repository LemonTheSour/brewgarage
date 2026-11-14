// Sticky row of buttons that jump to sections of a long page.
// Sits under the fixed phone header (top-12) and at the very top on desktop.
export default function JumpNav({
  label,
  links,
}: {
  label: string;
  links: readonly { label: string; href: `#${string}` }[];
}) {
  return (
    <nav
      aria-label={label}
      className="sticky top-12 z-30 border-b border-black/10 bg-white/95 backdrop-blur md:top-0"
    >
      <ul className="no-scrollbar mx-auto flex max-w-3xl gap-2 overflow-x-auto px-5 py-3">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="block rounded-full border border-ink/20 px-4 py-1 font-display text-lg uppercase tracking-wider whitespace-nowrap transition-colors hover:border-brand hover:bg-brand"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
