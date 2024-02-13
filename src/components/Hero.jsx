import React from "react";
import HeroIlus from "../assets/Hero/Hero-ilus.svg";
import ButtonShaodw from "../assets/Hero/Button-shadow.svg";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <main>
      <section className="flex flex-row w-full h-screen">
        <div className=" w-full items-center justify-center flex">
          <div className="bg-transparent">
            <h1 className=" font-bold text-6xl mb-3">Observe Your</h1>
            <h1 className="font-extrabold text-6xl mb-3"> Power</h1>
            <p className="text-lg mb-8">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on <br /> mobile and online for everyone
            </p>

            <div className="static items-center flex w-full">
              <div className="absolute">
                <img
                  src={ButtonShaodw}
                  alt=""
                  className="w-[260px] mt-8 h-auto z-0"
                />
              </div>
              <button className="px-12 py-3 bg-primary text-white hover:bg-transparent hover:border-2 hover:border-primary hover:text-primary rounded-[55px] z-10">
                See a Demo
              </button>
            </div>
          </div>
        </div>
        <div className="bg-transparent w-full">
          <img src={HeroIlus} alt="" className=" mt-24 p-14 ml-4" />
        </div>
      </section>
    </main>
  );
};

export default Hero;
