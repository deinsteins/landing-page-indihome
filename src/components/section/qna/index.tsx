import ArticleLayout from "@/components/article";

const Qna = () => {
  return (
    <section className="relative mx-2 sm:mx-8 mt-12 mb-20 rounded-2xl bg-white overflow-hidden">
      <article className="flex flex-col justify-center items-center gap-12 px-4 py-8 text-white ">
        <header className="sm:w-3/4">
          <h3 className="text-center text-[#EA0A2A] font-bold text-3xl">
            Pertanyaan Yang Sering Ditanyakan
          </h3>
        </header>
        <div className="w-full flex flex-col flex-wrap sm:flex-row justify-center">
          <ArticleLayout
            title="Apa Itu Indihome?"
            content="Indihome adalah layanan digital yang menyediakan jaringan Internet Rumah, Telepon Rumah, dan TV Interaktif dengan beragam pilihan paket unlimited. Jaringan Indihome telah tersebar di seluruh wilayah Indonesia."
          />
          <ArticleLayout
            title="Apa itu myIndiHome?"
            content="myIndiHome adalah aplikasi yang digunakan untuk berlangganan Indihome, aktivasi OTT Video Streaming, berlangganan fitur tambahan, melaporkan gangguan layanan Indihome, cek tagihan bulanan, cek poin myIndiHome, dan info pemakaian."
          />
          <ArticleLayout
            title="Apa saja jenis paket Indihome yang tersedia?"
            content="Ada berbagai jenis paket Indihome, termasuk Paket Internet Cepat Unlimited, Paket JITU (Internet+Phone), dan Paket JITU (Internet+Phone+TV)."
            isLink={true}
            link="/paket-indihome-murah"
            linkTitle="Cek Selengkapnya Disini"
          />
          <ArticleLayout
            title="Apa keunggulan Paket Internet Cepat Unlimited Indihome?"
            content="Paket Internet Cepat Unlimited Indihome menawarkan akses internet hingga 300 Mbps untuk digunakan di rumah Anda."
          />
          <ArticleLayout
            title="IndiHome 100% Fiber Optic"
            content="Indihome menggunakan teknologi fiber optik untuk memberikan koneksi internet yang stabil dan cepat."
          />
          <ArticleLayout
            title="Sales Resmi Indihome"
            content="Kami adalah sales resmi yang ditunjuk oleh PT. Telkomsel Indonesia untuk memperkenalkan dan memasarkan produk-produk Indihome. Kami siap melayani pemasangan di rumah, kantor, dan ruko. Privasi Anda adalah prioritas kami, dan Anda dapat melakukan registrasi online dengan aman."
          />
          <ArticleLayout
            title="Registrasi Online"
            content="Registrasi online telah memudahkan masyarakat untuk mendaftar dan memasang Paket Indihome. Anda dapat melakukan pendaftaran melalui aplikasi myIndihome atau dengan bantuan sales resmi kami."
          />
          <ArticleLayout
            title="Teknologi Fiber Optik"
            content="Indihome memanfaatkan teknologi fiber optik untuk menghadirkan koneksi internet yang super cepat. Dengan saluran transmisi berupa serat kaca atau plastik yang lebih tipis dari sehelai rambut, Anda dapat menikmati internet tanpa gangguan."
          />
          <ArticleLayout
            title="Layanan Tambahan"
            content="Indihome juga menyediakan berbagai layanan tambahan seperti Wifi.id Seamless, Speed on Demand, Upgrade Speed, dan Minipack Channel TV untuk meningkatkan pengalaman Anda."
          />
          <ArticleLayout
            title="Syarat Berlangganan"
            content="Untuk berlangganan Indihome, pastikan Anda memenuhi syarat seperti ketersediaan jaringan fiber optik, kartu identitas E-KTP yang valid, email aktif, nomor handphone yang dapat dihubungi, dan pembayaran biaya pasang baru setelah instalasi."
          />
        </div>
      </article>
    </section>
  );
};

export default Qna;
