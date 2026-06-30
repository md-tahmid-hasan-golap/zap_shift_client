import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { userSignUp, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelRegister = (data) => {
    userSignUp(data.email, data.password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Account created successfully.",
          confirmButtonColor: "#D8F349",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message || "Something went wrong!",
          confirmButtonColor: "#D8F349",
        });
      });
  };

  const handelSignInswithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Registered with Google successfully.",
          confirmButtonColor: "#D8F349",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
          confirmButtonColor: "#D8F349",
        });
      });
  };

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-2">Create an Account</h2>
      <p className="mb-6 text-gray-600">Register with ZapShift</p>

      <div className="mb-6">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <form onSubmit={handleSubmit(handelRegister)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Name"
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.name
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-[#D8F349]"
            }`}
          />
          {errors.name && (
            <span className="text-red-500 text-xs">{errors.name.message}</span>
          )}
        </div>

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

        <button
          type="submit"
          className="w-full bg-[#D8F349] hover:bg-[#c6df42] text-black font-bold py-3 rounded-lg transition"
        >
          Register
        </button>
      </form>

      <p className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link to="/signin" className="text-[#D8F349] font-bold">
          Login
        </Link>
      </p>

      <div className="divider text-gray-400 my-4 text-sm">Or</div>

      <button
        type="button"
        onClick={handelSignInswithGoogle}
        className="w-full bg-gray-100 hover:bg-gray-200 py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
          alt="Google"
          className="w-5 h-5"
        />
        Register with google
      </button>
    </div>
  );
};

export default Register;
