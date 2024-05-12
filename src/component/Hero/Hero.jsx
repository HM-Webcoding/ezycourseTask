import React from "react";
import { CiShare2 } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineStarPurple500 } from "react-icons/md";
import profileImg from "../../assets/bestseller-profile.png";
import Container from "../Container/Container";
import Flex from "../Flex/Flex";

const Hero = () => {
  return (
    <>
      <div className=" bg-hero-pattern bg-cover bg-no-repeat w-full">
        <Container>
          <div className="pt-[20px] pb-9 flex items-center text-base font-primaryFont text-[#CAC7C7]">
            {" "}
            Home <IoIosArrowBack /> <span>Course</span>
            <IoIosArrowBack />
            <span className="font-primaryFont font-medium text-base text-white">
              UI/UX Design
            </span>
          </div>
          <div>
            <h1 className="text-xl md:text-3xl font-semibold font-primaryFont text-white leading-none md:leading-[46px]">
              Figma UI UX Design Essentials
            </h1>
            <p className="text-xs md:text-[18px] font-normal text-white font-primaryFont leading-[20px] md:leading-[28px] w-[310px] md:w-[554px] pb-[31px] pt-5">
              Use Figma to get a job in UI Design, User Interface, User
              Experience design, UX Design & Web Design
            </p>
          </div>
          <div className="flex-none w-full xl:w-[70%] pb-16">
            <div className=" flex-none md:flex items-center ">
              <div className="flex items-center">
                <button className="px-[10px] rounded-sm bg-[#FFE072] mr-2 md:mr-[17px]">
                  Bestseller
                </button>
                <span className="text-white font-semibold font-primaryFont">
                  4.7 &nbsp;
                </span>
                <MdOutlineStarPurple500 className=" fill-[#FFC224] w-4 h-4" />
                <MdOutlineStarPurple500 className=" fill-[#FFC224]" />
                <MdOutlineStarPurple500 className=" fill-[#FFC224]" />
                <MdOutlineStarPurple500 className=" fill-[#FFC224]" />
                <MdOutlineStarPurple500 className=" fill-[#FFC224]" />
                <p className="text-[#959BE9] text-xs md:text-base font-medium font-primaryFont ml-[11px]">
                  (26,875 Ratings)
                </p>
              </div>
              <div className="flex lg:justify-between md:flex-none mt-5 md:mt-0">
                <Flex className="ml-0 md:ml-10 items-center">
                  <img src={profileImg} />
                  <span className="text-white text-sm md:text-base font-semibold ml-2">
                    Sophia L
                  </span>
                </Flex>
                <Flex className="items-center gap-2 ml-2 lg:ml-56 xl:ml-32 2xl:ml-52 ">
                  <button className="flex items-center py-[6px] px-[14px] rounded bg-white text-[#101011] font-medium text-sm md:text-base font-primaryFont">
                    {" "}
                    <FaRegHeart className=" mr-2" />
                    Wishlist
                  </button>
                  <button className="flex items-center py-[6px] px-[14px] rounded bg-white text-[#101011] font-medium text-sm md:text-base font-primaryFont">
                    {" "}
                    <CiShare2 className=" mr-2" />
                    Share
                  </button>
                </Flex>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
