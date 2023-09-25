import { Wrapper } from "@/components/layout";
import Hero from "@/hero";
import Head from "next/head";
import Product from "@/components/section/product";
import Location from "@/components/section/location";
import Faq from "@/components/section/faq";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>Solusi Terbaik: Jasa Pasang Wifi Indihome Bandung</title>
        <meta
          name="description"
          content="Pasang Wifi Indihome Bandung. Solusi cepat dan handal untuk koneksi internet terbaik. Hubungi kami segera untuk pemesanan."
          key="desc"
        />
        <meta
          name="keywords"
          content="internet cepat, internet murah, internet stabil, internet unlimited, internet murah bandung, wifi murah bandung, jasa pemasangan wifi indihome, paket internet, speedtest indihome, tv kabel, tv kabel hd, layanan teknisi wifi bandung, jasa perbaikan wifi bandung, instalasi indihome bandung, jasa pemasangan indihome bandung, harga pasang wifi indihome, harga indihome bandung, paket wifi indihome bandung"
          key="keywords"
        />
        <link rel="icon" href="/favicon.png" sizes="any" />
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
        <Hero />
        <Product />
        <Location />
        <Faq />
      </Wrapper>
    </>
  );
}
