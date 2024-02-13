import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

import Sidebar from "../components/Sidebar";
import NavbarDashboard from "../components/Dashboard/NavbarDashboard";
import LineChart from "../components/Dashboard/LineChart";
import BarChart from "../components/Dashboard/BarChart";
import RadarChart from "../components/Dashboard/RadarChart";
import CircleChart from "../components/Dashboard/CircleChart";
import BarDouble from "../components/Dashboard/BarDouble";

export const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-slate-100 pb-5">
        <NavbarDashboard />
        <div className="flex w-full items-center text-center p-2 mt-4">
          <GrHomeRounded color="#44556C" />
          <MdNavigateNext color="#8697A8" size={20} />
          <h1 className="flex text-[#44556C] font-semibold">Statistik</h1>
          <MdNavigateNext color="#8697A8" size={20} />
          <h1 className="flex text-[#8697A8] font-base">Wilayah</h1>
        </div>
        <div className="flex">
          <div
            key="chart1"
            className="w-1/2 p-4  mt-4 bg-white shadow-md rounded-md mr-4 flex items-center justify-center"
          >
            <LineChart />
          </div>
          <div
            key="chart2"
            className="w-1/2 p-4 mt-4 bg-white shadow-md rounded-md"
          >
            <BarChart />
          </div>
        </div>
        <div className="flex mt-5  gap-5">
          <div key="chart3" className="w-1/3 p-4 bg-white shadow-md rounded-md">
            <BarDouble />
          </div>
          <div key="chart4" className="w-1/3 p-4 bg-white shadow-md rounded-md">
            <LineChart />
          </div>
          <div key="chart5" className="w-1/3 p-4 bg-white shadow-md rounded-md">
            <BarChart />
          </div>
        </div>
        <div className="flex mt-5 gap-5">
          <div key="chart6" className="w-1/3 p-4 bg-white shadow-md rounded-md">
            <LineChart />
          </div>
          <div key="chart7" className="w-2/3 p-4 bg-white shadow-md rounded-md">
            <BarDouble />
          </div>
        </div>
      </div>
            
    </div>
  );
};
