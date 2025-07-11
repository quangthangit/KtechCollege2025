import { useForm, type SubmitHandler } from "react-hook-form";
import type { TaskFormData } from "../types/TaskTypes";

type Props = {
  onSubmit: (formData: TaskFormData) => void;
  onCancel: () => void;
};

export const FormAddTask = ({ onSubmit, onCancel }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormData>({
    defaultValues: {
      title: "",
      assignee_id: 1,
      status: "to_do",
      start_date: "",
      due_date: "",
      description: "",
      priority: ""
    },
  });

  const submitForm: SubmitHandler<TaskFormData> = (data) => {
    if (onSubmit) onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="bg-white p-6 rounded-2xl shadow-2xl space-y-5 max-w-xl w-full mx-auto transition-all duration-300"
    >
      <div className="flex flex-row justify-around border-blue-400 border-b-1 pb-2">
        <h2 className="flex-1 text-2xl font-semibold text-blue-700">
          ✨ Add New Task
        </h2>
        <button onClick={onCancel} className="text-blue-600 text:bg-blue-700  py-2 rounded-lg transition font-semibold">
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div>
        <label className="text-sm font-medium text-blue-700 block mb-1">
          Title
        </label>
        <input
          {...register("title", { required: "Title is required" })}
          type="text"
          placeholder="Enter task title"
          className="w-full p-3 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label className="text-sm font-medium text-blue-700 block mb-1">
          Description
        </label>
        <input
          {...register("description", { required: "Description is required" })}
          type="text"
          placeholder="Enter task Description"
          className="w-full p-3 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
        )}
      </div>

      <div>
        <label className="text-sm font-medium text-blue-700 block mb-1">
          Status
        </label>
        <select
          {...register("status")}
          className="w-full p-3 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="to_do">To Do</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

            <div>
        <label className="text-sm font-medium text-blue-700 block mb-1">
          Priority
        </label>
        <select
          {...register("priority")}
          className="w-full p-3 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">high</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-medium text-blue-700 block mb-1">
          Start Date
        </label>
        <input
          {...register("start_date")}
          type="datetime-local"
          className="w-full p-3 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-blue-700 block mb-1">
          Due Date
        </label>
        <input
          {...register("due_date")}
          type="datetime-local"
          className="w-full p-3 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-end gap-3 pt-4 mt-4">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition font-semibold"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};
