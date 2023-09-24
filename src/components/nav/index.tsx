import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = isScrolled ? "bg-white shadow-md py-4" : "";

  return (
    <nav
      className={`sticky top-0 z-10 flex justify-between gap-4 p-8 font-medium text-lg ${navbarClass}`}
    >
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
          href="https://wa.me/6285211477581"
          target="_blank"
        >
          Hubungi Kami
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
