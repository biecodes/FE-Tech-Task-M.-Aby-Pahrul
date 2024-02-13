import React from "react";

const Subscription = () => {
  return (
    <section className="w-full flex justify-center items-center mt-40 mb-20 ">
      <div className="w-3/4 p-10 m-5 bg-primary flex justify-between rounded-[10px]">
        <div className=" text-white gap-3">
          <h1 className=" font-medium font-Rubik text-3xl">
            Subscribe Now for <br /> Get Special Features!
          </h1>
          <p className="font-Rubik mt-3">
            Let's subscribe with us and find the fun.
          </p>
        </div>

        <div className="w-ful flex items-center justify-center text-center">
          <button className="bg-transparent border-2 bg-white hover:border-white hover:bg-primary hover:text-white text-primary font-semibold px-16 py-3 text-lg rounded-[10px]">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
