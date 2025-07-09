import Pricelist from "../../../components/pricelist";
import FoodList from "../../../components/foodlist";
import Snacklist from "../../../components/snacklist";
import TitleCard from "../../../components/titlecard";
import TitleCards from "@/data/titlecards.json";
import beer from "@/data/beer.json";
import redwine from "@/data/redwine.json";
import whitewine from "@/data/whitewine.json";
import food from "@/data/food.json";
import snacks from "@/data/snacks.json";

export default function Menu() {
  return (
    <div>
      <TitleCard {...TitleCards.menu} />

      <div className="flex flex-col items-center w-full pt-4">
        <h1 className="text-3xl font-bold">DRINKS</h1>
        <div className="flex justify-center">
          <Pricelist pricelist={beer} />
        </div>
        <div className="flex justify-center">
          <Pricelist pricelist={redwine} />
        </div>
        <div className="flex justify-center">
          <Pricelist pricelist={whitewine} />
        </div>
        <h1 className="text-3xl font-bold pt-4">FOOD</h1>
        <div className="flex justify-center">
          <FoodList foodlist={food} />
        </div>
        <div className="flex justify-center">
          <Snacklist snacklist={snacks} />
        </div>
      </div>
    </div>
  );
}
