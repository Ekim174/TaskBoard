import React, {FC, useEffect, useState} from 'react';
import Board from "./components/Board/Board";
import { TaskTypes } from "./types/taskTypes";
import { generateTaskData } from "constants/generateTaskData";

const App: FC = () => {

  const [taskList, setTaskList] = useState<TaskTypes[] | null>(null)

  const getTaskList = () => {
    const taskData = generateTaskData();
    setTimeout(() => {
    setTaskList(taskData)
    }, 500);
  }

  useEffect(() => {
    getTaskList()
  }, [])

  return (<>{taskList && <Board taskList={taskList}/>}</>)
}

export default App;
