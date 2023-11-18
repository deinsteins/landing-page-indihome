import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="flex flex-col gap-4 p-8 justify-center items-center bg-cover bg-center text-[#EA0A2A] font-semibold"
      style={{
        backgroundImage: `url('/assets/images/map.png')`,
        backgroundSize: "cover",
      }}
    >
      <Image
        src="/assets/products/banner.png"
        alt=""
        width={600}
        height={300}
      />
      <header className="mx-8">
        <h2 className="text-center" style={{ fontSize: 28 }}>
          Dapatkan layanan profesional pasang internet wifi rumah di Bandung,
          Cianjur dan Sekitarnya. Ciptakan koneksi cepat dengan jaringan yang
          optimal untuk hiburan anda serta keluarga di rumah.
        </h2>
      </header>
      <a
        href="https://wa.me/6285211477581?text=Halo%20saya%20ingin%20pasang%20wifi%20Indihome"
        target="_blank"
        id="contactNow" // Add an id for identification
        className="px-8 py-2 rounded-full border-2 bg-white border-[#EA0A2A] hover:text-white hover:bg-[#EA0A2A]"
      >
        Hubungi Sekarang
      </a>
    </div>
  );
};

export default Hero;
