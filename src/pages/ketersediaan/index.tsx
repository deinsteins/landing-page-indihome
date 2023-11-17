import { Wrapper } from "@/components/layout";
import Head from "next/head";
import Faq from "@/components/section/faq";
import Coverage from "@/components/section/coverage";
import Location from "@/components/section/location";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cek Ketersediaan Jaringan | Internet Wifi Bandung</title>
        <meta
          name="description"
          content=" Temukan kesempatan terbaik dengan layanan Internet Kami di daerah Anda. Cari tahu apakah layanan Internet Kami tersedia di lokasi Anda."
          key="desc"
        />
      </Head>
      <Wrapper footer>
        <div className="flex flex-col gap-4 mx-8 mt-12 rounded-2xl p-4 text-center">
          <h2 className="font-bold text-4xl">
            Cek Ketersediaan Jaringan kami di Area Anda Disini
          </h2>
          <p className="text-xl">
            Temukan kesempatan terbaik dengan layanan kami di daerah Anda. Kami
            mengundang Anda untuk memeriksa kecepatan dan kualitas layanan kami
            yang andal.Pilih kami untuk pengalaman koneksi terbaik. Cari tahu
            apakah layanan kami tersedia di lokasi Anda.
          </p>
        </div>
        <Coverage />
        <Location />
        <Faq />
      </Wrapper>
    </>
  );
}
