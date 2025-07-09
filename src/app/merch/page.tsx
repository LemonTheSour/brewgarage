import MerchCard from "../../../components/merchcard";
import Carousel from "../../../components/carousel";
import merch from "@/data/merch.json";

export default function Merch() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-[url('/images/merch2.jpg')] bg-center md:bg-cover bg-no-repeat brightness-70 w-full h-screen relative" />
        <div className="text-3xl text-white font-bold z-99 absolute">MERCH</div>
      </div>

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
