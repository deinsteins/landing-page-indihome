import { Wrapper } from "@/components/layout";
import Head from "next/head";
import Faq from "@/components/section/faq";
import Coverage from "@/components/section/coverage";
import Location from "@/components/section/location";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cek Ketersediaan Jaringan Indihome | Indihome Bandung</title>
        <meta
          name="description"
          content=" Temukan kesempatan terbaik dengan layanan IndiHome di daerah Anda. Cari tahu apakah layanan IndiHome tersedia di lokasi Anda."
          key="desc"
        />
      </Head>
      <Wrapper footer>
        <div className="flex flex-col gap-4 mx-8 mt-12 rounded-2xl p-4 text-center">
          <h2 className="font-bold text-4xl">
            Cek Ketersediaan Jaringan Indihome di Area Anda Disini
          </h2>
          <p className="text-xl">
            Temukan kesempatan terbaik dengan layanan IndiHome di daerah Anda.
            Kami mengundang Anda untuk memeriksa kecepatan dan kualitas layanan
            kami yang andal.Pilih IndiHome untuk pengalaman koneksi terbaik.
            Cari tahu apakah layanan IndiHome tersedia di lokasi Anda.
          </p>
        </div>
        <Coverage />
        <Location />
        <Faq />
      </Wrapper>
    </>
  );
}
