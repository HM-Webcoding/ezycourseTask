import React from "react";

const OverviewMenu = () => {
  return (
    <div className="pt-[17px] pl-2 sm:pl-[30px] border border-[#ECECEC] rounded-[5px]">
      <ul className="flex gap-4 sm:gap-10 font-primaryFont text-xs sm:text-base font-medium">
        <li className="text-primary-color pb-[15px] border-b border-b-primary-color">
          Overview
        </li>
        <li>Content</li>
        <li>Reviews</li>
        <li>Authors</li>
        <li>FAQ</li>
      </ul>
    </div>
  );
};

export default OverviewMenu;
