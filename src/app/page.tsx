import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero";
import sections from "@/data/home.json";

export default function Home() {
  return (
    <>
      {sections.map((s, i) => (
        <Hero
          key={s.title}
          image={s.image}
          title={s.title}
          priority={i === 0}
          as={i === 0 ? "h1" : "h2"}
        >
          {s.showLogo && (
            <Image
              src="/images/BrewGarage_Logo.png"
              alt="Brew Garage logo"
              width={128}
              height={96}
              priority
              className="mt-4 h-auto w-28 md:w-40"
            />
          )}
          {s.link && (
            <Link
              href={s.link}
              className="mt-4 flex h-11 w-40 items-center justify-center rounded-md bg-black font-bold text-white transition-colors hover:bg-neutral-800"
            >
              Find Out
            </Link>
          )}
        </Hero>
      ))}
    </>
  );
}
