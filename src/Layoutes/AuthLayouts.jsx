import { Outlet } from "react-router-dom";
import authImg from "../../src/assets/banner/authImage.png";
import Logo from "../Components/Logo";

const AuthLayouts = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Logo */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-6">
        <div className="flex justify-start">
          <Logo />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-6 lg:px-10 py-8">
        {/* Left Side */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src={authImg}
            alt="Authentication"
            className="w-full max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayouts;
