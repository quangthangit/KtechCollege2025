import { TaskTypes } from "../types/TaskType";
import { Task } from "./Task";

export const revalidate = 10;
const apiUrl = "https://server.aptech.io";

export default async function IncrementalStaticRegeneration({ params }: { params: { id: string } }) {
  const res = await fetch(`${apiUrl}/workspaces/tasks/${params.id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0dW5nbnRAc29mdGVjaC52biIsImVtYWlsIjoidHVuZ250QHNvZnRlY2gudm4iLCJzdWIiOjEsImFwcGxpY2F0aW9uIjoiT25saW5lIFNob3AgLSBBUEkiLCJyb2xlcyI6W3siaWQiOjEsIm5hbWUiOiJBZG1pbmlzdHJhdG9ycyJ9LHsiaWQiOjIsIm5hbWUiOiJNYW5hZ2VycyJ9XSwiaWF0IjoxNzUyNTYyMjQwLCJleHAiOjE3ODQxMTk4NDB9.uXNclD4lUgtTvF5iIExr-DLcxTugU4ZysSh1gzxmG5I`,
    },
    next: { revalidate: revalidate },
  });

  if (!res.ok) {
    return (
      <div className="p-6 text-red-500">
        ❌ Failed to load task with ID: {params.id}
      </div>
    );
  }

  const task: TaskTypes = await res.json();

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Tasks (ISR)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Task todo={task} />
      </div>
    </section>
  );
}
