import Card from "@/components/card";

const Location = () => {
  return (
    <section className="mx-8 mt-12">
      <article className="flex flex-col gap-4 px-6 py-8">
        <header>
          <h3 className="text-center text-[#EA0A2A] font-bold text-3xl">
            Temukan Lokasi Kami di Peta
          </h3>
        </header>
        <div className="flex w-full justify-center mt-8 mb-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507309.2904624236!2d107.03116211483743!3d-6.602876467645677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e90c88672e71%3A0x447a4be4ab8e733!2sOfficial%20Indihome%20Bandung!5e0!3m2!1sid!2sid!4v1695539361132!5m2!1sid!2sid"
            className="w-full h-96 rounded"
            loading="lazy"
          ></iframe>
        </div>
      </article>
    </section>
  );
};

export default Location;
