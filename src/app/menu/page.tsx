import Pricelist from "../../../components/pricelist";
import beer from "@/data/beer.json";

export default function Menu() {
  return (
    <div className="h-screen">
      <div className="bg-[url('../../public/images/nibbles.jpg')] bg-contain md:bg-cover bg-no-repeat brightness-70 w-full h-3/4"></div>
      <div className="flex flex-col items-center w-full">
        <h1 className="text-3xl font-bold pt-4">DRINKS</h1>
        <div className="flex justify-center w-full">
          <Pricelist pricelist={beer} />
        </div>
      </div>
    </div>
  );
}
