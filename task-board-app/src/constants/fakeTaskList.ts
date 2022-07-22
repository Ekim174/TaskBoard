import { TaskTypes } from "types/taskTypes";
import { StatusTypes } from "types/statusTypes";
import { ImportanceTypes } from "types/importanceTypes";

const fakeTaskList: TaskTypes[] = [
  {
    task_number: "TSK-0004",
    task_name: "Bug Fix",
    name: "Роджер",
    surname: "Дикинс",
    status: StatusTypes.IN_PROGRESS,
    importance: ImportanceTypes.COULD,
    date: "25/06/2022"
  },
  {
    task_number: "TSK-0003",
    task_name: "Bug Fix",
    name: "Вуди",
    surname: "Аллен",
    status: StatusTypes.IN_PROGRESS,
    importance: ImportanceTypes.COULD,
    date: "25/06/2022"
  },
  {
    task_number: "TSK-0002",
    task_name: "Bug Fix",
    name: "Аль",
    surname: "Пачино",
    status: StatusTypes.DONE,
    importance: ImportanceTypes.MUST,
    date: "25/06/2022"
  },
  {
    task_number: "TSK-0005",
    task_name: "Bug Fix",
    name: "Аль",
    surname: "Пачино",
    status: StatusTypes.DONE,
    importance: ImportanceTypes.COULD,
    date: "25/06/2022"
  },
  {
    task_number: "TSK-0001",
    task_name: "Bug Fix",
    name: "Аль",
    surname: "Пачино",
    status: StatusTypes.DONE,
    importance: ImportanceTypes.SHOULD,
    date: "25/06/2022"
  },
];

export default fakeTaskList;