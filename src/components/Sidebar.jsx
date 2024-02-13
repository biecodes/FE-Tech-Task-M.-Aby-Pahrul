import React, { useState } from "react";
import LogoSide from "../assets/Logo-sidebar.svg";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RiDashboard2Line } from "react-icons/ri";
import { FiSlack } from "react-icons/fi";
import { RiArchiveLine } from "react-icons/ri";
import { FiServer } from "react-icons/fi";
import { FiDatabase } from "react-icons/fi";
import { IoWifi } from "react-icons/io5";
import { TbBrandFigma } from "react-icons/tb";
import { FiImage } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiPocket } from "react-icons/fi";
import { FiTable } from "react-icons/fi";

import { Link } from "react-router-dom";

const Sidebar = () => {
  const menus = [
    { name: "DashBoard", link: "/dashboard", icon: RiDashboard2Line },
    { name: "Visualization", link: "/", icon: FiSlack, margin: true },
    { name: "Case", link: "/", icon: RiArchiveLine },
    { name: "Data Set", link: "/", icon: FiServer },
    { name: "Data Source Manager", link: "/usermanagement", icon: FiDatabase },
    { name: "Connection", link: "/", icon: IoWifi },
    { name: "Icon", link: "/", icon: TbBrandFigma, margin: true },
    { name: "Image", link: "/", icon: FiImage },
    { name: "Account", link: "/", icon: FiUser, margin: true },
    { name: "Role", link: "/", icon: FiPocket },
    { name: "Workspace", link: "/", icon: FiTable },
  ];
  const [open, setOpen] = useState(true);
  return (
    <side className="sidebar flex  bg-slate-500 ">
      <div
        className={`bg-[#2A3042] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-sideBarText px-4`}
      >
        <div className={` ${open ? "m-2 mt-5" : "m-5"}`}>
          <img src={LogoSide} alt="" />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-sideBarText font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className=" flex bg-slate-100 h-auto justify-start">
        <div className="h-[64px] flex justify-center items-center text-center bg-white">
          <HiOutlineMenuAlt2
            color="#2A3042"
            size={26}
            className="ml-3 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
    </side>
  );
};

export default Sidebar;
