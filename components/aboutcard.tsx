import Image from "next/image";

interface AboutCardProps {
  img: string;
  imgAlt: string;
  title: string;
  body: string;
}

export default function AboutCard({
  img,
  imgAlt,
  title,
  body,
}: AboutCardProps) {
  return (
    <div className="rounded-md shadow-md mb-6">
      <Image src={img} alt={imgAlt} width={2000} height={100} />
      <div className="font-bold text-3xl p-2">{title}</div>
      <div className="p-2">{body}</div>
    </div>
  );
}
