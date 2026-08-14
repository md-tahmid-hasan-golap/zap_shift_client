import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import { useContext } from "react";

const SignUp = () => {
  const { signUpUser, signInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Email & Password Sign Up
  const handleSignUp = (data) => {
    signUpUser(data.email, data.password)
      .then((res) => {
        console.log(res);

        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text: "Your account has been created successfully.",
          confirmButtonColor: "#03373D",
        }).then(() => {
          navigate("/");
        });
      })
      .catch((err) => {
        console.error(err);

        if (err.code === "auth/email-already-in-use") {
          Swal.fire({
            icon: "warning",
            title: "Email Already Registered!",
            text: "This email is already registered. Please sign in instead.",
            confirmButtonColor: "#03373D",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Registration Failed!",
            text: err.message,
            confirmButtonColor: "#03373D",
          });
        }
      });
  };

  // Google Sign In
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res);

        Swal.fire({
          icon: "success",
          title: "Google Sign In Successful!",
          text: "Welcome to ZapShift!",
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
        onSubmit={handleSubmit(handleSignUp)}
        className="w-full max-w-md mx-auto bg-white rounded-2xl p-5 sm:p-7 shadow-sm"
      >
        <fieldset className="space-y-4">
          {/* Title */}
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#03373D]">
              Create an Account
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Register to get started with ZapShift
            </p>
          </div>

          {/* Name */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className={`input input-bordered w-full ${
                errors.name ? "input-error" : ""
              }`}
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
            />

            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
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
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
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
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Register */}
          <button
            type="submit"
            className="btn w-full bg-[#03373D] hover:bg-[#02282D] text-white border-none"
          >
            Register
          </button>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Google Button */}
          <button
            type="button"
            onClick={handleSignInWithGoogle}
            className="btn w-full bg-white text-black border border-gray-300 hover:bg-gray-100"
          >
            <FaGoogle className="text-red-500 text-lg" />
            Continue with Google
          </button>

          {/* Sign In */}
          <p className="text-center text-sm text-gray-500 pt-2">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-semibold text-[#03373D] hover:text-lime-500"
            >
              Sign In
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUp;
