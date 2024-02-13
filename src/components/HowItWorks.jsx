import React from "react";
import ButtonShadow from "../assets/Hero/Button-shadow.svg";
import GeoIlus from "../assets/HowItWorks/Geographic-ilus.svg";
import DemoIlus from "../assets/HowItWorks/Demographic-ilus.svg";
import PsychoIlus from "../assets/HowItWorks/Psychograpich-ilus.svg";
import BehavIlus from "../assets/HowItWorks/Behavorial-ilus.svg";

const HowItWorks = () => {
  const Card = ({ title, image, description }) => (
    <div className="w-full h-[448px] border-2 border-cardBorder bg-transparent p-6 rounded-[20px] items-center justify-center text-center hover:border-primary">
      <img src={image} alt="" className="ml-9 mb-3" />
      <h1 className="font-Rubik font-bold text-lg mb-3">{title}</h1>
      <p className="font-Rubik">{description}</p>
    </div>
  );
  return (
    <section className="w-full h-auto bg-white flex items-center justify-center">
      <div className="w-[888px] relative  items-center justify-center mb-20  mt-32">
        <div className=" grid items-center justify-center text-center mb-10">
          <h1 className="font-Rubik font-bold text-3xl mb-5">
            How it works for you?
          </h1>
          <p className="font-Rubik font-base text-lg mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed <br />{" "}
            do eiusmod tempor incididunt ut labore et dolore magna <br />{" "}
            aliqua. Ut enim ad minim veniam.
          </p>
          <div className="flex static items-center justify-center w-full">
            <div className="absolute">
              <img
                src={ButtonShadow}
                alt=""
                className="w-[260px] mt-4 ml-6 h-auto z-0"
              />
            </div>
            <button className="px-12 py-3 font-bold bg-primary text-white hover:bg-transparent hover:border-2 hover:border-primary hover:text-primary rounded-[55px] mb-10 z-10">
              See a Demo
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 w-full items-center  justify-center gap-10">
          <Card
            title="Geographic Segmentation"
            image={GeoIlus}
            description="Consist of creating differend groups of customers based on geographic boundaries"
          />
          <Card
            title="Demographic Segmentation"
            image={DemoIlus}
            description="Consist of dividing the market through different variables such as age, gender, income, etc"
          />
          <Card
            title="Services"
            image={PsychoIlus}
            description="Consist of creating differend groups of customers based on geographicboundaries"
          />
          <Card
            title="Services"
            image={BehavIlus}
            description="Consist of creating differend groups ofcustomers based on geographic boundaries"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
