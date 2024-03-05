import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import Logo from "../assets/logo.svg";

const MenuData = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Products", url: "/products" },
  { id: 3, name: "About", url: "/about" },
];

const boxShadow = {
  Shadow: {
    border: "1px solid #282825",
    boxShadow: "3px 3px 0 0 #282825",
  },
  ShadowNone: {
    border: "none",
    boxShadow: "none",
  },
};

const Header = () => {
  const [open, setOpen] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="flex justify-between items-center p-4 md:pt-4 md:pb-4">
      {/* Left Nav Start */}
      <div className="left-nav flex items-center">
        <div
          className="block md:hidden w-10 text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <GiHamburgerMenu />
        </div>
        {/* 3 Dots Icon End */}

        <Link to="/" className="logo cursor-pointer flex-1 md:flex-none">
          <img src={Logo} alt="logo" className="logo-img" />
          <h1 className="text-2xl w-1/2 md:w-full md:text-3xl font-clashDisplay font-black leading-none">
            Web Shop
          </h1>
        </Link>
      </div>
      {/* Left Nav End */}

      {/* Center Nav Start */}
      <div className="center-nav">
        {/* 3 Dots Icon Start */}

        {/* Menu Start */}
        <div className="menu hidden md:flex md:items-center md:gap-8">
          {MenuData.map((data) => (
            <ul key={data.id}>
              <li>
                <Link
                  to={data.url}
                  className="menu-item font-clashDisplay text-xl font-bold cursor-pointer tracking-wider"
                >
                  {data.name}
                </Link>
              </li>
            </ul>
          ))}
        </div>
        {/* Menu End */}

        {/* Mobile Menu Start */}

        <div
          className={`mobile-menu-wrapper absolute w-full h-dvh top-0 flex items-center justify-between transition-all ease-in-out duration-300 ${
            open ? "left-0" : "-left-full"
          }`}
        >
          <div
            className={`mobile-menu w-4/5 h-dvh bg-white transition-transform z-10
        `}
          >
            <div className="mobile-logo flex items-center gap-4 p-4">
              <img src={Logo} alt="logo" className="h-12" />
              <h2 className="font-clashDisplay text-2xl font-black">
                Web Shop
              </h2>
            </div>
            {MenuData.map((data) => (
              <ul key={data.id}>
                <li className="p-4 border-b-[1px]">
                  <a
                    href={data.url}
                    className="menu-item text-lg font-clashDisplay font-bold cursor-pointer tracking-wider"
                  >
                    {data.name}
                  </a>
                </li>
              </ul>
            ))}
          </div>
          <div
            className={`md:hidden text-1xl w-1/5 h-dvh bg-black text-white z-50 opacity-50 cursor-pointer`}
            onClick={() => setOpen(!open)}
          ></div>
        </div>
        {/* Mobile Menu End */}
      </div>
      {/* Center Nav End */}

      {/* Right Nav Start */}
      <div className="right-nav flex items-center gap-4">
        {/* Search Bar Start */}
        <div
          className={`search-bar sm:flex sm:items-center justify-between rounded cursor-pointer relative bg-[#e9e9e9]`}
          style={{
            ...{
              ...(screenWidth >= 640 ? boxShadow.Shadow : boxShadow.ShadowNone),
            },
          }}
        >
          <div className="search-icon pl-2 pr-2 pt-2 pb-2">
            <svg
              className=""
              data-testid="geist-icon"
              fill="none"
              width="28"
              height="28"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path>
              <path d="M16 16l4.5 4.5"></path>
            </svg>
          </div>
          <div className="input w-full hidden sm:flex">
            <input
              type="search"
              placeholder="Search..."
              className="bg-transparent placeholder:text-neutral-500 pt-2 pb-2 outline-none w-full font-clashDisplay placeholder:font-medium font-semibold placeholder:tracking-wider tracking-wider"
            />
          </div>
        </div>
        {/* Search Bar End */}

        <Link to="/cart" className="cart">
          <div className="cart cursor-pointer">
            <span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.25 17.25H6.54545L3.93015 2.86584C3.89873 2.69303 3.80766 2.53673 3.67281 2.42419C3.53796 2.31164 3.36789 2.25 3.19225 2.25H1.5"
                  stroke="#111112"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 21C8.53553 21 9.375 20.1605 9.375 19.125C9.375 18.0895 8.53553 17.25 7.5 17.25C6.46447 17.25 5.625 18.0895 5.625 19.125C5.625 20.1605 6.46447 21 7.5 21Z"
                  stroke="#111112"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.25 21C18.2855 21 19.125 20.1605 19.125 19.125C19.125 18.0895 18.2855 17.25 17.25 17.25C16.2145 17.25 15.375 18.0895 15.375 19.125C15.375 20.1605 16.2145 21 17.25 21Z"
                  stroke="#111112"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.86363 13.5H17.6345C17.9858 13.5 18.3259 13.3767 18.5956 13.1516C18.8653 12.9265 19.0475 12.6139 19.1103 12.2683L20.25 6H4.5"
                  stroke="#111112"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {/* <span className="cart-title hidden sm:block text-xl font-inter font-bold">
              Cart
            </span> */}
          </div>
        </Link>
      </div>
      {/* Right Nav End */}
    </header>
  );
};

export default Header;
