import { phoneHref, site } from "@/lib/site";
import DesktopNav from "./desktop-nav";
import MobileMenu from "./mobile-menu";

// Site header. Which version shows is decided by CSS breakpoints (md = 768px),
// so it renders on the server, never flashes, and adapts when the window is
// resized or a phone is rotated. Only the nav parts need client-side JS.
export default function Header() {
  return (
    <header>
      <div className="hidden h-8 items-center justify-center gap-12 bg-ink text-sm tracking-wide text-white md:flex">
        <span>{site.address}</span>
        <a href={phoneHref} className="hover:underline">
          {site.phone}
        </a>
      </div>
      <DesktopNav />
      <MobileMenu />
    </header>
  );
}
