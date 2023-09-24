const Faq = () => {
  return (
    <section className="relative mx-8 mt-12 mb-20 rounded-2xl bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-16 h-16 bg-[#EA0A2A] rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#EA0A2A] rounded-tr-full"></div>
      <article className="flex flex-col justify-center items-center gap-12 px-24 py-24 text-white relative z-10">
        <header className="w-3/4">
          <h3 className="text-center text-[#EA0A2A] font-bold text-3xl">
            Masih ada pertanyaan? Silahkan tanyakan pada kami.
          </h3>
        </header>
        <button className="py-2 w-52 rounded-full border-2 bg-white text-[#EA0A2A] border-[#EA0A2A] hover:text-white hover:bg-[#EA0A2A]">
          Hubungi Kami
        </button>
      </article>
    </section>
  );
};

export default Faq;
