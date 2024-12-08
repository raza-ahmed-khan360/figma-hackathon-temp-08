import type { NextPage } from 'next';
import CardFeatured from '../../components/CardFeatured';

const FeaturedProducts: NextPage = () => {
  return (
    <div className="w-auto h-[600px] flex flex-col items-center justify-center gap-[49px] overflow-hidden text-base text-gray-scales-black font-sale-price">
      <div className="w-[1920px] flex flex-row items-center justify-start py-0 px-[300px] box-border">
        <div className="relative text-[32px] leading-[110%] capitalize font-semibold">Featured Products</div>
      </div>

      {/* Flexbox container for cards */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-8">
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
