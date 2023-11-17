/* eslint-disable react/jsx-key */
import Card from "@/components/card";
import Link from "next/link";

interface Props {
  title: string;
  content: string;
}

const Package4: React.FC<Props> = ({ title, content }) => {
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
            title={"Paket Jitu - 3P"}
            price={"475.000"}
            subtitle={"Internet + TV 82 channels + Telepon "}
            description={
              "UseeTV (82 SD + 11 HD) sudah termasuk Iflix VIPS, Catchplay+ Hooq, music nonton tayangan berkualitas dimanapun, dan komunikasi dengan telepon rumah jernih bebas nelpon 100 menit lokal – interlokal"
            }
            details={[]}
          />
          <Card
            src="/assets/products/40mbps.png"
            alt="Paket Jitu"
            title={"Paket Jitu - 3P"}
            price={"495.000"}
            subtitle={"Internet + TV 82 channels + Telepon "}
            description={
              "UseeTV (82 SD + 11 HD) sudah termasuk Iflix VIPS, Catchplay+ Hooq, music nonton tayangan berkualitas dimanapun, dan komunikasi dengan telepon rumah jernih bebas nelpon 100 menit lokal – interlokal"
            }
            details={[]}
          />
          <Card
            src="/assets/products/50mbps.png"
            alt="Paket Jitu"
            title={"Paket Jitu - 3P"}
            price={"515.000"}
            subtitle={"Internet + TV 82 channels + Telepon "}
            description={
              "UseeTV (82 SD + 11 HD) sudah termasuk Iflix VIPS, Catchplay+ Hooq, music nonton tayangan berkualitas dimanapun, dan komunikasi dengan telepon rumah jernih bebas nelpon 100 menit lokal – interlokal"
            }
            details={[]}
          />
        </div>
      </article>
    </section>
  );
};

export default Package4;
