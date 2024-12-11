import Image from "next/image";
import Link from "next/link";

interface CardProps {
  imageSrc: string;
  title: string;
  price: string;
  oldPrice?: string;
  badgeText?: string;
  badgeColor?: string;
  link?: string;
}

const CardFeatured: React.FC<CardProps> = ({
  imageSrc,
  title,
  price,
  oldPrice,
  badgeText,
  badgeColor = "bg-green-500", // Default color if no badge color is provided
  link = "#", // Default link if none is provided
}) => {
  return (
    <div className="w-auto h-auto sm:w-[312px] lg:w-[300px] flex flex-col relative rounded-md shadow-md overflow-hidden bg-white">
      {/* Product Image */}
      <Link href={link} className="block w-full h-64">
        <Image
          className="object-cover w-full h-full transition-transform duration-200 hover:scale-105"
          width={300}
          height={300}
          alt={title}
          src={imageSrc}
        />
      </Link>

      {/* Product Details */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-sm lg:text-base font-medium text-gray-800">{title}</h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">{price}</span>
          {oldPrice && (
            <span className="text-sm line-through text-gray-500">{oldPrice}</span>
          )}
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        className="absolute bottom-4 right-4 w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center cursor-pointer shadow"
        aria-label="Add to Cart"
      >
        <Image
          width={24}
          height={24}
          alt="Add to Cart"
          src="/homepage/Featured/Buy 3 (1).svg"
        />
      </button>

      {/* Badge */}
      {badgeText && (
        <div
          className={`absolute top-2 left-2 px-3 py-1 text-sm font-medium text-white rounded ${badgeColor}`}
        >
          {badgeText}
        </div>
      )}
    </div>
  );
};

export default CardFeatured;
