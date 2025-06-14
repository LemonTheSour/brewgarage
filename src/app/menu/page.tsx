import Pricelist from "../../../components/pricelist";
import beer from "@/data/beer.json";
import redwine from "@/data/redwine.json";
import whitewine from "@/data/whitewine.json";

export default function Menu() {
  return (
    <div className="h-screen">
      <div className="bg-[url('../../public/images/nibbles.jpg')] bg-contain md:bg-cover bg-no-repeat brightness-70 w-full h-3/4"></div>
      <div className="flex flex-col items-center w-full">
        <h1 className="text-3xl font-bold pt-4">DRINKS</h1>
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
      </div>
    </div>
  );
}
