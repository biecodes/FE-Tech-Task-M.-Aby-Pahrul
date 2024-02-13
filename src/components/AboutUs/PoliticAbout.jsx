import React from "react";
import Jokowi from "../../assets/AboutPolitics/Jokowi.svg";
import Airlangga from "../../assets/AboutPolitics/Airlangga.svg";
import Puan from "../../assets/AboutPolitics/Puan.svg";

const PoliticAbout = () => {
  const Advisor = ({ name, image, position, comment }) => (
    <div className="grid h-[230px] gap-3 border-2 border-cardBorder hover:border-primary p-5 rounded-[20px]">
      <div className="flex">
        <img src={image} alt="" className="mr-2 size-16" />
        <div className="grid gap-0">
          <h1 className="text-lg font-semibold font-DMSans ml-1">{name}</h1>
          <p className="text-sm font-DMSans text-[#4F5665]">{position}</p>
        </div>
      </div>

      <div className="">
        <p className="text-sm font-DMSans">{comment}</p>
      </div>
    </div>
  );
  return (
    <section className="w-full flex justify-center items-center p-5">
      <div className="w-4/5 mt-10 grid gap-10 items-center justify-center bg-transparent ">
        <div className=" grid items-center justify-center text-center">
          <h1 className="font-DMSans font-bold text-4xl mb-5">
            What Political Figure Say
          </h1>
          <p>
            These are the stories of political figure who have joined us with
            great pleasure when using this crazy feature.
          </p>
        </div>
        <div className="w-full grid grid-cols-3 items-center justify-center gap-5 mb-10">
          <Advisor
            image={Airlangga}
            name="Airlangga Hartanto"
            position="Menteri Koordinator dan Perekonomian RI"
            comment="Saya minta kepada segenap pengurus DPD, provinsi, kabupten dan kota, untuk kita harus memiliki roadmap 2024. Di tahun melakukan penggalangan opini masyarakat"
          />
          <Advisor
            image={Jokowi}
            name="Jokowi Dodo"
            position="Presiden RI"
            comment="Daerah merupakan bagian dari pemerintah yang langsung berinteraksi dengan "
          />
          <Advisor
            image={Puan}
            name="Puan Maharani"
            position="Ketua DPR dan Fraksi PDI Perjuangan"
            comment="Daerah merupakan bagian dari pemerintah yang langsung berinteraksi dengan masyarakat ketikaproses demokratisasi berlangsung."
          />
        </div>
      </div>
    </section>
  );
};

export default PoliticAbout;
