import { Wrapper } from "@/components/layout";
import Head from "next/head";
import Faq from "@/components/section/faq";
import Coverage from "@/components/section/coverage";
import Package1 from "@/components/section/package1";
import Package2 from "@/components/section/package2";
import Package3 from "@/components/section/package3";
import Package4 from "@/components/section/package4";

export default function Home() {
  return (
    <>
      <Head>
        <title>Paket Indihome 2023 | Indihome Bandung</title>
        <meta
          name="description"
          content="Temukan paket internet Indihome murah terbaru di tahun 2023. Nikmati kecepatan tinggi tanpa menguras dompet Anda. Klik untuk penawaran terbaik!"
          key="desc"
        />
      </Head>
      <Wrapper footer>
        <div className="flex flex-col gap-4 mx-8 mt-12 rounded-2xl p-4 text-center">
          <h2 className="font-bold text-4xl">
            Pilihan Paket Indihome Internet Unlimited
          </h2>
          <p className="text-xl">
            Indihome memahami bahwa kebutuhan setiap keluarga berbeda. Oleh
            karena itu, kami menyediakan beragam paket yang dapat Anda sesuaikan
            dengan kebutuhan Anda. Berikut adalah beberapa pilihan paket yang
            kami tawarkan:
          </p>
        </div>
        <Package1
          title="Paket Indihome Jitu"
          content="Paket Layanan Internet"
        />
        <Package2
          title="Paket Indihome Jitu - 2P"
          content="Paket Layanan Internet + Telpon"
        />
        <Package3
          title="Paket Indihome Jitu - 2P"
          content="Paket Layanan Internet + SetBox Android TV"
        />
        <Package4
          title="Paket Indihome Jitu - 3P"
          content="Paket Layanan Internet + Telpon + SetBox Android"
        />
        <Coverage />
        <Faq />
      </Wrapper>
    </>
  );
}
