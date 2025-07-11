import { useEffect, useState } from "react";
import { Task } from "../../components/Task";
import { useLogin } from "../../hook/useLogin";
import { useTask } from "../../hook/useTask";
import { useNavigate } from "react-router-dom";
import { FormAddTask } from "../../components/FormAddTask";
import { FormEditTask } from "../../components/FormEditTask";
import type { TaskTypes } from "../../types/TaskTypes";

export const HomePage = () => {
  const { isLogin } = useLogin();
  const { tasks, createHandle, searchHandle, editHandle } = useTask();
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);
  const [showFormEdit, setShowFormEdit] = useState(false);
  const [taskEdit, setTaskEdit] = useState<TaskTypes | null>(null);

  const [filterStatus, setFilterStatus] = useState("");
  const [filterPriority, setFilterPriority] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  useEffect(() => {
    searchHandle(searchKeyword, filterStatus, filterPriority);
  }, [searchKeyword, filterStatus, filterPriority]);

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

      {showFormEdit && taskEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <FormEditTask
            taskEdit={taskEdit}
            onSubmit={(formData) => {
              editHandle(formData);
              setShowFormEdit(false);
              setTaskEdit(null);
            }}
            onCancel={() => {
              setShowFormEdit(false);
              setTaskEdit(null);
            }}
          />
        </div>
      )}

      <div className="min-h-screen flex flex-col bg-gray-100 transition-colors duration-300">
        <div className="w-full h-full bg-white/90 rounded-none shadow-none p-6 flex-1">
          <div className="text-left font-bold text-2xl text-blue-700 mb-4">
            Quản lý công việc
          </div>
          <div
            id="todoForm"
            className="flex flex-wrap sm:flex-row items-center gap-3 p-4 bg-white border border-blue-100 rounded-xl shadow-sm mb-4"
          >
            <input
              onChange={(e) => setSearchKeyword(e.target.value)} 
              id="todoInput"
              type="text"
              placeholder="🔍 Nhập ID hoặc từ khóa..."
              className="flex-1 min-w-[200px] p-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-400 outline-none transition"
              aria-label="Search by ID or title"
            />

            <select
              onChange={(e) => setFilterStatus(e.target.value)} 
              className="min-w-[150px] appearance-none p-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-400 outline-none transition bg-white"
              aria-label="Filter by status"
            >
              <option value="">All Status</option>
              <option value="to_do">To Do</option>
              <option value="in_progress">In Progress</option>
              <option value="done">Done</option>
            </select>

            <select
              onChange={(e) => setFilterPriority(e.target.value)} 
              className="min-w-[150px] appearance-none p-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-400 outline-none transition bg-white"
              aria-label="Filter by priority"
            >
              <option value="">All Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
            {tasks.map((task) => (
              <Task
                key={task.id}
                todo={task}
                editTask={() => {
                  setTaskEdit(task);
                  setShowFormEdit(true);
                }}
              />
            ))}
          </ul>
        </div>
      </div>

      <button
        onClick={() => {
          setTaskEdit(null);
          setShowForm(true);
        }}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white text-3xl rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
};
