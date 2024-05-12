import checkeIcon from "../../assets/checked 1.png";
import videoImg from "../../assets/video-image.png";

const TopPart = () => {
  return (
    <div className="w-[300px] bg-white border border-[#E2E2E2] rounded-xl py-5 px-6 mb-5 sm:mb-0">
      <div>
        <img src={videoImg} alt="" />
      </div>
      <div className="mt-[22px] font-primaryFont">
        <p className="text-black font-medium text-[30px]  leading-9 mb-2">
          $40.99
        </p>
        <p className="text-[#878A96] text-[20px] ">
          $40.99{" "}
          <span className="text-white bg-[#0B122A] py-1 px-[10px] text-[13px] font-medium rounded-[30px] ml-4">
            40% off
          </span>
        </p>
        <div className="mt-[18px] font-primaryFont font-semibold text-base ">
          <button className="w-full py-[10px] text-white bg-primary-color mb-3 rounded-lg">
            Add to Card
          </button>
          <button className="w-full py-[10px] border border-primary-color rounded-lg text-primary-color">
            Buy Now
          </button>
        </div>
      </div>
      <li className="list-none flex pt-4">
        <img src={checkeIcon} className="w-6 h-6 " />
        <p className="pl-2 text-sm ">30 Day money back guarantee</p>
      </li>
    </div>
  );
};

export default TopPart;
