import { MerchCardTypes } from "@/types/types";
import Image from "next/image";

export default function MerchCard({ title, price }: MerchCardTypes) {
  return (
    // For some reason this is stopping the image from sizing itself, come back to this
    <div className="flex flex-col p-2 shadow-md mx-2">
      <Image
        src="/images/Great_merch.jpg"
        alt={"Merch Product"}
        width={125}
        height={100}
      />

      <div className="font-bold">{title}</div>
      <div>{price}</div>
    </div>
  );
}
