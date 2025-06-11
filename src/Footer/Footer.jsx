import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import footerImg from "../assets/Bitmap_footer.png";

const Footer = () => {
  return (
    <footer className="relative bg-black  text-white text-normal mt-10">
      <div className="absolute inset-0">
        <Link to="/">
          <img
            src={footerImg}
            alt="Footer_Img"
            className="w-full h-full object-cover"
          />
        </Link>
        <div className="absolute inset-0 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 px-6 py-10 sm:px-10 md:px-20">
        <div className="flex items-center justify-center p-5 ">
          <div className="flex-grow border-t border-gray-600 "></div>
          <span className="mx-4 text-2xl font-semibold text-gray-800 ">
            <img
              src={logo}
              alt="Logo"
              className="relative z-10  px-4 py-2 w-32 h-auto"
            />
          </span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-10 md:gap-20 text-center md:text-left">
          {/* ABOUT */}
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul className="space-y-2 uppercase font-light font-sans text-gray-300">
              <li>
                <Link to="/shop" className=" text-base hover:underline">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/plan_kitchen" className="hover:underline">
                  Plan My Kitchen
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#gallery" className="hover:underline">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICE */}
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-4">Service</h4>
            <ul className="space-y-2 uppercase text-base font-light font-sans text-gray-300">
              <li>
                <Link to="/about" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/plan_kitchen" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:underline">
                  How to Buy
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:underline">
                  Downloads
                </Link>
              </li>
            </ul>
          </div>

          {/* INFO */}
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-4">Info</h4>
            <ul className="space-y-2 uppercase text-base font-light font-sans text-gray-300">
              <li>
                <Link to="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:underline">
                  Delivery
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* FOLLOW */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4">Follow</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/Facebook.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/Twitter_.svg" alt="Twitter" className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/Instagram.svg" alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-10 pt-6 text-center text-xs text-gray-500">
          {" "}
          © Copyright Online MTC Home Kitchens {new Date().getFullYear()} - All
          rights reserved.<br></br> Responsive website design, Development &
          Hosting by mtc.
        </div>
        <div className="mt-10 border-t border-gray-600 pt-6 text-center text-xs text-gray-500"></div>
      </div>
    </footer>
  );
};

export default Footer;
