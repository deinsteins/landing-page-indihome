/* eslint-disable react/jsx-key */
import Card from "@/components/card";
import Link from "next/link";

interface Props {
  title: string;
  content: string;
}

const Product: React.FC<Props> = ({ title, content }) => {
  return (
    <section
      id="package"
      className="mx-2 sm:mx-8 mt-12 rounded-2xl bg-[#EA0A2A]"
    >
      <article className="flex flex-col gap-4 px-6 py-8 text-white">
        <header>
          <h3 className="text-center font-bold text-3xl">{title}</h3>
        </header>
        <p className="text-center text-xl w-2/3 mx-auto">{content}</p>
        <div className="flex flex-wrap gap-8 justify-center mt-8 mb-16">
          <Card
            src="/assets/products/30mbps.png"
            alt="Paket Jitu"
            title={"Paket Jitu"}
            price={"280.000"}
            subtitle={"Paket Internet hanya Wifi"}
            description={
              "Paket 1P JITU indiHome adalah paket layanan indihome wifi only, tanpa telepon rumah, tanpa UseeTv."
            }
            details={[
              "kecepatan internet up to 30mbps",
              <span>
                biaya pemasangan <b>Rp.150.000 (sudah aktif)</b>
              </span>,
              <span>
                harga belum termasuk <b>PPN 11%</b>
              </span>,
            ]}
          />
          <Card
            src="/assets/products/40mbps.png"
            alt="Paket Jitu"
            title={"Paket Jitu"}
            price={"310.000"}
            subtitle={"Paket Internet hanya Wifi"}
            description={
              "Paket 1P JITU indiHome adalah paket layanan indihome wifi only, tanpa telepon rumah, tanpa UseeTv."
            }
            details={[
              "kecepatan internet up to 40mbps",
              <span>
                biaya pemasangan <b>Rp.150.000 (sudah aktif)</b>
              </span>,
              <span>
                harga belum termasuk <b>PPN 11%</b>
              </span>,
            ]}
          />
          <Card
            src="/assets/products/50mbps.png"
            alt="Paket Jitu"
            title={"Paket Jitu"}
            price={"350.000"}
            subtitle={"Paket Internet hanya Wifi"}
            description={
              "Paket 1P JITU indiHome adalah paket layanan indihome wifi only, tanpa telepon rumah, tanpa UseeTv."
            }
            details={[
              "kecepatan internet up to 50mbps",
              <span>
                biaya pemasangan <b>Rp.150.000 (sudah aktif)</b>
              </span>,
              <span>
                harga belum termasuk <b>PPN 11%</b>
              </span>,
            ]}
          />
          <Card
            src="/assets/products/30mbps.png"
            alt="Paket Jitu"
            title={"Paket Jitu 2P + TV"}
            price={"340.000"}
            subtitle={"Paket Internet  + Tv"}
            description={""}
            details={[
              "kecepatan internet up to 30mbps",
              "Paket Entry 82 Channel Tv",
              "Disney + Hotstar",
              "SEATODAY",
              <span>
                biaya pemasangan <b>Rp.250.000 (sudah aktif)</b>
              </span>,
              <span>
                harga belum termasuk <b>PPN 11%</b>
              </span>,
            ]}
          />
          <Card
            src="/assets/products/40mbps.png"
            alt="Paket Jitu"
            title={"Paket Jitu 2P"}
            price={"330.000"}
            subtitle={"Paket Internet  + Telepon"}
            description={""}
            details={[
              "kecepatan internet up to 40mbps",
              "bebas telepon 100 menit",
              <span>
                biaya pemasangan <b>Rp.250.000 (sudah aktif)</b>
              </span>,
              <span>
                harga belum termasuk <b>PPN 11%</b>
              </span>,
            ]}
          />
          <Card
            src="/assets/products/50mbps.png"
            alt="Paket Jitu 2P"
            title={"Paket Jitu 2P"}
            price={"360.000"}
            subtitle={"Paket Internet  + Telepon"}
            description={""}
            details={[
              "kecepatan internet up to 50mbps",
              "bebas telepon 100 menit",
              <span>
                biaya pemasangan <b>Rp.250.000 (sudah aktif)</b>
              </span>,
              <span>
                harga belum termasuk <b>PPN 11%</b>
              </span>,
            ]}
          />
        </div>
        <Link
          className="py-2 px-4 hover:px-6 rounded-full border-white mx-auto border-2 bg-[#EA0A2A] hover:text-white hover:bg-white hover:text-black"
          href="/paket-indihome-murah"
        >
          Lihat Semua Paket
        </Link>
      </article>
    </section>
  );
};

export default Product;
