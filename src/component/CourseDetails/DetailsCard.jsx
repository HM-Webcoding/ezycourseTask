const DetailsCard = ({ children, title, subTitle, spanTitle }) => {
  return (
    <div className="flex items-center w-[170px] sm:w-[228px] md:w-[170px] lg:w-[228px] xl:w-[200px] 2xl:w-[228px] border border-[rgb(226,226,226)] py-[7px] pl-[15px] rounded-[5px] bg-white mb-2 md:mb-0 md:mr-3">
      {children}
      <div className="pl-[10px] font-primaryFont font-normal text-xs text-[#283643]">
        <span className="">{title}</span>
        <p className="font-medium text-[#202931]">
          {subTitle} <span className="text-[#888888]">{spanTitle}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default DetailsCard;
