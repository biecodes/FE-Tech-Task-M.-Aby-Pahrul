import React from "react";
import NavbarAbout from "../components/AboutUs/NavbarAbout";
import HeroAbout from "../components/AboutUs/HeroAbout";
import QuoteAbout from "../components/AboutUs/QuoteAbout";
import AdvisorAbout from "../components/AboutUs/AdvisorAbout";
import PoliticAbout from "../components/AboutUs/PoliticAbout";
import Subsription from "../components/Subscription";
import Footer from "../components/Footer";

export const AboutUs = () => {
  return (
    <>
      <NavbarAbout />
      <HeroAbout />
      <QuoteAbout />
      <AdvisorAbout />
      <PoliticAbout />
      <Subsription />
      <Footer />
    </>
  );
};
