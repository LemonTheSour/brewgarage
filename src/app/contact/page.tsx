import type { Metadata } from "next";
import Hero from "@/components/hero";
import Section from "@/components/section";
import Socials from "@/components/socials";
import ContactForm from "@/components/contact/contactform";
import heroes from "@/data/titlecards.json";
import { phoneHref, site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <Hero {...heroes.contact} priority />
      <Section title="SAY HELLO">
        <ContactForm />
      </Section>

      <Section className="grid gap-10 pt-0 text-center sm:grid-cols-2">
        <div>
          <h2 className="mb-3 text-2xl font-bold">OPERATING HOURS</h2>
          <dl className="font-bold">
            {site.hours.map(({ day, time }) => (
              <div key={day}>
                <dt className="inline">{day} </dt>
                <dd className="inline">{time}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h2 className="mb-3 text-2xl font-bold">SOCIALS</h2>
          <Socials size={32} className="justify-center" />
          <a href={phoneHref} className="mt-3 block font-bold hover:underline">
            {site.phone}
          </a>
        </div>
      </Section>
    </>
  );
}
