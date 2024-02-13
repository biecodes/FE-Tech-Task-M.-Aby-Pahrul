import React, { useState } from "react";

const Accordion = ({ title, answer, accordionOpen, setAccordionOpen }) => (
  <div className="py-2 border-2 border-cardBorder">
    <button
      onClick={() => setAccordionOpen(!accordionOpen)}
      className={`flex p-4 justify-between w-full ${
        accordionOpen ? " italic text-blue-500" : ""
      }`}
    >
      <span className="font-semibold text-base">{title}</span>
      {accordionOpen ? (
        <span className="text-blue-500 text-3xl font-semibold">-</span>
      ) : (
        <span className="text-2xl">+</span>
      )}
    </button>
    <div
      className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
        accordionOpen
          ? "grid-rows-[1fr] opacity-100"
          : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className=" ml-2 overflow-hidden line-clamp-6">
        <p className="text-base m-3">{answer}</p>
      </div>
    </div>
  </div>
);

const AskedQuestion = () => {
  const [accordion1Open, setAccordion1Open] = useState(false);
  const [accordion2Open, setAccordion2Open] = useState(false);
  const [accordion3Open, setAccordion3Open] = useState(false);
  const [accordion4Open, setAccordion4Open] = useState(false);

  return (
    <section className="w-full h-screen flex items-center justify-center mb-10 ">
      <div className="w-[725px] relative  items-center justify-center mb-20  mt-28">
        <div className=" grid items-center justify-center text-center mb-20 ">
          <h1 className="font-Rubik font-bold text-3xl">
            Frequenly Asked Questions
          </h1>
        </div>
        <div className="grid grid-cols-1 w-full items-center justify-center gap-5">
          <Accordion
            title="What do you mean by public-facing usage?"
            answer="We define public-facing usage as leveraging CARTO to power enterprise-scale applications that are made available to external parties such as clients or the public, as opposed to internal demonstration-only applications."
            accordionOpen={accordion1Open}
            setAccordionOpen={setAccordion1Open}
            className="mb-5 "
          />
          <Accordion
            title="Can i  buy more storage for my individual plan?"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique consequatur nemo accusamus corporis expedita recusandae vel! Velit sint doloribus officiis, blanditiis aliquid repellendus voluptatum quod in eligendi, autem sunt."
            accordionOpen={accordion2Open}
            setAccordionOpen={setAccordion2Open}
            className="mb-5"
          />
          <Accordion
            title="What happens to my data after the trial or if i cancel my subscription?"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique consequatur nemo accusamus corporis expedita recusandae vel! Velit sint doloribus officiis, blanditiis aliquid repellendus voluptatum quod in eligendi, autem sunt."
            accordionOpen={accordion3Open}
            setAccordionOpen={setAccordion3Open}
            className="mb-5"
          />
          <Accordion
            title="Can i cancel my monthly or annual subscription?"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique consequatur nemo accusamus corporis expedita recusandae vel! Velit sint doloribus officiis, blanditiis aliquid repellendus voluptatum quod in eligendi, autem sunt."
            accordionOpen={accordion4Open}
            setAccordionOpen={setAccordion4Open}
            className="mb-5"
          />
        </div>
        <div className="w-ful flex items-center justify-center text-center">
          <button className="bg-transparent border-2 border-primary hover:bg-primary hover:text-white text-primary font-semibold px-12 py-3 text-lg mt-10 rounded-[55px]">
            Add Question
          </button>
        </div>
      </div>
    </section>
  );
};

export default AskedQuestion;
