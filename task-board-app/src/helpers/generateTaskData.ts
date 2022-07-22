import { TaskTypes } from "types/taskTypes";
import { status } from "constants/status";
import { importance } from "constants/importance";
import { boardColumns } from "constants/boardColumns";
import { importanceList} from "constants/importanceList";
import { taskNameList } from "constants/taskNameList";
import { nameList } from "constants/nameList";
import getRandomInt from "./getRandomInt";
import getRandomDate from "./getRandomDate";

const generateTaskData = (): TaskTypes[] => {
  const tasksData: TaskTypes[] = [];
  for (let i = 1; i <= 15; i += 1) {
    const number = i < 10 ? `0${i}` : i;
    const nameRandomInt = getRandomInt(nameList.length);
    const statusRandomInt = boardColumns[getRandomInt(boardColumns.length)];
    const importanceRandomInt = importanceList[getRandomInt(importanceList.length)];
    const listUnit = {
      task_number: `TSK-00${number}`,
      task_name: taskNameList[getRandomInt(taskNameList.length)],
      name: nameList[nameRandomInt].name,
      surname: nameList[nameRandomInt].surname,
      status: status[statusRandomInt],
      importance: importance[importanceRandomInt],
      date: getRandomDate(),
    }
    tasksData.push(listUnit);
  }
  return tasksData;
}

export default generateTaskData;