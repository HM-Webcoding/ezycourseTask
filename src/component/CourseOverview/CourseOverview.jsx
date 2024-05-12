import React from "react";
import OverviewContent from "./OverviewContent";
import OverviewMenu from "./OverviewMenu";

const CourseOverview = () => {
  return (
    <div className="w-full xl:w-[70%] 2xl:w-3/4 bg-[#FEFEFE] p-[20px] rounded-md">
      <OverviewMenu />
      <OverviewContent />
    </div>
  );
};

export default CourseOverview;
