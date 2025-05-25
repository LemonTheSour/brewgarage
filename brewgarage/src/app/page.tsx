import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brew Garage",
  description: "Brew Garage Homepage",
};

export default function Home() {
  return (
    <div className="w-full absolute z-1">
      <div className="bg-[url('/images/Brew-Garage.png')] bg-contain md:bg-cover bg-no-repeat brightness-70 w-full h-screen"></div>
    </div>
  );
}
