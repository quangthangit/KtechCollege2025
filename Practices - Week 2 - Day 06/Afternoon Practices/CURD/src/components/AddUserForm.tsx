import { useState } from "react";
import type { User } from "../types/User";
import { toast } from "react-toastify";

type Props = {
  addHandle: (newUser: User) => void;
};

const AddUserForm = ({ addHandle }: Props) => {
  const initialForm = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    birthday: "",
  };

  const [form, setForm] = useState<Omit<User, "id">>(initialForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://server.aptech.io/online-shop/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const newUser = await response.json();
        addHandle(newUser);
        setForm(initialForm); 
        toast.success("Thêm người dùng thành công")
      } else {
        toast.error("Thêm người dùng thất bại!");
      }
    } catch (err) {
      console.error("Lỗi:", err);
    }
  };

  const fields: {
    label: string;
    name: keyof Omit<User, "id">;
    type?: string;
  }[] = [
    { label: "First Name", name: "firstName" },
    { label: "Last Name", name: "lastName" },
    { label: "Email", name: "email", type: "email" },
    { label: "Phone", name: "phoneNumber" },
    { label: "Address", name: "address" },
    { label: "Birthday", name: "birthday", type: "date" },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="container_addForm grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded-lg shadow"
    >
      {fields.map(({ label, name, type }) => (
        <div key={name}>
          <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
          <input
            type={type ?? "text"}
            name={name}
            value={form[name]}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      ))}
      <div className="md:col-span-2 flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Thêm người dùng
        </button>
      </div>
    </form>
  );
};

export default AddUserForm;
