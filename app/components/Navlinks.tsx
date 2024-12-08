import type { NextPage } from "next";
import Link from "next/link";

const NavLinks: NextPage = () => {
  return (
    <div className="w-auto relative shadow-[0px_1px_0px_#e1e3e5] bg-gray-scales-white h-auto flex flex-col lg:flex-row items-center justify-between py-3 px-4 lg:px-20 text-left text-sm text-gray-scales-dark-gray font-nav-links">
      {/* Navigation Links */}
      <div className="flex flex-col lg:flex-row items-center justify-start gap-4 lg:gap-8">
        <Link
          href="/"
          className="relative leading-[110%] capitalize no-underline hover:underline font-medium text-accents-dark-accents"
        >
          Home
        </Link>
        <Link
          href="products"
          className="relative leading-[110%] capitalize no-underline hover:underline font-medium text-accents-dark-accents"
        >
          Shop
        </Link>
        <Link
          href="single-product"
          className="relative leading-[110%] capitalize no-underline hover:underline font-medium text-accents-dark-accents"
        >
          Product
        </Link>
        <Link
          href="#"
          className="relative leading-[110%] capitalize no-underline hover:underline font-medium text-accents-dark-accents"
        >
          Pages
        </Link>
        <Link
          href="/about"
          className="relative leading-[110%] capitalize no-underline hover:underline font-medium text-accents-dark-accents"
        >
          About
        </Link>
      </div>

      {/* Contact Information */}
      <div className="mt-4 lg:mt-0 flex flex-col lg:flex-row items-center justify-start gap-2">
        <div className="relative leading-[110%] capitalize text-center lg:text-left">
          Contact:
        </div>
        <div className="relative leading-[110%] capitalize font-medium text-gray-scales-black text-center lg:text-left">
          (808) 555-0111
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
