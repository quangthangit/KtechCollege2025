import { createContext, useEffect, useState, type ReactNode } from "react";
import type { TaskFormData, TaskTypes } from "../types/TaskTypes";

type TaskContextTypes = {
  tasks: TaskTypes[];
  deleteHandle: (id: number) => void;
  searchHandle: (id: number) => void;
  createHandle: (TaskFormData: TaskFormData) => void;
  editHandle: (updatedTask: TaskTypes) => void;
};

export const TaskContext = createContext<TaskContextTypes | undefined>(
  undefined
);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TaskTypes[]>([]);

  const apiUrl = "https://server.aptech.io";
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(apiUrl + "/workspaces/tasks", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setTasks(data);
        } else {
          console.error("Failed to fetch tasks");
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

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
        } else {
          console.error("Failed to delete task");
        }
      } catch (error) {
        console.error("Error delete task:", error);
      }
    };
    deleteTask();
  };

  const searchHandle = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id == id));
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
          console.log("Task created:", data);
        } else {
          console.error("Failed to create task");
        }
      } catch (error) {
        console.error("Error creating task:", error);
      }
    };

    addTask();
  };

  const editHandle = (updatedTask: TaskTypes) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  return (
    <TaskContext.Provider
      value={{ tasks, deleteHandle, createHandle, editHandle, searchHandle }}
    >
      {children}
    </TaskContext.Provider>
  );
};
