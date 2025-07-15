import { Task } from "@/app/components/Task";
import type { TaskTypes } from "@/app/types/TaskType";
import { notFound } from "next/navigation";

export const revalidate = 10;

const apiUrl = process.env.API_URL || "https://server.aptech.io";

async function generateStaticParams(id: string): Promise<TaskTypes | null> {
  try {
    const res = await fetch(`${apiUrl}/workspaces/tasks/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0dW5nbnRAc29mdGVjaC52biIsImVtYWlsIjoidHVuZ250QHNvZnRlY2gudm4iLCJzdWIiOjEsImFwcGxpY2F0aW9uIjoiT25saW5lIFNob3AgLSBBUEkiLCJyb2xlcyI6W3siaWQiOjEsIm5hbWUiOiJBZG1pbmlzdHJhdG9ycyJ9LHsiaWQiOjIsIm5hbWUiOiJNYW5hZ2VycyJ9XSwiaWF0IjoxNzUyNTYyMjQwLCJleHAiOjE3ODQxMTk4NDB9.uXNclD4lUgtTvF5iIExr-DLcxTugU4ZysSh1gzxmG5I`,
      },
      next: { revalidate },
    });

    if (res.status === 404) {
      return null;
    }

    if (!res.ok) {
      throw new Error(`Failed to fetch task. Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching task:", error);
    throw error;
  }
}

export default async function TaskDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  try {
    const task = await generateStaticParams(id);

    if (!task) {
      notFound();
    }

    return (
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4">Tasks (SSG)</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Task key={task.id} todo={task} />
        </ul>
      </section>
    );
  } catch (error: any) {
    return (
      <section className="container mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="text-red-500 text-xl mr-3">⚠️</div>
            <h2 className="text-xl font-semibold text-red-800">
              Error Loading Task
            </h2>
          </div>
          <p className="text-red-700 mb-2">
            Failed to load task with ID:{" "}
            <code className="bg-red-100 px-2 py-1 rounded">{id}</code>
          </p>
          <p className="text-red-600 text-sm">{error.message}</p>
        </div>
      </section>
    );
  }
}
