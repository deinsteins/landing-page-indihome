import Image, { StaticImageData } from "next/image";
import { ReactNode, useState } from "react";
interface Props {
  src: StaticImageData | string;
  alt: string;
  title: string;
  price: string;
  subtitle: string;
  description: string;
  details: ReactNode[];
}

const Card: React.FC<Props> = ({
  src,
  alt,
  title,
  price,
  subtitle,
  description,
  details,
}) => {
  return (
    <>
      <div className="flex flex-col text-black gap-4 px-6 py-3 rounded-2xl bg-white max-w-[350px] justify-center text-center items-center">
        <Image src={src} alt={alt} width={200} height={200} />
        <h3 className="font-bold text-2xl">{title}</h3>
        <h4 className="font-bold text-xl text-[#302f2f]">{`Rp ${price} /Perbulan`}</h4>
        <h5 className="font-bold">{subtitle}</h5>
        <p>{description}</p>
        {details.map((item, index) => {
          return (
            <ul
              className="w-full text-left px-8"
              key={index}
              style={{ listStyleType: "disc" }}
            >
              <li>{item}</li>
            </ul>
          );
        })}
        <a
          href={`https://wa.me/6285211477581?text=Halo%20saya%20ingin%20berlangganan%20wifi%20Indihome%20${title}%20Harga%20Rp ${price}/Bulan`}
          target="_blank"
          className="w-full px-4 py-2 text-center rounded-full bg-white text-black border-2 border-[#EA0A2A] hover:bg-[#EA0A2A] hover:text-white"
        >
          Pilih Paket
        </a>
      </div>
    </>
  );
};

export default Card;
