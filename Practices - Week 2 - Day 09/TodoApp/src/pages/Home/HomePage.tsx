import { useEffect, useState } from "react";
import { Task } from "../../components/Task";
import { useLogin } from "../../hook/useLogin";
import { useTask } from "../../hook/useTask";
import { useNavigate } from "react-router-dom";
import { FormAddTask } from "../../components/FormAddTask";
export const HomePage = () => {
  const { isLogin } = useLogin();
  const { tasks, createHandle, searchHandle } = useTask();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <FormAddTask
            onSubmit={(formData) => {
              createHandle(formData);
              setShowForm(false);
            }}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}

      <div className="min-h-screen flex flex-col bg-gray-100 transition-colors duration-300">
        <div className="w-full h-full bg-white/90 rounded-none shadow-none p-6 flex-1">
          <div className="text-left font-bold text-2xl text-blue-700 mb-4">
            Quản lý công việc
          </div>
          <div id="todoForm" className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              onChange={(e) => searchHandle(e.currentTarget.value)}
              id="todoInput"
              type="text"
              placeholder="Enter task id"
              className="flex-1 p-4 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 outline-none transition"
            />
          </div>

          <ul
            id="todoList"
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5"
          >
            {tasks.map((prev) => (
              <Task key={prev.id} todo={prev} />
            ))}
          </ul>
        </div>
      </div>
      <button
        onClick={() => setShowForm(!showForm)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white text-3xl rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
};
