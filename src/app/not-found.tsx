import Link from "next/link";
import Hero from "@/components/hero";
import { btnPrimary } from "@/lib/ui";

export default function NotFound() {
  return (
    <Hero image="/images/tanks.jpg" title="Not found" eyebrow="404">
      <Link
        href="/"
        className={`${btnPrimary} mt-8`}
      >
        Back home
      </Link>
    </Hero>
  );
}
