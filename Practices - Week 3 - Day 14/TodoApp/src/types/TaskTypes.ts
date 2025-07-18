export type TaskTypes = {
  id: number;
  title: string;
  description: string;
  start_date: string;
  due_date: string;
  completed_date: string | null;
  priority: "low" | "medium" | "high";
  status: "to_do" | "in_progress" | "done";
  created_time: string;
  updated_time: string;
  deleted_time: string | null;
  created_by: number;
  updated_by: number;
  deleted_by: number | null;
  assignee_id: number;
  parent_id: number | null;
  project_id: number | null;
};

export type TaskFormData = {
  title: string;
  assignee_id: number;
  status: string;
  start_date: string;
  due_date: string;
  description: string;
  priority : string;
};