import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const ProductCarousel: NextPage = () => {
  return (
    <div className="px-4 font-inter lg:px-20 py-8">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl lg:text-3xl font-semibold tracking-widest text-gray-900 uppercase">
          Featured Products
        </h2>
        <Link href="/products"
        className="text-lg font-medium text-gray-800 hover:underline flex items-center">
            View all
            <span className="ml-2 w-8 h-1 bg-gray-800"></span>
          
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[20px]">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Image
              className="rounded-md w-full h-auto object-cover"
              width={270}
              height={270}
              alt={product.name}
              src={product.image}
            />
            <div className="mt-4 w-full flex justify-between items-center">
              <span className="text-gray-700 capitalize font-medium">{product.name}</span>
              <b className="text-sm text-gray-900">${product.price}</b>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Sample Product Data
const products = [
  { name: 'Library Stool Chair', price: 99, image: '/singleProduct/Image (5).png' },
  { name: 'Library Stool Chair', price: 99, image: '/singleProduct/Image (9).png' },
  { name: 'Library Stool Chair', price: 99, image: '/singleProduct/Image (7).png' },
  { name: 'Library Stool Chair', price: 99, image: '/singleProduct/Image (4).png' },
  { name: 'Library Stool Chair', price: 99, image: '/singleProduct/Image (8).png' },
];

export default ProductCarousel;
