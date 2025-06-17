import { Snacks } from "@/types/types";

interface SnacklistProps {
  snacklist: Snacks;
}

export default function Snacklist({ snacklist }: SnacklistProps) {
  return (
    <div className="w-5/6 pb-6">
      <div className="font-bold text-xl">{snacklist.title}</div>
      <div className="text-xs pb-2">{snacklist.description}</div>
      {snacklist.snacks.map((item, index) => (
        <div key={index} className="font-bold text-sm pt-2">
          {item}
        </div>
      ))}
    </div>
  );
}
