import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

interface IFormSignIn {
  name: string;
  password: string;
}

export const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormSignIn>();

  const onSubmit: SubmitHandler<IFormSignIn> = (data) => {
    console.log(data);
    toast.success("Đăng kí thành công");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm space-y-5"
    >
      <ToastContainer />
      <h2 className="text-3xl font-bold text-gray-800">Sign Up</h2>
      <p className="text-sm text-gray-500">
        Looks like you don't have an account
      </p>

      <Controller
        name="name"
        control={control}
        rules={{ required: "Name is required" }}
        render={({ field }) => (
          <>
            <input
              {...field}
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </>
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
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
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </>
        )}
      />

      <div className="text-sm text-gray-600 text-start">
        By selecting <span className="font-semibold">Agree and continue</span>{" "}
        below, I agree to{" "}
        <span className="text-green-600 hover:underline cursor-pointer">
          Terms of Service and Privacy Policy
        </span>
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
      >
        Agree and continue
      </button>
    </form>
  );
};
