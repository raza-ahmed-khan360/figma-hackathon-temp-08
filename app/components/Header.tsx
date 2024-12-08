import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Header: NextPage = () => {
  return (
    <div className="w-full bg-gray-scales-off-white flex flex-col lg:flex-row items-center justify-between py-3 px-4 lg:px-20 box-border text-left text-[20px] lg:text-[26px] text-gray-scales-black font-inter">
      {/* Logo Section */}
      <Link href={"/"} className="flex no-underline flex-row items-center justify-start gap-2 mb-3 lg:mb-0">
        <Image
          className="w-8 lg:w-10 relative h-8 lg:h-10 overflow-hidden shrink-0"
          width={40}
          height={40}
          alt=""
          src="/Header/logo.svg"
        />
        <div className="relative text-gray-scales-black font-inter leading-[120%] font-medium">
          Comforty
        </div>
      </Link>

      {/* Cart Section */}
      <Link href={"/cart"} className="no-underline">
        <button className="flex flex-row font-inter cursor-pointer items-center justify-center text-center text-[10px] lg:text-[12px]">
          <div className="rounded-lg bg-gray-scales-white flex flex-row items-center justify-center py-2 lg:py-[11px] px-3 lg:px-4 gap-2 lg:gap-3">
            <div className="flex flex-row items-center justify-start gap-2">
              <Image
                className="w-5 lg:w-[22px] relative h-5 lg:h-[22px] overflow-hidden shrink-0"
                width={22}
                height={22}
                alt=""
                src="/Header/buy.svg"
              />
              <div className="relative leading-[110%] capitalize font-medium">
                Cart
              </div>
            </div>
            <div className="w-4 lg:w-5 relative h-4 lg:h-5 text-[8px] lg:text-[10px] text-gray-scales-white font-dm-sans">
              <div className="absolute top-[0px] left-[0px] rounded-full bg-accents-dark-accents w-full h-full" />
              <div className="absolute top-[2px] lg:top-[5px] left-[5px] lg:left-[7px] leading-[100%] capitalize font-medium">
                2
              </div>
            </div>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Header;
