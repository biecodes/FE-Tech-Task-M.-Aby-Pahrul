import React from "react";
import DotSquare from "../../assets/AboutQuote/Dot-square.svg";
import QuotesIlus from "../../assets/AboutQuote/Quote-ilus.svg";

const QuoteAbout = () => {
  return (
    <section className="w-full flex justify-center items-center mt-20 mb-32">
      <div className="static w-full flex justify-end items-end">
        <img src={DotSquare} alt="" className="w-[153px]" />
      </div>
      <div className="absolute grid gap-8 mt-10">
        <div className="flex justify-center items-center">
          <img src={QuotesIlus} alt="" />
        </div>
        <div className="flex justify-center items-center text-center">
          <p className="text-lg font-Rubik text-secondary">
            In just small steps you’ll connected directly to our technology.
            <br />
            Knowledge about your own-power, your rivals, <br /> your voters, and
            your region in Election.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuoteAbout;
