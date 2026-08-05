import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

import logo from "../../src/assets/banner/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] text-white rounded-3xl mt-20 mx-4 lg:mx-8">
      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* Logo */}
        <div className="flex justify-center">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="ZapShift Logo"
              className="w-12 h-12 object-contain"
            />

            <h2 className="text-3xl font-bold">
              <span className="text-lime-400">Zap</span>
              <span className="text-white">Shift</span>
            </h2>
          </Link>
        </div>

        {/* Description */}
        <p className="text-center text-gray-400 text-sm md:text-base leading-7 max-w-3xl mx-auto mt-6">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments—we deliver on
          time, every time.
        </p>

        {/* Divider */}
        <div className="border-t border-cyan-800 my-8"></div>

        {/* Menu */}
        <ul className="flex flex-wrap justify-center gap-6 text-gray-300 text-sm md:text-base">
          <li>
            <Link to="/services" className="hover:text-lime-400 duration-300">
              Services
            </Link>
          </li>

          <li>
            <Link to="/coverage" className="hover:text-lime-400 duration-300">
              Coverage
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-lime-400 duration-300">
              About Us
            </Link>
          </li>

          <li>
            <Link to="/pricing" className="hover:text-lime-400 duration-300">
              Pricing
            </Link>
          </li>

          <li>
            <Link to="/blog" className="hover:text-lime-400 duration-300">
              Blog
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-lime-400 duration-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Divider */}
        <div className="border-t border-cyan-800 my-8"></div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-[#0077B5] flex items-center justify-center hover:scale-110 duration-300"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 duration-300"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 duration-300"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 duration-300"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} ZapShift. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
