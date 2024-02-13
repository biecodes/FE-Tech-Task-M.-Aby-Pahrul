import React from "react";
import PlansIlus from "../assets/PlansAndPricing/Plans-ilus.svg";

const PlansAndPricing = () => {
  return (
    <section className="w-full h-auto  flex items-center justify-center mb-40">
      <div className="w-[722px] relative  items-center justify-center mb-10  mt-32">
        <div className=" grid items-center justify-center text-center mb-10">
          <h1 className="font-Rubik font-bold text-3xl mb-5">
            Plans And Pricing
          </h1>
          <p className="font-Rubik font-base text-lg mb-5">
            We provide to you the best choiches for you. The leading <br />{" "}
            political campaign intelligence platform
          </p>
        </div>

        <div className="grid grid-cols-2 w-full items-center  justify-center gap-10">
          <div className="w-full h-[720px] border-2 border-cardBorder bg-transparent p-6 rounded-[10px] mb-10 mt-10 grid items-center justify-center text-center hover:border-primary">
            <div className="w-full flex flex-col items-center justify-center text-center">
              <img src={PlansIlus} alt="" className="mb-10" />
              <h1 className="font-Rubik font-bold text-lg">Individual Plan</h1>
            </div>
            <div className="font-Rubik w-full relative h-auto text-start justify-start items-start p-10 ">
              <p className="font-Rubik mb-3"> 1 User</p>
              <p className="font-Rubik mb-3"> 1 Basic Analys</p>
              <p className="font-Rubik mb-3"> Unlimited Select Services</p>
              <p className="font-Rubik mb-3 text-white">
                {" "}
                Unlimited Select Services
              </p>
            </div>

            <div className="flex static items-center justify-center w-full">
              <div className="absolute">
                <img
                  src="{ButtonShadow}"
                  alt=""
                  className="w-[260px] mt-4 ml-6 h-auto z-0"
                />
              </div>
              <button className="px-12 py-3 font-bold bg-primary text-white hover:bg-transparent hover:border-2 hover:border-primary hover:text-primary rounded-[55px] mb-8 z-10">
                See a Demo
              </button>
            </div>
          </div>

          <div className="w-full h-[720px] border-2 border-cardBorder bg-transparent p-6 rounded-[10px] mb-10 mt-10 grid items-center justify-center text-center hover:border-primary">
            <div className="w-full flex flex-col items-center justify-center text-center">
              <img src={PlansIlus} alt="" className="mb-10" />
              <h1 className="font-Rubik font-bold text-lg">Individual Plan</h1>
            </div>
            <div className="font-Rubik w-full h-auto text-start p-10">
              <p className="font-Rubik mb-3"> Unlimited User</p>
              <p className="font-Rubik mb-3"> Basic Analys</p>
              <p className="font-Rubik mb-3"> Unlimited Select Services</p>
              <p className="font-Rubik mb-3">Free extend 1 Month</p>
            </div>

            <div className="flex static items-center justify-center w-full">
              <div className="absolute">
                <img
                  src="{ButtonShadow}"
                  alt=""
                  className="w-[260px] mt-4 ml-6 h-auto z-0"
                />
              </div>
              <button className="px-12 py-3 font-bold bg-primary text-white hover:bg-transparent hover:border-2 hover:border-primary hover:text-primary rounded-[55px] mb-10 z-10">
                See a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansAndPricing;
