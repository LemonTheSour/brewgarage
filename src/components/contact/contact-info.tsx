import Hours from "@/components/ui/hours";
import Socials from "@/components/ui/socials";
import { PhoneIcon, PinIcon } from "@/components/ui/icons";
import { mapsHref, phoneHref, site } from "@/lib/site";
import { btnPrimary, panelHeading } from "@/lib/styles";

// Dark panel beside the contact form: hours, address, phone, directions, socials.
export default function ContactInfo() {
  return (
    <aside className="h-fit space-y-8 rounded-sm bg-ink p-8 text-white">
      <div>
        <h2 className={panelHeading}>Opening hours</h2>
        <Hours className="max-w-64 text-lg" />
      </div>
      <div>
        <h2 className={panelHeading}>Find us</h2>
        <address className="not-italic">
          <p className="flex items-center gap-3">
            <PinIcon size={22} className="shrink-0 text-brand" /> {site.address}
          </p>
          <a href={phoneHref} className="mt-2 flex items-center gap-3 hover:text-brand">
            <PhoneIcon size={22} className="shrink-0 text-brand" /> {site.phone}
          </a>
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnPrimary} mt-6 w-full`}
          >
            Get directions
          </a>
        </address>
      </div>
      <div>
        <h2 className={panelHeading}>Follow along</h2>
        <Socials size={30} />
      </div>
    </aside>
  );
}
