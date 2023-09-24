import Image, { StaticImageData } from "next/image";

interface Props {
  src: StaticImageData | string;
  alt: string;
}

const Card: React.FC<Props> = ({ src, alt }) => {
  return (
    <div className="flex flex-col gap-4 px-3 py-3 rounded-2xl bg-white">
      <Image src={src} alt={alt} width={280} height={280} />
      <button className="w-full py-1 rounded-full text-white bg-[#EA0A2A] hover:bg-red-600">
        Tanya Paket
      </button>
    </div>
  );
};

export default Card;
