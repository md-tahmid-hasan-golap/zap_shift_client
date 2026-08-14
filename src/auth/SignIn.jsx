import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import { useContext } from "react";

const SignIn = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Email & Password Sign In
  const handleSignIn = (data) => {
    signInUser(data.email, data.password)
      .then((res) => {
        console.log(res);

        Swal.fire({
          icon: "success",
          title: "Sign In Successful!",
          text: "Welcome back to ZapShift.",
          confirmButtonColor: "#03373D",
        }).then(() => {
          navigate("/");
        });
      })
      .catch((err) => {
        console.error(err);

        if (err.code === "auth/invalid-credential") {
          Swal.fire({
            icon: "error",
            title: "Sign In Failed!",
            text: "Email or password is incorrect.",
            confirmButtonColor: "#03373D",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Sign In Failed!",
            text: err.message,
            confirmButtonColor: "#03373D",
          });
        }
      });
  };

  // Google Sign In
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res);

        Swal.fire({
          icon: "success",
          title: "Google Sign In Successful!",
          text: "Welcome back to ZapShift.",
          confirmButtonColor: "#03373D",
        }).then(() => {
          navigate("/");
        });
      })
      .catch((err) => {
        console.error(err);

        Swal.fire({
          icon: "error",
          title: "Google Sign In Failed!",
          text: err.message,
          confirmButtonColor: "#03373D",
        });
      });
  };

  return (
    <div className="w-full px-4 sm:px-6">
      <form
        onSubmit={handleSubmit(handleSignIn)}
        className="w-full max-w-md mx-auto bg-white rounded-2xl p-5 sm:p-7 shadow-sm"
      >
        <fieldset className="space-y-4">
          {/* Title */}
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#03373D]">
              Sign In
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Welcome back! Please login to continue.
            </p>
          </div>

          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className={`input input-bordered w-full ${
                errors.email ? "input-error" : ""
              }`}
              {...register("email", {
                required: "Email is required",
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className={`input input-bordered w-full ${
                errors.password ? "input-error" : ""
              }`}
              {...register("password", {
                required: "Password is required",
              })}
            />

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button type="button" className="link link-hover text-sm">
              Forgot Password?
            </button>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="btn w-full bg-[#03373D] hover:bg-[#02282D] text-white border-none"
          >
            Sign In
          </button>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn w-full bg-white text-black border border-gray-300 hover:bg-gray-100"
          >
            <FaGoogle className="text-red-500 text-lg" />
            Continue with Google
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-[#03373D] hover:text-lime-500"
            >
              Sign Up
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default SignIn;
