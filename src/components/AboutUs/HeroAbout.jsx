import React from "react";
import CircleHero from "../../assets/AboutHero/Circle-hero.svg";

const HeroAbout = () => {
  return (
    <section className=" w-full h-[734px] flex justify-center items-center bg-primary">
      <div className="static">
        <img src={CircleHero} alt="" className="" />
      </div>
      <div className="absolute flex justify-center items-center text-center  w-1/2 h-full">
        <div className="grid gap-16 text-white">
          <h1 className="text-5xl font-semibold font-Rubik">About Us</h1>
          <p className="text-base font-normal font-Rubik leading-8">
            A small company offering data-driven solutions for campaign
            effectiveness <br /> using spatial data and detailed analysis of
            target audience (voters). Use <br /> technology that unites spatial
            data science and political science.
          </p>

          <div className="w-ful flex items-center justify-center text-center">
            <button className="bg-transparent border-2 bg-white hover:border-white hover:bg-primary hover:text-white text-primary font-semibold px-16 py-3 text-lg rounded-[55px]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
