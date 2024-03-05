import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14">
      <div className="w-full m-auto p-4 max-w-screen-2xl xl:max-w-[1400px]">
        <div className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
          {/* LEFT START */}
          <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
            {/* MENU START */}
            <div className="flex flex-col gap-3 shrink-0">
              <div className="font-clashDisplay font-semibold uppercase text-sm cursor-pointer tracking-widest">
                Find a store
              </div>
              <div className="font-inter font-medium capitalize text-sm cursor-pointer">
                become a partner
              </div>
              <div className="font-inter font-medium capitalize text-sm cursor-pointer">
                sign up for email
              </div>
              <div className="font-inter font-medium capitalize text-sm cursor-pointer">
                send us feedback
              </div>
              <div className="font-inter font-medium capitalize text-sm cursor-pointer">
                student discount
              </div>
            </div>
            {/* MENU END */}

            {/* NORMAL MENU START */}
            <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
              {/* MENU START */}
              <div className="flex flex-col gap-3 font-inter">
                <div className="font-clashDisplay font-semibold uppercase text-sm tracking-widest">
                  get help
                </div>
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  Order Status
                </div>
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  Delivery
                </div>
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  Returns
                </div>
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  Payment Options
                </div>
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  Contact Us
                </div>
              </div>
              {/* MENU END */}

              {/* MENU START */}
              <div className="flex flex-col gap-3 font-inter">
                <div className="font-clashDisplay font-semibold uppercase text-sm tracking-widest">
                  About nike
                </div>
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  News
                </div>
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  Careers
                </div>
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  Investors
                </div>
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  Sustainability
                </div>
              </div>
              {/* MENU END */}
            </div>
            {/* NORMAL MENU END */}
          </div>
          {/* LEFT END */}

          {/* RIGHT START */}
          <div className="flex gap-4 justify-center md:justify-start">
            <div
              onClick={() => window.open("https://facebook.com", "_blank")}
              className="w-10 h-10 rounded-full bg-white/[0.5] flex items-center justify-center text-black hover:bg-white cursor-pointer"
            >
              <FaFacebookF size={20} />
            </div>
            <a
              href="https://twitter.com"
              className="w-10 h-10 rounded-full bg-white/[0.5] flex items-center justify-center text-black hover:bg-white cursor-pointer"
            >
              <FaTwitter size={20} />
            </a>
            <div className="w-10 h-10 rounded-full bg-white/[0.5] flex items-center justify-center text-black hover:bg-white cursor-pointer">
              <FaYoutube size={20} />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/[0.5] flex items-center justify-center text-black hover:bg-white cursor-pointer">
              <FaInstagram size={20} />
            </div>
          </div>
          {/* RIGHT END */}
        </div>
        <div className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
          {/* LEFT START */}
          <div className="text-[16px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left font-inter">
            © 2024{" "}
            <Link
              to="https://github.com/ParthKanojiya"
              target="_blank"
              className="font-black"
            >
              Parth Kanojiya
            </Link>
            , Inc. All Rights Reserved
          </div>
          {/* LEFT END */}

          {/* RIGHT START */}
          <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center font-inter">
            <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
              Guides
            </div>
            <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
              Terms of Sale
            </div>
            <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
              Terms of Use
            </div>
            <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
              Privacy Policy
            </div>
          </div>
          {/* RIGHT END */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
