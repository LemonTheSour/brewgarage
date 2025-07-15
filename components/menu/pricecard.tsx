interface PriceCardProps {
  itemTitle: string;
  itemDescription: string;
  itemABV: string;
  priceSmall: string;
  priceLarge: string;
}

export default function Pricecard({ ...pricecard }: PriceCardProps) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-5 pb-2">
        <div className="col-span-5 font-bold">{pricecard.itemTitle}</div>
        <div className="col-span-3 text-xs">{pricecard.itemDescription}</div>
        <div className="col-span-1 text-center">{pricecard.priceSmall}</div>
        <div className="col-span-1 text-center">{pricecard.priceLarge}</div>
        <div className="col-span-5 text-sm font-bold">{pricecard.itemABV}</div>
      </div>
    </div>
  );
}
