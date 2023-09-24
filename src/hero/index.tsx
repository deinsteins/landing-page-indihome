import Image from "next/image";

const Hero = () => {
    return (
        <div className="flex flex-col gap-4 p-8 justify-center items-center bg-cover bg-center text-[#EA0A2A] font-semibold" style={{
            backgroundImage: `url('/assets/images/map.png')`
          }}>
            <Image src="/assets/images/router.png" alt="" width={500} height={300} />
            <header>
                <h2>Nikmati Layanan WIFI dengan jaringan yang optimal untuk hiburan anda serta keluarga bersama Indihome. </h2>
            </header>
            <button className="px-8 py-2 rounded-full border-2 bg-white border-[#EA0A2A] hover:text-white hover:bg-[#EA0A2A]">Pesan Sekarang</button>
        </div>
    )
}

export default Hero;