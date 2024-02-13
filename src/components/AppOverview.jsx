import React from "react";
import TabletIlus from "../assets/AppOverview/AppOverview-1.svg";
import ChartIlus from "../assets/AppOverview/AppOverview-2.svg";
import LaptopIlus from "../assets/AppOverview/AppOverview-3.svg";
import CircleAndDot1 from "../assets/AppOverview/Decoration/Circle-Dot-1.svg";
import CircleAndDot2 from "../assets/AppOverview/Decoration/Circle-Dot-2.svg";
import CircleAndDot3 from "../assets/AppOverview/Decoration/Circle-Dot-3.svg";
import DotSquare from "../assets/AppOverview/Decoration/Dot-square.svg";

const AppOverview = () => {
  return (
    <section className="w-full h-[1909px] bg-transparent">
      <div className="w-full h-auto bg-transparent flex items-start">
        {/* App Overview 1 */}
        <div className="w-1/2 bg-transparent flex items-end justify-end z-10">
          <img src={TabletIlus} alt="" className="mr-5" />
        </div>
        <div className="absolute w-full h-auto bg-primary mt-20 z-0">
          <div className="absolute w-1/2">
            <div className="flex justify-center items-center">
              <img src={CircleAndDot1} alt="" className="ml-32 mt-8" />
            </div>
          </div>
          <div className="w-full h-auto flex items-end justify-end">
            <img src={DotSquare} alt="" className=" w-40 p-5" />
          </div>
          <div className="w-full flex justify-end items-end mb-40">
            <div className="w-1/2 text-white">
              <h1 className=" font-Rubik font-semibold text-3xl mb-5">
                App Overview 1
              </h1>
              <p className="font-Rubik mb-5">
                Advanced spatial analysis to understand where and why <br />
                things happen, identify the target constituency, and optimize
                <br />
                the campaign.
              </p>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-primary font-semibold px-10 py-3 text-lg mt-3 rounded-[55px]">
                Learn More
              </button>
            </div>
          </div>
          {/* App Overview 2 */}
          <div className="w-full h-auto  bg-primary mb-4">
            <div className="flex">
              <div className="w-full flex justify-end">
                <div className="w-1/3 flex mb-10 mr-10 ">
                  <img src={CircleAndDot2} alt="" />
                </div>
                <div className="w-1/3 flex absolute items-center justify-center mt-28 mr-28">
                  <img src={ChartIlus} alt="" className="" />
                </div>
              </div>
              <div className="absolute w-full mt-72">
                <div className="w-1/2 flex justify-end items-center ml-5 bottom-0 right-0">
                  <div className="text-white">
                    <h1 className="font-Rubik font-semibold text-3xl mb-5">
                      App Overview 2
                    </h1>
                    <p className="font-Rubik mb-5">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do <br />
                      amet sint. Velit officia consequat duis enim velit mollit.{" "}
                      <br />
                      Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <button className="bg-transparent border-2 border-white hover:bg-white hover:text-primary font-Rubik font-semibold px-10 py-3 text-lg mt-3 rounded-[55px]">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex bg-primary mb-28">
            <div className="flex w-1/2 justify-center items-center ml-16">
              <div className="w-1/2 static flex justify-center items-center">
                <img src={CircleAndDot3} alt="" className="mt-10" />
              </div>
              <div className="w-1/2 absolute flex justify-center items-center">
                <img src={LaptopIlus} alt="" className="ml-24" />
              </div>
            </div>
            <div className="flex absolute w-full justify-end mt-44">
              <div className="w-1/2 flex">
                <div className="text-white ml-12">
                  <h1 className="font-Rubik font-semibold text-3xl mb-5">
                    App Overview 3
                  </h1>
                  <p className="font-Rubik mb-5">
                    Advanced spatial analysis to understand where and why <br />{" "}
                    things happen, identify the target constituency, and
                    optimize <br /> the campaign.
                  </p>
                  <button className="bg-transparent border-2 border-white hover:bg-white hover:text-primary font-Rubik font-semibold px-10 py-3 text-lg mt-3 rounded-[55px]">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppOverview;
