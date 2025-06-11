import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiOutlineMenu, HiX, HiOutlineShoppingCart } from "react-icons/hi";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation links data
  const navLinks = {
    left: [
      { name: "SHOP", path: "/shop" },
      { name: "PLAN MY KITCHEN", path: "/plan_kitchen" },
    ],
    right: [
      { name: "ABOUT US", path: "/about" },
      { name: "GALLERY", path: "#gallery" },
      { name: "MY ORDER", path: "/cart", icon: HiOutlineShoppingCart },
    ],
    social: [
      { icon: FaFacebookF, url: "https://facebook.com" },
      { icon: FaTwitter, url: "https://twitter.com" },
      { icon: FaInstagram, url: "https://instagram.com" },
    ],
  };

  const renderLink = ({ name, path, icon: Icon }) => {
    const isOrderLink = name === "MY ORDER";
    const isHashLink = path.startsWith("#");

    const linkClasses = `px-10 py-4 transition-colors whitespace-nowrap ${
      isOrderLink
        ? "border border-white rounded-full hover:bg-secondary hover:border-secondary flex items-center gap-2"
        : "hover:text-secondary"
    }`;

    const linkContent = (
      <>
        {name}
        {Icon && <Icon className="w-5 h-5" />}
      </>
    );

    if (isHashLink) {
      return location.pathname === "/" ? (
        <a href={path} className={linkClasses}>
          {linkContent}
        </a>
      ) : (
        <Link
          to="/"
          state={{ scrollTo: path.replace("#", "") }}
          className={linkClasses}
        >
          {linkContent}
        </Link>
      );
    }

    return (
      <Link to={path} className={linkClasses}>
        {linkContent}
      </Link>
    );
  };

  return (
    <div className="w-full">
      <nav className="relative flex items-center justify-center text-white px-4 py-4">
        {/* Social Icons */}
        <div className="hidden md:flex space-x-4 mt-2">
          {navLinks.social.map(({ icon: Icon, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Left Links */}
        <ul className="hidden md:flex items-center space-x-8 text-lg">
          {navLinks.left.map((link) => (
            <li key={link.name}>{renderLink(link)}</li>
          ))}
        </ul>

        {/* Logo */}
        <div className="flex justify-center md:flex-none">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-32 mx-4" />
          </Link>
        </div>

        {/* Right Links */}
        <ul className="hidden md:flex items-center space-x-8 text-lg">
          {navLinks.right.map((link) => (
            <li key={link.name}>{renderLink(link)}</li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-end ml-auto">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none hover:text-secondary transition-colors"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiOutlineMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-stone-200 text-black py-4 px-6">
          {[...navLinks.left, ...navLinks.right].map((link) => (
            <div key={link.name} className="py-2 border-b">
              {renderLink(link)}
            </div>
          ))}
        </div>
      )}
      <div className="w-full md:w-2/3 mx-auto border-t border-gray-400 mt-1 "></div>
    </div>
  );
};

export default Navbar;
