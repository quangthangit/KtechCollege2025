"use client"

import React, { useEffect, useState } from "react";
import { Task } from "./Task";
import { TaskTypes } from "../types/TaskType";

export const ClientSideRendering = () => {
  const [tasks, setTasks] = useState<TaskTypes[]>([]);
  const apiUrl = "https://server.aptech.io";
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(apiUrl + "/workspaces/tasks", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0dW5nbnRAc29mdGVjaC52biIsImVtYWlsIjoidHVuZ250QHNvZnRlY2gudm4iLCJzdWIiOjEsImFwcGxpY2F0aW9uIjoiT25saW5lIFNob3AgLSBBUEkiLCJyb2xlcyI6W3siaWQiOjEsIm5hbWUiOiJBZG1pbmlzdHJhdG9ycyJ9LHsiaWQiOjIsIm5hbWUiOiJNYW5hZ2VycyJ9XSwiaWF0IjoxNzUyNTYyMjQwLCJleHAiOjE3ODQxMTk4NDB9.uXNclD4lUgtTvF5iIExr-DLcxTugU4ZysSh1gzxmG5I`,
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
  });
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Tasks (CSR)</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <Task key={task.id} todo={task} />
        ))}
      </ul>
    </section>
  );
};

