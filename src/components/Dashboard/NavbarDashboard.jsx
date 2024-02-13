import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ProfileIcon from "../../assets/NavbarDashboard/Profile-icon.svg";
import { FaChevronDown } from "react-icons/fa";
import { HiOutlineMoon } from "react-icons/hi2";

const NavbarDashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSignOut = () => {
    console.log("Signing out...");
  };

  const handleProfileClick = () => {
    console.log("Viewing profile...");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdownOnOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdownOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeDropdownOnOutsideClick);
    };
  }, []);

  return (
    <div className="w-full bg-white flex justify-end p-3">
      <div className="flex items-center text-center">
        <HiOutlineMoon size={30} className="mr-2" />
      </div>
      <div
        className=" flex justify-center items-center text-center gap-2"
        ref={dropdownRef}
        onClick={toggleDropdown}
      >
        <img src={ProfileIcon} alt="" />
        <h1 className="font-Rubik text-[#0B132A]">User.inc</h1>
        <FaChevronDown size={10} />
      </div>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-12 mr-5 bg-white border rounded shadow-md overflow-hidden">
          <Link to="/">
            <button
              className="block px-4 py-2 text-gray-700 hover:text-black w-full text-left"
              onClick={() => {
                handleSignOut();
                toggleDropdown();
              }}
            >
              SignOut
            </button>
          </Link>
          <button
            className="block px-4 py-2 text-gray-700 hover:text-black w-full text-left"
            onClick={() => {
              handleProfileClick();
              toggleDropdown();
            }}
          >
            Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default NavbarDashboard;
