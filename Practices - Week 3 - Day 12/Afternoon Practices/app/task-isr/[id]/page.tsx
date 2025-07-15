import { TaskTypes } from "@/app/types/TaskType";
import { Task } from "@/app/components/Task";

export const revalidate = 10;
const apiUrl = "https://server.aptech.io";
export default async function Page({ params }: { params: { id: string } }) {
  const res = await fetch(`${apiUrl}/workspaces/tasks/${params.id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0dW5nbnRAc29mdGVjaC52biIsImVtYWlsIjoidHVuZ250QHNvZnRlY2gudm4iLCJzdWIiOjEsImFwcGxpY2F0aW9uIjoiT25saW5lIFNob3AgLSBBUEkiLCJyb2xlcyI6W3siaWQiOjEsIm5hbWUiOiJBZG1pbmlzdHJhdG9ycyJ9LHsiaWQiOjIsIm5hbWUiOiJNYW5hZ2VycyJ9XSwiaWF0IjoxNzUyNTYyMjQwLCJleHAiOjE3ODQxMTk4NDB9.uXNclD4lUgtTvF5iIExr-DLcxTugU4ZysSh1gzxmG5I`,
    },
    next: { revalidate },
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
    <div>
      <div className="min-h-screen flex flex-col bg-gray-100 transition-colors duration-300">
        <div className="w-full h-full bg-white/90 rounded-none shadow-none p-6 flex-1">
          <div className="text-left font-bold text-2xl text-blue-700 mb-4">
            List task manager
          </div>
          <section className="p-6">
            <h2 className="text-2xl font-bold mb-4">Tasks (ISR)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Task todo={task} />
            </div>
          </section>
        </div>
      </div>

      <button className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white text-3xl rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition">
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
}
