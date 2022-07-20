import React, {FC, useEffect, useMemo, useState} from 'react';
import TaskInfo from "./components/TaskInfo/TaskInfo";
import cn from "classnames";
import {Status, TaskTypes} from './App.types';
import {boardColumns, generateTaskData} from './constants/tasksData';

import styled from './App.module.scss';

const importancePriority = {
  MUST: 1,
  SHOULD: 2,
  COULD: 3
};

const getStatusType = (colum: string) => {
  switch (colum) {
    case 'PLAN':
      return Status.PLAN;
    case 'IN PROGRESS':
      return Status.IN_PROGRESS;
    case 'TESTING':
      return Status.TESTING;
    case 'DONE':
      return Status.DONE;
  }
};

const App:FC = () => {

  const [taskList, setTaskList] = useState<Array<TaskTypes>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTask, setCurrentTask] = useState<TaskTypes | null>(null);
  const [selectedTask, setSelectedTask] = useState<TaskTypes | null>(null);
  const [selectedTaskStatus, setSelectedTaskStatus] = useState<string>('')

  const getTaskList = () => {
    const taskData = generateTaskData();
    setTimeout(() => {
      setIsLoading(false);
      setTaskList(taskData);
    }, 500);
  }

  const selectTaskHandler = (task: TaskTypes) => {
    if (selectedTask?.task_number !== task.task_number) {
      setSelectedTask(task);
      setSelectedTaskStatus(task.status)
    }
  };

  const dragStartHandler = (task: TaskTypes) => {
    setCurrentTask(task);
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>, column: string) => {
    e.preventDefault();
    const statusType = getStatusType(column);
    const currentIndex = taskList.indexOf(currentTask as TaskTypes);
    taskList[currentIndex].status = statusType as Status;

    if (taskList[currentIndex].task_number === selectedTask?.task_number) {
      setSelectedTaskStatus(taskList[currentIndex].status);
    };

    setTaskList([...taskList]);
  };

  const sortedList = useMemo(() => {
    return taskList.sort((a: TaskTypes, b: TaskTypes) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      if (importancePriority[a.importance] > importancePriority[b.importance]) {
        return 1;
      }
      if (importancePriority[a.importance] < importancePriority[b.importance]) {
        return -1;
      }
      return 0;
    });
  }, [taskList]);

  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <div className={styled.container}>
      <h1>Task Board</h1>
      <div className={styled.board}>
        {isLoading ?
          (<h2>Loading...</h2>) :
          (sortedList.length > 0 ?
            (boardColumns.map(column =>
              (<div
                key={column}
                className={styled.boardRow}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => dropHandler(e, column)}>
                <div className={styled.columTitle}>
                  <h2>{column}</h2>
                </div>
                {sortedList.map((task: TaskTypes) =>
                  task.status === column &&
                  (<div
                    key={task.task_number}
                    onDragOver={(e) => e.preventDefault()}
                    onDragStart={() => dragStartHandler(task)}
                    draggable
                    onClick={() => selectTaskHandler(task)}
                    className={
                      cn(styled.task, styled[`${task.importance.toLowerCase()}`],
                        selectedTask?.task_number === task.task_number && styled.taskActive)
                    }>
                    <span>{task.task_number}</span>
                    <span>{task.task_name}</span>
                  </div>))}
              </div>)
            )) : (<h2>Task list is empty.</h2>)
          )}
      </div>
      {selectedTask &&
        (<TaskInfo status={selectedTaskStatus} task={selectedTask} onClose={() => setSelectedTask(null)}/>)}
    </div>
  );
}

export default App;
