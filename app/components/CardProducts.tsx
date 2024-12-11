import Image from "next/image";

const Card = ({ imageSrc, label, price, oldPrice, status }: any) => {
    return (
      <div className="flex flex-col p-4 bg-white rounded-md">
        <div className="w-full relative">
          <Image
            src={imageSrc}
            alt={label}
            className="rounded-md transition-transform duration-200 hover:scale-105 cursor-pointer object-cover w-full"
            width={312}
            height={312}
          />
          {status && (
            <div
              className={`absolute top-3 left-3 px-3 py-1 rounded text-white text-sm font-medium ${
                status === "New" ? "bg-green-500" : "bg-orange-500"
              }`}
            >
              {status}
            </div>
          )}
        </div>
  
        <div className="flex justify-between items-center mt-4">
          {/* Card Content */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium capitalize">{label}</h3>
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold">${price}</span>
              {oldPrice && (
                <span className="text-sm line-through text-gray-500">
                  ${oldPrice}
                </span>
              )}
            </div>
          </div>
  
          {/* Cart Button */}
          <button className="w-[44px] h-[44px] rounded flex shadow items-center justify-center bg-gray-50 cursor-pointer">
            <Image
              src="/homepage/Our Products/Buy 3.svg"
              alt="Add to cart"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    );
  };
  

const CardGrid = () => {
  const items = [
    {
      imageSrc: "/homepage/Our Products/Image.png",
      label: "Library Stool Chair",
      price: 20,
      oldPrice: 39,
      status: "New",
    },
    {
      imageSrc: "/homepage/Our Products/Image (1).png",
      label: "Library Stool Chair",
      price: 20,
      oldPrice: 39,
      status: "Sales",
    },
    {
      imageSrc: "/homepage/Our Products/Image (2).png",
      label: "Library Stool Chair",
      price: 20,
      oldPrice: null,
      status: null,
    },
    {
      imageSrc: "/homepage/Our Products/Image (3).png",
      label: "Library Stool Chair",
      price: 20,
      oldPrice: null,
      status: null,
    },
    {
      imageSrc: "/homepage/Our Products/Image (4).png",
      label: "Library Stool Chair",
      price: 20,
      oldPrice: null,
      status: null,
    },
    {
      imageSrc: "/homepage/Our Products/Image (5).png",
      label: "Library Stool Chair",
      price: 20,
      oldPrice: null,
      status: null,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <Card
          key={index}
          imageSrc={item.imageSrc}
          label={item.label}
          price={item.price}
          oldPrice={item.oldPrice}
          status={item.status}
        />
      ))}
    </div>
  );
};

export default CardGrid;
