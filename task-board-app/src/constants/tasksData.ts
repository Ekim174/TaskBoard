export const boardColumns = ['PLAN', 'IN_PROGRESS', 'TESTING','DONE'];
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

export const generateTaskData = (): any => {
  const tasksData = [];
  for (let i = 1; i <= 15; i += 1) {
    const number = i < 10 ? `0${i}` : i;
    const nameRandomInt = getRandomInt(nameList.length)
    const listUnit = {
      task_number: `TSK-00${number}`,
      task_name: taskNameList[getRandomInt(taskNameList.length)],
      name: nameList[nameRandomInt].name,
      surname: nameList[nameRandomInt].surname,
      status: boardColumns[getRandomInt(boardColumns.length)],
      importance: importanceList[getRandomInt(importanceList.length)],
      date: '02/13/2013',
    }
    tasksData.push(listUnit);
  }
  return tasksData;
}
