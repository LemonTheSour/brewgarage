import Link from "next/link";
import Hero from "@/components/ui/hero";
import { btnPrimary } from "@/lib/styles";

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
