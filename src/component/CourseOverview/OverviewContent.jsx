import React from "react";
import chekedIcon from "../../assets/checked 2.png";

const OverviewContent = () => {
  return (
    <div className="p-[30px]  mt-[19px] border border-[#ECECEC] rounded-[5px]">
      <h2 className="pb-4 text-[20px] font-medium font-primaryFont border-b border-[#ECECEC]">
        What you will learn
      </h2>
      <div className="sm:flex gap-5 lg:gap-20">
        <ul className="w-full sm:w-1/2">
          <li className="flex items-center text-sm md:text-base font-normal text-black font-primaryFont pt-6">
            <img className="pr-3" src={chekedIcon} />
            How to begin working as a UX Designer using Figma.
          </li>
          <li className="flex items-center text-sm md:text-base font-normal text-black font-primaryFont pt-6">
            <img className="pr-3" src={chekedIcon} />
            How to make fully interactive prototypes.
          </li>
          <li className="flex items-center text-sm md:text-base font-normal text-black font-primaryFont pt-6">
            <img src={chekedIcon} className="pr-3" />
            How to implement colours & images properly in your designs.
          </li>
          <li className="flex items-center text-sm md:text-base font-normal text-black font-primaryFont pt-6">
            <img src={chekedIcon} className="pr-3" />
            Free UI kits & plugins for Figma which will speed up our workflow
            dramatically!
          </li>
        </ul>
        <ul className="w-full sm:w-1/2">
          <li className="flex items-center text-sm md:text-base font-normal text-black font-primaryFont pt-6">
            <img className="pr-3" src={chekedIcon} />
            How to begin working as a UX Designer using Figma.
          </li>
          <li className="flex items-center text-sm md:text-base font-normal text-black font-primaryFont pt-6">
            <img className="pr-3" src={chekedIcon} />
            How to make fully interactive prototypes.
          </li>
          <li className="flex items-center text-sm md:text-base font-normal text-black font-primaryFont pt-6">
            <img src={chekedIcon} className="pr-3" />
            How to implement colours & images properly in your designs.
          </li>
          <li className="flex items-center text-sm md:text-base font-normal text-black font-primaryFont pt-6">
            <img src={chekedIcon} className="pr-3" />
            Free UI kits & plugins for Figma which will speed up our workflow
            dramatically!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OverviewContent;
