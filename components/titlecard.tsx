interface TitleCardProps {
  img: string;
  title: string;
}

export default function TitleCard({ img, title }: TitleCardProps) {
  const backgroundImage = img;

  return (
    <div className="flex justify-center items-center">
      <div
        className={`${backgroundImage} brightness-70 w-full h-screen relative`}
      ></div>
      <div className="text-3xl text-white font-bold absolute">{title}</div>
    </div>
  );
}
