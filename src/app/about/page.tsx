import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="bg-[url('/images/wall.jpg')] md:bg-cover bg-no-repeat brightness-70 w-full h-screen relative"></div>
        <div className="text-3xl text-white font-bold absolute">ABOUT</div>
      </div>
      <div className="flex flex-col items-center justify-center pt-4">
        <div className="grid grid-cols-2 gap-2 justify-center items-center w-5/6 pt-6">
          <div className="col-span-2">
            <Image
              src="/images/tanks-pour.jpg"
              alt="Picture of beer being poured into tanks"
              height={600}
              width={300}
            />
          </div>
          <div className="col-span-2 font-bold">Who Are We?</div>
          <div className="col-span-2 text-xs">
            Im just as intrigued now, if not more, with the craft of beer
            brewing as I was at the age of 17 when the only way to get a frothy
            was to make your own. Back then, I went down to the local brew shop,
            bought my plastic fermenter, and away we went!  Many years of
            brewing, good times, hangovers, and later a graduate diploma of
            brewing, the beers have never tasted so good.
          </div>
          <div className="col-span-2">
            <Image
              src="/images/tanks-pour.jpg"
              alt="Picture of beer being poured into tanks"
              height={600}
              width={300}
            />
          </div>
          <div className="col-span-2 font-bold">What Are We?</div>
          <div className="col-span-2 text-xs">
            Passion, passion, passion. Cracking that perfect drop, perfecting
            the recipes and recording everything, it’s not science unless you
            write it down.  Some things like brewing require hands-on experience
            to get the touch right. I guess that’s why we call it craft brewing:
            it’s a craft and the whole process inspires me very much. 
          </div>

          <div className="col-span-2">
            <Image
              src="/images/tanks-pour.jpg"
              alt="Picture of beer being poured into tanks"
              height={600}
              width={300}
            />
          </div>
          <div className="col-span-2 font-bold">How Are We?</div>
          <div className="text-xs">Good thanks for asking</div>
        </div>
      </div>
    </div>
  );
}
