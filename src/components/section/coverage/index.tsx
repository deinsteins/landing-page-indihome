import { logEvent } from "google-analytics";

const Coverage = () => {
  const handleButtonClick = () => {
    // Track the button click event
    logEvent({
      action: "button_click",
      category: "CTA",
      label: "Coverage",
    });
    // Track the conversion event
    gtag("event", "conversion", {
      send_to: "", // Replace with your actual Google Ads conversion ID
      value: 1,
    });
  };

  return (
    <section className="mx-2 sm:mx-8 mt-12 mb-20 rounded-2xl bg-white overflow-hidden">
      <article className="flex flex-col justify-center items-center gap-12 px-6 py-8 sm:px-24 sm:py-24 text-white">
        <header className="sm:w-3/4">
          <h3 className="text-center text-[#EA0A2A] font-bold text-3xl">
            Mau Pasang Indihome? Silahkan Cek Ketersediaan Jaringan Indihome di
            Area Anda Disini
          </h3>
        </header>
        <p className="text-black text-center text-lg">
          Cek jaringan Indihome di lokasi Anda dengan cepat dan mudah dengan
          menghubungi tim penjualan resmi kami, dan pilihlah paket IndiHome
          sesuai kebutuhan Anda.
        </p>
        <a
          href="https://wa.me/6285211477581?text=Halo%20saya%20ingin%20cek%20ketersediaan%20jaringan%20indihome%20di%20area%20saya"
          className="px-4 py-2 text-center w-52 rounded-full border-2 bg-white text-[#EA0A2A] border-[#EA0A2A] hover:text-white hover:bg-[#EA0A2A]"
          onClick={handleButtonClick}
        >
          Cek Coverage Area
        </a>
      </article>
    </section>
  );
};

export default Coverage;
