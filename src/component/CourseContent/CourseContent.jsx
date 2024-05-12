import React from "react";
import Container from "../Container/Container";

const CourseContent = () => {
  return (
    <Container>
      <div className="w-full xl:w-[70%] 2xl:w-3/4 bg-[#FEFEFE] p-[20px] rounded-md">
        <div className="p-[30px]  mt-[19px] border border-[#ECECEC] rounded-[5px]">
          <h2 className="pb-4 text-[20px] font-medium font-primaryFont border-b border-[#ECECEC]">
            Course Contents
          </h2>
        </div>
      </div>
    </Container>
  );
};

export default CourseContent;
