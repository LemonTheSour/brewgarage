import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Hero from "@/components/ui/hero";
import Section, { SectionTitle } from "@/components/ui/section";
import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import heroes from "@/data/page-heroes.json";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with Brew Garage for bookings, events and questions.",
  path: "/contact",
});

export default function ContactPage() {
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
          <ContactInfo />
        </div>
      </Section>
    </>
  );
}
