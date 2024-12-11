import type { NextPage } from 'next';
import Image from "next/image";

const Products:NextPage = () => {
    const products = [
        {
          image: "/About/sofa.png",
          name: "The Poplar suede sofa",
          price: "$99.00",
          width: 630,
          height: 375,
          className: "lg:col-span-2"
        },
        {
          image: "/About/Photo.png",
          name: "The Dandy chair",
          price: "$99.00",
          width: 305,
          height: 375
        },
        {
          image: "/About/Parent.png",
          name: "The Dandy chair",
          price: "$99.00",
          width: 305,
          height: 375
        }
      ];
  	return (
        <div className="w-auto font-inter text-left flex-col flex items-center justify-center px-4 py-12">
            <div className="container flex flex-row items-center justify-start py-0">
        <div className="text-[32px] mb-[48px] leading-[110%] text-left capitalize font-semibold">Our Products</div>
      </div>
        <div className="grid w-full h-auto grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-[20px]">
          {products.map((product, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-start justify-center gap-6 ${product.className || ''}`}
            >
              <Image 
                src={product.image} 
                alt={product.name}
                width={product.width}
                height={product.height}
                className="w-full h-auto object-cover"
              />
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="text-xl leading-[140%] text-dark-primary">{product.name}</div>
                <div className="text-lg leading-[150%]">{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
          );
};

export default Products;
