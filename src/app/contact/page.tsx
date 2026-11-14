import type { Metadata } from "next";
import Hero from "@/components/hero";
import Section, { SectionTitle } from "@/components/section";
import Socials from "@/components/socials";
import Hours from "@/components/hours";
import ContactForm from "@/components/contact/contactform";
import { PhoneIcon, PinIcon } from "@/components/icons";
import heroes from "@/data/titlecards.json";
import { mapsHref, phoneHref, site } from "@/lib/site";
import { btnPrimary } from "@/lib/ui";

export const metadata: Metadata = { title: "Contact" };

const label = "mb-3 font-display text-xl uppercase tracking-[0.2em] text-brand";

export default function Contact() {
  return (
    <>
      <Hero {...heroes.contact} eyebrow="Get in touch" />
      <Section width="wide">
        <div className="grid gap-12 lg:grid-cols-[3fr_2fr]">
          <div>
            <SectionTitle eyebrow="Bookings, events, questions" align="left">
              Say hello
            </SectionTitle>
            <ContactForm />
          </div>

          <aside className="h-fit space-y-8 rounded-sm bg-ink p-8 text-white">
            <div>
              <h2 className={label}>Opening hours</h2>
              <Hours className="max-w-64 text-lg" />
            </div>
            <div>
              <h2 className={label}>Find us</h2>
              <p className="flex items-center gap-3">
                <PinIcon size={22} className="shrink-0 text-brand" /> {site.address}
              </p>
              <a href={phoneHref} className="mt-2 flex items-center gap-3 hover:text-brand">
                <PhoneIcon size={22} className="shrink-0 text-brand" /> {site.phone}
              </a>
              <a href={mapsHref} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} mt-6 w-full`}>
                Get directions
              </a>
            </div>
            <div>
              <h2 className={label}>Follow along</h2>
              <Socials size={30} />
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
