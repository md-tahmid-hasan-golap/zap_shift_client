import { Link } from "react-router-dom";
import logo from "../../src/assets/banner/logo.png";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center justify-center">
      <img src={logo} alt="Logo" className="h-10 w-10" />
      <h2 className="ml-2 text-lg font-bold text-gray-800">ZapShift</h2>
    </Link>
  );
};

export default Logo;
