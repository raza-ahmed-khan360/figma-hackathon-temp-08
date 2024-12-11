import type { NextPage } from 'next';
import Image from "next/image";
import Link from 'next/link';

const ProductCarousel: NextPage = () => {
  return (
    <div className="w-auto px-4 lg:px-20 py-8 text-left text-base text-gray-scales-black font-inter">
<div className='flex justify-between'>

    {/* Header */}
      <div className="text-[28px] font-bold uppercase tracking-[0.2em] text-black mb-6">
        Featured Products
      </div>

        {/* View all button */}
        <div className="flex justify-center mt-6">
        <Link href="/products" className="text-lg font-bold text-black flex items-center">
          View all
          <div className="ml-2 w-8 border-t-2 border-black"></div>
        </Link>
      </div>
</div>
      

      {/* Product Carousel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

        {/* Product 1 */}
        <div className="flex flex-col items-center">
          <Image
            className="object-cover"
            width={270}
            height={270}
            alt="Library Stool Chair"
            src="/singleProduct/Image (5).png"
          />
          <div className="mt-2 text-left flex justify-between w-[270px] items-center">
            <div className="capitalize">Library Stool Chair</div>
            <b className="text-sm text-black mt-1">$99</b>
          </div>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col items-center">
          <Image
            className="object-cover"
            width={270}
            height={270}
            alt="Library Stool Chair"
            src="/singleProduct/Image (9).png"
          />
          <div className="mt-2 text-left flex justify-between w-[270px] items-center">
            <div className="capitalize">Library Stool Chair</div>
            <b className="text-sm text-black mt-1">$99</b>
          </div>
        </div>

        {/* Product 3 */}
        <div className="flex flex-col items-center">
          <Image
            className="object-cover"
            width={270}
            height={270}
            alt="Library Stool Chair"
            src="/singleProduct/Image (7).png"
          />
          <div className="mt-2 text-left flex justify-between w-[270px] items-center">
            <div className="capitalize">Library Stool Chair</div>
            <b className="text-sm text-black mt-1">$99</b>
          </div>
        </div>

        {/* Product 4 */}
        <div className="flex flex-col items-center">
          <Image
            className="object-cover"
            width={270}
            height={270}
            alt="Library Stool Chair"
            src="/singleProduct/Image (4).png"
          />
          <div className="mt-2 text-left flex justify-between w-[270px] items-center">
            <div className="capitalize">Library Stool Chair</div>
            <b className="text-sm text-black mt-1">$99</b>
          </div>
        </div>

        {/* Product 5 */}
        <div className="flex flex-col items-center">
          <Image
            className="object-cover mt-2"
            width={270}
            height={270}
            alt="Library Stool Chair"
            src="/singleProduct/Image (8).png"
          />
          <div className="mt-2 text-left flex justify-between w-[270px] items-center">
            <div className="capitalize">Library Stool Chair</div>
            <b className="text-sm text-black mt-1">$99</b>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductCarousel;
