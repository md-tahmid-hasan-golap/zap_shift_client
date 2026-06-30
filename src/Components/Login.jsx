import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { userSignIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelLogin = (data) => {
    userSignIn(data.email, data.password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Login successful.",
          confirmButtonColor: "#D8F349",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message || "Invalid email or password.",
          confirmButtonColor: "#D8F349",
        });
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Google Login successful.",
          confirmButtonColor: "#D8F349",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: error.message,
          confirmButtonColor: "#D8F349",
        });
      });
  };

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
      <p className="mb-6 text-gray-600">Login with ZapShift</p>

      <form onSubmit={handleSubmit(handelLogin)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            placeholder="Email"
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-[#D8F349]"
            }`}
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            placeholder="Password"
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.password
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-[#D8F349]"
            }`}
          />
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
        </div>

        <Link
          to="/forgot-password"
          className="text-sm text-gray-500 hover:underline block"
        >
          Forget Password?
        </Link>

        <button
          type="submit"
          className="w-full bg-[#D8F349] hover:bg-[#c6df42] text-black font-bold py-3 rounded-lg transition"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-center text-sm">
        Don't have any account?{" "}
        <Link to="/signup" className="text-[#D8F349] font-bold">
          Register
        </Link>
      </p>

      <div className="divider text-gray-400 my-4 text-sm">Or</div>

      <button
        type="button"
        onClick={handleSignInWithGoogle}
        className="w-full bg-gray-100 hover:bg-gray-200 py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
          alt="Google"
          className="w-5 h-5"
        />
        Login with google
      </button>
    </div>
  );
};

export default Login;
