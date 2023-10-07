import { Wrapper } from "@/components/layout";
import Hero from "@/hero";
import Head from "next/head";
import Product from "@/components/section/product";
import Faq from "@/components/section/faq";
import Script from "next/script";
import Qna from "@/components/section/qna";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Solusi Terbaik: Jasa Pasang Wifi Indihome Bandung, Cimahi, Cianjur dan
          Sekitarnya
        </title>
        <meta
          name="description"
          content="Pasang Wifi Indihome  Bandung, Cimahi, Cianjur dan Sekitarnya. Solusi cepat dan handal untuk koneksi internet terbaik. Hubungi kami segera untuk pemesanan."
          key="desc"
        />
        <meta
          name="keywords"
          content="internet cepat, internet murah, internet stabil, internet unlimited, internet murah bandung, wifi murah bandung, jasa pemasangan wifi indihome, paket internet, speedtest indihome, tv kabel, tv kabel hd, layanan teknisi wifi bandung, jasa perbaikan wifi bandung, instalasi indihome bandung, jasa pemasangan indihome bandung, harga pasang wifi indihome, harga indihome bandung, paket wifi indihome bandung"
          key="keywords"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Wrapper footer>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-S03EQK17R8" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-S03EQK17R8');
            `}
        </Script>

        <Script id="google-ads">{`gtag('config', 'AW-11363180473');`}</Script>

        <Hero />
        <Product
          title="Paket 1P & 2P Internet + Telpon"
          content="Kami menyediakan paket sesuai kebutuhan anda yang bisa dinikmati
          setiap saat."
        />
        <Qna />
        <Faq />
      </Wrapper>
    </>
  );
}
