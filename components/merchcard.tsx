import { MerchCardTypes } from "@/types/types";
import Image from "next/image";

export default function MerchCard({ title, price }: MerchCardTypes) {
  return (
    <div className="p-2">
      <Image
        src="/images/Great_merch.jpg"
        alt={"Merch Product"}
        width={"200"}
        height={"400"}
      />
      <div className="font-bold">{title}</div>
      <div>{price}</div>
    </div>
  );
}
