import React from 'react'
import CardFeatured from '../components/CardFeatured'
import Image from 'next/image'

const Products = () => {
  return (
    <div className="w-auto h-auto py-12 flex flex-col items-center justify-center gap-[49px] overflow-hidden text-base text-gray-scales-black font-sale-price">
      <div className="container flex flex-row items-center justify-start py-0">
        <div className="relative text-[32px] leading-[110%] capitalize font-semibold">All Products</div>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
       <CardFeatured
          imageSrc="/allProducts/Image.png"
          title="Library Stool Chair"
          price="$20"
          oldPrice="$39"
          badgeText="New"
          badgeColor="bg-status-success"
        />
        <CardFeatured
          imageSrc="/allProducts/Image (2).png"
          title="Library Stool Chair"
          price="$20"
          oldPrice="$39"
          badgeText="Sales"
          badgeColor="bg-status-warning"
        />
        <CardFeatured
          imageSrc="/allProducts/Image (4).png"
          title="Library Stool Chair"
          price="$20"
        />
        <CardFeatured
          imageSrc="/allProducts/Image (6).png"
          title="Library Stool Chair"
          price="$20"
        />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
       <CardFeatured
          imageSrc="/allProducts/Image (1).png"
          title="Library Stool Chair"
          price="$20"
          oldPrice="$39"
          badgeText="New"
          badgeColor="bg-status-success"
        />
        <CardFeatured
          imageSrc="/allProducts/Image (3).png"
          title="Library Stool Chair"
          price="$20"
          oldPrice="$39"
          badgeText="Sales"
          badgeColor="bg-status-warning"
        />
        <CardFeatured
          imageSrc="/allProducts/Image (5).png"
          title="Library Stool Chair"
          price="$20"
        />
        <CardFeatured
          imageSrc="/allProducts/Image.png"
          title="Library Stool Chair"
          price="$20"
        />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
       <CardFeatured
          imageSrc="/allProducts/Image (8).png"
          title="Library Stool Chair"
          price="$20"
          oldPrice="$39"
          badgeText="New"
          badgeColor="bg-status-success"
        />
        <CardFeatured
          imageSrc="/allProducts/Image (2).png"
          title="Library Stool Chair"
          price="$20"
          oldPrice="$39"
          badgeText="Sales"
          badgeColor="bg-status-warning"
        />
        <CardFeatured
          imageSrc="/allProducts/Image (4).png"
          title="Library Stool Chair"
          price="$20"
        />
        <CardFeatured
          imageSrc="/allProducts/Image (7).png"
          title="Library Stool Chair"
          price="$20"
        />
    </div>
    <div className="w-full bg-black-5 flex flex-col items-center py-10 px-4 space-y-10 md:space-y-16 lg:space-y-20">
      {/* Newsletter Section */}
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-dark font-medium mb-8 text-center">
          Or subscribe to the newsletter
        </h2>
        
        <div className="flex flex-col md:flex-row items-stretch w-full">
          <div className="flex-grow mb-4 md:mb-0 md:mr-4">
            <input 
              type="email" 
              placeholder="Email address..." 
              className="w-full pb-2 border-b-2 border-dark bg-transparent focus:outline-none text-black-50"
            />
          </div>
          
          <button className="w-full md:w-auto bg-transparent cursor-pointer px-8 py-2 text-black border-b-2 border-black text-center hover:bg-black/10 transition-colors">
            SUBMIT
          </button>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="w-full max-w-7xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-dark font-medium mb-8 text-center">
          Follow products and discounts on Instagram
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            '/allProducts/Image (1).png',
            '/allProducts/Image (8).png',
            '/allProducts/Image (2).png',
            '/allProducts/Image.png',
            '/allProducts/Image (4).png',
            '/allProducts/Image (7).png'
          ].map((src, index) => (
            <div key={index} className="aspect-square relative">
              <Image 
                src={src} 
                alt={`Instagram post ${index + 1}`}
                fill
                className="object-cover cursor-pointer transition-transform duration-200 hover:scale-105 rounded-md"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>

    </div>
  )
}

export default Products
