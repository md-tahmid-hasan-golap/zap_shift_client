import {
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] rounded-3xl text-white mt-20 mx-4 lg:mx-8">
      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* Logo */}
        <div className="flex justify-center">
          <img src="/logo.png" alt="ZapShift Logo" className="h-12" />
        </div>

        {/* Description */}
        <p className="text-center text-gray-400 text-sm md:text-base mt-5 max-w-3xl mx-auto leading-7">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        {/* Top Border */}
        <div className="border-t border-cyan-800 my-8"></div>

        {/* Menu */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
          <a href="#" className="hover:text-lime-400 duration-300">
            Services
          </a>

          <a href="#" className="hover:text-lime-400 duration-300">
            Coverage
          </a>

          <a href="#" className="hover:text-lime-400 duration-300">
            About Us
          </a>

          <a href="#" className="hover:text-lime-400 duration-300">
            Pricing
          </a>

          <a href="#" className="hover:text-lime-400 duration-300">
            Blog
          </a>

          <a href="#" className="hover:text-lime-400 duration-300">
            Contact
          </a>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-cyan-800 my-8"></div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-[#0077B5] flex items-center justify-center hover:scale-110 duration-300"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 duration-300"
          >
            <FaXTwitter />
          </a>

          <a
            href="#"
            className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 duration-300"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 duration-300"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
