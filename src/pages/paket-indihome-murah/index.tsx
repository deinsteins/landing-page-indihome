import { Wrapper } from "@/components/layout";
import Head from "next/head";
import Product from "@/components/section/product";
import Faq from "@/components/section/faq";
import Coverage from "@/components/section/coverage";

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
        <Product
          title="Paket Indihome Internet Unlimited"
          content="Indihome memahami bahwa kebutuhan setiap keluarga berbeda. Oleh karena itu, kami menyediakan beragam paket yang dapat Anda sesuaikan dengan kebutuhan Anda. Berikut adalah beberapa pilihan paket yang kami tawarkan:"
        />
        <Coverage />
        <Faq />
      </Wrapper>
    </>
  );
}
