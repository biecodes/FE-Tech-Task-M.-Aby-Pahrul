import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

const Navbar = ({ title }) => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/product" },
    { name: "Blog", path: "/blog" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
    { name: "About Us", path: "http://localhost:5173/aboutus" },
  ];

  return (
    <header className="w-full h-auto bg-transparent top-100 left-0">
      <nav className="w-full md:h-24 h-20 lg:px-24 md:px-12 px-15 flex justify-between items-center bg-transparent">
        <img
          className="relative w-132 h-33 top-62 left-150"
          src={Logo}
          alt=""
          srcset=""
        />
        <div className="flex flex-row p-0 space-x-10 text-particlesLight">
          {links.map((link) => (
            <Link
              to={link.path}
              className="hover:text-particlesBold hover:font-bold"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-row flex-start p-0 gap-6 items-center">
          <Link
            to="http://localhost:5173/signin"
            className="text-particlesBold inline-block font-bold hover:font-extrabold"
          >
            Sign In
          </Link>
          <button className="bg-transparent border-2 border-primary hover:bg-primary hover:text-white text-primary font-semibold px-10 py-2 rounded-[55px]">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
