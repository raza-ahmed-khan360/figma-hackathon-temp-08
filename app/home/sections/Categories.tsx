import type { NextPage } from 'next';
import Image from "next/image";
import CategoryProducts from '../../components/CardCategory';



const TopCategotires:NextPage = () => {
  	return (
    		<div className="w-auto relative overflow-hidden flex flex-col items-center justify-center flex-wrap content-center gap-x-6 gap-y-10 text-left text-[32px] text-gray-scales-black font-inter">
      			<div className="w-[1920px] flex flex-row items-center justify-start py-0 px-[300px] box-border">
        				<div className="relative leading-[110%] capitalize font-semibold">Top categories</div>
      			</div>
      			<CategoryProducts/>
    		</div>);
};

export default TopCategotires;
