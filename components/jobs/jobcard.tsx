interface JobCardProps {
  title: string;
  body: string;
}

export default function JobCard({ title, body }: JobCardProps) {
  return (
    <div className="w-5/6 pb-4">
      <div className="font-bold text-3xl">{title}</div>
      <div>{body}</div>
    </div>
  );
}
