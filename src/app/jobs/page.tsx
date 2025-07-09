import TitleCard from "../../../components/titlecard";
import TitleCards from "@/data/titlecards.json";

export default function Jobs() {
  return (
    <div>
      <TitleCard {...TitleCards.jobs} />

      <div className="text-black text-4xl">Test</div>
    </div>
  );
}
