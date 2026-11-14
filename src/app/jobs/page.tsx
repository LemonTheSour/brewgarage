import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/hero";
import Section from "@/components/section";
import JobCard from "@/components/jobs/jobcard";
import jobs from "@/data/jobs.json";
import heroes from "@/data/titlecards.json";
import { phoneHref, site } from "@/lib/site";
import { btnDark } from "@/lib/ui";

export const metadata: Metadata = { title: "Jobs" };

export default function Jobs() {
  return (
    <>
      <Hero {...heroes.jobs} eyebrow="Join the crew" />
      <Section title="Now hiring" eyebrow="Work at the Garage" tone="paper">
        <div className="space-y-5">
          {jobs.map((job) => (
            <JobCard key={job.title} {...job} />
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-lg">Keen? Give us a call or drop us a message.</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={phoneHref} className={btnDark}>
              Call {site.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-sm border-2 border-ink px-6 font-display text-xl font-semibold uppercase tracking-wider transition-colors hover:bg-ink hover:text-white"
            >
              Send a message
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
