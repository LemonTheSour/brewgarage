import Image from "next/image";
import Section, { SectionTitle } from "@/components/ui/section";
import Hours from "@/components/ui/hours";
import { PhoneIcon, PinIcon } from "@/components/ui/icons";
import { getImage } from "@/lib/images";
import { mapsHref, phoneHref, site } from "@/lib/site";
import { btnDark } from "@/lib/styles";

// "Visit the Garage": photo beside the address, phone, hours and directions.
// `id` lets the hero's "Visit us" button jump here.
export default function VisitSection({ id, image }: { id: string; image: string }) {
  return (
    <Section id={id} tone="paper" width="wide">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
          <Image
            src={getImage(image)}
            placeholder="blur"
            alt="The Brew Garage beer garden"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <SectionTitle eyebrow="Find us" align="left">
            Visit the Garage
          </SectionTitle>
          <address className="space-y-3 text-lg not-italic">
            <p className="flex items-center gap-3">
              <PinIcon size={24} className="shrink-0 text-brand-dark" /> {site.address}
            </p>
            <a href={phoneHref} className="flex items-center gap-3 hover:underline">
              <PhoneIcon size={24} className="shrink-0 text-brand-dark" /> {site.phone}
            </a>
          </address>
          <Hours className="mt-6 max-w-xs text-lg" />
          <a href={mapsHref} target="_blank" rel="noopener noreferrer" className={`${btnDark} mt-8`}>
            Get directions
          </a>
        </div>
      </div>
    </Section>
  );
}
