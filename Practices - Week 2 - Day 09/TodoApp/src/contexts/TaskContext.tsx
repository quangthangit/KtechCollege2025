import { createContext, useEffect, useState, type ReactNode } from "react";
import type { TaskFormData, TaskTypes } from "../types/TaskTypes";
import { useLogin } from "../hook/useLogin";
import { toast, ToastContainer } from "react-toastify";

type TaskContextTypes = {
  tasks: TaskTypes[];
  deleteHandle: (id: number) => void;
  searchHandle: (keyword: string, status: string, priority: string) => void;
  createHandle: (TaskFormData: TaskFormData) => void;
  editHandle: (updatedTask: TaskTypes) => void;
};

export const TaskContext = createContext<TaskContextTypes | undefined>(
  undefined
);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TaskTypes[]>([]);
  const [allTasks, setAllTasks] = useState<TaskTypes[]>([]);
  const { isLogin } = useLogin();
  const apiUrl = "https://server.aptech.io";

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token || !isLogin) return;

      try {
        const response = await fetch(apiUrl + "/workspaces/tasks", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setAllTasks(data);
          setTasks(data);
        } else {
          console.error("Failed to fetch tasks");
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [isLogin]);

  const deleteHandle = (id: number) => {
    const deleteTask = async () => {
      try {
        const response = await fetch(`${apiUrl}/workspaces/tasks/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        if (response.ok) {
          setTasks((prev) => prev.filter((task) => task.id !== id));
          setAllTasks((prev) => prev.filter((task) => task.id !== id));
          toast.success("Delete task success");
        } else {
          console.error("Failed to delete task");
          toast.error("Delete task error");
        }
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    };
    deleteTask();
  };

  const searchHandle = (keyword: string, status = "", priority = "") => {
    const lower = keyword.toLowerCase();

    const filtered = allTasks.filter((task) => {
      const matchKeyword =
        task.title.toLowerCase().includes(lower) ||
        task.id.toString().includes(lower);

      const matchStatus = status ? task.status === status : true;
      const matchPriority = priority ? task.priority === priority : true;

      return matchKeyword && matchStatus && matchPriority;
    });

    setTasks(filtered);
  };

  const createHandle = (newTask: TaskFormData) => {
    const addTask = async () => {
      try {
        const response = await fetch(`${apiUrl}/workspaces/tasks`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(newTask),
        });

        if (response.ok) {
          const data = await response.json();
          setTasks((prev) => [...prev, data]);
          setAllTasks((prev) => [...prev, data]);
          console.log("Task created:", data);
          toast.success("Create task success");
        } else {
          console.error("Failed to create task");
          toast.error("Create task error");
        }
      } catch (error) {
        console.error("Error creating task:", error);
      }
    };

    addTask();
  };

  const editHandle = async (updatedTask: TaskTypes) => {
    try {
      const response = await fetch(
        `${apiUrl}/workspaces/tasks/${updatedTask.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(updatedTask),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        toast.error("Update task error");
      }
      toast.success("Update task success");
      const updated = await response.json();
      setTasks((prev) =>
        prev.map((task) => (task.id === updated.id ? updated : task))
      );
      setAllTasks((prev) =>
        prev.map((task) => (task.id === updated.id ? updated : task))
      );
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, deleteHandle, createHandle, editHandle, searchHandle }}
    >
      <ToastContainer />
      {children}
    </TaskContext.Provider>
  );
};
