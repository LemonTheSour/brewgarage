interface HomeCardProps {
  title: string;
  background: string;
}

export default function HomeCard({ title, background }: HomeCardProps) {
  return (
    <div className="flex justify-center items-center">
      <div className={background}></div>
      <div className="text-3xl text-white font-bold absolute">{title}</div>
    </div>
  );
}
