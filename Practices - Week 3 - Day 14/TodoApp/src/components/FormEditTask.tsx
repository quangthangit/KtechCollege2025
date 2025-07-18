import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { TaskTypes } from "../types/TaskTypes";

type Props = {
  onSubmit: (formData: TaskTypes) => void;
  onCancel: () => void;
  taskEdit: TaskTypes;
};

export const FormEditTask = ({ onSubmit, onCancel, taskEdit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskTypes>({
    defaultValues: taskEdit, 
  });

  useEffect(() => {
    reset(taskEdit);
  }, [taskEdit, reset]);

  const submitForm: SubmitHandler<TaskTypes> = (data) => {
    onSubmit({ ...taskEdit, ...data }); 
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="bg-white p-6 rounded-2xl shadow-2xl space-y-5 max-w-xl w-full mx-auto transition-all duration-300"
    >
      <div className="flex flex-row justify-between items-center border-b pb-2">
        <h2 className="text-2xl font-semibold text-blue-700">📝 Edit Task</h2>
        <button
          type="button"
          onClick={onCancel}
          className="text-blue-600 py-1 px-2 rounded-lg hover:text-blue-800 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div>
        <label className="text-sm font-medium text-blue-700 block mb-1">Title</label>
        <input
          {...register("title", { required: "Title is required" })}
          type="text"
          placeholder="Enter task title"
          className="w-full p-3 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium text-blue-700 block mb-1">Description</label>
        <input
          {...register("description", { required: "Description is required" })}
          type="text"
          placeholder="Enter task description"
          className="w-full p-3 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium text-blue-700 block mb-1">Status</label>
        <select
          {...register("status")}
          className="w-full p-3 border appearance-none border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="to_do">To Do</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-medium text-blue-700 block mb-1">Priority</label>
        <select
          {...register("priority")}
          className="w-full p-3 border appearance-none border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-medium text-blue-700 block mb-1">Start Date</label>
        <input
          {...register("start_date")}
          type="datetime-local"
          className="w-full p-3 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-blue-700 block mb-1">Due Date</label>
        <input
          {...register("due_date")}
          type="datetime-local"
          className="w-full p-3 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-end gap-3 pt-4 mt-4">
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg transition font-semibold"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};
