import React from "react";
import LogoFooter from "../assets/Footer/Logo-footer.svg";
import FacebookLogo from "../assets/Footer/Facebook.svg";
import TwitterLogo from "../assets/Footer/Twitter.svg";
import InstagramLogo from "../assets/Footer/Instagram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const FooterLinks = {
    product: {
      caption: "Product",
      links: [
        {
          name: "Download",
          path: "/",
        },
        {
          name: "Pricing",
          path: "/",
        },
        {
          name: "Locations",
          path: "/",
        },
        {
          name: "Server",
          path: "/",
        },
        {
          name: "Countries",
          path: "/",
        },
        {
          name: "Blog",
          path: "/",
        },
      ],
    },
    engage: {
      caption: "Engage",
      links: [
        {
          name: "Geolabs ?",
          path: "/",
        },
        {
          name: "FAQ",
          path: "/",
        },
        {
          name: "Tutorials",
          path: "/",
        },
        {
          name: "About Us",
          path: "/",
        },
        {
          name: "Privacy Policy",
          path: "/",
        },
        {
          name: "Terms of Service",
          path: "/",
        },
      ],
    },
    earnMoney: {
      caption: "Earn Money",
      links: [
        {
          name: "Affiliate",
          path: "/",
        },
        {
          name: "Become Partner",
          path: "/",
        },
      ],
    },
  };

  return (
    <section className="w-full flex justify-center items-center bg-greyFooter p-10">
      <div className="w-3/4 flex">
        <div className="w-1/2 p-10">
          <img src={LogoFooter} alt="" className="mb-5" />
          <p>
            <span className="font-bold font-Rubik mb-5">Geolabs</span> is a
            private virtual network that has unique features and has high
            security.
          </p>
          <div className="flex flex-row p-0 space-x-5 mt-5 justify-start items-center mb-10 mr-32">
            <img
              src={FacebookLogo}
              alt=""
              className="bg-primary bg-contain shadow-lg shadow-black rounded-full"
            />
            <img
              src={TwitterLogo}
              alt=""
              className="bg-primary bg-contain shadow-lg shadow-black rounded-full"
            />
            <img
              src={InstagramLogo}
              alt=""
              className="bg-primary bg-contain shadow-lg shadow-black rounded-full"
            />
          </div>
          <p className="font-light font-Rubik text-sm text-[#AFB5C0]">
            ©2020<span className="font-semibold">EBDESK</span>
          </p>
        </div>

        <div className="flex flex-col-3 justify-between gap-3 w-1/2 p-3">
          <div className="font-Rubik">
            <h2 className="font-semibold mb-5">
              {FooterLinks.product.caption}
            </h2>
            <ul className="flex flex-col gap-5">
              {FooterLinks.product.links.map((link, index) => (
                <li key={index} className="text-sm" rest={undefined}>
                  <Link
                    to={link.path}
                    className="text-color4 transition-all duration-300 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="font-Rubik">
            <h2 className="font-semibold mb-5">{FooterLinks.engage.caption}</h2>
            <ul className="flex flex-col gap-5">
              {FooterLinks.engage.links.map((link, index) => (
                <li key={index} className="text-sm" rest={undefined}>
                  <Link
                    to={link.path}
                    className="text-color4 transition-all duration-300 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="font-Rubik">
            <h2 className="font-semibold mb-5">
              {FooterLinks.earnMoney.caption}
            </h2>
            <ul className="flex flex-col gap-5">
              {FooterLinks.earnMoney.links.map((link, index) => (
                <li key={index} className="text-sm" rest={undefined}>
                  <Link
                    to={link.path}
                    className="text-color4 transition-all duration-300 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
