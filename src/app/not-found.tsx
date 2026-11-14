import Link from "next/link";
import Hero from "@/components/hero";

export default function NotFound() {
  return (
    <Hero image="/images/tanks.jpg" title="Page not found" priority>
      <Link
        href="/"
        className="mt-4 flex h-11 w-40 items-center justify-center rounded-md bg-black font-bold text-white"
      >
        Back home
      </Link>
    </Hero>
  );
}
