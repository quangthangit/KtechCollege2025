import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  gender: string;
  dob: string;
  country: string;
  hobbies: string[];
  profilePicture: FileList;
  bio: string;
}

export default function UserRegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const [bioLength, setBioLength] = useState(0);

  const onSubmit = (data: FormData) => {
    const file = data.profilePicture?.[0];
    if (file && !["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
      alert("Only .jpg, .jpeg, and .png files are allowed");
      return;
    }
    console.log(data);
  };

  const watchBio = watch("bio", "");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-white shadow rounded space-y-4">
      <h2 className="text-2xl font-bold mb-4">User Registration</h2>

      <div>
        <input
          type="text"
          placeholder="Full Name"
          {...register("fullName", { required: true, minLength: 3 })}
          className="w-full border p-2 rounded"
        />
        {errors.fullName && <p className="text-red-500 text-sm">Full Name must be at least 3 characters.</p>}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
          })}
          className="w-full border p-2 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">Invalid email format.</p>}
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: true,
            minLength: 8,
            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          })}
          className="w-full border p-2 rounded"
        />
        {errors.password && <p className="text-red-500 text-sm">Password must contain letters and numbers (min 8).</p>}
      </div>

      <div>
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            required: true,
            validate: (value) => value === watch("password"),
          })}
          className="w-full border p-2 rounded"
        />
        {errors.confirmPassword && <p className="text-red-500 text-sm">Passwords must match.</p>}
      </div>

      <div>
        <input
          type="tel"
          placeholder="Phone Number"
          {...register("phoneNumber", {
            required: true,
            pattern: /^[0-9]{10,15}$/,
          })}
          className="w-full border p-2 rounded"
        />
        {errors.phoneNumber && <p className="text-red-500 text-sm">Must be at least 10 digits.</p>}
      </div>

      <div>
        <label className="block font-semibold">Gender</label>
        <div className="flex gap-4">
          <label><input type="radio" value="Male" {...register("gender", { required: true })} /> Male</label>
          <label><input type="radio" value="Female" {...register("gender", { required: true })} /> Female</label>
          <label><input type="radio" value="Other" {...register("gender", { required: true })} /> Other</label>
        </div>
        {errors.gender && <p className="text-red-500 text-sm">Please select a gender.</p>}
      </div>

      <div>
        <input
          type="date"
          {...register("dob", {
            required: true,
            validate: (value) => {
              const age = new Date().getFullYear() - new Date(value).getFullYear();
              return age >= 18;
            },
          })}
          className="w-full border p-2 rounded"
        />
        {errors.dob && <p className="text-red-500 text-sm">You must be at least 18 years old.</p>}
      </div>

      <div>
        <select
          {...register("country", { required: true })}
          className="w-full border p-2 rounded"
        >
          <option value="">Select Country</option>
          <option value="Vietnam">Vietnam</option>
          <option value="Korea">Korea</option>
          <option value="USA">USA</option>
        </select>
        {errors.country && <p className="text-red-500 text-sm">Please select a country.</p>}
      </div>

      <div>
        <label className="block font-semibold">Hobbies</label>
        <div className="flex flex-col">
          <label><input type="checkbox" value="Reading" {...register("hobbies", { required: true })} /> Reading</label>
          <label><input type="checkbox" value="Traveling" {...register("hobbies", { required: true })} /> Traveling</label>
          <label><input type="checkbox" value="Gaming" {...register("hobbies", { required: true })} /> Gaming</label>
        </div>
        {errors.hobbies && <p className="text-red-500 text-sm">Select at least one hobby.</p>}
      </div>

      <div>
        <input
          type="file"
          accept=".jpg,.jpeg,.png"
          {...register("profilePicture", { required: true })}
        />
        {errors.profilePicture && <p className="text-red-500 text-sm">Please upload a valid image file (.jpg, .jpeg, .png).</p>}
      </div>

      <div>
        <textarea
          maxLength={300}
          placeholder="Bio (max 300 characters)"
          {...register("bio")}
          onChange={(e) => setBioLength(e.target.value.length)}
          className="w-full border p-2 rounded"
        />
        <p className="text-sm text-gray-500">{300 - watchBio.length} characters remaining</p>
      </div>

      {/* Submit */}
      <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
        Register
      </button>
    </form>
  );
}
