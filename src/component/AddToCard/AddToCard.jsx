import React from "react";
import BottomPart from "./BottomPart";
import TopPart from "./TopPart";

const AddToCard = () => {
  return (
    <div className="w-full xl:w-[30%] 2xl:w-1/4 p-[20px] rounded-md font-primaryFont relative">
      <div className="xl:absolute xl:right-0 xl:-top-64 sm:gap-3 xl:gap-0 sm:flex xl:inline">
        <TopPart />
        <BottomPart />
      </div>
    </div>
  );
};

export default AddToCard;
