import { Outlet, Link } from "react-router";
import authImg from "../../src/assets/banner/authImage.png";
import logo from "../../src/assets/banner/logo.png";

const AuthLayouts = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto mb-6">
        <Link to="/" className="flex items-center gap-2 w-fit">
          <img src={logo} alt="ZapShift" className="h-10" />
          <span className="text-2xl font-bold text-gray-800">ZapShift</span>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden min-h-[600px]">
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>

        <div className="hidden lg:flex w-1/2 bg-[#F9FBF0] items-center justify-center p-12">
          <img
            src={authImg}
            alt="Authentication"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayouts;
