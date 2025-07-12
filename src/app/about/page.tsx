import TitleCard from "../../../components/titlecard";
import TitleCards from "@/data/titlecards.json";
import AboutCard from "../../../components/aboutcard";
import AboutData from "@/data/about.json";

export default function About() {
  return (
    <div>
      <TitleCard {...TitleCards.about} />

      <div className="flex flex-col items-center justify-center pt-4">
        <div className="text-3xl col-span-2 font-bold">ABOUT US</div>
        <div className="grid grid-cols-2 gap-2 justify-center items-center w-5/6 pt-6">
          <div className="col-span-2">
            <AboutCard {...AboutData.Who} />
          </div>
          <div className="col-span-2">
            <AboutCard {...AboutData.What} />
          </div>
          <div className="col-span-2">
            <AboutCard {...AboutData.How} />
          </div>
        </div>
      </div>
    </div>
  );
}
