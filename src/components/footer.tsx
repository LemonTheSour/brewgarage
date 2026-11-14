import { phoneHref, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="flex min-h-20 items-center justify-between gap-4 bg-black px-4 py-4 text-white">
      <span className="text-xs sm:text-sm">{site.address}</span>
      <span className="shrink-0 font-bold tracking-wide">BREW GARAGE</span>
      <a href={phoneHref} className="whitespace-nowrap text-right text-xs hover:underline sm:text-sm">
        {site.phone}
      </a>
    </footer>
  );
}
