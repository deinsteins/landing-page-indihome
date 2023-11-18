import { Wrapper } from "@/components/layout";
import Hero from "@/hero";
import Head from "next/head";
import Product from "@/components/section/product";
import Faq from "@/components/section/faq";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Internet Rumah Bandung | Pasang Internet Wifi Rumah Bandung, Cimahi,
          Cianjur dan Sekitarnya
        </title>
        <meta
          name="description"
          content="Pasang Internet WIfi di Rumah Bandung, Cimahi, Cianjur dan Sekitarnya. Solusi cepat dan handal untuk koneksi internet terbaik. Hubungi kami segera untuk pemesanan."
          key="desc"
        />
      </Head>
      <Wrapper footer>
        <Script src="https://www.googletagmanager.com/gtag/js?id=" />
        <Script id="google-ads">{`gtag('config', 'AW-11415000324');`}</Script>
        <Hero />
        <Product
          title="Paket 1P & 2P Internet + Telpon"
          content="Kami menyediakan paket sesuai kebutuhan anda yang bisa dinikmati
          setiap saat."
        />
        <Faq />
      </Wrapper>
    </>
  );
}
