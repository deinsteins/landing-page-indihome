import Card from "@/components/card";

const Product = () => {
  return (
    <section id="package" className="mx-8 mt-12 rounded-2xl bg-[#EA0A2A]">
      <article className="flex flex-col gap-4 px-6 py-8 text-white">
        <header>
          <h3 className="text-center font-bold text-3xl">Daftar Paket</h3>
        </header>
        <p className="text-center text-xl w-2/3 mx-auto">
          Kami menyediakan paket sesuai kebutuhan anda yang bisa dinikmati
          setiap saat.
        </p>
        <div className="flex flex-wrap gap-8 justify-center mt-8 mb-16">
          <Card src="/assets/products/package-1.png" alt="Paket 1" />
          <Card src="/assets/products/package-2.png" alt="Paket 2" />
          <Card src="/assets/products/package-3.png" alt="Paket 3" />
          <Card src="/assets/products/package-4.png" alt="Paket 4" />
          <Card src="/assets/products/package-5.png" alt="Paket 5" />
        </div>
      </article>
    </section>
  );
};

export default Product;
