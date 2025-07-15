import Link from "next/link";
import Image from "next/image";

interface HomeCardProps {
  title: string;
  background: string;
  link: string;
}

export default function HomeCard({ title, background, link }: HomeCardProps) {
  return (
    <div className="flex justify-center items-center">
      <div className={background} />
      <div className="flex flex-col justify-center items-center absolute">
        <div className="text-3xl text-white font-bold">{title}</div>
        {title != "Brew Garage" ? (
          <Link href={link}>
            <button className="flex justify-center items-center w-40 h-10 bg-black text-white text-center font-bold rounded-md mt-4">
              Find Out
            </button>
          </Link>
        ) : (
          <div className="pt-4">
            <Image
              src="/images/BrewGarage_Logo.png"
              alt={"Test"}
              width={100}
              height={100}
            />
          </div>
        )}
      </div>
    </div>
  );
}
