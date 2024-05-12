import React from "react";
import logoImg from "../../assets/logo.png";
import Container from "../Container/Container";
import Menu from "./Menu";
import NavButton from "./NavButton";
const Navbar = () => {
  return (
    <Container>
      {/* <Flex className="justify-between items-center py-[21px]">
        <div className="sm:w-1/2 w-1/5">
          <img src={logoImg} />
        </div>
        <div className="sm:w-full w-3/5">
          <Menu />
        </div>
        <div className="sm:w-1/2 w-1/5 self-end">
          <button className=" text-base font-primaryFont font-medium py-2 px-6 bg-gradient-to-r from-[#9C5CF3] to-[#013698] rounded mr-3 text-white">
            Start For Free
          </button>
          <button className=" text-base font-primaryFont font-medium py-2 px-6 bg-black rounded text-white">
            Login
          </button>
        </div>
      </Flex> */}

      <nav class="flex items-center justify-between flex-wrap bg-teal-500 py-[21px]">
        <div class="flex items-center flex-shrink-0 mr-6 mb-3 sm:mb-0">
          <img src={logoImg} />
        </div>
        <div class="block lg:hidden ">
          <div>
            <NavButton />
          </div>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow ">
            <Menu />
          </div>
          <div className="hidden lg:block">
            <NavButton />
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
