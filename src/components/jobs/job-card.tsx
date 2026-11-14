import type { JobListing } from "@/types/content";

export default function JobCard({ title, body }: JobListing) {
  return (
    <article className="rounded-sm border-l-4 border-brand bg-white p-6 shadow-sm md:p-8">
      <h3 className="font-display text-4xl leading-none font-bold uppercase">{title}</h3>
      <p className="mt-3 leading-relaxed text-ink/80">{body}</p>
    </article>
  );
}
