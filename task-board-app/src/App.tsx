import React, {FC, useEffect, useState} from 'react';
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

  const [sortedTaskList, setSortedTaskList] = useState<Array<TaskTypes>>([])
  const [currentTask, setCurrentTask] = useState<TaskTypes | null>(null);
  const [selectedTask, setSelectedTask] = useState<TaskTypes | null>(null);

  const getTaskList = () => {
    const taskData = generateTaskData()
    setTimeout(() => sorting(taskData), 3000);
  }

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>)=> {
    e.preventDefault();
  };

  const selectTaskHandler = (task: TaskTypes) => {
    if (selectedTask?.task_number !== task.task_number) {
      setSelectedTask(task);
    }
  };

  const dragStartHandler = (task: TaskTypes) => {
    setCurrentTask(task);
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>, column: string) => {
    e.preventDefault();
    const statusType = getStatusType(column);
    const currentIndex = sortedTaskList.indexOf(currentTask as TaskTypes);
    sortedTaskList[currentIndex].status = statusType as Status;
    sorting([...sortedTaskList])
  };

  const sorting = (data: Array<TaskTypes>) => {
    const sortedList = data.sort((a: TaskTypes, b: TaskTypes) => {
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
    })
    setSortedTaskList(sortedList);
  };

  useEffect(() => {
    getTaskList()
  }, []);

  return (
    <div className={styled.container}>
      <h1>Task Board</h1>
      <div className={styled.board}>
        {sortedTaskList.length > 0 ?
          boardColumns.map(column =>
            (<div
              key={column}
              className={styled.boardRow}
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropHandler(e, column)}>
              <div className={styled.columTitle}>
                <h2>{column}</h2>
              </div>
                {sortedTaskList.map((task: TaskTypes) =>
                  task.status === column &&
                  (<div
                    key={task.task_number}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDragStart={(e) => dragStartHandler(task)}
                    onDrop={(e) => dropHandler(e, column)}
                    draggable
                    onClick={() => selectTaskHandler(task)}
                    className={
                      cn(styled.task, styled[`${task.importance.toLowerCase()}`],
                        selectedTask?.task_number === task.task_number && styled.active)
                    }>
                      <span>{task.task_number}</span>
                      <span>{task.task_name}</span>
                    </div>))}
            </div>)
          ) : (<h2>Loading...</h2>)}
      </div>
      {selectedTask && <TaskInfo task={selectedTask} onClose={() => setSelectedTask(null)}/>}
    </div>
  );
}

export default App;
