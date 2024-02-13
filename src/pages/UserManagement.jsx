import React from "react";
import Sidebar from "../components/Sidebar";
import NavbarDashboard from "../components/Dashboard/NavbarDashboard";
import Table from "../components/UserManagement/Table";
import { GrHomeRounded } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

export const UserManagement = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-slate-100 gap-5">
        <NavbarDashboard />
        <div className="w-full p-5 ">
          <h1 className="font-bold font-Rubik text-xl mt-5 text-[#0B132A]">
            USER MANAGEMENT
          </h1>
        </div>

        <div className=" p-5">
          <Table />
        </div>
      </div>
    </div>
  );
};
