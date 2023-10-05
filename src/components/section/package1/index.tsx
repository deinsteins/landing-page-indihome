/* eslint-disable react/jsx-key */
import Card from "@/components/card";
import Link from "next/link";

interface Props {
  title: string;
  content: string;
}

const Package1: React.FC<Props> = ({ title, content }) => {
  return (
    <section id="package" className="mx-8 mt-12 rounded-2xl bg-[#EA0A2A]">
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
        </div>
      </article>
    </section>
  );
};

export default Package1;
