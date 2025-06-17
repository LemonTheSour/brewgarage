import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brew Garage",
  description: "Brew Garage Homepage",
};

export default function Home() {
  return (
    <div className="w-full">
      <div className="w-full h-125 bg-[url('/images/Brew-Garage.png')] bg-center bg-cover bg-no-repeat brightness-80 md:h-screen"></div>
      <div className="w-full h-125 bg-[url('/images/home_brew.jpg')] bg-center bg-cover bg-no-repeat brightness-80 md:h-screen"></div>
      <div className="w-full h-125 bg-[url('/images/pizza.jpg')] bg-center bg-cover bg-no-repeat brightness-80  md:h-screen"></div>
      <div className="w-full h-125 bg-[url('/images/Great_merch.jpg')] bg-center bg-cover bg-no-repeat brightness-80 md:h-screen"></div>
    </div>
  );
}
