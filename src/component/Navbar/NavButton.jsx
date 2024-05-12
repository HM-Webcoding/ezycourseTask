import React from "react";

const NavButton = () => {
  return (
    <>
      <button className=" text-xs lg:text-base font-primaryFont font-medium py-2 px-2 lg:px-6 bg-gradient-to-r from-[#9C5CF3] to-[#013698] rounded mr-3 text-white">
        Start For Free
      </button>
      <button className="text-xs lg:text-base font-primaryFont font-medium py-2 px-2 lg:px-6 bg-black rounded text-white">
        Login
      </button>
    </>
  );
};

export default NavButton;
