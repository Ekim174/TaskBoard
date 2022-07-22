import React, {FC, useEffect, useState} from 'react';
import Board from "./components/Board/Board";
import { TaskTypes } from "./types/taskTypes";
import generateTaskData from "helpers/generateTaskData";
import styled from "./App.module.scss";

const App: FC = () => {

  const [taskList, setTaskList] = useState<TaskTypes[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTaskList = () => {
    const taskData = generateTaskData();
    setTimeout(() => {
    setTaskList(taskData);
    setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <div className={styled.container}>
      <h1>Task Board</h1>
      {isLoading ? (<h2>Loading...</h2>) : (<Board taskList={taskList}/>)}
    </div>
  )
};

export default App;
