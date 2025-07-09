import Lottie from "lottie-react";
import Animation from "../components/animation.json";
import { useForm } from "react-hook-form";
interface IFormInputs {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  newsletter?: boolean;
  terms: boolean;
}
export default function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({ mode: "onChange" });
  const onSubmit = (data: IFormInputs) => {
    console.log(data);
  };
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center font-sans bg-gray-100 text-black px-2 mt-2 mb-2">
      <div className="flex flex-col md:flex-row w-full max-w-6xl rounded-lg overflow-hidden shadow-lg">
        <div className="w-full md:w-1/2 bg-blue-600 text-white flex flex-col items-center justify-center px-6 py-10 md:px-10 md:py-16">
          <Lottie
            animationData={Animation}
            className="w-2/3 sm:w-full max-w-sm"
          />
          <h1 className="text-lg font-bold text-center mt-6">The boys</h1>
        </div>

        <div className="w-full md:w-1/2 bg-white flex items-center justify-center px-4 sm:px-6 md:px-8 py-10 md:py-16">
          <form className="w-full max-w-4xl space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Register</h2>
            <p className="text-gray-500 text-lg font-semibold">
              Manage all your lottery efficiently
            </p>
            <p className="text-gray-500 text-sm">
              Let's get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-black font-bold">First Name</span>
                <input
                  {...register("firstName", {
                    required: "First Name is required",
                    minLength: {
                      value: 2,
                      message: "Minimum 2 characters",
                    },
                  })}
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <span className="text-black font-bold">Last Name</span>
                <input
                  {...register("lastName", {
                    required: "Last Name is required",
                    minLength: {
                      value: 2,
                      message: "Minimum 2 characters",
                    },
                  })}
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
              <div>
                <span className="text-black font-bold">Phone Number</span>
                <input
                  {...register("phoneNumber", {
                    required: "Phone Number is required",
                    pattern: {
                      value: /^\d{10,15}$/,
                      message: "Must be 10–15 digits",
                    },
                  })}
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
              <div>
                <span className="text-black font-bold">Email</span>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <span className="text-black font-bold">Password</span>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Minimum 8 characters",
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                      message: "Must include uppercase, lowercase and number",
                    },
                    validate: (value) =>
                      !/\s/.test(value) || "No spaces allowed",
                  })}
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div>
                <span className="text-black font-bold">Confirm Password</span>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Minimum 8 characters",
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                      message: "Must include uppercase, lowercase and number",
                    },
                    validate: (value) =>
                      !/\s/.test(value) || "No spaces allowed",
                  })}
                  placeholder="Confirm Password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-start space-x-2 text-sm">
              <input
                type="checkbox"
                className="mt-1"
                {...register("newsletter")}
              />
              <label className="text-gray-400">
                Yes, I want to receive Lottery Display emails
              </label>
              {errors.newsletter && (
                <p className="text-red-500 text-sm">
                  {errors.newsletter.message}
                </p>
              )}
            </div>

            <div className="flex items-start space-x-2 text-sm">
              <input
                type="checkbox"
                className="mt-1"
                {...register("terms", {
                  required: "You must agree to continue",
                })}
              />
              <label className="text-gray-400">
                I agree to all the{" "}
                <a href="#" className="text-blue-600 underline">
                  Terms, Privacy Policy
                </a>{" "}
                and Fees
              </label>
              {errors.terms && (
                <p className="text-red-500 text-sm">{errors.terms.message}</p>
              )}
            </div>
            <button
              onClick={handleSubmit(onSubmit)}
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
            >
              Create Account
            </button>

            <p className="text-sm text-center text-gray-600">
              Already have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
