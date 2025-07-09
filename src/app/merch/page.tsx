import MerchCard from "../../../components/merchcard";
import Carousel from "../../../components/carousel";
import merch from "@/data/merch.json";
import TitleCard from "../../../components/titlecard";
import TitleCards from "@/data/titlecards.json";

export default function Merch() {
  return (
    <>
      <TitleCard {...TitleCards.merch} />

      <div className="flex flex-col items-center justify-center pt-4">
        <div className="font-bold text-3xl">FAVOURITES</div>
        <Carousel>
          {merch.FAVOURITES.map((card, index) => (
            // <img key={index} src="images/Great_merch.jpg" />
            <MerchCard key={index} {...card} />
          ))}
        </Carousel>
      </div>

      <div className="grid grid-cols-3 items-center justify-center pt-4 mx-2">
        <div className="col-span-3 justify-self-center font-bold text-3xl">
          SHIRTS
        </div>
        {merch.FAVOURITES.map((card, index) => (
          // <img key={index} src="images/Great_merch.jpg" />
          <MerchCard key={index} {...card} />
        ))}
      </div>
    </>
  );
}
