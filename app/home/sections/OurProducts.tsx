import type { NextPage } from 'next';
import Image from "next/image";
import CardGrid from '../../components/CardProducts';



const OurProducts:NextPage = () => {
  	return (
        <div className="w-full overflow-hidden text-left text-[32px] text-gray-scales-black font-sale-price flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-semibold leading-[110%] capitalize my-4">Our Products</h2>
        <div className="w-full max-w-3xl h-8 mb-6"></div>
        <CardGrid />
      </div>
    )
};

export default OurProducts;
