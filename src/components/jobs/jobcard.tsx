export default function JobCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="mb-6">
      <h3 className="mb-1 text-2xl font-bold">{title}</h3>
      <p>{body}</p>
    </article>
  );
}
