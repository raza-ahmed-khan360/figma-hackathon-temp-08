import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Hero: NextPage = () => {
  return (
    <div className="w-full relative flex justify-center h-auto sm:h-[850px] overflow-hidden text-left text-[40px] sm:text-[60px] text-gray-scales-black font-inter">
      {/* Hero Background */}
      <div className="relative rounded-t-none rounded-br-none rounded-bl-[48px] bg-whitesmoke w-full sm:w-[1321px] h-auto sm:h-[850px] overflow-hidden mx-auto sm:mx-0">
        {/* Product Image */}
        <Image
          className="absolute top-[100px] sm:top-[115px] right-[20px] sm:left-[777px] w-[300px] sm:w-[434px] h-[400px] sm:h-[584px] object-cover"
          width={434}
          height={584}
          alt="Product Image"
          src="/homepage/Hero/Hero.png"
        />

        {/* Text Content */}
        <div className="absolute top-[150px] sm:top-[229px] left-4 sm:left-[70px] w-[90%] sm:w-[557px] h-auto">
          {/* Welcome Text */}
          <div className="text-[12px] sm:text-[14px] tracking-[0.12em] leading-[100%] uppercase">
            Welcome to chairy
          </div>

          {/* Main Heading */}
          <b className="mt-4 block text-[40px] sm:text-[60px] leading-[110%] capitalize">
            <p className="m-0">Best Furniture</p>
            <p className="m-0">Collection for your</p>
            <p className="m-0">interior.</p>
          </b>

          {/* CTA Button */}
          <Link href={'/products'} className="mt-8 no-underline cursor-pointer w-1/4 rounded-lg bg-accents-accents flex items-center justify-center py-3.5 px-6 gap-4 text-[14px] sm:text-[16px] text-gray-scales-white">
            <div className="relative leading-[110%] capitalize font-semibold">
              Shop Now
            </div>
            <Image
              className="w-5 h-5 sm:w-6 sm:h-6"
              width={24}
              height={24}
              alt="Right Arrow"
              src="/homepage/Hero/right-arrow.svg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
