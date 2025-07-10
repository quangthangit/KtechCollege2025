import { useTask } from "../hook/useTask";
import type { TaskTypes } from "../types/TaskTypes";

type Props = {
  todo: TaskTypes;
};

export const Task = ({ todo }: Props) => {
  const { deleteHandle } = useTask();
  return (
    <li
      className={`flex flex-col gap-2  rounded-lg shadow p-4 ${
        todo.status == "done" ? "bg-green-100" : "bg-yellow-100"
      }`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-blue-900">{`📝 ${todo.title}`}</h3>
        <span
          className={`text-sm font-medium px-3 py-1 rounded-full ${
            todo.status === "done"
              ? "bg-green-200 text-green-700"
              : "bg-yellow-200 text-amber-700"
          }`}
        >
          {todo.status}
        </span>
      </div>

      <p className="text-gray-700 text-sm">{todo.description}</p>

      <div className="text-sm text-gray-600 flex flex-wrap gap-4 mt-2">
        <span>
          <strong>Start:</strong>{" "}
          {new Date(todo.start_date).toLocaleDateString()}
        </span>
        <span>
          <strong>Due:</strong> {new Date(todo.due_date).toLocaleDateString()}
        </span>
        {todo.completed_date && (
          <span>
            <strong>Done:</strong>{" "}
            {new Date(todo.completed_date).toLocaleDateString()}
          </span>
        )}
        <span>
          <strong>Priority:</strong> {todo.priority}
        </span>
      </div>

      <div className="mt-3 flex justify-end gap-2">
        <button
          type="button"
          className="px-4 py-2 rounded-lg bg-yellow-400 text-white font-semibold hover:bg-yellow-600 transition"
        >
          Edit
        </button>
        <button
          onClick={() => deleteHandle(todo.id)}
          type="button"
          className="px-4 py-2 rounded-lg bg-red-400 text-white font-semibold hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    </li>
  );
};
