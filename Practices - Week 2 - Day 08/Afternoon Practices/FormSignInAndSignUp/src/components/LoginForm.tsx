import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

interface IFormSignIn {
  name: string;
  password: string;
}

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormSignIn>();

  const onSubmit: SubmitHandler<IFormSignIn> = (data) => {
    console.log(data);
    toast.success("Đăng nhập thành công");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm space-y-5"
    >
      <ToastContainer />
      <h2 className="text-3xl font-bold text-gray-800">Login</h2>
      <div className="flex items-center gap-4">
        <img
          width={100}
          className="rounded-full object-cover"
          src="https://tse3.mm.bing.net/th/id/OIP.EwG6x9w6RngqsKrPJYxULAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Avatar"
        />
        <div>
          <p className="text-xl font-bold text-gray-700">Jane Down</p>
          <p className="text-sm text-gray-500">janedoe@gmail.com</p>
        </div>
      </div>

      <Controller
        name="password"
        control={control}
        rules={{ required: "Password is required" }}
        render={({ field }) => (
          <>
            <input
              {...field}
              type="password"
              placeholder="password"
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

      <div className="text-sm text-gray-600 text-start">
        <span className="text-green-600 hover:underline cursor-pointer">
          Forgot your password
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
