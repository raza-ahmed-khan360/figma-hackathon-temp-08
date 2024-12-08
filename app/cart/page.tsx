import type { NextPage } from 'next';
import Image from "next/image";

const CartPage: NextPage = () => {
    return (
        <div className="w-full h-auto py-10 overflow-hidden flex flex-col lg:flex-row justify-between items-start text-left text-mini text-gray-200 font-inter">
    {/* Left Section: Bag Items */}
    <div className="flex flex-col w-full lg:w-2/3 lg:mr-6">
        <div className="text-[22px] leading-[33px] font-medium flex items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">Bag</div>
        
        {/* First Item */}
        <div className="flex flex-col items-stretch justify-around text-gray-100 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
            <div className="shadow-[0px_0px_0px_#e5e5e5_inset] bg-gray-300 flex flex-row items-start justify-start py-6 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                <div className="w-[150px] h-[150px] shrink-0">
                    <Image className="w-full h-full object-cover" width={150} height={150} alt="Item Image" src="/cart/Frame.png" />
                </div>
                <div className="flex flex-col w-full gap-6">
                    <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-col items-start justify-start">
                            <div className="text-base leading-[130%] capitalize text-gray-scales-black">Library Stool Chair</div>
                            <div className="leading-[28px]">Ashen Slate/Cobalt Bliss</div>
                            <div className="flex flex-row items-start justify-start gap-4">
                                <div className="leading-[28px]">Size L</div>
                                <div className="leading-[28px]">Quantity 1</div>
                            </div>
                        </div>
                        <div className="text-right text-gray-200">
                            <div className="leading-[28px]">MRP: $99</div>
                        </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-4 sm:gap-6 md:gap-8">
                        <Image className="w-6 h-6" width={24} height={24} alt="Icon" src="/cart/Frame (2).svg" />
                        <Image className="w-6 h-6" width={24} height={24} alt="Icon" src="/cart/Frame (1).svg" />
                    </div>
                </div>
            </div>
        </div>

        {/* Second Item */}
        <div className="flex flex-col items-stretch justify-around text-gray-100 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mt-6">
            <div className="shadow-[0px_0px_0px_#e5e5e5_inset] bg-gray-300 flex flex-row items-start justify-start py-6 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                <div className="w-[150px] h-[150px] shrink-0">
                    <Image className="w-full h-full object-cover" width={150} height={150} alt="Item Image" src="/cart/Frame (1).png" />
                </div>
                <div className="flex flex-col w-full gap-6">
                    <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-col items-start justify-start">
                            <div className="text-base leading-[130%] capitalize text-gray-scales-black">Library Stool Chair</div>
                            <div className="leading-[28px]">Ashen Slate/Cobalt Bliss</div>
                            <div className="flex flex-row items-start justify-start gap-4">
                                <div className="leading-[28px]">Size L</div>
                                <div className="leading-[28px]">Quantity 1</div>
                            </div>
                        </div>
                        <div className="text-right text-gray-200">
                            <div className="leading-[28px]">MRP: $99</div>
                        </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-4 sm:gap-6 md:gap-8">
                        <Image className="w-6 h-6" width={24} height={24} alt="Icon" src="/cart/Frame (2).svg" />
                        <Image className="w-6 h-6" width={24} height={24} alt="Icon" src="/cart/Frame (1).svg" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Right Section: Summary */}
    <div className="flex flex-col w-full lg:w-1/3 mt-6 lg:mt-0">
        <div className="flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mt-6">
            <div className="text-[21px] leading-[33px] font-medium">Summary</div>
            <div className="flex flex-col sm:flex-row items-start justify-start gap-4 sm:gap-6 md:gap-8">
                <div className="text-base leading-[28px]">Subtotal</div>
                <div className="text-sm leading-[24px] font-medium text-right">$198.00</div>
            </div>
        </div>

        <div className="flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mt-4">
            <div className="leading-[28px]">Estimated Delivery & Handling</div>
            <div className="leading-[28px] text-right">Free</div>
        </div>

        <div className="border-t-[1px] border-b-[1px] border-gainsboro mt-4">
            <div className="flex items-center justify-between py-[17px] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
                <div className="leading-[28px]">Total</div>
                <div className="leading-[24px] font-medium">$198.00</div>
            </div>
        </div>

        <div className="max-w-max mt-6 mx-auto cursor-pointer rounded-[30px] px-8 bg-darkcyan flex items-center justify-center py-[18px] text-center text-white">
            <div className="leading-[24px] font-medium">Member Checkout</div>
        </div>
    </div>
</div>

    );
};

export default CartPage;
