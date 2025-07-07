import { useEffect, useState } from "react";
import type { User } from "../types/User";
import UserComponent from "./UserComponent";
import ButtonComponent from "./ButtonComponent";
import AddUserForm from "./AddUserForm";
import { toast, ToastContainer } from "react-toastify";

const UserManager = () => {
  const [data, setData] = useState<User[]>([]);
  const [searchId, setSearchId] = useState("");
  const [filteredData, setFilteredData] = useState<User[]>([]);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://server.aptech.io/online-shop/customers"
        );
        if (response.ok) {
          const result = await response.json();
          setData(result);
          setFilteredData(result);
        } else {
          console.error("Fetch failed:", response.status);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.log(err.message);
        } else {
          console.log("Unexpected error:", err);
        }
      }
    };
    fetchUsers();
  }, []);

  const handleSearch = () => {
    if (searchId.trim() === "") {
      setFilteredData(data);
    } else {
      const id = Number(searchId);
      const result = data.filter((user) => user.id === id);
      setFilteredData(result);
    }
  };

  const deleteUser = async (id: number) => {
    try {
      const response = await fetch(
        `https://server.aptech.io/online-shop/customers/${id}`,
        { method: "DELETE" }
      );
      if (response.ok) {
        const updated = data.filter((user) => user.id !== id);
        setData(updated);
        setFilteredData(updated);
        toast.success("Xóa người dùng thành công");
      } else {
        toast.error("Xóa người dùng thất bại");
        console.error("Fetch failed:", response.status);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log("Unexpected error:", err);
      }
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <ToastContainer />
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <input
          type="number"
          placeholder="Tìm theo ID..."
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ButtonComponent
          name="Tìm kiếm"
          styles="bg-blue-500 hover:bg-blue-600"
          handle={() => handleSearch()}
        />
        <ButtonComponent
          name="Thêm"
          styles="bg-green-500 hover:bg-green-600"
          handle={() => setOpenForm(!openForm)}
        />
      </div>
      {openForm ? (
        <AddUserForm
          addHandle={(newUser) => {
            setData((prev) => [...prev, newUser]);
            setFilteredData((prev) => [...prev, newUser]);
          }}
        />
      ) : null}
      <div className="flex flex-col gap-2">
        {filteredData.length === 0 ? (
          <p className="text-gray-600">Không tìm thấy người dùng.</p>
        ) : (
          filteredData.map((user) => (
            <UserComponent
              key={user.id}
              user={user}
              deleteHandle={() => deleteUser(user.id)}
              editHanlde={() => alert(`Chỉnh sửa người dùng ${user.id}`)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default UserManager;
