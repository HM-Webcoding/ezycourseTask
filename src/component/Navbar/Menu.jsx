import React from "react";
import MenuData from "./MenuData";

const Menu = () => {
  return (
    <ul className="flex mt-5 lg:mt-0 gap-3 md:gap-10 text-xs sm:text-base md:text-[18px] text-black font-primaryFont">
      {MenuData.map((item) => (
        <li key={item.id}>
          <a href="/">{item.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
