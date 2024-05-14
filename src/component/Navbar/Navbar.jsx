import { useState } from "react";
import { FaBars } from "react-icons/fa";
import logoImg from "../../assets/logo.png";
import Container from "../Container/Container";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import NavButton from "./NavButton";
const Navbar = () => {
  const [isShow, setIsShow] = useState(false);

  const handleMenu = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      {isShow ? (
        <MobileMenu show={setIsShow} />
      ) : (
        <Container>
          <nav class="flex items-center justify-between flex-wrap py-[21px]">
            <div class="flex items-center flex-shrink-0 mr-6">
              <img src={logoImg} />
            </div>
            <div class="block lg:hidden ">
              <div onClick={handleMenu}>
                <FaBars className="cursor-pointer w-7 h-7" />
              </div>
            </div>
            <div class="hidden lg:blockmw-full flex-grow lg:flex lg:items-center lg:w-auto">
              <div class="text-sm lg:flex-grow ">
                <Menu />
              </div>
              <div className="hidden lg:block">
                <NavButton />
              </div>
            </div>
          </nav>
        </Container>
      )}
    </>
  );
};

export default Navbar;
