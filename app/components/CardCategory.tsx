import Image from "next/image";

const Card: React.FC<{ imageSrc: string; title: string; productsCount: string }> = ({
  imageSrc,
  title,
  productsCount,
}) => {
  return (
    <div className="w-full sm:w-[424px] h-[424px] flex flex-col rounded-sm overflow-hidden">
      {/* Image Section */}
      <div className="w-full h-full overflow-hidden">
        <Image
          className="object-cover w-full h-full"
          width={424}
          height={424}
          alt={title}
          src={imageSrc}
        />
      </div>

      {/* Description Section */}
      <div className="bg-gray p-5 flex flex-col justify-start gap-2">
        <div className="text-xl font-semibold leading-[110%] capitalize">{title}</div>
        <div className="text-sm opacity-[0.7] leading-[110%] capitalize">{productsCount} Products</div>
      </div>
    </div>
  );
};

const CategoryProducts = () => {
  return (
    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 text-xl text-gray-scales-white">
      <Card
        imageSrc="/homepage/Top Categories/Image.png"
        title="Wing Chair"
        productsCount="3,584"
      />
      <Card
        imageSrc="/homepage/Top Categories/Image (1).png"
        title="Wooden Chair"
        productsCount="157"
      />
      <Card
        imageSrc="/homepage/Top Categories/Image (2).png"
        title="Desk Chair"
        productsCount="154"
      />
    </div>
  );
};

export default CategoryProducts;
