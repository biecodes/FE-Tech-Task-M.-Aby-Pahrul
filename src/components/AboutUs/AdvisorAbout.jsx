import React from "react";
import Xavier from "../../assets/AboutAdvisor/Xavier.svg";
import Sara from "../../assets/AboutAdvisor/Sara.svg";
import Brandon from "../../assets/AboutAdvisor/Brandon.svg";

const AdvisorAbout = () => {
  const Advisor = ({ name, image, position }) => (
    <div className="grid gap-3 justify-center items-center text-center">
      <img src={image} alt="" />
      <h1 className="text-lg font-semibold font-DMSans">{name}</h1>
      <p className="text-md font-DMSans text-[#4F5665]">{position}</p>
    </div>
  );
  return (
    <section className="w-full flex justify-center items-center p-5">
      <div className="relative mt-10 grid gap-10 items-center justify-center w-full bg-transparent">
        <div className=" flex items-center justify-center text-center">
          <h1 className="font-DMSans font-bold text-4xl text-[#1E0E62]">
            Our Advisors
          </h1>
        </div>
        <div className="w-full grid grid-cols-3 gap-5 mb-10">
          <Advisor
            image={Xavier}
            name="Xavier Oswald"
            position="co-founder, developer"
          />

          <Advisor
            image={Sara}
            name="Sara Creighton"
            position="co-founder, developer"
          />

          <Advisor
            image={Brandon}
            name="Brandon Ogden"
            position="project manager"
          />
        </div>
      </div>
    </section>
  );
};

export default AdvisorAbout;
