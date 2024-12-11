import Image from "next/image";

const ExploreSection = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 py-10 lg:py-20">
      {/* Left Section - Large Chair Image and Vertical Text */}
      <div className="relative flex justify-center items-center px-4 lg:px-0">

        {/* Large Chair Image */}
        <div className="w-auto">
          <Image
            className="object-cover transition-transform duration-200 hover:scale-105 cursor-pointer w-full h-auto rounded-md shadow-md"
            width={648}
            height={648}
            alt="Main Chair"
            src="/homepage/Explore/item-category 1.png"
          />
        </div>
        {/* Vertical Text */}
        <div className="absolute left-4 top-4 lg:top-1/2 lg:left-[-120px] font-inter lg:transform lg:-translate-y-1/2 lg:-rotate-90 text-lg lg:text-4xl font-semibold text-gray-800">
  EXPLORE NEW AND POPULAR STYLES
</div>

      </div>

      {/* Right Section - Grid of Chairs */}
      <div className="grid grid-cols-2 gap-4 px-4 lg:px-0">
        {[
          "/homepage/Explore/01.png",
          "/homepage/Explore/item-category-hover 1.png",
          "/homepage/Explore/item-category-hover 1.png",
          "/homepage/Explore/item-category-2.png",
        ].map((src, index) => (
          <div key={index} className="w-full aspect-square">
            <Image
              className="object-cover w-auto h-full transition-transform duration-200 hover:scale-105 cursor-pointer rounded-md shadow-sm"
              width={312}
              height={312}
              alt={`Chair ${index + 1}`}
              src={src}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;
