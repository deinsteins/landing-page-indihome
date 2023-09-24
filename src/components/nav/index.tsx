import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between gap-4 p-8 font-medium text-lg">
      <Image
        src="/logo/indihome-logo.png"
        alt="Indihome"
        width={125}
        height={40}
      />
      <div className="flex gap-12 items-center text-[#787878]">
        <Link
          className="py-2 px-4 hover:px-6 rounded-full hover:text-white hover:bg-[#EA0A2A]"
          href="#"
        >
          Home
        </Link>
        <Link
          className="py-2 px-4 hover:px-6 rounded-full hover:text-white hover:bg-[#EA0A2A]"
          href="#package"
        >
          Daftar Paket
        </Link>
        <Link
          className="py-2 px-4 hover:px-6 rounded-full hover:text-white hover:bg-[#EA0A2A]"
          href="#"
        >
          Hubungi Kami
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
