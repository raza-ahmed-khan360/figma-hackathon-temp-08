import type { NextPage } from 'next';
import Image from "next/image";

const Product: NextPage = () => {
  return (
    <div className="w-auto px-4 lg:px-20 py-8 text-left text-xl text-gray-scales-white font-inter">
      <div className="flex flex-col lg:flex-row gap-8 relative">

        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            className="rounded-lg object-cover w-full h-auto max-w-[675px] max-h-[607px]"
            width={675}
            height={607}
            alt="Library Stool Chair"
            src="/singleProduct/Image (2).png"
          />
        </div>

        {/* Details Section */}
        <div className="flex-1 flex flex-col gap-6">
          
          {/* Product Title */}
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-scales-black capitalize">
            Library Stool Chair
          </h1>

          {/* Product Price */}
          <div className="text-lg max-w-max lg:text-xl font-semibold text-center bg-accents-accents rounded-full py-4 px-8 text-white">
            $20.00 USD
          </div>

           {/* Divider */}
           <div className="w-full h-[1px] mx-auto bg-gainsboro"/>

          {/* Product Description */}
          <p className="text-base lg:text-lg text-gray-scales-black opacity-60 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>


          {/* Add to Cart Button */}
          <button className="flex items-center text-[20px] cursor-pointer justify-center gap-3 bg-accents-accents text-white font-semibold px-6 py-3 rounded-lg w-max">
            <Image
              width={30}
              height={30}
              alt="Add to cart"
              src="/singleProduct/Buy 2.svg"
            />
            Add to Cart
          </button>
          </div>
      </div>
    </div>
  );
};

export default Product;
