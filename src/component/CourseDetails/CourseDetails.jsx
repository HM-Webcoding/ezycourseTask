import React from "react";
import { CiStar } from "react-icons/ci";
import Container from "../Container/Container";
import Flex from "../Flex/Flex";
import DetailsCard from "./DetailsCard";

const CourseDetails = () => {
  return (
    <Container className="relative">
      <Flex className="xl:w-[65%]  justify-between absolute -translate-y-[46%] md:-translate-y-2/4 gap-2">
        <div className="flex-none md:flex">
          <DetailsCard
            title={"Ratings"}
            subTitle={4.7}
            spanTitle={"(112 Ratings)"}
          >
            <CiStar className="fill-black w-6 h-6" />
          </DetailsCard>
          <DetailsCard title={"Level"} subTitle={"Beginner"}>
            <CiStar className="fill-black w-6 h-6" />
          </DetailsCard>
        </div>
        <div className="flex-none md:flex">
          <DetailsCard title={"Students"} subTitle={"156 Enrolled"}>
            <CiStar className="fill-black w-6 h-6" />
          </DetailsCard>
          <DetailsCard
            title={"Durations"}
            subTitle={"2.6 Hours"}
            spanTitle={"(8 Videos)"}
          >
            <CiStar className="fill-black w-6 h-6" />
          </DetailsCard>
        </div>
      </Flex>
    </Container>
  );
};

export default CourseDetails;
