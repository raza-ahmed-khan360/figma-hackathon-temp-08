import Image from "next/image";

const ExploreSection = () => {
  return (
    <div className="w-auto h-[900px] flex flex-wrap lg:flex-nowrap justify-center items-center py-10">
      {/* Left Section - Large Chair Image and Vertical Text */}
      <div className="relative lg:w-1/2 w-full flex justify-center items-center mb-8 lg:mb-0">
        {/* Large Chair Image */}
        <div className="w-full lg:w-[500px] lg:h-[500px]">
          <Image
            className="object-cover w-full h-full rounded-md"
            width={648}
            height={648}
            alt="Main Chair"
            src="/homepage/Explore/item-category 1.png" // Replace with your image path
          />
        </div>

        {/* Vertical Text */}
        <div className="absolute left-[-120px] top-[50%] transform translate-y-1/2 -rotate-90 text-4xl font-semibold text-gray-800">
          EXPLORE NEW AND POPULAR STYLES
        </div>
      </div>

      {/* Right Section - Grid of Chairs */}
      <div className="w-full lg:w-1/2 grid grid-cols-2 gap-1 lg:grid-cols-2 lg:gap-1">
        <div className="w-[312px] h-[312px]">
          <Image
            className="object-cover w-full h-full rounded-md"
            width={312}
            height={312}
            alt="Chair 1"
            src="/homepage/Explore/01.png" // Replace with your image path
          />
        </div>
        <div className="w-[312px] h-[312px]">
          <Image
            className="object-cover w-full h-full rounded-md"
            width={312}
            height={312}
            alt="Chair 2"
            src="/homepage/Explore/item-category-hover 1.png" // Replace with your image path
          />
        </div>
        <div className="w-[312px] h-[312px]">
          <Image
            className="object-cover w-full h-full rounded-md"
            width={312}
            height={312}
            alt="Chair 3"
            src="/homepage/Explore/item-category-hover 1.png" // Replace with your image path
          />
        </div>
        <div className="w-[312px] h-[312px]">
          <Image
            className="object-cover w-full h-full rounded-md"
            width={312}
            height={312}
            alt="Chair 4"
            src="/homepage/Explore/item-category-2.png" // Replace with your image path
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
