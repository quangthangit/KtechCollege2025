import Lottie from "lottie-react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import Animation from "./Animation.json";

interface ILogin {
  email: string;
  password: string;
}

export const FormLogin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();

  const apiUrl = "https://server.aptech.io/auth/login";

  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Đăng nhập thành công");
        console.log("Login success:", result);
      } else {
        toast.warning("Đăng nhập thất bại");
        console.error("Login failed:", result.message || result.error);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="min-h-screen flex font-sans">
      <ToastContainer />
      <div className="w-1/2 bg-[#f2f6fa] flex flex-col justify-center items-center p-12">
        <h1 className="text-4xl font-bold text-[#2b2b2b] leading-tight mb-6">
          Set Your Partner
          <br />
          Recruitment on Auto-Pilot
        </h1>
        <div className="relative w-[300px] h-[300px]">
          <Lottie animationData={Animation} className="w-80 h-80" />
        </div>
      </div>
      <div className="w-1/2 bg-white flex flex-col justify-center px-12">
        <div className="max-w-md w-full mx-auto space-y-6">
          <p className="font-bold text-red-300 text-5xl w-28 mb-[200px]">
            GROVIA
          </p>
          <h2 className="text-4xl font-bold text-red-600">Login</h2>
          <p className="text-gray-60 font-bold text-xl">
            Login to your account
          </p>
          <p className="text-gray-500  text-l mb-4">
            Thank you for getting back to Grovia. Let's access our best
            recommendation contact for you.
          </p>
          <form onClick={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Invalid email address",
                  },
                  minLength: {
                    value: 5,
                    message: "Password must be at least 5 characters",
                  },
                }}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      type="text"
                      placeholder="Your Name"
                      className="mt-1 w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  validate: (value) =>
                    !/\s/.test(value) || "Password must not contain spaces",
                }}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      type="password"
                      placeholder="Password"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-red-600" />
                Remember me
              </label>
              <a href="#" className="text-red-500 hover:underline">
                Reset Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-4 rounded-lg hover:bg-red-700 transition"
            >
              SIGN IN
            </button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-4">
            Don’t have an account yet?{" "}
            <a href="#" className="text-red-600 hover:underline">
              Join Grovia Now!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
