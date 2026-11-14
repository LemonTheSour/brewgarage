import type { Metadata } from "next";
import Hero from "@/components/hero";
import Section from "@/components/section";
import JobCard from "@/components/jobs/jobcard";
import jobs from "@/data/jobs.json";
import heroes from "@/data/titlecards.json";
import { phoneHref, site } from "@/lib/site";

export const metadata: Metadata = { title: "Jobs" };

export default function Jobs() {
  return (
    <>
      <Hero {...heroes.jobs} priority />
      <Section>
        <p className="mb-6 text-center">
          <a href={phoneHref} className="font-bold hover:underline">
            {site.phone}
          </a>{" "}
          – INQUIRE
        </p>
        {jobs.map((job) => (
          <JobCard key={job.title} {...job} />
        ))}
      </Section>
    </>
  );
}
