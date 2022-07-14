const taskNameList = ['Feature', 'Bug Fix', 'Update', 'Research', 'Content'];
const nameList = ['Вуди Аллен', 'Мэрил Стрип', 'Роджер Дикинс', 'Аль Пачино',];
export const borderColumnList = ['PLAN', 'IN PROGRESS', 'TESTING','DONE'];
const importanceList = ['MUST', 'SHOULD', 'COULD'];

export const tasksData = [
  {
    task_number: 'TSK-0001',
    task_name: 'Feature',
    name: 'Вуди',
    surname: 'Аллен',
    status: 'PLAN',
    importance: 'MUST',
    date: '02/13/2013',
  },
  {
    task_number: 'TSK-0002',
    task_name: 'Bug Fix',
    name: 'Вуди',
    surname: 'Аллен',
    status: 'IN PROGRESS',
    importance: 'SHOULD',
    date: '02/13/2013',
  },
  {
    task_number: 'TSK-0003',
    task_name: 'Update',
    name: 'Вуди',
    surname: 'Аллен',
    status: 'TESTING',
    importance: 'MUST',
    date: '02/13/2013',
  },
  {
    task_number: 'TSK-0004',
    task_name: 'Research',
    name: 'Вуди',
    surname: 'Аллен',
    status: 'DONE',
    importance: 'COULD',
    date: '02/13/2013',
  },
  {
    task_number: 'TSK-0001',
    task_name: 'Feature',
    name: 'Вуди',
    surname: 'Аллен',
    status: 'PLAN',
    importance: 'MUST',
    date: '02/13/2013',
  },
  {
    task_number: 'TSK-0002',
    task_name: 'Bug Fix',
    name: 'Вуди',
    surname: 'Аллен',
    status: 'IN PROGRESS',
    importance: 'SHOULD',
    date: '02/13/2013',
  },
  {
    task_number: 'TSK-0003',
    task_name: 'Update',
    name: 'Вуди',
    surname: 'Аллен',
    status: 'TESTING',
    importance: 'MUST',
    date: '02/13/2013',
  },
  {
    task_number: 'TSK-0004',
    task_name: 'Research',
    name: 'Вуди',
    surname: 'Аллен',
    status: 'DONE',
    importance: 'COULD',
    date: '02/13/2013',
  },


]


// const getRandomInt = (max: number) => {
//   return Math.floor(Math.random() * max);
// };
//
// export const generateTaskData = () => {
//   const tasksData = [];
//   for (let i = 1; i <= 20; i += 1) {
//     const taskUnit = {
//       task_number: `TSK-00${ i < 10 ? `0${i}` : i }`,
//       task_name: taskNameList[getRandomInt(taskNameList.length)],
//       name: 'Вуди',
//       surname: 'Аллен',
//       status: statusList[getRandomInt(statusList.length)],
//       importance: 'MUST',
//       date: '02/13/2013',
//     }
//     tasksData.push(taskUnit)
//   }
//   console.log(tasksData)
// }
// generateTaskData()
