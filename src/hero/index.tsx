import Image from "next/image";
import { useEffect } from "react";
import { logEvent } from "../../google-analytics";

const Hero = () => {
  const handleButtonClick = () => {
    // Track the button click event
    gtag("event", "button_click", {
      event_category: "CTA",
      event_label: "Hubungi_Sekarang",
    });
    // Track the conversion event
    gtag("event", "conversion", {
      send_to: "AW-11363180473/qJV7CNiv8usYELm_saoq", // Replace with your actual Google Ads conversion ID
      value: 1,
    });
  };

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
          Dapatkan layanan profesional pasang wifi Indihome di Bandung, Cianjur
          dan Sekitarnya. Ciptakan koneksi cepat dengan jaringan yang optimal
          untuk hiburan anda serta keluarga di rumah.
        </h2>
      </header>
      <a
        href="https://wa.me/6285211477581?text=Halo%20saya%20ingin%20pasang%20wifi%20Indihome"
        target="_blank"
        id="contactNow" // Add an id for identification
        onClick={handleButtonClick}
        className="px-8 py-2 rounded-full border-2 bg-white border-[#EA0A2A] hover:text-white hover:bg-[#EA0A2A]"
      >
        Hubungi Sekarang
      </a>
    </div>
  );
};

export default Hero;
