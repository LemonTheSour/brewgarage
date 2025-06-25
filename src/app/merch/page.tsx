import MerchCard from "../../../components/merchcard";
import Carousel from "../../../components/carousel";
import merch from "@/data/merch.json";

export default function Merch() {
  return (
    <>
      <div className="bg-[url('/images/merch2.jpg')] md:bg-cover bg-no-repeat brightness-70 w-full h-screen absolute" />
      <div className="w-full h-screen flex justify-center items-center">
        <div className="text-3xl text-white font-bold z-99">MERCH</div>
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
    </>
  );
}
