import { ImportanceTypes } from "types/importanceTypes";
import { StatusTypes } from "types/statusTypes";

export interface TaskTypes  {
  task_name: string,
  name: string,
  surname: string,
  task_number: string,
  status: StatusTypes,
  importance: ImportanceTypes,
  date: string
}