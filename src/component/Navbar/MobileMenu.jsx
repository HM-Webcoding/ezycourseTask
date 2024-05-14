import React, { useRef } from "react";
import { IoClose } from "react-icons/io5";
import logoImg from "../../assets/logo.png";
import Container from "../Container/Container";
import useClickOutside from "../Helpers";
import MenuData from "./MenuData";
import NavButton from "./NavButton";

const MobileMenu = ({ show }) => {
  const clickOutside = useRef(null);
  useClickOutside(clickOutside, () => {
    show(false);
  });
  return (
    <>
      <div ref={clickOutside} className=" fixed w-full z-10 bg-white py-[21px]">
        <Container>
          <div className="flex justify-between items-center">
            <div class="flex items-center flex-shrink-0 mr-6">
              <img src={logoImg} />
            </div>
            <div onClick={() => show(false)}>
              <IoClose className="w-7 h-7 cursor-pointer" />
            </div>
          </div>
          <div class="">
            <ul class="text-black text-[18px] font-primaryFont py-4">
              {MenuData.map((item) => (
                <li
                  key={item.id}
                  className="hover:text-primary-color pt-1 pb-2 "
                >
                  <a href="/">{item.title}</a>
                </li>
              ))}
            </ul>
            <div>
              <NavButton />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MobileMenu;
