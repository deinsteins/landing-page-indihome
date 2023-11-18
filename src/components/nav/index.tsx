import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const mobileMenuIcon = isMobileMenuOpen ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );

  return (
    <nav
      className={`sticky top-0 z-10 flex justify-between gap-4 p-4 md:p-8 font-medium text-lg ${navbarClass}`}
    >
      <Link href="/">
        <Image src="/logo/brand.png" alt="Logo" width={80} height={40} />
      </Link>

      <div className="md:flex gap-12 items-center text-[#787878]">
        <div className="md:flex hidden">
          <Link
            className="py-2 px-4 hover:px-6 rounded-full hover:text-white hover:bg-[#EA0A2A]"
            href="/"
          >
            Home
          </Link>
          <Link
            className="py-2 px-4 hover:px-6 rounded-full hover:text-white hover:bg-[#EA0A2A]"
            href="/paket-wifi-murah"
          >
            Daftar Paket
          </Link>
          <Link
            className="py-2 px-4 hover:px-6 rounded-full hover:text-white hover:bg-[#EA0A2A]"
            href="/ketersediaan"
          >
            Cek Coverage
          </Link>
          <Link
            className="py-2 px-4 hover:px-6 rounded-full hover:text-white hover:bg-[#EA0A2A]"
            href="https://wa.me/6285211477581"
            target="_blank"
          >
            Hubungi Kami
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-[#787878] hover:text-[#EA0A2A]"
            onClick={toggleMobileMenu}
          >
            {mobileMenuIcon}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full flex flex-col absolute top-16 right-0 text-center bg-white text-[#787878] rounded shadow-lg p-4 transition-transform ease-in-out duration-300">
          <Link
            className="py-2 px-4 hover:px-6 rounded-full hover:text-[#EA0A2A]"
            href="/"
          >
            Home
          </Link>
          <Link
            className="py-2 px-4 hover:px-6 rounded-full hover:text-[#EA0A2A]"
            href="/paket-wifi-murah"
          >
            Daftar Paket
          </Link>
          <Link
            className="py-2 px-4 hover:px-6 rounded-full hover:text-[#EA0A2A]"
            href="/ketersediaan"
          >
            Cek Coverage
          </Link>
          <Link
            className="py-2 px-4 hover:px-6 rounded-full hover:text-[#EA0A2A]"
            href="https://wa.me/6285211477581"
            target="_blank"
          >
            Hubungi Kami
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
