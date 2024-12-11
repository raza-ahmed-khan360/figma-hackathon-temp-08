import type { NextPage } from "next";
import CardFeatured from "../../components/CardFeatured";

const FeaturedProducts: NextPage = () => {
  return (
    <div className="flex flex-col items-center gap-12 px-4 py-10 text-gray-scales-black font-sale-price">
      {/* Header */}
      <div className="w-full container text-leftr">
        <h2 className="text-2xl md:text-4xl lg:text-[32px] font-semibold capitalize">
          Featured Products
        </h2>
      </div>

      {/* Flexbox container for cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <CardFeatured
          imageSrc="/homepage/Featured/Image.png"
          title="Library Stool Chair"
          price="$20"
          oldPrice="$39"
          badgeText="New"
          badgeColor="bg-status-success"
        />
        <CardFeatured
          imageSrc="/homepage/Featured/Image (1).png"
          title="Library Stool Chair"
          price="$20"
          oldPrice="$39"
          badgeText="Sales"
          badgeColor="bg-status-warning"
          link="/single-product"
        />
        <CardFeatured
          imageSrc="/homepage/Featured/Image (2).png"
          title="Library Stool Chair"
          price="$20"
        />
        <CardFeatured
          imageSrc="/homepage/Featured/Image (3).png"
          title="Library Stool Chair"
          price="$20"
        />
      </div>
    </div>
  );
};

export default FeaturedProducts;
