import { MenuBlock } from "@/types/types";
import Pricecard from "./pricecard";

interface PricelistProps {
  pricelist: MenuBlock;
}

export default function Pricelist({ pricelist }: PricelistProps) {
  return (
    <div className="w-5/6">
      <div className="grid grid-cols-5 pt-4">
        <h2 className="col-start-1 col-span-3 text-2xl font-bold content-center">
          {pricelist.title}
        </h2>
        <h2 className="col-span-1 text-center text-sm font-bold">
          {pricelist.size1}
        </h2>
        <h2 className="col-span-1 text-center text-sm font-bold">
          {pricelist.size2}
        </h2>

        <div className="col-span-5 pt-4">
          {pricelist.itemList.map((item, index) => (
            <Pricecard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
