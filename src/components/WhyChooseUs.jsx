import React from "react";
import DataIlus from "../assets/WhyChooseUs/Data-ilus.svg";
import TechIlus from "../assets/WhyChooseUs/Technology-ilus.svg";
import ServiceIlus from "../assets/WhyChooseUs/Services-ilus.svg";

const WhyChooseUs = () => {
  const Card = ({ title, image, description }) => (
    <div className="w-full h-72 border-2 border-cardBorder bg-transparent p-6 rounded-[20px] mb-10 mt-10 items-start justify-start text-start hover:border-primary">
      <img src={image} alt="" className="mb-3" />
      <h1 className="font-Rubik font-bold text-lg mb-3">{title}</h1>
      <p className="font-Rubik">{description}</p>
    </div>
  );

  return (
    <section className="w-full h-auto bg-white flex items-center justify-center">
      <div className="relative mt-32 items-center justify-center w-2/3 bg-transparent">
        <div className=" grid items-center justify-center text-center">
          <h1 className="font-Rubik font-bold text-3xl mb-5">Why Choose Us?</h1>
          <p className="font-Rubik font-base text-lg mb-5">
            We provide to you the best choiches for you. The leading political
            campaign intelligence platform
          </p>
        </div>
        <div className="grid grid-cols-3 w-full justify-center items-center gap-10">
          <Card
            title="Data"
            image={DataIlus}
            description="The biggest regional data, development, and POI data."
          />
          <Card
            title="Technology"
            image={TechIlus}
            description="Geospatial platform with advanced analysis that suit your needs."
          />
          <Card
            title="Services"
            image={ServiceIlus}
            description="An expert team help you to analyze your poltical power."
          />
        </div>
        <div className="w-ful flex items-center justify-center text-center">
          <button className="bg-transparent border-2 border-primary hover:bg-primary hover:text-white text-primary font-semibold px-16 py-3 text-lg mt-3 mb-40 rounded-[55px]">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
