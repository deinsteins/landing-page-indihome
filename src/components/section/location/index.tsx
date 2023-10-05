import Card from "@/components/card";

const Location = () => {
  return (
    <section className="mx-2 sm:mx-8 mt-12">
      <article className="flex flex-col gap-4 px-6 py-8">
        <header>
          <h3 className="text-center text-[#EA0A2A] font-bold text-3xl">
            Temukan Lokasi Kami di Peta
          </h3>
        </header>
        <div className="flex w-full justify-center mt-8 mb-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.522285291638!2d107.60622381059903!3d-6.947548593023666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e97559bd64ad%3A0xfbb1e50859c12471!2sSTO%20Telkom%20Tegalega!5e0!3m2!1sid!2sid!4v1695619040192!5m2!1sid!2sid"
            loading="lazy"
            className="w-full h-96 rounded"
          ></iframe>
        </div>
      </article>
    </section>
  );
};

export default Location;
