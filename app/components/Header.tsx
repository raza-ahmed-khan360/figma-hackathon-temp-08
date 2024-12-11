import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const Header: NextPage<{ onToggleMenu: () => void }> = ({ onToggleMenu }) => {
  return (
    <header className="w-auto font-inter flex justify-between items-center bg-gray-scales-off-white py-3 px-4 lg:px-20">
      <div className="container mx-auto flex items-center justify-between lg:justify-between px-0">
        {/* Logo and Toggle Menu */}
        <div className="flex items-center gap-4">
          {/* Logo Section */}
          <Link 
            href="/" 
            className="flex items-center no-underline gap-2"
          >
            <Image
              className="w-8 lg:w-10 h-8 lg:h-10"
              width={40}
              height={40}
              alt="Comforty Logo"
              src="/Header/logo.svg"
            />
            <span className="text-lg lg:text-xl text-gray-scales-black font-medium">
              Comforty
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex items-center justify-center w-8 h-8 text-2xl text-gray-scales-black"
            onClick={onToggleMenu}
            aria-label="Toggle Menu"
          >
            <FiMenu />
          </button>
        </div>

        {/* Cart Section */}
        <Link 
          href="/cart" 
          className="flex items-center text-black gap-2 no-underline"
        >
          <div className="relative flex items-center rounded-lg bg-gray-scales-white py-2 px-3 lg:py-[11px] lg:px-4 gap-2 lg:gap-3 shadow-md hover:scale-105 transition-transform">
            <Image
              className="w-5 lg:w-[22px] h-5 lg:h-[22px]"
              width={22}
              height={22}
              alt="Cart"
              src="/Header/buy.svg"
            />
            <span className="text-xs lg:text-sm font-medium capitalize">
              Cart
            </span>
            <div className="relative w-4 lg:w-5 h-4 lg:h-5">
              <div className="absolute inset-0 rounded-full bg-accents-dark-accents" />
              <span className="absolute inset-0 flex items-center justify-center text-[8px] lg:text-[10px] text-gray-scales-white font-medium">
                2
              </span>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
