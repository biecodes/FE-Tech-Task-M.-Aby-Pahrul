import React from "react";
import Navbar from "../components/Navbar";
import NotFoundIlus from "../assets/NotFound-ilus.svg";

export const NotFound = () => {
  return (
    <main>
      <Navbar />
      <section className="flex h-screen flex-row z-99 bg-white">
        <div className="w-full items-center justify-center">
          <div className="w-auto h-auto top-[275px] left-52 absolute items-cente">
            <h1 className="font-bold text-3xl mb-6">Ooops!</h1>
            <h1 className="font-bold text-3xl mb-5">Page Not Found!</h1>
            <p className="text-lg">This page doesn`t exist or was removed </p>
            <p className="mb-5 text-lg">We suggest you back to home</p>
            <button className="bg-primary px-10 py-2 rounded-[55px] text-white">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full">
          <div className="static items-center justify-center">
            <img
              src={NotFoundIlus}
              alt=""
              className=" right-40 w-[600px] h-[400px] top-[142px] absolute"
            />
          </div>
        </div>
      </section>
    </main>
  );
};
