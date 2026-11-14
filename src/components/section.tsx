import type { ReactNode } from "react";

// Centred, readable-width content column with a section heading.
export default function Section({
  title,
  children,
  className = "",
  wide = false,
}: {
  title?: string;
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <section
      className={`mx-auto w-full px-5 py-8 ${wide ? "max-w-6xl" : "max-w-3xl"} ${className}`}
    >
      {title && <h2 className="mb-6 text-center text-3xl font-bold">{title}</h2>}
      {children}
    </section>
  );
}
