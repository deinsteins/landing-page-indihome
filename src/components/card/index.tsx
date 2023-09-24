import Image, { StaticImageData } from "next/image";

interface Props {
  src: StaticImageData | string;
  alt: string;
}

const Card: React.FC<Props> = ({ src, alt }) => {
  return (
    <div className="flex flex-col gap-4 px-3 py-3 rounded-2xl bg-white">
      <Image src={src} alt={alt} width={280} height={280} />
      <a
        href="https://wa.me/6285211477581?text=Halo%20saya%20ingin%20bertanya%20terkait%20paket%20wifi%20Indihome"
        className="w-full px-4 py-1 text-center rounded-full text-white bg-[#EA0A2A] hover:text-lg"
      >
        Tanya Paket
      </a>
    </div>
  );
};

export default Card;
