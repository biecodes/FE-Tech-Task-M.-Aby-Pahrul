import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import WhyChooseUs from "../components/WhyChooseUs";
import AppOverview from "../components/AppOverview";
import HowItWorks from "../components/HowItWorks";
import PlansAndPricing from "../components/PlansAndPricing";
import AskedQuestion from "../components/AskedQuestion";
import Subscription from "../components/Subscription";
import Footer from "../components/Footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <AppOverview />
      <HowItWorks />
      <PlansAndPricing />
      <AskedQuestion />
      <Subscription />
      <Footer />
    </>
  );
};
