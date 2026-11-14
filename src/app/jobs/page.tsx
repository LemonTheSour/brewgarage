import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/ui/hero";
import Section from "@/components/ui/section";
import JobCard from "@/components/jobs/job-card";
import jobs from "@/data/jobs.json";
import heroes from "@/data/page-heroes.json";
import { phoneHref, site } from "@/lib/site";
import { btnDark, btnOutlineDark } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Jobs",
  description: "Join the Brew Garage crew: bar staff, kitchen staff and duty manager roles.",
};

export default function JobsPage() {
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
              className={btnOutlineDark}
            >
              Send a message
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
