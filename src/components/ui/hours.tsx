import { site } from "@/lib/site";

export default function Hours({ className = "" }: { className?: string }) {
  return (
    <dl className={`grid grid-cols-[auto_auto] gap-x-6 gap-y-1 ${className}`}>
      {site.hours.map(({ day, time }) => (
        <div key={day} className="contents">
          <dt className="font-semibold">{day}</dt>
          <dd className="text-right tabular-nums">{time}</dd>
        </div>
      ))}
    </dl>
  );
}
