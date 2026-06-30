import { Link, NavLink } from "react-router";
import logo from "../../src/assets/banner/logo.png";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/coverage">Coverage</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-8 py-3">
      {/* Logo Section */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <Link to="/" className="flex items-center gap-2 w-fit">
          <img src={logo} alt="ZapShift" className="h-10" />
          <span className="text-2xl font-bold text-gray-800">ZapShift</span>
        </Link>
      </div>

      {/* Center Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 font-medium text-gray-700">
          {links}
        </ul>
      </div>

      {/* Buttons */}
      <div className="navbar-end gap-3">
        <Link
          to="/signin"
          className="btn btn-ghost border border-gray-200 rounded-xl px-5 font-semibold"
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          className="btn bg-[#D4F866] hover:bg-[#C2E45d] text-black border-none rounded-xl px-6 font-bold flex items-center gap-2"
        >
          Sign Up
          <span className="bg-[#1A201C] text-white rounded-full p-1.5 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
