import { TaskTypes } from "types/taskTypes";
import { status } from "constants/status"
import { importance } from "constants/importance"

export const boardColumns = ['PLAN', 'IN PROGRESS', 'TESTING','DONE'];
export const importanceList = ['MUST', 'SHOULD', 'COULD'];
const taskNameList = ['Feature', 'Bug Fix', 'Update', 'Research', 'Content'];
const nameList = [
  {name: 'Вуди', surname: 'Аллен'},
  {name: 'Мэрил', surname: 'Стрип'},
  {name: 'Роджер', surname: 'Дикинс'},
  {name: 'Аль', surname: 'Пачино'},
];

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

const getRandomDate = () => {
  const randomDate = new Date(Number(new Date()) - Math.floor(Math.random() * 1e10));
  return randomDate.toLocaleDateString('en-GB')
}

export const generateTaskData = (): TaskTypes[] => {
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
