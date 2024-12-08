import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const TopBar: NextPage = () => {
  return (
    <div className="w-auto relative bg-gray-scales-black flex flex-col lg:flex-row items-center justify-between py-2 lg:py-3.5 px-4 lg:px-20 box-border text-center lg:text-left text-xs lg:text-sm text-gray-scales-white font-inter">
      {/* Free Shipping Section */}
      <div className="flex flex-row items-center justify-center lg:justify-start gap-2 opacity-70 mb-2 lg:mb-0">
        <Image
          className="w-3 h-3 lg:w-4 lg:h-4 overflow-hidden shrink-0"
          width={16}
          height={16}
          alt="check"
          src="/Header/check.svg"
        />
        <div className="relative leading-[110%] capitalize">
          Free shipping on all orders over $50
        </div>
      </div>

      {/* Options Section */}
      <div className="flex flex-wrap flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6 opacity-70 text-center">
        {/* Language Selector */}
        <div className="flex flex-row items-center justify-center lg:justify-start gap-1.5">
          <div className="relative leading-[130%] cursor-pointer hover:underline">
            Eng
          </div>
          <Image
            className="w-2 h-1 lg:w-[7px] lg:h-[3.5px]"
            width={7}
            height={4}
            alt="dropdown"
            src="/Header/dropdown.svg"
          />
        </div>

      

        {/* FAQ Link */}
        <Link
          href={"/faq"}
          className="relative no-underline text-white hover:underline leading-[130%]"
        >
          Faqs
        </Link>

        {/* Need Help Section */}
        <Link href={"/contact"} className="flex text-white no-underline flex-row items-center justify-center gap-1.5">
          <Image
            className="w-3 h-3 lg:w-4 lg:h-4 overflow-hidden shrink-0 opacity-70"
            width={16}
            height={16}
            alt="alert"
            src="/Header/alert.svg"
          />
          <div className="relative leading-[130%] cursor-pointer hover:underline">
            Need Help
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
