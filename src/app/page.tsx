import { Metadata } from "next";
import HomeCard from "../../components/homecard";
import HomeCardTitles from "@/data/home.json";

export const metadata: Metadata = {
  title: "Brew Garage",
  description: "Brew Garage Homepage",
};

export default function Home() {
  return (
    <div className="w-full">
      <HomeCard {...HomeCardTitles.Menu} />
      <HomeCard {...HomeCardTitles.Item2} />
      <HomeCard {...HomeCardTitles.Item3} />
      <HomeCard {...HomeCardTitles.Item4} />
    </div>
  );
}
