import { CiMobile3 } from "react-icons/ci";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { IoMdPaper } from "react-icons/io";
import { IoPlayCircleOutline, IoShuffle } from "react-icons/io5";
import { LuTrophy } from "react-icons/lu";
import Flex from "../Flex/Flex";

const BottomPart = () => {
  return (
    <div className="xl:mt-5 w-[300px] bg-white border border-[#E2E2E2] rounded-xl py-5 px-6">
      <h3 className="text-[#2D2F31] text-[20px] font-medium pb-4">
        This course includes
      </h3>
      <ul>
        <li className="text-[#525455] text-base flex items-center pt-3">
          <span className="pr-2">
            <IoPlayCircleOutline />
          </span>
          12 hours on demand video
        </li>
        <li className="text-[#525455] text-base flex items-center pt-3">
          <span className="pr-2">
            <IoMdPaper />
          </span>
          Assignments
        </li>
        <li className="text-[#525455] text-base flex items-center pt-3">
          <span className="pr-2">
            <HiOutlineDocumentDownload />
          </span>
          1 downloadable resource
        </li>
        <li className="text-[#525455] text-base flex items-center pt-3">
          <span className="pr-2">
            <CiMobile3 />
          </span>
          Access on mobile and TV
        </li>
        <li className="text-[#525455] text-base flex items-center pt-3">
          <span className="pr-2">
            <IoShuffle />
          </span>
          Full lifetime access
        </li>
        <li className="text-[#525455] text-base flex items-center pt-3">
          <span className="pr-2">
            <LuTrophy />
          </span>
          Certificate of completion
        </li>
      </ul>
      <form className="mt-6">
        <h3 className="mb-2 font-medium text-lg text-[#2D2F31]">Coupon</h3>
        <Flex>
          <input
            type="text"
            placeholder="Enter Coupon"
            className="px-3 py-2 border border-[#CFCFCF] focus:outline-none placeholder:text-[#6A6F73] placeholder:text-[14px] w-[70%] rounded-tl rounded-bl"
          />
          <button className="text-white font-medium text-base py-[6px] px-[19px] bg-primary-color w-[30%] rounded-tr rounded-br">
            Apply
          </button>
        </Flex>
      </form>
    </div>
  );
};

export default BottomPart;
